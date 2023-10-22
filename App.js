import base from "./src/modules/base_module";
import RootNav from "./src/navigation/Rootnav";
import Home from "./src/pages/Home";
import Event from "./src/pages/Event";
export default function App() {
  return <Event />;
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
