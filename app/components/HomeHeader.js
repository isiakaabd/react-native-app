import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { COLORS, assets, SIZES, FONTS } from "../../constants";

const HomeHeader = ({ value, setValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={assets.logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.leftItem}>
          <Image
            source={assets.person01}
            style={styles.image}
            resizeMode="contain"
          />
          <Image
            source={assets.badge}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={styles.text}>Hello Nafisat 🙋🏼‍♂️</Text>
        <Text style={[styles.text, styles.text2]}>
          Let's find a masterpiece
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.inputContainer}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.searchIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Search NFTs"
            value={value}
            onChangeText={setValue}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  input: {
    flex: 1,
    borderColor: "transparent",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.font,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
  text2: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    marginTop: SIZES.base / 2,
  },

  icon: {
    position: "absolute",
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  leftItem: {
    height: 45,
    width: 45,
  },
  logo: {
    width: 90,
    height: 25,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HomeHeader;
