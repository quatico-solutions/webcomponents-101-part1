import { createComment } from "./create-comment";

describe("createComment", () => {
    it("yield comment markup with date, title, author and content", () => {
        const testObj = createComment({
            date: "2020-01-01",
            title: "Expected title",
            author: "Expected author",
            content: "Expected content",
        });

        expect(testObj).toMatchInlineSnapshot(`
            <div
                class="comment"
            >
                <div
                    class="header"
                >
                    <div
                        class="date"
                    >
                        2020-01-01
                    </div>
                    <span
                        class="title"
                    >
                        Expected title
                    </span>
                    <span
                        class="author"
                    >
                         by Expected author
                    </span>
                </div>
                <div
                    class="content"
                >
                    Expected content
                </div>
            </div>
        `);
    });
});
