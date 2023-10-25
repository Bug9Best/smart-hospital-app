import base from "../modules/base_module";

export default function PhoneInfo({ navigation }) {
  return (
    <base.View style={styles.container}>
      <base.View style={styles.box}>
      <base.View style={{display: "flex", flexDirection: "column"}}>

        <base.View style={{display: "flex", flexDirection: "row"}}>
        <base.Text>เบอร์โทรศัพท์</base.Text>
        <base.Text style={{color: "red"}}>*</base.Text>
        </base.View>
        <base.TextInput
          style={styles.Realinput}
          placeholder="เช่น 0988888888"
        />
                </base.View>

 

      </base.View>
      <base.View>
      <base.TouchableOpacity onPress={()=>{navigation.navigate('Profile', {text: "text"})}}>
          <base.View
            style={{
                paddingHorizontal: 125,
                paddingVertical: 15,
                marginTop: "170%",
                backgroundColor: "#FF8A48",
                borderRadius: 10,
            }}
          >
            <base.Text style={{color: "white", }}>
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
    height: "15%",
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
});
