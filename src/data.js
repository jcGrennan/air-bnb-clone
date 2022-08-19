// all the images for the card experiences.

import weightlifting from "./images/alana-grose-weightlifting.jpg"
import painting from "./images/adi-ware-painting.jpg"
import cello from "./images/andy-zampf-cello.jpg"
import animalCare from "./images/sehan-cybil-animal-care.jpg"
import graphicDesign from "./images/bill-ketters-graphic-design.jpg"

/* exporting the card data. Normally this would be pulled from a database in JSON format.
For the sake of this exercise I created a file and put the data into objects contained within an array,
similar to JSON so that I could map the data onto my reusuable card component.*/

const data= [
    {
        id: 1,
        title: "Weightlifting with Alana Grose",
        price: 75,
        coverImg: weightlifting,
        alt: "atlethic woman with barbell",
        stats: {
            rating: 5.0,
            reviewCount: 32,
        },
        location: "Ireland",
        openSpots: 2,
    },
    {
        id: 2,
        title: "Painting with Adi Ware",
        price: 50,
        coverImg: painting,
        alt: "man painting in studio",
        stats: {
            rating: 4.5,
            reviewCount: 43,
        },
        location: "Ireland",
        openSpots: 0,
    },
    {
        id: 3,
        title: "Cello with Andy Zampf",
        price: 35,
        coverImg: cello,
        alt: "woman playing cello",
        stats: {
            rating: 4.8,
            reviewCount: 10,
        },
        location: "Online",
        openSpots: 3,
    },
    {
        id: 4,
        title: "Animal Care with Sehan Cybil",
        price: 50,
        coverImg: animalCare,
        alt: "elephant being bottle fed",
        stats: {
            rating: 5.0,
            reviewCount: 38,
        },
        location: "Wales",
        openSpots: 0,
    },
    {
        id: 5,
        title: "Graphic Design with Bill Ketters",
        price: 40,
        coverImg: graphicDesign,
        alt: "man designing graphics on a tablet",
        stats: {
            rating: 3.7,
            reviewCount: 42,
        },
        location: "Online",
        openSpots: 5,
    },
]

export default data