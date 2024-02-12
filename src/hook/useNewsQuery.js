import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../Context";
import { BASE_URL } from "../utils/config";

const useNewsQuery = () => {
  const [newsData, setnewsData] = useState({});
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);
  const { selectedCategory } = useContext(CategoryContext);
  const { searchedText } = useContext(SearchContext);

  const fetchNewsData = async (categoryName = null) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });

      let response;

      if (categoryName) {
        response = await fetch(
          `${BASE_URL}/top-headlines?category=${categoryName}`
        );
      } else {
        response = await fetch(`${BASE_URL}/top-headlines`);
      }

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setnewsData({ ...data });
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  const fetchSearchedData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });

      const response = await fetch(`${BASE_URL}/search?q=${searchedText}`);

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      console.log(data);
      setnewsData({
        articles:[...data?.result]
      })
      
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding news...",
    });

    if (selectedCategory) {
      fetchNewsData(selectedCategory);
    }   
  }, [selectedCategory]);

  useEffect(() => {
    if (searchedText) {
      fetchSearchedData()
    }else{
      fetchNewsData();
    }
  }, [searchedText]);

  return {
    newsData,
    error,
    loading,
  };
};

export default useNewsQuery;
