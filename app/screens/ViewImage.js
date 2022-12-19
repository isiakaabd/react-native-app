import { Image, StyleSheet, View } from "react-native";
import color from "../config/color";

function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/image.jpg")}
      />
    </View>
  );
}

export default ViewImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: color.primary,
    top: 50,
    left: 50,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    right: 50,
    position: "absolute",
    top: 50,
    backgroundColor: color.secondary,
  },
});
