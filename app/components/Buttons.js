import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../constants";

export const CircleButton = ({ imgURL, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { ...props }]}
      onPress={handlePress}
    >
      <Image source={imgURL} resizeMode="contain" style={styles.button} />
    </TouchableOpacity>
  );
};
export const RecButton = ({ handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.rectButton, { ...props }]}
      onPress={handlePress}
    >
      <Text style={styles.text}>Place a bid</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    ...SHADOWS.light,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    textAlign: "center",
  },
  rectButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    minWidth: 120,
    padding: SIZES.small,
  },
  button: {
    height: 24,
    width: 24,
  },
});
