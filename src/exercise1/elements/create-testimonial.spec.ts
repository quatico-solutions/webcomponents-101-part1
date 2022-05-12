import { createTestimonial } from "./create-testimonial";

describe("createTestimonial", () => {
    it("yields hello component markup", () => {
        const actual = createTestimonial();

        expect(actual).toMatchInlineSnapshot(`
            <div
                class="testimonial"
            >
                <figure
                    class="testimonial__figure"
                >
                    <img
                        alt="Tony Quark"
                        class="testimonial__image"
                        object]=""
                        src="[object"
                     />
                    <div
                        class="testimonial__text"
                    >
                        <q
                            class="testimonial__quote"
                        >
                            
                                    Transforming everyday CEO's into superheroes. But for web components. That's what webbloqs are
                                    all about.
                                
                        </q>
                        <figcaption
                            class="testimonial__caption"
                        >
                            Tony Quark, CEO of Q-Industries
                        </figcaption>
                        <a
                            class="testimonial__link"
                            href="https://webbloqs.io/"
                        >
                            Explore webbloqs
                        </a>
                    </div>
                </figure>
            </div>
        `);
    });
});
