import { NewsContext } from "../Context";
import { useNewsQuery } from "../hook";

const NewsProvider = ({ children }) => {
    const { newsData, error, loading } = useNewsQuery();
    return (
        <NewsContext.Provider value={{ newsData, error, loading }}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
