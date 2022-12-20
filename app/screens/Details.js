import { Fragment } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SHADOWS, SIZES, assets, FONTS, COLORS } from "../../constants";
import {
  CircleButton,
  DetailsBid,
  DetailsDec,
  FocusedStatus,
  RecButton,
} from "../components";
import { SubInfo } from "../components/SubInfo";

const DetailsHeader = ({ item, navigation }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item.image} resizeMode="cover" style={styles.image} />
      <CircleButton
        imgURL={assets.left}
        left={15}
        top={StatusBar.currentHeight + 10}
        handlePress={() => navigation.goBack()}
      />
      <CircleButton
        imgURL={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};
const Details = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatus
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.buttonContainer}>
        <RecButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={item.bids}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        ListHeaderComponent={() => (
          <Fragment>
            <DetailsHeader item={item} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDec item={item} />
              {item.bids.length > 0 && (
                <Text style={styles.text}>Current Bid</Text>
              )}
            </View>
          </Fragment>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 373,
  },
  buttonContainer: {
    width: "100%",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,.5)",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});

export default Details;
