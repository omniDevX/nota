// getTopCate.tsx
import { CatInterface } from '@/config'; // Import the TopCate interface

const dxyCovers: string[] = [
    "https://ai8ai.github.io/abcat/dxy/dc1.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc2.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc3.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc4.JPG",
    "https://ai8ai.github.io/abcat/dxy/dc1.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc2.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc3.jpg",
    "https://ai8ai.github.io/abcat/dxy/dc4.JPG",
]
const srcdxy = dxyCovers.sort(() => Math.random() - 0.5);

const dxyCate: CatInterface[] = [
    { id: "1", title: "Amazing Start!", cover: srcdxy[0] },
    { id: "2", title: "Explore the Beauty", cover: srcdxy[1] },
    { id: "3", title: "Vibrant Colors", cover: srcdxy[2] },
    { id: "4", title: "Bold & Confident", cover: srcdxy[3] },
    { id: "5", title: "Artistic Vision", cover: srcdxy[4] },
    { id: "6", title: "Nature's Essence", cover: srcdxy[5] },
    { id: "7", title: "Graceful Elegance", cover: srcdxy[6] },
    { id: "8", title: "Iconic Moments", cover: srcdxy[7] }
];

const dxyCatPromise = Promise.resolve(dxyCate);

export default dxyCatPromise;