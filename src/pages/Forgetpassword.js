import base from "../modules/base_module";
import Layer from "../Layout/lgradient";


export default function Forgetpassword({ navigation }) {
  return (
    <base.View style={styles.container}>
      <base.View style={styles.box}>
      <base.View style={{display: "flex", flexDirection: "column"}}>

        <base.View style={{display: "flex", flexDirection: "row"}}>
        <base.Text>Email</base.Text>
        <base.Text style={{color: "red"}}>*</base.Text>
        </base.View>
        <base.TextInput
          style={styles.Realinput}
          placeholder="sandee@gmail.com"
        />
                </base.View>

 

      </base.View>
      <base.View>
      <base.TouchableOpacity onPress={()=>{navigation.navigate('SignIn', {text: "text"})}}>
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
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    width: "90%",
    marginTop: 10,
    padding: 16,
  },
});
