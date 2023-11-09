import { Alert, FlatList, RefreshControl } from "react-native";
import { useFetch } from "../../../hooks/useFetch";
import { HOC, Navbar, PostItems } from "../../../components";

const Home = () => {
  const { data, isLoading, error, refetch } = useFetch("articles");
  if (error) {
    Alert.alert("Error", `${error}`);
  }
  return (
    <>
      <Navbar />
      {!isLoading && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PostItems key={`article-${item.postID}`} article={item} />
          )}
          keyExtractor={(data) => data.postID}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
        />
      )}
    </>
  );
};

export default HOC(Home);
