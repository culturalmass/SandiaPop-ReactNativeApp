import { Text, View } from "react-native";
import { HOC } from "../../../components";

const Inbox = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Inbox
      </Text>
    </View>
  );
};

export default HOC(Inbox);
