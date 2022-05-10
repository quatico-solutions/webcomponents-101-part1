import { fixture } from "../../../../../test/helper";
import "./Comment";

describe("Comment", () => {
    it("yields markup of <my-comment>", async () => {
        document.head.innerHTML = `
            <template id="comment-template">
                <div class="header">
                    <span id="date" class="date"></span>
                    <span id="title" class="title"></span>
                    <span id="author" class="author"></span>
                </div>
                <div id="content" class="content"></div>
            </template>`;

        const testObj = await fixture(
            `<my-comment 
                data-title="Expected title" 
                data-date="Expected date" 
                data-author="Expected author" 
                data-content="Expected content"></my-comment>`
        );

        expect(testObj).toMatchInlineSnapshot(`
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
        `);
    });
});
