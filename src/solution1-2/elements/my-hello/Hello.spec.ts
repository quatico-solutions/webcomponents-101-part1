import { fixture } from "../../../../test/helper";
import "./Hello";

describe("Hello", () => {
    it("yields markup of Hello component", async () => {
        const testObj = await fixture(`<my-hello name="Expected" count="42"></my-hello>`);

        expect(testObj).toMatchInlineSnapshot(`
            <my-hello
                count="42"
                name="Expected"
            >
                #shadowRoot
                    <h1>
                        Hello, Expected!
                    </h1>
                    <slot></slot>
                    <button>
                        Try me: 42
                    </button>
            </my-hello>
        `);
    });
});
