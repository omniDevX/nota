import { CatInterface } from '@/config'; // Import the TopCate interface

const keleCovers: string[] = [
    "https://ai8ai.github.io/abcat/kele/kc1.jpg",
    "https://ai8ai.github.io/abcat/kele/kc2.jpg",
    "https://ai8ai.github.io/abcat/kele/kc3.jpg",
    "https://ai8ai.github.io/abcat/kele/kc4.jpg",
    "https://ai8ai.github.io/abcat/kele/kc5.jpg",
    "https://ai8ai.github.io/abcat/kele/kc6.PNG",
    "https://ai8ai.github.io/abcat/kele/kc1.jpg",
    "https://ai8ai.github.io/abcat/kele/kc2.jpg",
    "https://ai8ai.github.io/abcat/kele/kc3.jpg",
    "https://ai8ai.github.io/abcat/kele/kc4.jpg",
    "https://ai8ai.github.io/abcat/kele/kc5.jpg",
    "https://ai8ai.github.io/abcat/kele/kc6.PNG",
]
const srckele = keleCovers.sort(() => Math.random() - 0.5);

const keleCate: CatInterface[] = [
    { id: "1", title: "Amazing Start!", cover: srckele[0] },
    { id: "2", title: "Explore the Beauty", cover: srckele[1] },
    { id: "3", title: "Vibrant Colors", cover: srckele[2] },
    { id: "4", title: "Bold & Confident", cover: srckele[3] },
    { id: "5", title: "Artistic Vision", cover: srckele[4] },
    { id: "6", title: "Nature's Essence", cover: srckele[5] },
    { id: "7", title: "Graceful Elegance", cover: srckele[6] },
    { id: "8", title: "Iconic Moments", cover: srckele[7] }
];

const keleCatPromise = Promise.resolve(keleCate);

export default keleCatPromise;