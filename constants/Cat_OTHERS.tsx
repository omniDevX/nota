// getTopCate.tsx
import { CatInterface } from '@/config'; // Import the TopCate interface

const yccCovers: string[] = [
    "https://ai8ai.github.io/abcat/others/oc1.jpg",
    "https://ai8ai.github.io/abcat/others/oc2.jpg",
    "https://ai8ai.github.io/abcat/others/oc3.jpg",
    "https://ai8ai.github.io/abcat/others/oc4.jpg",
    "https://ai8ai.github.io/abcat/others/oc5.jpg",
    "https://ai8ai.github.io/abcat/others/oc6.jpg",
    "https://ai8ai.github.io/abcat/others/oc7.jpg",
    "https://ai8ai.github.io/abcat/others/oc8.jpg",
    "https://ai8ai.github.io/abcat/others/oc9.PNG",
]
const srcYCC = yccCovers.sort(() => Math.random() - 0.5);

const yccCate: CatInterface[] = [
    { id: "YCCcat01", title: "Amazing Start!", cover: srcYCC[0] },
    { id: "YCCcat02", title: "Explore the Beauty", cover: srcYCC[1] },
    { id: "YCCcat03", title: "Vibrant Colors", cover: srcYCC[2] },
    { id: "YCCcat04", title: "Bold & Confident", cover: srcYCC[3] },
    { id: "YCCcat05", title: "Artistic Vision", cover: srcYCC[4] },
    { id: "YCCcat06", title: "Nature's Essence", cover: srcYCC[5] },
    { id: "YCCcat07", title: "Graceful Elegance", cover: srcYCC[6] },
    { id: "YCCcat08", title: "Iconic Moments", cover: srcYCC[7] }
];

const YccCatPromise = Promise.resolve(yccCate);

export default YccCatPromise;