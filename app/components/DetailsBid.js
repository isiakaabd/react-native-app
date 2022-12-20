import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={bid.image} resizeMode="contain" />
      <View>
        <Text style={styles.text}>Bid placed by</Text>
        <Text style={styles.text2}>{bid.date}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
  image: {
    width: 48,
    height: 48,
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  text2: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
  },
});
export default DetailsBid;
