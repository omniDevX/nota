// getTopCate.tsx
import { CatInterface } from '@/config'; // Import the TopCate interface

const covers: string[] = [
    "https://ai8ai.github.io/abcat/wxy/wc1.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc2.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc3.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc4.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc5.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc6.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc7.jpg",
    "https://ai8ai.github.io/abcat/wxy/wc8.jpg",
]
const srcCover = covers.sort(() => Math.random() - 0.5);

const wxyCat: CatInterface[] = [
    { id: "WXYcat01", title: "Office", cover: srcCover[0] },
    { id: "WXYcat02", title: "Lace", cover: srcCover[1] },
    { id: "WXYcat03", title: "Vibrant Colors", cover: srcCover[2] },
    { id: "WXYcat04", title: "Bold & Confident", cover: srcCover[3] },
    { id: "WXYcat05", title: "Artistic Vision", cover: srcCover[4] },
    { id: "WXYcat06", title: "Nature's Essence", cover: srcCover[5] },
    { id: "WXYcat07", title: "Graceful Elegance", cover: srcCover[6] },
    { id: "WXYcat08", title: "Iconic Moments", cover: srcCover[7] }
];

const WXYCatPromise = Promise.resolve(wxyCat);

export default WXYCatPromise;