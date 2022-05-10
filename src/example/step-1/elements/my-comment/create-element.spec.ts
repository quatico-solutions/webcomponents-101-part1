import { createElement } from "./create-element";

describe("createElement", () => {
    it("yields markup with tag, class and content", () => {
        const testObj = createElement("div", "expected", "expected content");

        expect(testObj).toMatchInlineSnapshot(`
            <div
                class="expected"
            >
                expected content
            </div>
        `);
    });

    it("yields markup with tag and class", () => {
        const testObj = createElement("span", "expected");

        expect(testObj).toMatchInlineSnapshot(`
            <span
                class="expected"
            ></span>
        `);
    });
});
