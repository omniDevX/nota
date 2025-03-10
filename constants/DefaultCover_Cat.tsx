// getTopCate.tsx
import { CatInterface } from '@/config'; // Import the TopCate interface

const defaultCovers: string[] = [
    "https://ai8ai.github.io/abcat/default/yc1.jpg",
    "https://ai8ai.github.io/abcat/default/yc2.jpg",
    "https://ai8ai.github.io/abcat/default/yc3.jpg",
    "https://ai8ai.github.io/abcat/default/yc4.jpg",
    "https://ai8ai.github.io/abcat/default/yc5.jpg",
    "https://ai8ai.github.io/abcat/default/yc6.jpg",
    "https://ai8ai.github.io/abcat/default/yc7.jpg",
    "https://ai8ai.github.io/abcat/default/yc8.jpg",
    "https://ai8ai.github.io/abcat/default/yc9.jpg",
]
const srcDefault = defaultCovers.sort(() => Math.random() - 0.5);

const defaultCate: CatInterface[] = [
    { id: "defaultcat01", title: "Amazing Start!", cover: srcDefault[0] },
    { id: "defaultcat02", title: "Explore the Beauty", cover: srcDefault[1] },
    { id: "defaultcat03", title: "Vibrant Colors", cover: srcDefault[2] },
    { id: "defaultcat04", title: "Bold & Confident", cover: srcDefault[3] },
    { id: "defaultcat05", title: "Artistic Vision", cover: srcDefault[4] },
    { id: "defaultcat06", title: "Nature's Essence", cover: srcDefault[5] },
    { id: "defaultcat07", title: "Graceful Elegance", cover: srcDefault[6] },
    { id: "defaultcat08", title: "Iconic Moments", cover: srcDefault[7] }
];

const defaultCatPromise = Promise.resolve(defaultCate);

export default defaultCatPromise;