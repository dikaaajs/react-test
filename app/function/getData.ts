import axios from "axios";

export const getArtikel = async (setArticles: any, setLoading: any) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=bitcoin&pageSize=20&apiKey=26e6215963fd433cbe06caee6e1ab706`
      );
      setArticles(response.data.articles);
      setLoading(false)
    } catch (error) {
        console.log(error);
    }
  };