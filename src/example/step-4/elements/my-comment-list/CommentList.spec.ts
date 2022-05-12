import { html } from "lit";
import { fixture } from "../../../../../test/helper";
import "../my-comment";
import "./CommentList";

describe("CommentList", () => {
    it("yields markup of <my-comment-list>", async () => {
        const testObj = await fixture(
            html`<my-comment-list>
                <my-comment
                    .date="Expected date"
                    .title="Expected title"
                    .author="Expected author"
                    .content="Expected content"
                ></my-comment
            ></my-comment-list>`
        );

        expect(testObj).toMatchInlineSnapshot(`
            <my-comment-list>
                #shadowRoot
                    <section
                        class="comments"
                        id="comments-section"
                    >
                        <h2>
                            Comments
                        </h2>
                        <slot></slot>
                    </section>
                <my-comment
                    .author="Expected author"
                    .content="Expected content"
                    .date="Expected date"
                    .title="Expected title"
                >
                    #shadowRoot
                        <div
                            class="header"
                        >
                            <span
                                class="date"
                                id="date"
                            ></span>
                            <span
                                class="title"
                                id="title"
                            ></span>
                            <span
                                class="author"
                                id="author"
                            >
                                by 
                            </span>
                        </div>
                        <div
                            class="content"
                            id="content"
                        ></div>
                </my-comment>
            </my-comment-list>
        `);
    });
});
