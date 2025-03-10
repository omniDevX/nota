// utils/getCategoryData.ts
import { CatInterface } from '@/config';
import fetchCover_Cat from '@/components/cat/fetchCover_Cat';

const getCategoryData = async (category: string): Promise<CatInterface[]> => {
    const categoryMap: Record<string, { coverKey: string; catKey: string }> = {
        ycc_cat: { coverKey: 'CatCoverYCC', catKey: 'CatYCC' },
        syz_cat: { coverKey: 'CatCoverSYZ', catKey: 'CatSYZ' },
        wxy_cat: { coverKey: 'CatCoverWXY', catKey: 'CatWXY' },
        kele_cat: { coverKey: 'CatCoverKELE', catKey: 'CatKELE' },
        anran_cat: { coverKey: 'CatCoverANRAN', catKey: 'CatANRAN' },
        ccc_cat: { coverKey: 'CatCoverCCC', catKey: 'CatCCC' },
        xlz_cat: { coverKey: 'CatCoverXLZ', catKey: 'CatXLZ' },
        dxy_cat: { coverKey: 'CatCoverDXY', catKey: 'CatDXY' },
        lxl_cat: { coverKey: 'CatCoverLXL', catKey: 'CatLXL' },
        default: { coverKey: 'CatCoverOTHERS', catKey: 'CatOTHERS' },
    };

    const { coverKey, catKey } = categoryMap[category] || categoryMap.default;

    try {
        const data = await fetchCover_Cat();
        const covers = data[coverKey] || [];
        const subCats = data[catKey] || [];
        const shuffledCovers = covers.sort(() => Math.random() - 0.5);

        return subCats.map((catItem: any) => ({
            id: catItem.id,
            title: catItem.title,
            cover: shuffledCovers[catItem.coverIndex] || "",
        }));
    } catch (error) {
        console.error(`Error fetching category data for ${category}:`, error);
        return [];
    }
};

export default getCategoryData;
