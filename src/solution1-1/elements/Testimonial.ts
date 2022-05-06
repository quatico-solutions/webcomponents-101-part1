export class Testimonial extends HTMLElement {
    constructor() {
        super();
    }

    public connectedCallback(): void {
        const element = document
            .querySelector<HTMLTemplateElement>("#my-testimonial-template")
            ?.content.cloneNode(true);

        if (element) {
            this.appendChild(element);
            this.querySelector("#figure")?.addEventListener("click", this.handleClick.bind(this));
            this.querySelector("#link")?.addEventListener("click", (evt: Event) => {
                evt.stopImmediatePropagation();
            });
        }
    }

    private handleClick() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.setProperty("--my-ds-background-color--default", `#${randomColor}`);
    }
}

customElements.define("my-testimonial", Testimonial);
