import { CatInterface } from '@/config'; // Import the TopCate interface
import fetchCover_Cat from '@/components/cat/fetchCover_Cat'; // The new fetch function

const getYccCate = async (): Promise<CatInterface[]> => {
    try {
        const data = await fetchCover_Cat(); // Fetch the full data object
        const yccCovers = data.HomeCoverYCC || []; // Extract yccCovers from the fetched data
        const yccSubCat = data.CatYCC ||  [];
        const coverYCC = yccCovers.sort(() => Math.random() - 0.5);

        return yccSubCat.map((catItem: any) => ({
            id:    catItem.id,
            title: catItem.title,
            cover: coverYCC[catItem.coverIndex] || ""
        }));

 
    } catch (error) {
        console.error('Error fetching YCC categories:', error);
        return []; // Return an empty array on error
    }
};

const YccCatPromise = getYccCate();

export default YccCatPromise;
