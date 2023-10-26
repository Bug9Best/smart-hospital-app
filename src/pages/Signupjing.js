import base from "../modules/base_module";
import Layer from "../Layout/lgradient";


export default function Signupjing({ navigation }) {
  return (
    <base.View style={styles.container}>
      <base.View style={styles.box}>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text>หมายเลขบัตรประชาชน</base.Text>
            <base.Text style={{ color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="13 หลัก" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>คำนำหน้า</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="ex. นาย" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>ชื่อจริง</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="ex.แสนดี" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>ชื่อกลาง</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="ex. ยอดมาก" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>นามสกุล</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="ยอดงาม" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>

        <base.View style={{ display: "flex", flexDirection: "row" }}>
          <base.Text style={{ marginTop: 10 }}>วันเดือนปีเกิด</base.Text>
          <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
        </base.View>
        <base.TextInput style={styles.Realinput} placeholder="16 /09 /02"/>
        <base.View style={{ display: "flex", flexDirection: "row" }}>
          <base.Text style={{ marginTop: 10 }}>ที่อยู่</base.Text>
          <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
        </base.View>
        <base.TextInput style={styles.Addressinput} placeholder="รายละเอียดพอสังเขป"  multiline= {true}/>
        </base.View>
        

      </base.View>
      <base.View>
        <base.TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <base.View
            style={{
              paddingHorizontal: 125,
              paddingVertical: 15,
              marginTop: 30,
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
    marginLeft: 15,
    marginRight: 15,
  },
  Realinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    width: "100%",
    marginTop: 10,
    padding: 16,
  },
  Addressinput:  {
    borderWidth: 0.5,
    borderRadius: 10,
    width: "100%",
    height: 100,
    marginTop: 10,
    padding: 16,
  },
});
