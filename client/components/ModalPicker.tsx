import { Modal, View, Text, Pressable, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MODALLIST } from "../constants";
import { styles } from "../styles";

interface IModalPickerProps {
  isVisible: boolean;
  onClose: () => void;
  handleModal: (item: any) => void;
  selector: string;
}

export const ModalPicker = ({
  isVisible,
  onClose,
  handleModal,
  selector,
}: IModalPickerProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalPickerContainer}>
        <Pressable style={styles.modalPickerBtn} onPress={() => onClose()}>
          <AntDesign name="closecircle" size={28} color="white" />
        </Pressable>
        <FlatList
          data={MODALLIST[selector]}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                handleModal(item);
              }}
            >
              <Text style={styles.modalPickerText}>{item}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.modalPickerList}
        />
      </View>
    </Modal>
  );
};
