import { fixture } from "../../../../test/helper";
import "./Testimonial";

describe("Hello", () => {
    it("yields markup of Testimonial component", async () => {
        const testObj = await fixture(`<my-testimonial></my-testimonial>`);

        expect(testObj).toMatchInlineSnapshot(`
            <my-testimonial>
                #shadowRoot
                    <figure>
                        <img
                            alt="Tony Quark"
                            object]=""
                            src="[object"
                         />
                        <div>
                            <q>
                                
                                    Transforming everyday CEO's into superheroes. But for web components. That's what webbloqs are
                                    all about.
                                
                            </q>
                            <figcaption>
                                Tony Quark, CEO of Q-Industries
                            </figcaption>
                            <a
                                href="https://webbloqs.io/"
                            >
                                Explore webbloqs
                            </a>
                        </div>
                    </figure>
            </my-testimonial>
        `);
    });
});
