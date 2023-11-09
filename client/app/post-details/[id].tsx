import { useGlobalSearchParams, useRouter } from "expo-router";
import { Text, View, ScrollView, Image, Pressable, Alert } from "react-native";
import { useFetch } from "../../hooks/useFetch";
import { Ionicons } from "@expo/vector-icons";
import { HOC } from "../../components";
import { styles } from "../../styles";

const PostDetails = () => {
  const { id } = useGlobalSearchParams();
  const router = useRouter();
  const { data, isLoading, error } = useFetch(`articlesbyid/${id}`);
  if (error) {
    Alert.alert("Error", `${error}`);
  }
  return (
    <>
      {!isLoading && data.length !== 0 && (
        <View>
          <View style={styles.postDetailsBackWrapper}>
            <Pressable
              style={styles.postDetailsBackBtn}
              onPress={() => router.push("/home")}
            >
              <Ionicons name="ios-arrow-back-sharp" size={36} color="white" />
            </Pressable>
            <ScrollView horizontal={true} style={styles.postDetailsImgWrapper}>
              {data[0].images.map((image, index) => (
                <View key={index}>
                  <Image
                    style={styles.postDetailsImg}
                    source={{
                      uri: `https://uploadbucketapp.s3.amazonaws.com/${image}`,
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <Text style={styles.postDeatilsTextTitle}>{data[0].title}</Text>
          <View style={styles.postDetailsInfoContainer}>
            <View style={styles.postDetailsOwnerContainer}>
              <Text style={styles.postDetailsOwnerText}>
                {data[0].username.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={{ color: "black" }}>Owned by</Text>
              <Text
                style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
              >
                {data[0].username.charAt(0).toUpperCase() +
                  data[0].username.slice(1)}
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 50 }}>
            <Text style={{ color: "black", fontSize: 16 }}>
              {data[0].description}
            </Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
              {data[0].value} €
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default HOC(PostDetails);
