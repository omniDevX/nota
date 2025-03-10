// getTopCate.tsx
const fetchCover_Cat = async (): Promise<any> => {
    try {
      const response = await fetch('https://ai8ai.github.io/abcat/ABCatList_Cover.json');
      const data = await response.json();
      return data; // Return the full data object (e.g., { yccCovers, xlzCovers })
    } catch (error) {
      console.error('1001.Error fetching catelist:', error);
      return {}; // Return an empty object on error
    }
  };
  
  export default fetchCover_Cat;
  