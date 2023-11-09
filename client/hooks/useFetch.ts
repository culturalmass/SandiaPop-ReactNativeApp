import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URI;

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `${baseURL + endpoint}`,
  };

  const fetchData = async () => {
    setIsLoading(true);
    if (endpoint !== "articles") {
      try {
        const response = await axios.request(options);
        const article = {
          title: response.data.title,
          category: response.data.categoryName,
          location: response.data.locationName,
          description: response.data.description,
          images: JSON.parse(response.data.images),
          userID: response.data.userID,
          username: response.data.username,
          value: response.data.value,
          postID: response.data._id,
          createAt: response.data.createAt,
        };
        setData([article]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const response = await axios.request(options);
        const parseReponse = response.data.map((post) => {
          let article = {
            title: post.title,
            category: post.categoryName,
            location: post.locationName,
            description: post.description,
            images: JSON.parse(post.images),
            userID: post.userID,
            username: post.username,
            value: post.value,
            postID: post._id,
            createAt: post.createAt,
          };
          return article;
        });
        setData(parseReponse);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, refetch };
};
