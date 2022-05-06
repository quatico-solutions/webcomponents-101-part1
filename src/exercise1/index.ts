import { createHello, createTestimonial } from "./elements";

import "./theme.css";

const text = document.createElement("p");
text.innerText = "It's a brave new world out there. At least it better be.";

document.body.appendChild(createHello({ name: "Cowboy", children: [text] }));
document.body.appendChild(createTestimonial());
