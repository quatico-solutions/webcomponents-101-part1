import { fixture } from "../../../../../test/helper";
import "../my-comment";
import "./CommentList";

describe("CommentList", () => {
    it("yields markup of <my-comment-list>", async () => {
        document.head.innerHTML = `
            <template id="comment-template">
                <div class="header">
                    <span id="date" class="date"></span>
                    <span id="title" class="title"></span>
                    <span id="author" class="author"></span>
                </div>
                <div id="content" class="content"></div>
            </template>
            <template id="comment-list-template">
                <section id="comments-section" class="comments">
                    <h2>Comments</h2>
                </section>
            </template>
        `;

        const testObj = await fixture(
            `<my-comment-list data-comments='${JSON.stringify([
                {
                    author: "Expected author",
                    content: "Expected content",
                    date: "Expected date",
                    title: "Expected title",
                },
            ])}'></my-comment-list>`
        );

        expect(testObj).toMatchInlineSnapshot(`
            <my-comment-list
                data-comments="[{"author":"Expected author","content":"Expected content","date":"Expected date","title":"Expected title"}]"
            >
                <section
                    class="comments"
                    id="comments-section"
                >
                    <h2>
                        Comments
                    </h2>
                    <my-comment
                        data-author="Expected author"
                        data-content="Expected content"
                        data-date="Expected date"
                        data-title="Expected title"
                    >
                        #shadowRoot
                            <div
                                class="header"
                            >
                                <span
                                    class="date"
                                    id="date"
                                >
                                    Expected date
                                </span>
                                <span
                                    class="title"
                                    id="title"
                                >
                                    Expected title
                                </span>
                                <span
                                    class="author"
                                    id="author"
                                >
                                    by Expected author
                                </span>
                            </div>
                            <div
                                class="content"
                                id="content"
                            >
                                Expected content
                            </div>
                    </my-comment>
                </section>
            </my-comment-list>
        `);
    });
});
