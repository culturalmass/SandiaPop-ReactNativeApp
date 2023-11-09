import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../constants";

export const styles = StyleSheet.create({
  //_________APP TABS _LAYOUTC________________
  _layoutText: { fontWeight: "bold", fontSize: 14 },
  //_________Components HOC________________
  hocContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  //_________Components NAVBAR________________
  navBarContainer: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 6,
  },
  navBarWrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    margin: 10,
    padding: 10,
    width: 300,
    borderRadius: 15,
  },
  navBarTextInput: {
    width: "100%",
    marginLeft: 5,
  },
  //_________Components ModalPicker________________
  modalPickerContainer: {
    height: "25%",
    width: "95%",
    backgroundColor: COLORS.grey,
    borderRadius: 18,
    position: "absolute",
    bottom: "25%",
    left: "2.5%",
  },
  modalPickerBtn: {
    height: "25%",
    width: "95%",
    position: "absolute",
    top: "5%",
    left: "90%",
    zIndex: 50,
  },
  modalPickerList: {
    marginTop: "5%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    minWidth: 500,
    gap: 10,
  },
  modalPickerText: {
    fontSize: 18,
    marginLeft: 40,
    fontWeight: "bold",
    color: "white",
  },
  //_________Components PostItems________________
  postItemsCard: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: COLORS.grey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  postItemsImg: {
    height: 100,
    width: 100,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 20,
    marginVertical: 10,
  },
  postItemsTextWrapper: { justifyContent: "space-around", paddingVertical: 10 },
  postItemsTextTitle: { fontWeight: "bold" },
  postItemsTextDescription: { color: COLORS.grey },
  postItemsTextValue: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  //_________APP SCREEN Upload________________
  uploadText: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
  },
  uploadContainerBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 30,
    backgroundColor: "white",
  },
  uploadImagesWrapper: {
    display: "flex",
    gap: 15,
  },
  uploadImage: {
    height: 100,
    width: 100,
    margin: 3,
  },
  uploadBtnForSelector: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },
  uploadTextInputs: {
    fontSize: 16,
    display: "flex",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    padding: 5,
    margin: 10,
  },
  uploadTextInputValue: {
    fontSize: 16,
    display: "flex",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    padding: 5,
    margin: 10,
    width: "50%",
  },
  uploadBtn: {
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 50,
    width: "80%",
    shadowRadius: 6,
    shadowColor: COLORS.grey,
    elevation: 7,
  },
  uploadBtnText: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  //_________APP SCREEN post details________________
  postDetailsBackWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  postDetailsBackBtn: {
    position: "absolute",
    height: 320,
    zIndex: 10,
    marginLeft: 10,
  },
  postDetailsImgWrapper: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    minHeight: 320,
  },
  postDetailsImg: {
    height: 320,
    width: 380,
    marginRight: 10,
  },
  postDeatilsTextTitle: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    color: "black",
  },
  postDetailsInfoContainer: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#6B6B6B",
  },
  postDetailsOwnerContainer: {
    margin: 10,
    backgroundColor: "#6B6B6B",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  postDetailsOwnerText: {
    fontWeight: "bold",
    fontSize: 25,
    color: COLORS.secondary,
  },
});
