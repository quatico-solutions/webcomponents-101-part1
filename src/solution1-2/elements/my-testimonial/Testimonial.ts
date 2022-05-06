import imgUrl from "../../resources/super-tony.jpg";
import styleText from "./my-testimonial.css";

export class Testimonial extends HTMLElement {
    constructor() {
        super();
    }

    public connectedCallback(): void {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <style>${styleText}</style>
            <figure>
                <img alt="Tony Quark" src=${imgUrl} />
                <div>
                    <q>
                        Transforming everyday CEO's into superheroes. But for web components. That's what webbloqs are
                        all about.
                    </q>
                    <figcaption>Tony Quark, CEO of Q-Industries</figcaption>
                    <a
                        href="https://webbloqs.io/"
                        >Explore webbloqs</a
                    >
                </div>
            </figure>
        `;

        shadow.querySelector("figure")?.addEventListener("click", this.handleClick.bind(this));
        shadow.querySelector("a")?.addEventListener("click", (evt: Event) => {
            evt.stopImmediatePropagation();
        });
    }

    private handleClick() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.setProperty("--my-ds-background-color--default", `#${randomColor}`);
    }
}

customElements.define("my-testimonial", Testimonial);
