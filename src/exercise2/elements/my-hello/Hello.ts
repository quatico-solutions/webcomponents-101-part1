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
        const element = document
            .querySelector<HTMLTemplateElement>("#my-hello-template")
            ?.content.cloneNode(true) as HTMLElement;
        if (element) {
            const shadow = this.attachShadow({ mode: "open" });

            const style = document.createElement("style");
            style.innerHTML = styleText;

            const title = element.querySelector("#title");
            if (title) {
                title.innerHTML = `Hello, ${this.getAttribute("name") ?? this.name}`;
            }
            const button = element.querySelector("#button");
            if (button) {
                button.innerHTML = `Try me: ${this.getAttribute("count") ?? this.count}`;
                button.addEventListener("click", this.handleClick.bind(this));
            }

            shadow.appendChild(style);
            shadow.appendChild(element);
        }
    }

    private handleClick() {
        const button = this.shadowRoot?.querySelector("button");
        if (button) {
            button.innerHTML = `Try me: ${++this.count}`;
        }
    }
}

customElements.define("my-hello", Hello);
