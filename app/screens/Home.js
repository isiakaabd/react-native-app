import { SafeAreaView, FlatList, Text, StyleSheet, View } from "react-native";
import { COLORS, NFTData } from "../../constants";
import { FocusedStatus, HomeHeader, NFTCard } from "../components";
import { useState } from "react";
const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = (value) => {
    if (!value) setNftData(NFTCard);
    else {
      const returnData = NFTData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      if (returnData.length) setNftData(returnData);
      else {
        setNftData(NFTData);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatus backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader setValue={handleSearch} />}
            renderItem={({ item }) => <NFTCard item={item} />}
          />
        </View>
        <View style={styles.backgroundStyles}>
          <View style={styles.darkBg}></View>
          <View
            style={[styles.container, { backgroundColor: COLORS.white }]}
          ></View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  darkBg: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
});
export default Home;
