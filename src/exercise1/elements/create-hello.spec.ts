import { createHello } from "./create-hello";

describe("createHello", () => {
    it("yields hello component markup", () => {
        const child = document.createElement("p");
        child.innerHTML = "Isn't that great?!";

        const actual = createHello({ name: "expected", count: 42, children: [child] });

        expect(actual).toMatchInlineSnapshot(`
            <div
                class="hello"
            >
                <h1
                    class="hello__title"
                >
                    Hello, expected!
                </h1>
                <p
                    class="hello__content"
                >
                    Isn't that great?!
                </p>
                <button
                    class="hello__button"
                >
                    Try me: 42
                </button>
            </div>
        `);
    });
});
