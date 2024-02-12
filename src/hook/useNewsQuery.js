import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../Context";

const useNewsQuery = () => {
  const [newsData, setnewsData] = useState({});
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);
  const { selectedCategory } = useContext(CategoryContext);

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
          `http://localhost:8000/v2/top-headlines?category=${categoryName}`
        );
      } else {
        response = await fetch(`http://localhost:8000/v2/top-headlines`);
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

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding news...",
    });

    if (selectedCategory) {
      fetchNewsData(selectedCategory);
    } else {
      fetchNewsData();
    }
  }, [selectedCategory]);

  return {
    newsData,
    error,
    loading,
  };
};

export default useNewsQuery;
