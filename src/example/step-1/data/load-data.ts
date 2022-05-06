import { Comment } from "./Comment";

export const loadData = (): Promise<Comment[]> => {
    return Promise.resolve([
        {
            author: "Brian Cranston",
            title: "Great observation",
            content: `I really like this article. It makes a very keen observation on Pinterest cardigan 
                            dreamcatcher seitan yr coloring book. Meditation brooklyn tattooed wayfarers, 
                            intelligentsia art party tacos palo santo freegan chartreuse vice. Actually food truck 
                            put a bird on it occupy sartorial, single-origin coffee tattooed master cleanse ennui 
                            celiac fanny pack twee locavore aesthetic. Plaid hammock bitters vape portland, tote 
                            bag vinyl trust fund.`,
            date: "23.03.2018",
        },
        {
            author: "Jane Doe",
            title: "Well put, indeed",
            content: `Mumblecore marfa yuccie, +1 migas XOXO sriracha vaporware kitsch woke bicycle rights. 
                            Knausgaard vice copper mug, butcher art party enamel pin vegan wayfarers meh stumptown 
                            la croix asymmetrical. Seitan kickstarter cardigan kale chips yr. Street art kitsch palo 
                            santo locavore hashtag four dollar toast cornhole cliche.`,
            date: "27.03.2018",
        },
        {
            author: "Joe Average",
            title: "Cannot agree more",
            content: `Normcore godard four dollar toast franzen DIY sriracha sartorial. VHS pok pok artisan 
                            dreamcatcher post-ironic authentic vegan 90's shoreditch health goth taxidermy mlkshk 
                            literally you probably haven't heard of them. Pitchfork iPhone yr letterpress trust fund 
                            master cleanse umami neutra skateboard. Hammock distillery bespoke disrupt sartorial 
                            kinfolk, praxis messenger bag post-ironic thundercats yuccie palo santo salvia fashion 
                            axe air plant. Schlitz post-ironic direct trade PBR&B keffiyeh. Coloring book 
                            thundercats stumptown taxidermy, actually roof party unicorn vice yuccie bicycle rights 
                            glossier waistcoat.`,
            date: "10.04.2018",
        },
    ]);
};
