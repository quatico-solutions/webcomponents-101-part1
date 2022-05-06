import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import imgUrl from "../../resources/tony-and-iron.png";

import styleText from "./my-testimonial.css";

@customElement("my-testimonial")
export class Testimonial extends LitElement {
    static styles = css`
        ${unsafeCSS(styleText)},
    `;

    public render(): TemplateResult {
        return html`
            <figure @click=${this.handleClick}>
                <img alt="Tony Quark" src=${imgUrl} />
                <div>
                    <q>
                        Transforming everyday CEO's into superheroes. But for web components. That's what webbloqs are
                        all about.
                    </q>
                    <figcaption>Tony Quark, CEO of Q-Industries</figcaption>
                    <a
                        href="https://webbloqs.io/"
                        @click=${(evt: Event) => {
                            evt.stopImmediatePropagation();
                        }}
                        >Explore webbloqs</a
                    >
                </div>
            </figure>
        `;
    }

    private handleClick() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.setProperty("--my-ds-background-color--default", `#${randomColor}`);
    }
}
