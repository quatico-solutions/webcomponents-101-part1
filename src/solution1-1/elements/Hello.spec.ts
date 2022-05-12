import { fixture } from "../../../test/helper";
import "./Hello";

describe("Hello", () => {
    it("yields markup of Hello component", async () => {
        document.head.innerHTML = `
            <template id="my-hello-template">
                <h1 id="title">Hello, World!</h1>
                <slot></slot>
                <button id="button">Try me: 0</button>
            </template>`;

        const testObj = await fixture(`<my-hello name="Expected" count="42"></my-hello>`);

        expect(testObj).toMatchInlineSnapshot(`
            <my-hello
                count="42"
                name="Expected"
            >
                <h1
                    id="title"
                >
                    Hello, Expected
                </h1>
                <slot></slot>
                <button
                    id="button"
                >
                    Try me: 42
                </button>
            </my-hello>
        `);
    });
});
