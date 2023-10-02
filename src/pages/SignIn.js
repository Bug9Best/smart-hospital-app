import { Dimensions } from "react-native";
import base from "../modules/base_module";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Signin() {

    const kiw = () => {
    }
  return (
    <base.View style={styles.container}>
        <base.SafeAreaView>
            <base.View style={styles.Image}>
                <base.Image
                    source={require("../assets/Kmitl-logo.png")}
                    style={{width: "50%", height: "50%",}}
                ></base.Image>
            </base.View>
            <base.View style={styles.Input}>
                <base.TextInput
                style={styles.Realinput}
                placeholder="useless placeholder"
                />
                <base.TextInput
                style={styles.Realinput}
                placeholder="useless placeholder"
                />
            </base.View>
        </base.SafeAreaView>
    </base.View>
  );
}
const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: "1px",
    width: windowWidth,
  },
  Input: {
    flex: 2,
    alignItems : "center",
  },
  Realinput: {
    borderWidth: "2px",
    borderRadius: "10%",
    height: 45,
    borderWidth: 1,
    width: '90%',
    marginTop: "5%",
    padding: 10
  }
});
