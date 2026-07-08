const MAIN_PANEL_HALF_ROWS = 23;
const SPECIAL_ROWS = 5;
const STORAGE_KEY = "squareBoyMenuStateV2";
const LAYOUT_KEY = "squareBoyMenuLayoutV1";

const initialPanelOrder = [
  "panel-1",
  "panel-2",
  "panel-3",
  "panel-4",
  "panel-5",
  "panel-6",
  "panel-7",
];

const initialLayout = {
  "panel-1": [
    "heading_charcoal",
    "hamburger",
    "cheese_burger",
    "banquet_burger",
    "chicken_burger",
    "double_burger",
    "hot_dog",
    "cheese_dog",
    "onion_rings",
    "french_fries",
    "fries_gravy",
  ],
  "panel-2": [
    "photo_burger",
    "homemade_burger",
    "homemade_cheese",
    "homemade_banquet",
    "blank_1",
  ],
  "panel-3": [
    "heading_other",
    "steak_kaiser",
    "blank_2",
    "fish_bun",
    "fish_chips",
    "greek_salad",
    "small_greek",
    "blank_3",
    "heading_bar",
    "domestic_beer",
    "wine_glass",
  ],
  "panel-4": [
    "photo_souvlaki_bun",
    "souvlaki_bun_pita",
    "gyros_bun_pita",
    "chicken_souvlaki_bun_pita",
    "blank_4",
  ],
  "panel-5": [
    "photo_dinner",
    "souvlaki_dinner",
    "gyros_dinner",
    "chicken_souvlaki_dinner",
    "footer_dinners",
  ],
  "panel-6": [
    "photo_bbq_chicken",
    "blank_5",
    "half_bbq_fries_salad",
    "whole_bbq_chicken",
    "milk_shakes",
  ],
  "panel-7": [
    "heading_beverages",
    "coffee",
    "tea",
    "milk",
    "canned_pop",
    "blank_11",
    "blank_6",
    "ice_cream",
    "blank_7",
    "blank_8",
    "blank_9",
  ],
  "specials-board": [
    "heading_special",
    "special_half_chicken",
    "special_souvlaki",
    "special_chicken_burger",
    "special_hamburger_combo",
  ],
  parking: ["blank_10"],
};

const items = {
  heading_charcoal: {
    label: "From The Charcoal",
    type: "heading",
    span: 3,
    zone: "main-heading-large",
  },
  hamburger: { label: "Hamburger", type: "normal", span: 2, price: "$5.00" },
  cheese_burger: { label: "Cheese Burger", type: "normal", span: 2, price: "$5.60" },
  banquet_burger: { label: "Banquet Burger", type: "normal", span: 2, price: "$6.60" },
  chicken_burger: { label: "Chicken Burger", type: "normal", span: 2, price: "$6.25" },
  double_burger: { label: "Double Burger", type: "normal", span: 2, price: "$7.45" },
  hot_dog: { label: "Hot Dog", type: "normal", span: 2, price: "$4.50" },
  cheese_dog: { label: "Cheese Dog", type: "normal", span: 2, price: "$5.25" },
  onion_rings: { label: "Onion Rings", type: "normal", span: 2, price: "$4.20" },
  french_fries: { label: "French Fries", type: "normal", span: 2, price: "$4.00" },
  fries_gravy: { label: "French Fries with Gravy", type: "normal", span: 2, price: "$4.75" },
  photo_burger: {
    label: "Burger photo block",
    type: "photo",
    span: 15,
    locked: true,
    image: "assets/burger-photo-block.png",
  },
  homemade_burger: { label: "Homemade Burger 100% Beef", type: "normal", span: 2, price: "$7.00" },
  homemade_cheese: { label: "Homemade Cheese Burger", type: "normal", span: 2, price: "$8.00" },
  homemade_banquet: { label: "Homemade Banquet Burger", type: "normal", span: 2, price: "$9.00" },
  blank_1: { label: "", type: "blank", span: 2 },
  heading_other: {
    label: "Other Suggestion",
    type: "heading",
    span: 3,
    zone: "main-heading-large",
  },
  steak_kaiser: { label: "Steak on a Kaiser", type: "normal", span: 2, price: "$11.00" },
  blank_2: { label: "", type: "blank", span: 2 },
  fish_bun: { label: "Fish on a Bun", type: "normal", span: 2, price: "$7.25" },
  fish_chips: { label: "Fish & Chips", type: "normal", span: 2, price: "$10.25" },
  greek_salad: { label: "Greek Salad", type: "normal", span: 2, price: "$9.00" },
  small_greek: { label: "SMALL GREEK SALAD", type: "normal", span: 2, price: "$6.50" },
  blank_3: { label: "", type: "blank", span: 2 },
  heading_bar: {
    label: "From The Bar",
    type: "bar-heading",
    span: 2,
    zone: "main-heading-single",
  },
  domestic_beer: { label: "Domestic Beer", type: "normal", span: 2, price: "$5.50" },
  wine_glass: { label: "Wine Glass 7 oz.", type: "normal", span: 2, price: "$5.50" },
  photo_souvlaki_bun: {
    label: "Souvlaki sandwich photo block",
    type: "photo",
    span: 15,
    locked: true,
    image: "assets/souvlaki-sandwich-photo-block.png",
  },
  souvlaki_bun_pita: { label: "Souvlaki on a Bun or Pita", type: "normal", span: 2, price: "$8.00" },
  gyros_bun_pita: { label: "Gyros on a Bun or Pita", type: "normal", span: 2, price: "$8.00" },
  chicken_souvlaki_bun_pita: {
    label: "Chicken Souvlaki on a Bun or Pita",
    type: "normal",
    span: 2,
    price: "$8.00",
  },
  blank_4: { label: "", type: "blank", span: 2 },
  photo_dinner: {
    label: "Dinner / souvlaki photo block",
    type: "photo",
    span: 15,
    locked: true,
    image: "assets/dinner-souvlaki-photo-block.png",
  },
  souvlaki_dinner: { label: "Souvlaki Dinner", type: "normal", span: 2, price: "$16.00" },
  gyros_dinner: { label: "Gyros Dinner", type: "normal", span: 2, price: "$16.00" },
  chicken_souvlaki_dinner: { label: "Chicken Souvlaki Dinner", type: "normal", span: 2, price: "$16.00" },
  footer_dinners: {
    label: "Dinners Served with Greek Salad & Fries",
    type: "normal",
    span: 2,
  },
  photo_bbq_chicken: {
    label: "BBQ chicken photo block",
    type: "photo",
    span: 15,
    locked: true,
    image: "assets/chicken-photo-block.png",
  },
  blank_5: { label: "", type: "blank", span: 2 },
  half_bbq_fries_salad: {
    label: "1/2 B.B.Q. Chicken with Fries & Salad",
    type: "normal",
    span: 2,
    price: "$17.00",
  },
  whole_bbq_chicken: { label: "B.B.Q. Whole Chicken", type: "normal", span: 2, price: "$16.00" },
  milk_shakes: { label: "Milk Shakes", type: "normal", span: 2, price: "$5.25" },
  heading_beverages: {
    label: "Beverages",
    type: "heading",
    span: 3,
    zone: "main-heading-large",
  },
  coffee: { label: "Coffee", type: "normal", span: 2, price: "$1.50" },
  tea: { label: "Tea", type: "normal", span: 2, price: "$1.50" },
  milk: { label: "Milk", type: "normal", span: 2, price: "$3.70" },
  canned_pop: { label: "Canned Pop", type: "normal", span: 2, price: "$1.50" },
  ice_cream: { label: "Ice Cream", type: "normal", span: 2, price: "$3.50" },
  blank_6: { label: "", type: "blank", span: 2 },
  blank_7: { label: "", type: "blank", span: 2 },
  blank_8: { label: "", type: "blank", span: 2 },
  blank_9: { label: "", type: "blank", span: 2 },
  blank_11: { label: "", type: "blank", span: 2 },
  heading_special: {
    label: "SPECIAL",
    type: "special-heading",
    span: 1,
    zone: "special-heading",
    locked: true,
  },
  special_half_chicken: {
    label: "1/2 Chicken w/Fries or Salad",
    type: "special-item",
    span: 1,
    price: "$14.00",
  },
  special_souvlaki: {
    label: "Chicken Souvlaki on Pita or Bun With Fries",
    type: "special-item",
    span: 1,
    price: "$11.00",
  },
  special_chicken_burger: {
    label: "Chicken Burger w/Fries & Pop",
    type: "special-item",
    span: 1,
    price: "$8.00",
  },
  special_hamburger_combo: {
    label: "Hamburger, Fries & Pop",
    type: "special-item",
    span: 1,
    price: "$8.00",
  },
  blank_10: { label: "", type: "blank", span: 2 },
};

const panelNames = {
  "panel-1": "Panel 1",
  "panel-2": "Panel 2",
  "panel-3": "Panel 3",
  "panel-4": "Panel 4",
  "panel-5": "Panel 5",
  "panel-6": "Panel 6",
  "panel-7": "Panel 7 Beverages",
};

const state = loadState();
let dragState = null;
let pointerDrag = null;

const mainBoard = document.querySelector("#mainBoard");
const specialsBoard = document.querySelector("#specialsBoard");
const panelTemplate = document.querySelector("#panelTemplate");
const stripTemplate = document.querySelector("#stripTemplate");
const statusMessage = document.querySelector("#statusMessage");
const copyMenuButton = document.querySelector("#copyMenuButton");
const copyButtonLabel = document.querySelector("#copyButtonLabel");
const verticalLayoutButton = document.querySelector("#verticalLayoutButton");
const horizontalLayoutButton = document.querySelector("#horizontalLayoutButton");

applyLayout(loadLayoutMode());
render();
bindGlobalActions();

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const fromHash = decodeStateFromHash();
  if (fromHash) {
    return normalizeState(fromHash);
  }

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (isValidState(parsed)) {
        return normalizeState(parsed);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return normalizeState(getInitialState());
}

function getInitialState() {
  return {
    panelOrder: [...initialPanelOrder],
    layout: cloneLayout(initialLayout),
  };
}

function cloneLayout(layout) {
  return Object.fromEntries(Object.entries(layout).map(([panelId, ids]) => [panelId, [...ids]]));
}

function normalizeState(value) {
  const next = {
    panelOrder: [...value.panelOrder],
    layout: cloneLayout(value.layout),
  };

  const hasBeverageBlank = Object.values(next.layout).some((ids) => ids.includes("blank_11"));
  if (!hasBeverageBlank) {
    const beverages = next.layout["panel-7"];
    const cannedPopIndex = beverages.indexOf("canned_pop");
    beverages.splice(cannedPopIndex >= 0 ? cannedPopIndex + 1 : beverages.length, 0, "blank_11");
  }

  return next;
}

function isValidState(value) {
  if (!value || !Array.isArray(value.panelOrder) || typeof value.layout !== "object") {
    return false;
  }

  return initialPanelOrder.every((panelId) => Array.isArray(value.layout[panelId]));
}

function render() {
  mainBoard.style.setProperty("--panel-count", state.panelOrder.length);
  mainBoard.replaceChildren(...state.panelOrder.map((panelId) => renderPanel(panelId)));
  specialsBoard.replaceChildren(renderSpecialsPanel());
  saveState();
}

function renderPanel(panelId) {
  const panel = panelTemplate.content.firstElementChild.cloneNode(true);
  panel.dataset.panelId = panelId;
  panel.querySelector(".panel-title").textContent = panelNames[panelId] || panelId;

  const slots = panel.querySelector(".panel-slots");
  const ids = state.layout[panelId] || [];
  const used = ids.reduce((sum, id) => sum + getRenderSpan(id, "main"), 0);
  const filler = Math.max(0, MAIN_PANEL_HALF_ROWS - used);
  const counter = panel.querySelector(".panel-counter");
  counter.textContent = `${used + filler}/${MAIN_PANEL_HALF_ROWS}`;
  counter.title = filler ? `${used} content half-rows + ${filler} fixed filler half-row` : "";
  counter.classList.toggle("warn", used > MAIN_PANEL_HALF_ROWS);

  slots.replaceChildren(...ids.map((id, index) => renderStrip(id, panelId, index, "main")));

  if (filler) {
    slots.appendChild(renderSpacer(filler));
  }

  const handle = panel.querySelector(".panel-handle");
  handle.dataset.panelId = panelId;
  handle.draggable = false;
  handle.addEventListener("pointerdown", handlePanelPointerDown);
  handle.addEventListener("dragstart", handlePanelDragStart);
  handle.addEventListener("dragend", handleDragEnd);
  panel.addEventListener("dragover", handlePanelDragOver);
  panel.addEventListener("drop", handlePanelDrop);
  panel.addEventListener("dragleave", () => panel.classList.remove("panel-insert-before", "panel-insert-after"));
  panel.addEventListener("pointerdown", handlePanelPointerDown);

  return panel;
}

function renderSpecialsPanel() {
  const panel = panelTemplate.content.firstElementChild.cloneNode(true);
  panel.classList.add("specials-panel");
  panel.dataset.panelId = "specials-board";
  panel.querySelector(".panel-title").textContent = "Specials board";
  const counter = panel.querySelector(".panel-counter");
  const ids = state.layout["specials-board"] || [];
  counter.textContent = `${ids.length}/${SPECIAL_ROWS}`;
  counter.classList.toggle("warn", ids.length !== SPECIAL_ROWS);

  const handle = panel.querySelector(".panel-handle");
  handle.disabled = true;
  handle.textContent = "Fixed";
  handle.draggable = false;

  const slots = panel.querySelector(".panel-slots");
  slots.replaceChildren(...ids.map((id, index) => renderStrip(id, "specials-board", index, "special")));

  return panel;
}

function renderStrip(id, panelId, index, boardType) {
  const item = getItem(id);
  const strip = stripTemplate.content.firstElementChild.cloneNode(true);
  strip.dataset.itemId = id;
  strip.dataset.panelId = panelId;
  strip.dataset.index = index;
  strip.dataset.boardType = boardType;
  strip.dataset.zone = item.zone || "item";
  const renderSpan = getRenderSpan(id, boardType);
  strip.style.setProperty("--span", renderSpan);
  strip.classList.add(item.type);
  if (item.type === "heading" || item.type === "bar-heading") {
    strip.classList.add("heading");
  }
  if (!item.price) {
    strip.classList.add("no-price");
  }
  if (item.image) {
    strip.classList.add("has-image");
    strip.style.setProperty("--photo-image", `url("${item.image}")`);
  }
  if (item.locked || item.type === "heading") {
    strip.draggable = false;
    strip.setAttribute("aria-disabled", "true");
  } else {
    strip.draggable = false;
    strip.tabIndex = 0;
    strip.addEventListener("pointerdown", handleStripPointerDown);
    strip.addEventListener("dragstart", handleStripDragStart);
    strip.addEventListener("dragend", handleDragEnd);
  }

  strip.querySelector(".strip-text").textContent = item.label || "blank";
  strip.querySelector(".price").textContent = item.price || "";
  strip.querySelector(".strip-meta").textContent = item.locked
    ? `${id} - photo locked`
    : `${id} - ${boardType === "main" ? renderSpan / 2 : renderSpan} row`;

  strip.addEventListener("dragover", handleStripDragOver);
  strip.addEventListener("dragleave", () =>
    strip.classList.remove("drop-ok", "drop-no", "drop-insert-before", "drop-insert-after")
  );
  strip.addEventListener("drop", handleStripDrop);

  return strip;
}

function renderSpacer(span) {
  const spacer = document.createElement("div");
  spacer.className = "panel-spacer";
  spacer.style.setProperty("--span", span);
  return spacer;
}

function getItem(id) {
  return items[id] || { label: id, type: "normal", span: 2 };
}

function handleStripDragStart(event) {
  const target = event.currentTarget;
  const itemId = target.dataset.itemId;
  const item = getItem(itemId);
  if (item.locked) {
    event.preventDefault();
    return;
  }

  dragState = {
    mode: "strip",
    itemId,
    panelId: target.dataset.panelId,
    index: Number(target.dataset.index),
    boardType: target.dataset.boardType,
  };
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", itemId);
  target.classList.add("dragging");
}

function handleStripPointerDown(event) {
  event.stopPropagation();
  if (event.button !== 0 || pointerDrag) {
    return;
  }

  const target = event.currentTarget;
  const itemId = target.dataset.itemId;
  const item = getItem(itemId);
  if (item.locked) {
    return;
  }

  pointerDrag = {
    mode: "strip",
    source: {
      itemId,
      panelId: target.dataset.panelId,
      index: Number(target.dataset.index),
      boardType: target.dataset.boardType,
    },
    sourceElement: target,
    startX: event.clientX,
    startY: event.clientY,
    ghost: null,
    dropTarget: null,
  };
  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointerup", handlePointerUp, { once: true });
  document.addEventListener("pointercancel", cancelPointerDrag, { once: true });
  event.preventDefault();
}

function handlePanelDragStart(event) {
  const panelId = event.currentTarget.dataset.panelId;
  dragState = {
    mode: "panel",
    panelId,
  };
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", panelId);
}

function handlePanelPointerDown(event) {
  if (event.button !== 0 || pointerDrag || event.currentTarget.disabled) {
    return;
  }

  const panel = event.currentTarget.closest(".panel");
  if (!panel || panel.dataset.panelId === "specials-board") {
    return;
  }

  const clickedStrip = event.target.closest(".strip");
  const canDragPanelFromStrip =
    clickedStrip?.classList.contains("photo") || clickedStrip?.dataset.zone === "main-heading-large";
  if (!canDragPanelFromStrip) {
    return;
  }

  const panelId = panel.dataset.panelId;
  pointerDrag = {
    mode: "panel",
    panelId,
    sourceElement: panel,
    startX: event.clientX,
    startY: event.clientY,
    ghost: null,
    dropTarget: null,
  };
  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointerup", handlePointerUp, { once: true });
  document.addEventListener("pointercancel", cancelPointerDrag, { once: true });
  event.preventDefault();
}

function handlePointerMove(event) {
  if (!pointerDrag) {
    return;
  }

  const distance = Math.hypot(event.clientX - pointerDrag.startX, event.clientY - pointerDrag.startY);
  if (!pointerDrag.ghost && distance < 6) {
    return;
  }

  if (!pointerDrag.ghost) {
    startPointerGhost();
  }

  movePointerGhost(event.clientX, event.clientY);
  updatePointerDropTarget(event.clientX, event.clientY);
  event.preventDefault();
}

function handlePointerUp(event) {
  if (!pointerDrag) {
    return;
  }

  if (pointerDrag.ghost) {
    updatePointerDropTarget(event.clientX, event.clientY);
    finishPointerDrop();
  }

  cleanupPointerDrag();
}

function cancelPointerDrag() {
  cleanupPointerDrag();
}

function startPointerGhost() {
  pointerDrag.sourceElement.classList.add("dragging");
  if (pointerDrag.mode === "panel") {
    const rect = pointerDrag.sourceElement.getBoundingClientRect();
    const ghost = document.createElement("div");
    ghost.className = "drag-ghost panel-ghost no-print";
    ghost.style.setProperty("--ghost-width", `${rect.width}px`);
    ghost.style.setProperty("--ghost-height", `${rect.height}px`);
    pointerDrag.ghost = ghost;
  } else {
    const rect = pointerDrag.sourceElement.getBoundingClientRect();
    const ghost = pointerDrag.sourceElement.cloneNode(true);
    ghost.classList.add("drag-ghost", "no-print");
    ghost.classList.remove("dragging", "drop-ok", "drop-no");
    ghost.style.setProperty("--ghost-width", `${rect.width}px`);
    ghost.style.setProperty("--ghost-height", `${rect.height}px`);
    pointerDrag.ghost = ghost;
  }
  document.body.appendChild(pointerDrag.ghost);
}

function movePointerGhost(x, y) {
  pointerDrag.ghost.style.setProperty("--ghost-x", `${Math.round(x + 10)}px`);
  pointerDrag.ghost.style.setProperty("--ghost-y", `${Math.round(y + 10)}px`);
}

function updatePointerDropTarget(x, y) {
  clearPointerHighlights();
  const element = document.elementFromPoint(x, y);
  if (!element) {
    pointerDrag.dropTarget = null;
    return;
  }

  if (pointerDrag.mode === "panel") {
    const panel = element.closest(".board .panel");
    if (!panel || panel.dataset.panelId === pointerDrag.panelId) {
      pointerDrag.dropTarget = null;
      return;
    }
    const operation = getPanelDropOperation(pointerDrag.panelId, panel.dataset.panelId, x, y, panel);
    pointerDrag.dropTarget = operation;
    applyPanelDropClasses(panel, operation);
    return;
  }

  const strip = element.closest(".strip");
  if (!strip) {
    pointerDrag.dropTarget = null;
    return;
  }

  const target = {
    itemId: strip.dataset.itemId,
    panelId: strip.dataset.panelId,
    index: Number(strip.dataset.index),
    boardType: strip.dataset.boardType,
  };
  const operation = getStripDropOperation(pointerDrag.source, target, y, strip);
  pointerDrag.dropTarget = operation;
  applyStripDropClasses(strip, operation);
}

function finishPointerDrop() {
  if (pointerDrag.mode === "panel") {
    if (!pointerDrag.dropTarget) {
      setStatus("Drop the panel on another main panel to reorder it.", "error");
      return;
    }

    movePanelToPosition(pointerDrag.panelId, pointerDrag.dropTarget);
    render();
    return;
  }

  if (!pointerDrag.dropTarget) {
    setStatus("That strip cannot move into this space.", "error");
    return;
  }

  const source = pointerDrag.source;
  const target = pointerDrag.dropTarget;
  if (isInsertOperation(target)) {
    insertItemAtTarget(source, target);
  } else {
    swapItems(source, target);
  }
  const moved = getItem(source.itemId).label || source.itemId;
  const targetLabel = getItem(target.itemId).label || "blank";
  const action = getDropActionLabel(target);
  setStatus(`Moved ${moved} ${action} ${targetLabel} position.`);
  render();
}

function cleanupPointerDrag() {
  document.removeEventListener("pointermove", handlePointerMove);
  document.removeEventListener("pointercancel", cancelPointerDrag);
  if (pointerDrag?.ghost) {
    pointerDrag.ghost.remove();
  }
  pointerDrag = null;
  clearPointerHighlights();
}

function clearPointerHighlights() {
  document
    .querySelectorAll(
      ".dragging, .drop-ok, .drop-no, .drop-insert-before, .drop-insert-after, .drag-over, .panel-insert-before, .panel-insert-after"
    )
    .forEach((element) =>
      element.classList.remove(
        "dragging",
        "drop-ok",
        "drop-no",
        "drop-insert-before",
        "drop-insert-after",
        "drag-over",
        "panel-insert-before",
        "panel-insert-after"
      )
    );
}

function handleStripDragOver(event) {
  if (!dragState || dragState.mode !== "strip") {
    return;
  }

  const target = event.currentTarget;
  const targetInfo = {
    itemId: target.dataset.itemId,
    panelId: target.dataset.panelId,
    index: Number(target.dataset.index),
    boardType: target.dataset.boardType,
  };
  const operation = getStripDropOperation(dragState, targetInfo, event.clientY, target);
  applyStripDropClasses(target, operation);

  if (operation) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }
}

function handleStripDrop(event) {
  if (!dragState || dragState.mode !== "strip") {
    return;
  }

  const target = event.currentTarget;
  const targetInfo = {
    itemId: target.dataset.itemId,
    panelId: target.dataset.panelId,
    index: Number(target.dataset.index),
    boardType: target.dataset.boardType,
  };
  target.classList.remove("drop-ok", "drop-no", "drop-insert-before", "drop-insert-after");

  const operation = getStripDropOperation(dragState, targetInfo, event.clientY, target);
  if (!operation) {
    setStatus("That strip cannot move into this space.", "error");
    return;
  }

  if (isInsertOperation(operation)) {
    insertItemAtTarget(dragState, operation);
  } else {
    swapItems(dragState, operation);
  }
  const moved = getItem(dragState.itemId).label || dragState.itemId;
  const targetLabel = getItem(operation.itemId).label || operation.itemId;
  const action = getDropActionLabel(operation);
  setStatus(`Moved ${moved} ${action} ${targetLabel || "blank"} position.`);
  dragState = null;
  render();
}

function handlePanelDragOver(event) {
  if (!dragState || dragState.mode !== "panel") {
    return;
  }

  const panel = event.currentTarget;
  if (panel.dataset.panelId === dragState.panelId) {
    return;
  }

  const operation = getPanelDropOperation(dragState.panelId, panel.dataset.panelId, event.clientX, event.clientY, panel);
  applyPanelDropClasses(panel, operation);
  if (operation) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }
}

function handlePanelDrop(event) {
  if (!dragState || dragState.mode !== "panel") {
    return;
  }

  event.preventDefault();
  const targetPanelId = event.currentTarget.dataset.panelId;
  const operation = getPanelDropOperation(
    dragState.panelId,
    targetPanelId,
    event.clientX,
    event.clientY,
    event.currentTarget
  );
  clearPointerHighlights();

  if (!operation) {
    return;
  }

  movePanelToPosition(dragState.panelId, operation);
  dragState = null;
  render();
}

function getPanelDropOperation(sourcePanelId, targetPanelId, clientX, clientY, targetElement) {
  if (!targetPanelId || targetPanelId === sourcePanelId || targetPanelId === "specials-board") {
    return null;
  }

  const rect = targetElement.getBoundingClientRect();
  const isHorizontal = document.body.dataset.layout === "horizontal";
  const after = isHorizontal ? clientX > rect.left + rect.width / 2 : clientY > rect.top + rect.height / 2;
  return { targetPanelId, position: after ? "after" : "before" };
}

function applyPanelDropClasses(panel, operation) {
  panel.classList.toggle("panel-insert-before", operation?.position === "before");
  panel.classList.toggle("panel-insert-after", operation?.position === "after");
}

function movePanelToPosition(sourcePanelId, operation) {
  const from = state.panelOrder.indexOf(sourcePanelId);
  const to = state.panelOrder.indexOf(operation.targetPanelId);
  if (from < 0 || to < 0) {
    return;
  }

  const [panelId] = state.panelOrder.splice(from, 1);
  let insertAt = to;
  if (operation.position === "after") {
    insertAt += 1;
  }
  if (from < insertAt) {
    insertAt -= 1;
  }
  state.panelOrder.splice(insertAt, 0, panelId);
  setStatus(`${panelNames[panelId]} moved ${operation.position} ${panelNames[operation.targetPanelId]}.`);
}

function handleDragEnd() {
  dragState = null;
  document
    .querySelectorAll(
      ".dragging, .drop-ok, .drop-no, .drop-insert-before, .drop-insert-after, .drag-over, .panel-insert-before, .panel-insert-after"
    )
    .forEach((element) =>
      element.classList.remove(
        "dragging",
        "drop-ok",
        "drop-no",
        "drop-insert-before",
        "drop-insert-after",
        "drag-over",
        "panel-insert-before",
        "panel-insert-after"
      )
    );
}

function getStripDropOperation(source, target, clientY, targetElement) {
  const insertPosition = getInsertPosition(clientY, targetElement);
  if (insertPosition) {
    const insertIndex = getTargetInsertIndex(target, insertPosition);
    const blankIndex = findConsumableBlankIndex(source, target, insertIndex, insertPosition);
    if (blankIndex >= 0) {
      return { ...target, type: `insert-${insertPosition}`, blankIndex, insertIndex };
    }
  }

  if (canSwap(source, target)) {
    return { ...target, type: "swap" };
  }

  return null;
}

function getInsertPosition(clientY, targetElement) {
  const rect = targetElement.getBoundingClientRect();
  const threshold = Math.max(8, Math.min(14, rect.height * 0.35));
  if (clientY <= rect.top + threshold) {
    return "before";
  }

  if (clientY >= rect.bottom - threshold) {
    return "after";
  }

  return null;
}

function getTargetInsertIndex(target, position) {
  return position === "after" ? target.index + 1 : target.index;
}

function applyStripDropClasses(strip, operation) {
  strip.classList.toggle("drop-ok", operation?.type === "swap");
  strip.classList.toggle("drop-insert-before", operation?.type === "insert-before");
  strip.classList.toggle("drop-insert-after", operation?.type === "insert-after");
  strip.classList.toggle("drop-no", !operation);
}

function isInsertOperation(operation) {
  return operation?.type === "insert-before" || operation?.type === "insert-after";
}

function getDropActionLabel(operation) {
  if (operation.type === "insert-before") {
    return "above";
  }

  if (operation.type === "insert-after") {
    return "below";
  }

  return "into the";
}

function canSwap(source, target) {
  if (source.panelId === target.panelId && source.index === target.index) {
    return false;
  }

  const sourceItem = getItem(source.itemId);
  const targetItem = getItem(target.itemId);
  if (sourceItem.locked || targetItem.locked) {
    return false;
  }

  if (source.boardType !== target.boardType) {
    return canSwapAcrossBoards(sourceItem, targetItem, source.boardType, target.boardType);
  }

  if (source.boardType === "special") {
    return isSpecialBoardSlot(sourceItem) && isSpecialBoardSlot(targetItem);
  }

  const sourceIsLargeHeading = isLargeHeading(sourceItem);
  const targetIsLargeHeading = isLargeHeading(targetItem);
  if (sourceIsLargeHeading || targetIsLargeHeading) {
    return sourceIsLargeHeading && targetIsLargeHeading && sourceItem.zone === targetItem.zone;
  }

  return isMainOneRowSlot(sourceItem) && isMainOneRowSlot(targetItem);
}

function canSwapAcrossBoards(sourceItem, targetItem, sourceBoardType, targetBoardType) {
  if (sourceBoardType === "special" && targetBoardType === "main") {
    return isSpecialBoardSlot(sourceItem) && isMainOneRowSlot(targetItem);
  }

  if (sourceBoardType === "main" && targetBoardType === "special") {
    return isMainOneRowSlot(sourceItem) && isSpecialBoardSlot(targetItem);
  }

  return false;
}

function findConsumableBlankIndex(source, target, insertIndex, insertPosition) {
  if (!canInsert(source, target, insertIndex, insertPosition)) {
    return -1;
  }

  const targetList = state.layout[target.panelId] || [];
  let blankIndex = -1;
  let blankDistance = Number.POSITIVE_INFINITY;
  targetList.forEach((itemId, index) => {
    if (source.panelId === target.panelId && source.index === index) {
      return;
    }

    if (getItem(itemId).type !== "blank") {
      return;
    }

    const distance = Math.abs(index - insertIndex);
    if (distance < blankDistance) {
      blankIndex = index;
      blankDistance = distance;
    }
  });

  return blankIndex;
}

function canInsert(source, target, insertIndex, insertPosition) {
  if (target.boardType !== "main") {
    return false;
  }

  if (source.panelId === target.panelId && (source.index === insertIndex || source.index + 1 === insertIndex)) {
    return false;
  }

  const sourceItem = getItem(source.itemId);
  const targetItem = getItem(target.itemId);
  const targetAcceptsInsert =
    targetItem.type === "photo" ? insertPosition === "after" : targetItem.type !== "blank" && isMainOneRowSlot(targetItem);
  return (
    sourceItem.type !== "blank" &&
    isMainOneRowSlot(sourceItem) &&
    targetAcceptsInsert
  );
}

function isLargeHeading(item) {
  return item.type === "heading";
}

function isMainOneRowSlot(item) {
  return !item.locked && !isLargeHeading(item) && item.type !== "special-heading" && item.type !== "photo";
}

function isSpecialBoardSlot(item) {
  return !item.locked && !isLargeHeading(item) && item.type !== "special-heading" && item.type !== "photo";
}

function getRenderSpan(id, boardType) {
  const item = getItem(id);
  if (boardType === "main" && item.type === "special-item") {
    return 2;
  }

  if (boardType === "special" && item.type !== "special-heading") {
    return 1;
  }

  return item.span;
}

function swapItems(source, target) {
  const sourceList = state.layout[source.panelId];
  const targetList = state.layout[target.panelId];
  const sourceId = sourceList[source.index];
  sourceList[source.index] = targetList[target.index];
  targetList[target.index] = sourceId;
}

function insertItemAtTarget(source, target) {
  const sourceList = state.layout[source.panelId];
  const targetList = state.layout[target.panelId];
  const sourceId = sourceList[source.index];

  if (source.panelId === target.panelId) {
    insertItemWithinPanel(sourceList, source.index, target.insertIndex, target.blankIndex, sourceId);
    return;
  }

  const blankId = targetList[target.blankIndex];
  sourceList[source.index] = blankId;
  targetList.splice(target.blankIndex, 1);
  let insertIndex = target.insertIndex;
  if (target.blankIndex < insertIndex) {
    insertIndex -= 1;
  }
  targetList.splice(insertIndex, 0, sourceId);
}

function insertItemWithinPanel(list, sourceIndex, insertionIndex, blankIndex, sourceId) {
  const blankId = list[blankIndex];
  list[sourceIndex] = blankId;
  list.splice(blankIndex, 1);

  let insertIndex = insertionIndex;
  if (blankIndex < insertIndex) {
    insertIndex -= 1;
  }

  list.splice(insertIndex, 0, sourceId);
}

function bindGlobalActions() {
  document.querySelector("#resetButton").addEventListener("click", () => {
    state.panelOrder = [...initialPanelOrder];
    state.layout = cloneLayout(initialLayout);
    localStorage.removeItem(STORAGE_KEY);
    history.replaceState(null, "", location.pathname);
    setStatus("Layout reset to the current menu structure.");
    render();
  });

  document.querySelector("#printButton").addEventListener("click", () => window.print());
  copyMenuButton.addEventListener("click", copyCurrentMenu);
  verticalLayoutButton.addEventListener("click", () => applyLayout("vertical"));
  horizontalLayoutButton.addEventListener("click", () => applyLayout("horizontal"));
  document.querySelector("#importInput").addEventListener("change", importJson);
}

function loadLayoutMode() {
  return localStorage.getItem(LAYOUT_KEY) === "horizontal" ? "horizontal" : "vertical";
}

function applyLayout(mode) {
  const layoutMode = mode === "horizontal" ? "horizontal" : "vertical";
  document.body.dataset.layout = layoutMode;
  verticalLayoutButton.setAttribute("aria-pressed", String(layoutMode === "vertical"));
  horizontalLayoutButton.setAttribute("aria-pressed", String(layoutMode === "horizontal"));
  localStorage.setItem(LAYOUT_KEY, layoutMode);
}

function buildPlainSummary() {
  const lines = [];
  lines.push("Square Boy menu board remix recommendation");
  lines.push(`Prepared: ${new Date().toLocaleString()}`);
  lines.push("");

  state.panelOrder.forEach((panelId, panelIndex) => {
    lines.push(`${panelIndex + 1}. ${panelNames[panelId] || panelId}`);
    state.layout[panelId].forEach((itemId, slotIndex) => {
      const item = getItem(itemId);
      const label = item.label || "[blank strip]";
      const price = item.price ? ` ${item.price}` : "";
      lines.push(`   ${slotIndex + 1}. ${label}${price}`);
    });
    lines.push("");
  });

  lines.push("Specials board");
  state.layout["specials-board"].forEach((itemId, slotIndex) => {
    const item = getItem(itemId);
    const price = item.price ? ` ${item.price}` : "";
    lines.push(`   ${slotIndex + 1}. ${item.label || "[blank strip]"}${price}`);
  });

  return lines.join("\n");
}

async function copyCurrentMenu() {
  const summary = buildPlainSummary();
  try {
    await navigator.clipboard.writeText(summary);
    pulseCopyButton("Copied to clipboard");
    setStatus("Copied current menu to clipboard.");
  } catch {
    pulseCopyButton("Copy failed");
    setStatus("Clipboard access was blocked. Please try again from your browser.", "error");
  }
}

function pulseCopyButton(label) {
  const defaultLabel = "Copy";
  copyButtonLabel.textContent = label;
  window.setTimeout(() => {
    copyButtonLabel.textContent = defaultLabel;
  }, 1600);
}

function importJson(event) {
  const [file] = event.currentTarget.files;
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const nextState = {
        panelOrder: parsed.panelOrder,
        layout: parsed.layout,
      };
      if (!isValidState(nextState)) {
        throw new Error("Invalid menu recommendation file.");
      }
      state.panelOrder = [...nextState.panelOrder];
      state.layout = cloneLayout(nextState.layout);
      render();
      setStatus("Imported recommendation JSON.");
    } catch (error) {
      setStatus(error.message || "Could not import that JSON file.", "error");
    } finally {
      event.currentTarget.value = "";
    }
  });
  reader.readAsText(file);
}

function decodeStateFromHash() {
  if (!location.hash.startsWith("#layout=")) {
    return null;
  }

  try {
    const encoded = location.hash.slice("#layout=".length);
    const parsed = JSON.parse(decodeURIComponent(escape(atob(encoded))));
    if (isValidState(parsed)) {
      return parsed;
    }
  } catch {
    return null;
  }

  return null;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setStatus(message, tone = "ok") {
  statusMessage.textContent = message;
  statusMessage.style.borderColor = tone === "error" ? "rgba(255, 77, 77, 0.65)" : "rgba(126, 217, 87, 0.6)";
  statusMessage.style.color = tone === "error" ? "#ffd1d1" : "#d6ffbd";
  statusMessage.style.background = tone === "error" ? "rgba(91, 9, 14, 0.62)" : "rgba(21, 57, 17, 0.55)";
}
