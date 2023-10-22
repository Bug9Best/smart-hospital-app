import base from "./src/modules/base_module";
import RootNav from "./src/navigation/Rootnav";
import Home from "./src/pages/Home";
export default function App() {
  return <Home />;
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
