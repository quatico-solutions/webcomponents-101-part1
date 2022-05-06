import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import styleText from "./my-comment-list.css";

@customElement("my-comment-list")
export class MyCommentList extends LitElement {
    static styles = css`
        ${unsafeCSS(styleText)})
    `;

    @property({ type: Array })
    public comments = [];

    public render(): TemplateResult {
        return html`<section id="comments-section" class="comments">
            <h2>Comments</h2>
            <slot></slot>
        </section>`;
    }
}
