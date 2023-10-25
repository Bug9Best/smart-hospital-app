import base from "../modules/base_module";

export default function AddressInfo({ navigation }) {
  return (
    <base.View style={styles.container}>
      <base.View style={styles.box}>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text>หมายเลขอาคาร, ชื่อถนน</base.Text>
            <base.Text style={{ color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>ชื่อถนน, ซอย, หมู่</base.Text>
            <base.Text style={{ color: "red", marginTop: 10 }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="" />
        </base.View>

        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>หมายเลขบัตรประชาชน</base.Text>
            <base.Text style={{ color: "red", marginTop: 10 }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="13 หลัก" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>
              ข้อมูลที่อยู่เพิ่มเติม (ไม่บังคับ)
            </base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="" />
        </base.View>

        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.Text style={{ marginTop: 10 }}>จังหวัด</base.Text>
          <base.TextInput style={styles.Realinput} placeholder="" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "row" }}>
          <base.View style={{ display: "flex", flexDirection: "column" }}>
            <base.Text style={{ marginTop: 10 }}>เขต / อำเภอ</base.Text>
            <base.TextInput style={styles.Rowinput} placeholder="" />
          </base.View>
          <base.View style={{ display: "flex", flexDirection: "column", marginLeft: 20}}>
            <base.Text style={{ marginTop: 10 }}>แขวง / ตำบล</base.Text>
            <base.TextInput style={styles.Rowinput} placeholder="" />
          </base.View>
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "row" }}>
          <base.View style={{ display: "flex", flexDirection: "column" }}>
            <base.Text style={{ marginTop: 10 }}>รหัสไปรษณีย์</base.Text>
            <base.TextInput style={styles.Rowinput} placeholder="" />
          </base.View>
          <base.View style={{ display: "flex", flexDirection: "column", marginLeft: 20}}>
            <base.Text style={{ marginTop: 10 }}>ประเทศ / ภูมิภาค</base.Text>
            <base.TextInput style={styles.Rowinput} placeholder="" />
          </base.View>
        </base.View>
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
              marginTop: 50,
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
    height: "80%",
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
  },
  Realinput: {
    borderWidth: "0.2px",
    borderRadius: 10,
    height: 50,
    width: "90%",
    marginTop: 10,
    padding: 16,
  },
  Rowinput: {
    borderWidth: "0.2px",
    borderRadius: 10,
    height: 50,
    width: 160,
    marginTop: 10,
    padding: 16,
  },
});
