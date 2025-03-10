// getTopCate.tsx
import { CatInterface } from '@/config'; // Import the TopCate interface

const yccCovers: string[] = [
    "https://ai8ai.github.io/abcat/lxl/lc1.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc2.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc3.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc4.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc5.jpg",
    "https://ai8ai.github.io/abcat/lxl/lc6.jpg",
 
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