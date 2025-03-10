// getTopCate.tsx
import { CatInterface } from '@/config'; // Import the TopCate interface

const yccCovers: string[] = [
    "https://ai8ai.github.io/abcat/syz/sc1.png",
    "https://ai8ai.github.io/abcat/syz/sc2.jpg",
    "https://ai8ai.github.io/abcat/syz/sc3.jpg",
    "https://ai8ai.github.io/abcat/syz/sc4.jpg",
    "https://ai8ai.github.io/abcat/syz/sc5.png",
    "https://ai8ai.github.io/abcat/syz/sc6.JPG",
    "https://ai8ai.github.io/abcat/syz/sc7.jpg",
    "https://ai8ai.github.io/abcat/syz/sc8.jpg",
    "https://ai8ai.github.io/abcat/syz/sc9.webp",
    
]
const srcYCC = yccCovers.sort(() => Math.random() - 0.5);

const yccCate: CatInterface[] = [
    { id: "1", title: "Amazing Start!", cover: srcYCC[0] },
    { id: "2", title: "Explore the Beauty", cover: srcYCC[1] },
    { id: "3", title: "Vibrant Colors", cover: srcYCC[2] },
    { id: "4", title: "Bold & Confident", cover: srcYCC[3] },
    { id: "5", title: "Artistic Vision", cover: srcYCC[4] },
    { id: "6", title: "Nature's Essence", cover: srcYCC[5] },
    { id: "7", title: "Graceful Elegance", cover: srcYCC[6] },
    { id: "8", title: "Iconic Moments", cover: srcYCC[7] }
];

const YccCatPromise = Promise.resolve(yccCate);

export default YccCatPromise;