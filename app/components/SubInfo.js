import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SIZES, assets, COLORS, SHADOWS, FONTS } from "../../constants";

export const People = () => {
  return (
    <View style={styles.people}>
      {[assets.person02, assets.person03, assets.person04].map(
        (item, index) => (
          <ImageCmp data={item} index={index} key={index} />
        )
      )}
    </View>
  );
};
export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={[styles.title, { fontSize: titleSize }]}>{title}</Text>
      <Text style={[styles.subTitle, { fontSize: subTitleSize }]}>
        {subTitle}
      </Text>
    </View>
  );
};
export const EthPrice = ({ price }) => {
  return (
    <View style={styles.price}>
      <Image source={assets.eth} resizeMode="contain" style={styles.ethPrice} />
      <Text style={styles.ethPriceText}>{price}</Text>
    </View>
  );
};
export const ImageCmp = ({ data, index }) => {
  return (
    <Image
      source={data}
      resizeMode="contain"
      style={[styles.image, { marginLeft: index === 0 ? 0 : -SIZES.font }]}
    />
  );
};

export const EndDate = () => {
  return (
    <View
      style={[styles.date, { ...SHADOWS.light, elevation: 1, maxWidth: "50%" }]}
    >
      <Text style={styles.text}>Ending In</Text>
      <Text
        style={[
          styles.text,
          { fontSize: SIZES.medium, fontFamily: FONTS.semiBold },
        ]}
      >
        12h 30m
      </Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View style={styles.sub}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  sub: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
  },
  ethPrice: {
    height: 20,
    width: 20,
    marginRight: 2,
  },
  people: {
    flexDirection: "row",
  },
  date: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  ethPriceText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
  title: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  subTitle: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
  },
});
