import base from "./src/modules/base_module";
import Home from "./src/pages/Home";
import Event from "./src/pages/Event";
import History from "./src/pages/History";
import React from "react";
import { Text } from "react-native";
import Profile from "./src/pages/Profile";

export default function App() {
  return <Profile />;
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
