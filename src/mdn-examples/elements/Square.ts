/* eslint-disable no-console */
export class Square extends HTMLElement {
    /**
     * Specify observed attributes so that attributeChangedCallback will work
     */
    static get observedAttributes() {
        return ["size", "color"];
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(document.createElement("style"));
        shadow.appendChild(document.createElement("div"));
    }

    public connectedCallback() {
        console.log("Element added to document.");
        this.updateStyle();
    }

    public disconnectedCallback() {
        console.log("Element removed from document.");
    }

    public adoptedCallback() {
        console.log("Element moved to new document.");
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log("Element attribute changed.", name, oldValue, newValue);
        this.updateStyle();
    }

    private updateStyle() {
        const style = this.shadowRoot?.querySelector("style");
        if (style) {
            style.textContent = `
                div {
                    width: ${this.getAttribute("size")}px;
                    height: ${this.getAttribute("size")}px;
                    background-color: ${this.getAttribute("color")};
                }`;
        }
    }
}

customElements.define("custom-square", Square);
