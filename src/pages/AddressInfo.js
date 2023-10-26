import base from "../modules/base_module";
import Layer from "../Layout/lgradient";

export default function AddressInfo({ navigation }) {
  return (
    <base.View style={styles.container}>
      <base.View style={styles.box}>
      <base.View style={{ display: "flex", flexDirection: "row" }}>
          <base.Text style={{ marginTop: 10 }}>ที่อยู่</base.Text>
          <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
        </base.View>
        <base.TextInput style={styles.Addressinput} placeholder="แก้ไขที่อยู่"  multiline= {true}/>
      </base.View>

      <base.View>
        <base.TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile", { text: "text" });
          }}
        >
          <base.View
            style={{
              paddingHorizontal: 125,
              paddingVertical: 15,
              marginTop: "165%",
              backgroundColor: "#FF8A48",
              borderRadius: 10,
            }}
          >
            <base.Text style={{ color: "white" }}>ดำเนินการต่อ</base.Text>
          </base.View>
        </base.TouchableOpacity>
      </base.View>
    </base.View>
  );
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    backgroundColor: "white",
    width: "95%",
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
  },
  Realinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    width: "100%",
    marginTop: 10,
    padding: 16,
  },
  Rowinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    width: 179,
    marginTop: 10,
    padding: 16,
  },
  Addressinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: "100%",
    height: 100,
    marginTop: 10,
    padding: 16,
  },
});
