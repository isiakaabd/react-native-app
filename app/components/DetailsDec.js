import { View, StyleSheet, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { EthPrice, NFTTitle } from "./SubInfo";
import { useState } from "react";

const DetailsDec = ({ item }) => {
  const [state, setState] = useState(item.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <NFTTitle
          title={item.name}
          subTitle={item.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={item.price} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Description</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={[
              styles.text,
              {
                fontFamily: FONTS.regular,
                color: COLORS.secondary,
                lineHeight: SIZES.large,
              },
            ]}
          >
            {state}
            {!readMore && "..."}
            <Text
              style={[
                styles.text,
                {
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                  lineHeight: SIZES.large,
                  fontSize: SIZES.small,
                },
              ]}
              onPress={() => {
                if (!readMore) {
                  setState(item.description);
                  setReadMore(true);
                } else {
                  setState(item.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {!readMore ? "Read More" : "Show Less"}
            </Text>
          </Text>
        </View>
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
  },
  textContainer: {
    marginVertical: SIZES.extraLarge * 1.5,
  },
  text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});

export default DetailsDec;
