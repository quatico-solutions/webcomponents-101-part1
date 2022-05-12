/**
 * A custom element to display "Hello" messages.
 */

export class Hello extends HTMLElement {
    public name = "World";
    public count = 0;

    public connectedCallback() {
        const element = document
            .querySelector<HTMLTemplateElement>("#my-hello-template")
            ?.content.cloneNode(true) as HTMLElement;
        if (element) {
            const title = element.querySelector("#title");
            if (title) {
                title.innerHTML = `Hello, ${this.getAttribute("name") ?? this.name}`;
            }
            const button = element.querySelector("#button");
            if (button) {
                button.innerHTML = `Try me: ${this.getAttribute("count") ?? this.count}`;
                button.addEventListener("click", this.handleClick.bind(this));
            }

            const content = element.querySelector("#content");
            if (content) {
                while (this.childNodes.length > 0) {
                    content.appendChild(this.childNodes[0]);
                }
            }
            this.appendChild(element);
        }
    }

    private handleClick() {
        const button = this?.querySelector("#button");
        if (button) {
            button.innerHTML = `Try me: ${++this.count}`;
        }
    }
}

customElements.define("my-hello", Hello);
