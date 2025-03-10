// getTopCate.tsx
import { CatInterface } from '@/config'; // Import the TopCate interface
let topCategories: CatInterface[] = []; // Rename the variable to avoid conflict

async function fetchTopCateCover(): Promise<CatInterface[]> {
    try {
        const response = await fetch('https://raw.githubusercontent.com/AIdrescom/Asian-Beauty-Yang-Chenchen-Data/refs/heads/main/categoryList/ycccat.json');

        if (!response.ok) {
            throw new Error('Failed to fetch category covers');
        }

        const yccCategoryCover: string[] = await response.json();
        const srcArray = yccCategoryCover.sort(() => Math.random() - 0.5);

        topCategories = [
            { id: "1", title: "Yang Chenchen \n Yome Sugar 杨晨晨", cover: srcArray[0] },
            { id: "2", title: "Son Yoon Joo \n 손윤주 孙允珠", cover: srcArray[1] },
            { id: "3", title: "Wang Xinyao \n Yanni 王馨瑶", cover: srcArray[2] },
            { id: "4", title: "Kele Vicky", cover: srcArray[3] },
            { id: "5", title: "Anran 安然", cover: srcArray[4] },
            { id: "6", title: "Cheng Chengcheng 程程程", cover: srcArray[5] },
            { id: "7", title: "Xu Lizhi Booty \n 徐莉芝", cover: srcArray[6] },
            { id: "8", title: "Du Xiaoyu 杜小雨", cover: srcArray[7] },
            { id: "9", title: "Lin Xinglan 林星阑", cover: srcArray[7] },
            { id: "10",title: "and More...", cover: srcArray[7] },
        ];

        console.log('--- YccCat (from fetch):');
        return topCategories; // Return the populated array
    } catch (error) {
        console.error('Error fetching category covers:', error);

        topCategories = [
            { id: "1", title: "Chenchen New!", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "2", title: "pure & provocative", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_10.jpg" },
            { id: "3", title: "electric moment", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_11.jpg" },
            { id: "4", title: "beautiful & sassy", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_12.jpg" },
            { id: "5", title: "graceful elegance", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_13.jpg" },
            { id: "6", title: "alluring", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_14.jpg" },
            { id: "7", title: "full of charm", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_15.jpg" },
            { id: "8", title: "professional Yome", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_16.jpg" }
        ];

        console.log('YccCat (fallback):', topCategories);
        return topCategories; // Return the fallback data
    }
}

// Export a Promise that resolves to topCategories
const YccCatPromise = fetchTopCateCover();

export default YccCatPromise;