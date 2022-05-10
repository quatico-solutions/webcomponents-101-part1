import { render, TemplateResult } from "lit";

export const fixture = async <T extends HTMLElement>(element: TemplateResult | string): Promise<HTMLElement> => {
    const container = document.createElement("div");
    if (typeof element === "string") {
        container.innerHTML = element;
    } else {
        render(element, container);
    }
    document.body.appendChild(container);
    await new Promise(resolve => setTimeout(resolve, 0));
    return (await container).firstElementChild as T;
};
