import "expo-router/entry";
import { useRouter, Redirect } from "expo-router";

const App = () => {
  const router = useRouter();
  return <Redirect href={"/home"} />;
};

export default App;
