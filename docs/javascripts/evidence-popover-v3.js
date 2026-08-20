(() => {
  const script = Array.from(document.scripts).find((s) => s.src && s.src.includes("evidence-popover-v3.js"));
  const dataUrl = script ? new URL("../data/evidence.json", script.src).href : "../data/evidence.json";
  let evidencePromise;
  let activeCitation = null;
  let previousOverflow = "";

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

  function typeLabel(type) {
    return {
      TEXT_QUOTE: "Cita textual breve",
      VERIFIED_PARAPHRASE: "Paráfrasis verificada",
      TABLE: "Tabla",
      FIGURE: "Figura",
      SUPPLEMENT: "Suplemento"
    }[type] || type || "Evidencia";
  }

  function field(parent, label, value, className = "evidence-v3-field") {
    if (!value) return;
    const block = document.createElement("div");
    block.className = className;
    const heading = document.createElement("strong");
    heading.textContent = label;
    const text = document.createElement("p");
    text.textContent = value;
    block.append(heading, text);
    parent.appendChild(block);
  }

  function proof(parent, item, compact = false) {
    if (!item) return;
    const block = document.createElement("section");
    block.className = compact ? "evidence-v3-proof evidence-v3-proof--compact" : "evidence-v3-proof";

    const meta = document.createElement("div");
    meta.className = "evidence-v3-proof__meta";
    const type = document.createElement("span");
    type.textContent = typeLabel(item.evidence_type);
    const location = document.createElement("span");
    location.textContent = item.location || "Ubicación no indicada";
    meta.append(type, location);
    block.appendChild(meta);

    const text = document.createElement(item.evidence_type === "TEXT_QUOTE" ? "blockquote" : "p");
    text.className = "evidence-v3-proof__text";
    text.textContent = item.text || "";
    block.appendChild(text);

    if (!compact && item.link_to_claim) {
      const why = document.createElement("p");
      why.className = "evidence-v3-proof__why";
      const strong = document.createElement("strong");
      strong.textContent = "Relación con la afirmación: ";
      why.append(strong, document.createTextNode(item.link_to_claim));
      block.appendChild(why);
    }

    parent.appendChild(block);
  }

  function ensurePopover() {
    let popover = document.getElementById("evidence-v3-popover");
    if (popover) return popover;
    popover = document.createElement("aside");
    popover.id = "evidence-v3-popover";
    popover.className = "evidence-v3-popover";
    popover.setAttribute("role", "tooltip");
    popover.hidden = true;
    document.body.appendChild(popover);
    return popover;
  }

  function renderPopover(popover, id, item) {
    popover.replaceChildren();
    const title = document.createElement("div");
    title.className = "evidence-v3-popover__title";
    title.textContent = item.reference || id;
    popover.appendChild(title);

    field(popover, "Qué parte del texto respalda", item.supported_fragment);

    const first = Array.isArray(item.evidence) ? item.evidence[0] : null;
    if (first) {
      const label = document.createElement("strong");
      label.className = "evidence-v3-popover__proof-label";
      label.textContent = "Prueba en la fuente";
      popover.appendChild(label);
      proof(popover, first, true);
    }

    field(popover, "Por qué justifica esta cita", item.why_cited_here);
    field(popover, "Límite", item.boundary, "evidence-v3-field evidence-v3-field--limit");

    const hint = document.createElement("div");
    hint.className = "evidence-v3-popover__hint";
    hint.textContent = "Clic para ver todas las pruebas sin salir de este punto.";
    popover.appendChild(hint);
  }

  function positionPopover(popover, target) {
    const rect = target.getBoundingClientRect();
    popover.style.left = "0px";
    popover.style.top = "0px";
    popover.hidden = false;
    const box = popover.getBoundingClientRect();
    const margin = 12;
    let left = rect.left + rect.width / 2 - box.width / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - box.width - margin));
    let top = rect.top - box.height - margin;
    if (top < margin) top = Math.min(window.innerHeight - box.height - margin, rect.bottom + margin);
    popover.style.left = `${Math.round(left)}px`;
    popover.style.top = `${Math.round(Math.max(margin, top))}px`;
  }

  function ensureModal() {
    let backdrop = document.getElementById("evidence-v3-backdrop");
    if (backdrop) return backdrop;

    backdrop = document.createElement("div");
    backdrop.id = "evidence-v3-backdrop";
    backdrop.className = "evidence-v3-backdrop";
    backdrop.hidden = true;

    const dialog = document.createElement("section");
    dialog.className = "evidence-v3-modal";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "evidence-v3-modal-title");
    dialog.tabIndex = -1;
    backdrop.appendChild(dialog);

    backdrop.addEventListener("mousedown", (event) => {
      if (event.target === backdrop) closeModal();
    });
    document.body.appendChild(backdrop);
    return backdrop;
  }

  function openModal(id, item, citation) {
    const backdrop = ensureModal();
    const dialog = backdrop.querySelector(".evidence-v3-modal");
    dialog.replaceChildren();
    activeCitation = citation || document.activeElement;

    const header = document.createElement("header");
    header.className = "evidence-v3-modal__header";
    const title = document.createElement("h3");
    title.id = "evidence-v3-modal-title";
    title.textContent = item.reference || id;
    const close = document.createElement("button");
    close.type = "button";
    close.className = "evidence-v3-modal__close";
    close.setAttribute("aria-label", "Cerrar evidencia y continuar leyendo");
    close.textContent = "×";
    close.addEventListener("click", closeModal);
    header.append(title, close);
    dialog.appendChild(header);

    const lead = document.createElement("div");
    lead.className = "evidence-v3-modal__lead";
    field(lead, "Texto metodológico", item.methodology_text);
    field(lead, "Qué respalda esta fuente", item.supported_fragment);
    dialog.appendChild(lead);

    const heading = document.createElement("h4");
    heading.textContent = "Pruebas verificadas en la fuente";
    dialog.appendChild(heading);
    if (Array.isArray(item.evidence)) item.evidence.forEach((entry) => proof(dialog, entry, false));

    field(dialog, "Por qué esta evidencia justifica la cita", item.why_cited_here);
    field(dialog, "Lo que esta fuente no justifica aquí", item.boundary, "evidence-v3-field evidence-v3-field--limit");

    if (item.source_url) {
      const link = document.createElement("a");
      link.className = "evidence-v3-source";
      link.href = item.source_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Abrir fuente original ↗";
      dialog.appendChild(link);
    }

    const technical = document.createElement("details");
    technical.className = "evidence-v3-technical";
    const summary = document.createElement("summary");
    summary.textContent = "Trazabilidad técnica";
    technical.appendChild(summary);
    const trace = document.createElement("p");
    trace.textContent = `${id} · ${item.review_id || "sin revisión"}${Array.isArray(item.evidence_ids) && item.evidence_ids.length ? ` · ${item.evidence_ids.join(", ")}` : ""}`;
    technical.appendChild(trace);
    dialog.appendChild(technical);

    previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    backdrop.hidden = false;
    window.requestAnimationFrame(() => dialog.focus());
  }

  function closeModal() {
    const backdrop = document.getElementById("evidence-v3-backdrop");
    if (!backdrop || backdrop.hidden) return;
    backdrop.hidden = true;
    document.documentElement.style.overflow = previousOverflow;
    const citation = activeCitation;
    activeCitation = null;
    if (citation && typeof citation.focus === "function") citation.focus({ preventScroll: true });
  }

  function findSectionHeading(sectionNumber) {
    const article = document.querySelector("article.md-content__inner") || document.querySelector("main");
    if (!article) return null;
    const prefix = `${sectionNumber}.`;
    return Array.from(article.querySelectorAll("h2")).find((heading) => heading.textContent.trim().startsWith(prefix)) || null;
  }

  function matchingTextNodes(root, matchText) {
    const hits = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.includes(matchText)) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest(".evidence-citation, code, pre, script, style")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) hits.push(walker.currentNode);
    return hits;
  }

  function sectionMatches(heading, matchText) {
    const hits = [];
    let node = heading.nextElementSibling;
    while (node && node.tagName !== "H2") {
      for (const textNode of matchingTextNodes(node, matchText)) {
        let offset = 0;
        for (;;) {
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

  function wrap(hit, id, matchText) {
    const matched = hit.textNode.splitText(hit.index);
    matched.splitText(matchText.length);
    const span = document.createElement("span");
    span.className = "evidence-citation";
    span.dataset.evidence = id;
    span.tabIndex = 0;
    span.setAttribute("role", "button");
    span.setAttribute("aria-label", `${matchText}. Mostrar evidencia en una ventana sin abandonar la lectura`);
    span.textContent = matchText;
    matched.parentNode.replaceChild(span, matched);
  }

  function annotate(items) {
    for (const [id, item] of Object.entries(items)) {
      if (!item || item.publication_status !== "VERIFIED_SOURCE_PROOF" || !item.section || !item.match) continue;
      if (document.querySelector(`.evidence-citation[data-evidence="${id}"]`)) continue;
      const heading = findSectionHeading(String(item.section));
      if (!heading) continue;
      const hits = sectionMatches(heading, item.match);
      if (hits.length === 1) wrap(hits[0], id, item.match);
      else console.warn(`Evidencia ${id}: ${hits.length} coincidencias para '${item.match}'.`);
    }
  }

  function bind(items) {
    const popover = ensurePopover();
    document.querySelectorAll(".evidence-citation[data-evidence]").forEach((citation) => {
      if (citation.dataset.evidenceV3Bound === "1") return;
      citation.dataset.evidenceV3Bound = "1";
      const id = citation.dataset.evidence;
      const item = items[id];
      if (!item || item.publication_status !== "VERIFIED_SOURCE_PROOF") return;

      const show = () => {
        renderPopover(popover, id, item);
        positionPopover(popover, citation);
      };
      citation.addEventListener("mouseenter", show);
      citation.addEventListener("focus", show);
      citation.addEventListener("mouseleave", () => {
        window.setTimeout(() => {
          if (!popover.matches(":hover") && document.activeElement !== citation) popover.hidden = true;
        }, 100);
      });
      citation.addEventListener("blur", () => {
        window.setTimeout(() => {
          if (!popover.matches(":hover")) popover.hidden = true;
        }, 100);
      });
      citation.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        popover.hidden = true;
        openModal(id, item, citation);
      });
      citation.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          citation.click();
        }
      });
    });
  }

  async function init() {
    try {
      const items = await loadEvidence();
      annotate(items);
      bind(items);
    } catch (error) {
      console.warn("No se pudo inicializar la evidencia interactiva:", error);
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const popover = document.getElementById("evidence-v3-popover");
      if (popover) popover.hidden = true;
      closeModal();
    }
  });

  init();
  if (typeof document$ !== "undefined" && document$.subscribe) document$.subscribe(init);
})();
