import { StatusBar } from "react-native";

import { useIsFocused } from "@react-navigation/native";

const FocusedStatus = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatus;
