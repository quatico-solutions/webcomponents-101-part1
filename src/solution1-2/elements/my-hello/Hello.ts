import styleText from "./my-hello.css";

/**
 * A custom element to display "Hello" messages.
 *
 * @slot - This element has a slot
 */

export class Hello extends HTMLElement {
    public name = "World";
    public count = 0;

    constructor() {
        super();
    }

    public connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <style>${styleText}</style>
            <h1>Hello, ${this.getAttribute("name") ?? this.name}!</h1>
            <slot></slot>
            <button>Try me: ${this.getAttribute("count") ?? this.count}</button>
        `;
        shadow.querySelector("button")?.addEventListener("click", this.handleClick.bind(this));
    }

    private handleClick() {
        const button = this.shadowRoot?.querySelector("button");
        if (button) {
            button.innerHTML = `Try me: ${++this.count}`;
        }
    }
}

customElements.define("my-hello", Hello);
