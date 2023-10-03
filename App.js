import base from "./src/modules/base_module";
import RootNav from "./src/navigation/Rootnav";

export default function App() {
  return <RootNav />;
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
