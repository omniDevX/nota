/**
 * dxyCovers.ts
 * 
 * This module generates a list of image URLs based on a given directory path and file name pattern.
 * Example Usage:
 * generateCovers("dxy/dc", 1000) will generate:
 * ["https://ai8ai.github.io/abcat/dxy/dc1.jpg", ..., "https://ai8ai.github.io/abcat/dxy/dc1000.jpg"]
 */

const BASE_URL = "https://ai8ai.github.io/";
const BASE_URL_CAT = "https://ai8ai.github.io/abcat/";
const BASE_URL_FRESH = "https://ai8ai.github.io/abfresh/";

const BASE_URL_YCC = "https://ai8ai.github.io/abycc/";
const BASE_URL_SYZ = "https://ai8ai.github.io/absyz/";
const BASE_URL_WXY = "https://ai8ai.github.io/abwxy/";
const BASE_URL_KELE = "https://ai8ai.github.io/abkele/";
const BASE_URL_XLZ = "https://ai8ai.github.io/abxlz/";
const BASE_URL_OTHERS = "https://ai8ai.github.io/abothers/";
const BASE_URL_ANRAN = "https://ai8ai.github.io/abanran/";
const BASE_URL_CCC = "https://ai8ai.github.io/abccc/";
const BASE_URL_DXY = "https://ai8ai.github.io/abdxy/";
const BASE_URL_LXL = "https://ai8ai.github.io/ablxl/";
const BASE_URL_HOLIDAY = "https://ai8ai.github.io/abholiday/";
// const BASE_URL_ = "https://ai8ai.github.io/ab/";
// const BASE_URL_ = "https://ai8ai.github.io/ab/";
// const BASE_URL_ = "https://ai8ai.github.io/ab/";
// const BASE_URL_ = "https://ai8ai.github.io/ab/";
// const BASE_URL_ = "https://ai8ai.github.io/ab/";

// export const genCatCoverList = (path: string, count: number): string[] => {
//     const images = Array.from({ length: count }, (_, i) => `${BASE_URL_CAT}${path}${i + 1}.jpg`);

//     // Fisher-Yates Shuffle (O(n) complexity)
//     for (let i = images.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [images[i], images[j]] = [images[j], images[i]];
//     }

//     return images;
// };


export const genCatCoverList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_CAT}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genFreshList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_FRESH}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genImgList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);


export const genYCCList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_YCC}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genSYZList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_SYZ}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genWXYList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_WXY}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genKeleList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_KELE}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genXLZList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_XLZ}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genOthersList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_OTHERS}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genHolidayList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_HOLIDAY}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genCCCList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_CCC}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genAnranList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_ANRAN}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genDXYList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_DXY}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);

export const genLXLList = (path: string, count: number): string[] =>
    Array.from({ length: count }, (_, i) => `${BASE_URL_LXL}${path}${i + 1}.jpg`).sort(() => Math.random() - 0.5);  
