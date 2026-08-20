(() => {
  const script = Array.from(document.scripts).find((s) => s.src && s.src.includes("evidence-tooltips.js"));
  const dataUrl = script ? new URL("../data/evidence.json", script.src).href : "../data/evidence.json";
  let evidencePromise;
  let escapeBound = false;

  function loadEvidence() {
    if (!evidencePromise) {
      evidencePromise = fetch(dataUrl, { cache: "no-store" })
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.json();
        })
        .then((json) => json.items || {});
    }
    return evidencePromise;
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
    const labels = {
      TEXT_QUOTE: "Cita textual breve",
      VERIFIED_PARAPHRASE: "Paráfrasis verificada",
      TABLE: "Tabla",
      FIGURE: "Figura",
      SUPPLEMENT: "Material suplementario"
    };
    return labels[type] || type;
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
    location.textContent = proof.location;
    meta.append(type, location);
    block.appendChild(meta);

    const text = document.createElement(proof.evidence_type === "TEXT_QUOTE" ? "blockquote" : "p");
    text.className = "evidence-proof__text";
    text.textContent = proof.text;
    block.appendChild(text);

    if (!compact && proof.link_to_claim) {
      const why = document.createElement("p");
      why.className = "evidence-proof__why";
      const strong = document.createElement("strong");
      strong.textContent = "Por qué esta prueba respalda el texto: ";
      why.append(strong, document.createTextNode(proof.link_to_claim));
      block.appendChild(why);
    }
    parent.appendChild(block);
  }

  function renderTooltipContent(tooltip, id, item) {
    tooltip.replaceChildren();

    const title = document.createElement("div");
    title.className = "evidence-tooltip__title";
    title.textContent = item.reference || id;
    tooltip.appendChild(title);

    appendField(tooltip, "Qué parte del texto respalda", item.supported_fragment);

    const firstProof = Array.isArray(item.evidence) ? item.evidence[0] : null;
    if (firstProof) {
      const proofTitle = document.createElement("strong");
      proofTitle.className = "evidence-tooltip__proof-title";
      proofTitle.textContent = "Prueba en la fuente";
      tooltip.appendChild(proofTitle);
      appendProof(tooltip, firstProof, true);
    }

    appendField(tooltip, "Por qué se cita aquí", item.why_cited_here);
    appendField(tooltip, "Límite de esta fuente", item.boundary, "evidence-field evidence-field--boundary");

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
    if (!detail) {
      detail = document.createElement("section");
      detail.id = "evidence-detail";
      detail.className = "evidence-detail";
      detail.setAttribute("aria-live", "polite");
      detail.hidden = true;
      const article = document.querySelector("article.md-content__inner") || document.querySelector("main");
      if (article) article.appendChild(detail);
    }
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

    appendField(detail, "Texto metodológico donde aparece", item.methodology_text, "evidence-methodology-claim");
    appendField(detail, "Parte respaldada por esta fuente", item.supported_fragment);

    const proofHeading = document.createElement("h4");
    proofHeading.className = "evidence-detail__proof-heading";
    proofHeading.textContent = "Prueba documental en la fuente";
    detail.appendChild(proofHeading);

    if (Array.isArray(item.evidence)) {
      item.evidence.forEach((proof) => appendProof(detail, proof, false));
    }

    appendField(detail, "Por qué esta evidencia justifica la cita", item.why_cited_here);
    appendField(detail, "Lo que esta fuente NO justifica aquí", item.boundary, "evidence-field evidence-boundary");

    if (item.source_url) {
      const sourceLink = document.createElement("a");
      sourceLink.className = "evidence-source-link";
      sourceLink.href = item.source_url;
      sourceLink.target = "_blank";
      sourceLink.rel = "noopener noreferrer";
      sourceLink.textContent = "Abrir fuente original ↗";
      detail.appendChild(sourceLink);
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
      ["Revisión", item.review_id],
      ["Unidades de evidencia", Array.isArray(item.evidence_ids) && item.evidence_ids.length ? item.evidence_ids.join(", ") : "—"]
    ];
    for (const [term, value] of pairs) {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = value || "—";
      trace.append(dt, dd);
    }
    technical.appendChild(trace);
    detail.appendChild(technical);

    detail.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "nearest"
    });
  }

  function findSectionHeading(sectionNumber) {
    const article = document.querySelector("article.md-content__inner") || document.querySelector("main");
    if (!article) return null;
    const prefix = `${sectionNumber}.`;
    return Array.from(article.querySelectorAll("h2")).find((heading) => heading.textContent.trim().startsWith(prefix)) || null;
  }

  function eligibleTextNodes(root, matchText) {
    const nodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.includes(matchText)) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest(".evidence-citation, code, pre, script, style")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function sectionTextMatches(sectionHeading, matchText) {
    const hits = [];
    let node = sectionHeading.nextElementSibling;
    while (node && node.tagName !== "H2") {
      for (const textNode of eligibleTextNodes(node, matchText)) {
        let offset = 0;
        while (true) {
          const index = textNode.nodeValue.indexOf(matchText, offset);
          if (index < 0) break;
          hits.push({ textNode, index });
          offset = index + matchText.length;
        }
      }
      node = node.nextElementSibling;
    }
    return hits;
  }

  function wrapTextMatch(hit, id, matchText) {
    const { textNode, index } = hit;
    const matchedNode = textNode.splitText(index);
    matchedNode.splitText(matchText.length);
    const span = document.createElement("span");
    span.className = "evidence-citation";
    span.dataset.evidence = id;
    span.tabIndex = 0;
    span.setAttribute("role", "button");
    span.setAttribute("aria-label", `${matchText}. Ver prueba documental`);
    span.textContent = matchText;
    matchedNode.parentNode.replaceChild(span, matchedNode);
  }

  function hasEvidenceElement(id) {
    return Array.from(document.querySelectorAll(".evidence-citation[data-evidence]")).some(
      (element) => element.dataset.evidence === id
    );
  }

  function annotateRawCitations(items) {
    for (const [id, item] of Object.entries(items)) {
      if (!item || item.publication_status !== "VERIFIED_SOURCE_PROOF") continue;
      if (hasEvidenceElement(id) || !item.section || !item.match) continue;

      const heading = findSectionHeading(String(item.section));
      if (!heading) continue;
      const hits = sectionTextMatches(heading, item.match);
      if (hits.length !== 1) {
        console.warn(`Evidencia ${id}: se esperaba una coincidencia en sección ${item.section} y se encontraron ${hits.length}.`);
        continue;
      }
      wrapTextMatch(hits[0], id, item.match);
    }
  }

  function bindCitations() {
    const citations = Array.from(document.querySelectorAll(".evidence-citation[data-evidence]"));
    if (!citations.length) return;
    const tooltip = ensureTooltip();

    citations.forEach((citation) => {
      if (citation.dataset.evidenceBound === "1") return;
      citation.dataset.evidenceBound = "1";
      citation.setAttribute("aria-describedby", "evidence-tooltip");
      if (!citation.hasAttribute("role")) citation.setAttribute("role", "button");
      if (!citation.hasAttribute("tabindex")) citation.tabIndex = 0;

      const id = citation.dataset.evidence;
      let itemCache;
      const prepare = async () => {
        if (itemCache) return itemCache;
        const items = await loadEvidence();
        const candidate = items[id];
        itemCache = candidate && candidate.publication_status === "VERIFIED_SOURCE_PROOF" ? candidate : null;
        return itemCache;
      };

      const show = async () => {
        try {
          const item = await prepare();
          if (!item) return;
          renderTooltipContent(tooltip, id, item);
          positionTooltip(tooltip, citation);
        } catch (error) {
          console.warn("No se pudo cargar la prueba documental:", error);
        }
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
      citation.addEventListener("click", async (event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
          const item = await prepare();
          if (!item) return;
          showDetail(id, item);
          tooltip.hidden = true;
        } catch (error) {
          console.warn("No se pudo abrir la prueba documental:", error);
        }
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
      const items = await loadEvidence();
      annotateRawCitations(items);
      bindCitations();
    } catch (error) {
      console.warn("No se pudo inicializar la prueba documental de citas:", error);
    }
  }

  hydrateAndBind();
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(hydrateAndBind);
  }
})();
