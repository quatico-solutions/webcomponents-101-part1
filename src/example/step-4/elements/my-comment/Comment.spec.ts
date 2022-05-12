import { html } from "lit";
import { fixture } from "../../../../../test/helper";
import "./Comment";

describe("Comment", () => {
    it("yields markup of <my-comment>", async () => {
        const testObj = await fixture(
            html`<my-comment
                title="Expected title"
                date="Expected date"
                author="Expected author"
                content="Expected content"
            ></my-comment>`
        );

        expect(testObj).toMatchInlineSnapshot(`
            <my-comment
                author="Expected author"
                content="Expected content"
                date="Expected date"
                title="Expected title"
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
                            by 
                            Expected author
                        </span>
                    </div>
                    <div
                        class="content"
                        id="content"
                    >
                        Expected content
                    </div>
            </my-comment>
        `);
    });
});
