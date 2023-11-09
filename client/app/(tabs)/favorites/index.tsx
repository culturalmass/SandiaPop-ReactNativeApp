import { Text, View } from "react-native";
import { HOC } from "../../../components";

const Favorites = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Favorites
      </Text>
    </View>
  );
};

export default HOC(Favorites);
