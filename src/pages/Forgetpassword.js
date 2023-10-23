import base from "../modules/base_module";

export default function Forgetpassword({ navigation }) {
  return (
    <base.View style={styles.container}>
      <base.View style={styles.box}>
        <base.Text>หมายเลขบัตรประชาชน *</base.Text>
        <base.TextInput
          style={styles.Realinput}
          placeholder="13 หลัก"
        />
        <base.Text style={{ marginTop: 10 }}>คำนำหน้า *</base.Text>
        <base.TextInput
          style={styles.Realinput}
          placeholder="นาย"
        />
        <base.Text style={{ marginTop: 10 }}>ชื่อจริง *</base.Text>
        <base.TextInput
          style={styles.Realinput}
          placeholder="ex. แสนดี ยอดเยี่ยม"
        />
      </base.View>
      <base.View>
        <base.TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <base.View
            style={{
                paddingHorizontal: 125,
                paddingVertical: 15,
                marginTop: 50,
                backgroundColor: "#FF8A48",
                borderRadius: 10,
            }}
          >
            <base.Text style={{fontSize: 20, color: "white", fontWeight: 800}}>
            ดำเนินการต่อ
            </base.Text>
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
    padding: 10,
  },
  Realinput: {
    borderWidth: "2px",
    borderRadius: 10,
    height: 50,
    borderWidth: 0.5,
    width: "90%",
    marginTop: 10,
    padding: 10,
  },
});
