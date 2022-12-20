import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, SHADOWS, SIZES, assets } from "../../constants";
import { CircleButton, RecButton } from "../components";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={item.image} resizeMode="cover" style={styles.image} />
        <CircleButton
          imgURL={assets.heart}
          handlePress={() => console.log("hi1")}
          right={10}
          top={10}
        />
      </View>
      <SubInfo />
      <View style={styles.nft}>
        <NFTTitle
          title={item.name}
          subTitle={item.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View style={[styles.price]}>
          <EthPrice price={item.price} />
          <RecButton
            handlePress={() => navigation.navigate("Details", { item })}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  card: {
    width: "100%",
    height: 250,
  },
  image: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  nft: {
    width: "100%",
    padding: SIZES.font,
  },
  price: {
    marginTop: SIZES.font,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default NFTCard;
