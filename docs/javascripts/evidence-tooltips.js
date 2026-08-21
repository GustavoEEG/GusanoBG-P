(() => {
  const script = Array.from(document.scripts).find((s) => s.src && s.src.includes("evidence-tooltips.js"));
  const dataUrl = script ? new URL("../data/evidence.json", script.src).href : "../data/evidence.json";
  let registryPromise;
  let escapeBound = false;

  function loadRegistry() {
    if (!registryPromise) {
      registryPromise = fetch(dataUrl, { cache: "no-store" }).then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      });
    }
    return registryPromise;
  }

  function ensureTooltip() {
    let tooltip = document.getElementById("evidence-tooltip");
    if (tooltip) return tooltip;
    tooltip = document.createElement("div");
    tooltip.id = "evidence-tooltip";
    tooltip.className = "evidence-tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.hidden = true;
    document.body.appendChild(tooltip);
    return tooltip;
  }

  function appendField(parent, label, value, className = "evidence-field") {
    if (!value) return;
    const section = document.createElement("div");
    section.className = className;
    const heading = document.createElement("strong");
    heading.textContent = label;
    const text = document.createElement("p");
    text.textContent = value;
    section.append(heading, text);
    parent.appendChild(section);
  }

  function evidenceTypeLabel(type) {
    return ({
      TEXT_QUOTE: "Cita textual breve",
      VERIFIED_PARAPHRASE: "Paráfrasis verificada",
      TABLE: "Tabla",
      FIGURE: "Figura",
      SUPPLEMENT: "Material suplementario"
    })[type] || type;
  }

  function appendProof(parent, proof, compact = false) {
    const block = document.createElement("section");
    block.className = compact ? "evidence-proof evidence-proof--compact" : "evidence-proof";

    const meta = document.createElement("div");
    meta.className = "evidence-proof__meta";
    const type = document.createElement("span");
    type.className = "evidence-proof__type";
    type.textContent = evidenceTypeLabel(proof.evidence_type);
    const location = document.createElement("span");
    location.className = "evidence-proof__location";
    location.textContent = proof.location || "Ubicación no disponible";
    meta.append(type, location);
    block.appendChild(meta);

    const text = document.createElement(proof.evidence_type === "TEXT_QUOTE" ? "blockquote" : "p");
    text.className = "evidence-proof__text";
    text.textContent = proof.text || "";
    block.appendChild(text);

    if (!compact && proof.link_to_claim) {
      const why = document.createElement("p");
      why.className = "evidence-proof__why";
      const strong = document.createElement("strong");
      strong.textContent = "Vínculo con la afirmación: ";
      why.append(strong, document.createTextNode(proof.link_to_claim));
      block.appendChild(why);
    }
    parent.appendChild(block);
  }

  function renderTooltip(tooltip, id, item) {
    tooltip.replaceChildren();
    const title = document.createElement("div");
    title.className = "evidence-tooltip__title";
    title.textContent = item.reference || id;
    tooltip.appendChild(title);

    appendField(tooltip, "Sustenta", item.supported_fragment);
    appendField(tooltip, "Aplicación en GBG", item.why_cited_here);
    appendField(tooltip, "No sustenta", item.boundary, "evidence-field evidence-field--boundary");

    const firstProof = Array.isArray(item.evidence) ? item.evidence[0] : null;
    if (firstProof) {
      const heading = document.createElement("strong");
      heading.className = "evidence-tooltip__proof-title";
      heading.textContent = "Prueba documental";
      tooltip.appendChild(heading);
      appendProof(tooltip, firstProof, true);
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "evidence-more";
    button.textContent = "Ver prueba completa";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      showDetail(id, item);
      tooltip.hidden = true;
    });
    tooltip.appendChild(button);
  }

  function positionTooltip(tooltip, target) {
    const rect = target.getBoundingClientRect();
    tooltip.style.left = "0px";
    tooltip.style.top = "0px";
    tooltip.hidden = false;
    const tt = tooltip.getBoundingClientRect();
    const margin = 10;
    let left = rect.left + rect.width / 2 - tt.width / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - tt.width - margin));
    let top = rect.top - tt.height - margin;
    if (top < margin) top = rect.bottom + margin;
    tooltip.style.left = `${Math.round(left + window.scrollX)}px`;
    tooltip.style.top = `${Math.round(top + window.scrollY)}px`;
  }

  function getOrCreateDetail() {
    let detail = document.getElementById("evidence-detail");
    if (detail) return detail;
    detail = document.createElement("section");
    detail.id = "evidence-detail";
    detail.className = "evidence-detail";
    detail.setAttribute("aria-live", "polite");
    detail.hidden = true;
    const article = document.querySelector("article.md-content__inner") || document.querySelector("main");
    if (article) article.appendChild(detail);
    return detail;
  }

  function showDetail(id, item) {
    const detail = getOrCreateDetail();
    detail.replaceChildren();
    detail.hidden = false;

    const header = document.createElement("div");
    header.className = "evidence-detail__header";
    const title = document.createElement("h3");
    title.textContent = item.reference || id;
    const close = document.createElement("button");
    close.type = "button";
    close.className = "evidence-close";
    close.setAttribute("aria-label", "Cerrar prueba de evidencia");
    close.textContent = "×";
    close.addEventListener("click", () => { detail.hidden = true; });
    header.append(title, close);
    detail.appendChild(header);

    appendField(detail, "Texto metodológico", item.methodology_text, "evidence-methodology-claim");
    appendField(detail, "Sustenta", item.supported_fragment);
    appendField(detail, "Aplicación en GBG", item.why_cited_here);
    appendField(detail, "No sustenta", item.boundary, "evidence-field evidence-boundary");

    const proofHeading = document.createElement("h4");
    proofHeading.className = "evidence-detail__proof-heading";
    proofHeading.textContent = "Prueba documental en la fuente";
    detail.appendChild(proofHeading);
    if (Array.isArray(item.evidence)) item.evidence.forEach((proof) => appendProof(detail, proof, false));

    if (item.source_url) {
      const link = document.createElement("a");
      link.className = "evidence-source-link";
      link.href = item.source_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Abrir fuente original ↗";
      detail.appendChild(link);
    }

    const technical = document.createElement("details");
    technical.className = "evidence-technical";
    const summary = document.createElement("summary");
    summary.textContent = "Trazabilidad técnica";
    technical.appendChild(summary);
    const trace = document.createElement("dl");
    trace.className = "evidence-trace";
    const pairs = [
      ["Instancia", id],
      ["Sección", item.section],
      ["Revisión / ART", item.review_id],
      ["Unidades de evidencia", Array.isArray(item.evidence_ids) && item.evidence_ids.length ? item.evidence_ids.join(", ") : "—"]
    ];
    pairs.forEach(([term, value]) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = value || "—";
      trace.append(dt, dd);
    });
    technical.appendChild(trace);
    detail.appendChild(technical);

    detail.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "nearest"
    });
  }

  function bindCitations(items) {
    const citations = Array.from(document.querySelectorAll(".evidence-citation[data-evidence]"));
    if (!citations.length) return;
    const tooltip = ensureTooltip();

    citations.forEach((citation) => {
      if (citation.dataset.evidenceBound === "1") return;
      citation.dataset.evidenceBound = "1";
      citation.setAttribute("aria-describedby", "evidence-tooltip");
      citation.setAttribute("role", "button");
      if (!citation.hasAttribute("tabindex")) citation.tabIndex = 0;
      const id = citation.dataset.evidence;
      const item = items[id];
      if (!item || item.publication_status !== "VERIFIED_SOURCE_PROOF") return;

      const show = () => {
        renderTooltip(tooltip, id, item);
        positionTooltip(tooltip, citation);
      };
      citation.addEventListener("mouseenter", show);
      citation.addEventListener("focus", show);
      citation.addEventListener("mouseleave", () => {
        window.setTimeout(() => {
          if (!tooltip.matches(":hover") && document.activeElement !== citation) tooltip.hidden = true;
        }, 80);
      });
      citation.addEventListener("blur", () => {
        window.setTimeout(() => {
          if (!tooltip.matches(":hover")) tooltip.hidden = true;
        }, 80);
      });
      citation.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        showDetail(id, item);
        tooltip.hidden = true;
      });
      citation.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          citation.click();
        }
      });
    });

    if (!escapeBound) {
      escapeBound = true;
      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        tooltip.hidden = true;
        const detail = document.getElementById("evidence-detail");
        if (detail) detail.hidden = true;
      });
    }
  }

  async function hydrateAndBind() {
    try {
      const registry = await loadRegistry();
      bindCitations(registry.items || {});
    } catch (error) {
      console.warn("No se pudo inicializar la prueba documental de citas:", error);
    }
  }

  hydrateAndBind();
  if (typeof document$ !== "undefined" && document$.subscribe) document$.subscribe(hydrateAndBind);
})();
