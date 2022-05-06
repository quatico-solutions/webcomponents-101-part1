/**
 * A custom element to display "Hello" messages.
 */
export type HelloProps = {
    name?: string;
    count?: number;
    children?: HTMLElement[];
};

export const createHello = ({ name = "World", count = 0, children }: HelloProps): HTMLElement => {
    const result = document.createElement("div");
    result.className = "hello";
    result.innerHTML = `
        <h1 class="hello__title">Hello, ${name}!</h1>
        ${
            children
                ?.map(it => {
                    it.classList.add("hello__content");
                    return it;
                })
                .map(child => child.outerHTML)
                .join("") ?? ""
        }
        <button class="hello__button">Try me: ${count}</button>
    `;
    const button = result.querySelector("button");
    if (button) {
        button.addEventListener("click", () => {
            button.innerHTML = `Try me: ${++count}`;
        });
    }
    return result;
};
