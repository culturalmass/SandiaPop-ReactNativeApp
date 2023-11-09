import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform } from "react-native";
import { styles } from "../styles";

export const HOC = (Component) => () => {
  return (
    <>
      <SafeAreaView style={styles.hocContainer}>
        <StatusBar style="auto" />
        <Stack.Screen options={{ headerShown: false }} />
        <Component />
      </SafeAreaView>
    </>
  );
};
