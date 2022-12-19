import { useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  Button,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import color from "../config/color";

function WelcomeScreen() {
  const [text, onChangeText] = useState("");
  const [password, onChangePassword] = useState();
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text style={styles.text}>Sell Your UnUsed Items</Text>
      </View>
      <View style={{ width: "100%", gap: 20 }}>
        <TextInput
          value={text}
          style={styles.input}
          placeholder="Enter your Username here"
          onChangeText={onChangeText}
        />
        <TextInput
          value={password}
          style={styles.input}
          //   keyboardType="numeric"
          placeholder="Enter your Password"
          onChangeText={onChangePassword}
        />
      </View>
      {/* <View style={styles.loginButton}> */}
      <Pressable
        style={styles.button}
        onPress={() => Alert.alert("User Details", text)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      {/* </View> */}
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  button: {
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: color.primary,
  },
  input: {
    width: "100%",
    height: 80,
    fontSize: 20,
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
  },
  logo: {
    height: 70,
    width: 70,
    borderRadius: 20,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: color.secondary,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    background: color.primary,
  },
});

export default WelcomeScreen;
