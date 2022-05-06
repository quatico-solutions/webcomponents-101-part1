import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import styleText from "./my-hello.css";

/**
 * A custom element to display "Hello" messages.
 *
 * @slot - This element has a slot
 */
@customElement("my-hello")
export class Hello extends LitElement {
    static styles = css`
        ${unsafeCSS(styleText)}
    `;

    @property()
    public name = "World";

    @property({ type: Number })
    public count = 0;

    public render(): TemplateResult {
        return html`
            <h1>Hello, ${this.name}!</h1>
            <slot></slot>
            <button @click=${this.onClick}>Try me: ${this.count}</button>
        `;
    }

    private onClick() {
        this.count++;
    }
}
