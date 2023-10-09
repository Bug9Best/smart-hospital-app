import base from "./src/modules/base_module";
import Home from "./src/pages/Home";
import Event from "./src/pages/Event";
import React from "react";
import { Text } from "react-native";

export default function App() {
  return <Home />;
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
