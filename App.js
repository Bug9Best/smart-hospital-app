import base from "./src/modules/base_module";
import Signin from "./src/pages/SignIn";

export default function App() {
  return <Signin />;
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
