export const getImagesByCategory = async (cateId: string) => {
    // cateId = "YCCcat01"
    let jsonUrl = 'https://raw.githubusercontent.com/AIdrescom/Asian-Beauty-Yang-Chenchen-Data/refs/heads/main/imgList/imgList.json';

    if (cateId.startsWith('YCC')) {
        jsonUrl = 'https://raw.githubusercontent.com/AIdrescom/Asian-Beauty-Yang-Chenchen-Data/refs/heads/main/imgList/imgList.json';
    } else if (cateId.startsWith('SYZ')) {
        jsonUrl = 'https://raw.githubusercontent.com/AIdrdyc';
    } else if (cateId.startsWith('WXY')) {
        jsonUrl = 'https://raw.githubusercontent.com/AIdrdyc';
    } else if (cateId.startsWith('KEL')) {
        jsonUrl = 'https://raw.githubusercontent.com/AIdrdyc';
    } else if (cateId.startsWith('DXY')) {
        jsonUrl = 'https://raw.githubusercontent.com/AIdrdyc';
    } else {
        jsonUrl = 'https://raw.githubusercontent.com/AIdrescom/Asian-Beauty-Yang-Chenchen-Data/refs/heads/main/imgList/imgList.json';
    }

    try {
        const response = await fetch(jsonUrl);
        const imageCategories: { [key: string]: string[] } = await response.json();

        const srcArray = (imageCategories[cateId] || []).sort(() => Math.random() - 0.5);
        // console.log(srcArray)
        return srcArray.length ? srcArray : imageCategories['1'];
    } catch (error) {
        console.error('Failed to fetch image categories:', error);
        return [];
    }
};
