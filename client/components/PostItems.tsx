import { Image, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles";

export const PostItems = ({ article }) => {
  const router = useRouter();
  const handlePostPress = (article) => {
    router.replace({
      pathname: `/post-details/${article.postID}`,
    });
  };
  return (
    <>
      <Pressable
        style={styles.postItemsCard}
        onPress={() => handlePostPress(article)}
      >
        <Image
          source={{
            uri: `https://uploadbucketapp.s3.amazonaws.com/${article.images[0]}`,
          }}
          style={styles.postItemsImg}
        />
        <View style={styles.postItemsTextWrapper}>
          <View>
            <Text style={styles.postItemsTextTitle}>{article.title}</Text>
            <Text style={styles.postItemsTextDescription}>
              {article.description.length > 35
                ? article.description.substring(0, 35) + "..."
                : article.description}
            </Text>
          </View>
          <Text style={styles.postItemsTextValue}>{article.value} €</Text>
        </View>
      </Pressable>
    </>
  );
};
