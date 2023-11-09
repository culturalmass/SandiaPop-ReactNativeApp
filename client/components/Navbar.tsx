import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "../styles";

export const Navbar = () => {
  return (
    <View style={styles.navBarContainer}>
      <View style={styles.navBarWrapper}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          placeholder="Search in SandiaPop"
          style={styles.navBarTextInput}
          multiline={false}
        />
      </View>
    </View>
  );
};
