// paths/getAfcCate.ts
import { CatInterface } from '@/config';

let afcCategories: CatInterface[] = []; // Storage for fetched AFC categories

async function fetchAfcCateCover(): Promise<CatInterface[]> {
    try {
        const response = await fetch('https://raw.githubusercontent.com/AIdrescom/Asian-Beauty-Yang-Chenchen-Data/refs/heads/main/categoryList/afccat.json');

        if (!response.ok) {
            throw new Error('Failed to fetch AFC category covers');
        }

        const afcCategoryCover: string[] = await response.json();
        const srcArray = afcCategoryCover.sort(() => Math.random() - 0.5);

        afcCategories = [
            { id: "1", title: "AFC Model 1", cover: srcArray[0] },
            { id: "2", title: "AFC Model 2", cover: srcArray[1] },
            { id: "3", title: "AFC Model 3", cover: srcArray[2] },
            { id: "4", title: "AFC Model 4", cover: srcArray[3] },
            { id: "5", title: "AFC Model 5", cover: srcArray[4] },
            { id: "6", title: "AFC Model 6", cover: srcArray[5] },
            { id: "7", title: "AFC Model 7", cover: srcArray[6] },
            { id: "8", title: "AFC Model 8", cover: srcArray[7] }
        ];

        console.log('--- AfcCat (from fetch):', afcCategories);
        return afcCategories;
    } catch (error) {
        console.error('Error fetching AFC category covers:', error);

        // Fallback AFC data
        afcCategories = [
            { id: "1", title: "AFC Backup 1", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/afc_1.jpg" },
            { id: "2", title: "AFC Backup 2", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/afc_2.jpg" },
            { id: "3", title: "AFC Backup 3", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/afc_3.jpg" },
            { id: "4", title: "AFC Backup 4", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/afc_4.jpg" },
            { id: "5", title: "AFC Backup 5", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/afc_5.jpg" },
            { id: "6", title: "AFC Backup 6", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/afc_6.jpg" }
        ];

        console.log('AfcCat (fallback):', afcCategories);
        return afcCategories;
    }
}

// Export a Promise that resolves to afcCategories
const AfcCatPromise = fetchAfcCateCover();

export default AfcCatPromise;
