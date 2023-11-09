import { useReducer } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import appApi from "../../../api/appApi";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { HOC, ModalPicker } from "../../../components";
import { ACTIONS, EnumSelector, initialState, reducer } from "../../../hooks";
import { styles } from "../../../styles";
import { COLORS } from "../../../constants";

const Upload = () => {
  const [upload, dispatch] = useReducer(reducer, initialState);

  const onModalClose = () => {
    dispatch({
      type: ACTIONS.TOGGLE_MODAL,
      payload: { toggle: false, selector: EnumSelector.Default },
    });
  };
  const handleModal = (data: string) => {
    dispatch({
      type: ACTIONS.ADD_SELECTION,
      payload: { selection: data },
    });
    onModalClose();
  };

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 5,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }
    dispatch({ type: ACTIONS.ADD_IMAGES, payload: { images: result.assets } });
  };

  const postArticle = async () => {
    dispatch({ type: ACTIONS.ADD_ARTICLE, payload: { toggle: true } });
    let compressImages = [] as string[];
    for (let img of upload.images) {
      let compImage = await manipulateAsync(
        img.uri,
        [{ resize: { height: 480 } }],
        { compress: 0.6, format: SaveFormat.JPEG }
      );
      const imgUrl = compImage.uri;
      const urlPart = imgUrl.split(".");
      const extension = urlPart[urlPart.length - 1];
      const key = `${uuidv4()}.${extension}`;
      compressImages.push(key);
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      await fetch(
        `${process.env.EXPO_PUBLIC_BUCKET_API_URI}/uploadbucketapp/${key}`,
        { method: "PUT", body: blob }
      );
    }
    let { data } = await appApi.post("/auth/login", {
      email: "eduardo@gmail.com",
      password: "123456",
    });
    try {
      await appApi.post("/articles/post", {
        title: upload.title,
        categoryName: upload.category,
        locationName: upload.location,
        description: upload.description,
        images: JSON.stringify(compressImages),
        userID: data._id,
        username: data.username,
        value: upload.value,
      });
      dispatch({ type: ACTIONS.ADD_ARTICLE, payload: { selection: false } });
    } catch (error) {
      Alert.alert("Error", `${error}`);
    }
    dispatch({ type: ACTIONS.CLEAR_UPLOAD, payload: initialState });
  };

  return (
    <>
      <ModalPicker
        isVisible={upload.toggle}
        onClose={onModalClose}
        handleModal={handleModal}
        selector={upload.selector}
      />
      <ScrollView>
        <Text style={styles.uploadText}>Upload images [Max 5 photos]</Text>
        <Pressable
          style={{
            ...styles.uploadContainerBtn,
            height: upload.images.length !== 0 ? 75 : 150,
            width: upload.images.length !== 0 ? 75 : 150,
          }}
          onPress={() => pickImages()}
        >
          <AntDesign name="pluscircle" size={24} color={COLORS.grey} />
        </Pressable>
        <View>
          <ScrollView horizontal={true} style={styles.uploadImagesWrapper}>
            {upload.images.length !== 0 &&
              upload.images.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image.uri }}
                  style={styles.uploadImage}
                />
              ))}
          </ScrollView>
        </View>
        <Pressable
          id={EnumSelector.Category}
          style={styles.uploadBtnForSelector}
          onPress={() => {
            dispatch({
              type: ACTIONS.TOGGLE_MODAL,
              payload: { toggle: true, selector: EnumSelector.Category },
            });
          }}
        >
          <Text style={{ fontSize: 16 }}>
            {upload.category !== "" ? upload.category : "Category"}
          </Text>
          <AntDesign
            id={EnumSelector.Category}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable
          id={EnumSelector.Location}
          style={styles.uploadBtnForSelector}
          onPress={() =>
            dispatch({
              type: ACTIONS.TOGGLE_MODAL,
              payload: { toggle: true, selector: EnumSelector.Location },
            })
          }
        >
          <Text style={{ fontSize: 16 }}>
            {upload.location !== "" ? upload.location : "Location"}
          </Text>
          <AntDesign
            id={EnumSelector.Location}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
        <View>
          <TextInput
            placeholder="Title"
            value={upload.title}
            onChangeText={(text) => {
              dispatch({
                type: ACTIONS.ADD_FIELD,
                payload: { selector: EnumSelector.Title, text: text },
              });
            }}
            style={styles.uploadTextInputs}
          />
          <TextInput
            placeholder="Description"
            multiline={true}
            numberOfLines={3}
            value={upload.description}
            onChangeText={(text) => {
              dispatch({
                type: ACTIONS.ADD_FIELD,
                payload: { selector: EnumSelector.Description, text: text },
              });
            }}
            style={styles.uploadTextInputs}
          />
          <TextInput
            placeholder="Value"
            inputMode="numeric"
            value={upload.value}
            onChangeText={(text) => {
              dispatch({
                type: ACTIONS.ADD_FIELD,
                payload: { selector: EnumSelector.Value, text: text },
              });
            }}
            style={styles.uploadTextInputValue}
          />
          <View style={{ display: "flex", alignItems: "center" }}>
            <Pressable style={styles.uploadBtn} onPress={() => postArticle()}>
              <Text style={styles.uploadBtnText}>
                {upload.isUploading ? "Posting..." : "Upload Article"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HOC(Upload);
