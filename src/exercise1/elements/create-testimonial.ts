import imgUrl from "../resources/super-tony.jpg";

export const createTestimonial = (): HTMLElement => {
    const result = document.createElement("div");
    result.className = "testimonial";
    result.innerHTML = `
            <figure class="testimonial__figure">
                <img class="testimonial__image" alt="Tony Quark" src=${imgUrl} />
                <div class="testimonial__text">
                    <q class="testimonial__quote">
                        Transforming everyday CEO's into superheroes. But for web components. That's what webbloqs are
                        all about.
                    </q>
                    <figcaption class="testimonial__caption">Tony Quark, CEO of Q-Industries</figcaption>
                    <a class="testimonial__link"
                        href="https://webbloqs.io/"
                        >Explore webbloqs</a
                    >
                </div>
            </figure>
        `;

    result.querySelector("figure")?.addEventListener("click", handleClick);
    result.querySelector("a")?.addEventListener("click", (evt: Event) => {
        evt.stopImmediatePropagation();
    });

    return result;
};

const handleClick = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.setProperty("--my-ds-background-color--default", `#${randomColor}`);
};
