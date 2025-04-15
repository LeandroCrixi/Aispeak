const createElement = (type, attributes = {}, text = "") => {
    const el = document.createElement(type);
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
    if (text) el.textContent = text;
    return el;
};

export { createElement }