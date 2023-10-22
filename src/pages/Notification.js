import base from "../modules/base_module";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function Notification({ navigation }) {
  return (
    <base.View style={styles.container}>
    <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <base.Text style={{fontWeight: 600, }}>

          แบบคำร้องลงทะเบียนบัตรทอง
          </base.Text>
        </base.View>
        
      </base.TouchableOpacity>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          marginTop: 10
        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <base.Text style={{fontWeight: 600, }}>

          แบบคำร้องลงทะเบียนบัตรทอง
          </base.Text>
        </base.View>
        
      </base.TouchableOpacity>
       <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          marginTop: 10

        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <base.Text style={{fontWeight: 600, }}>

          แบบคำร้องลงทะเบียนบัตรทอง
          </base.Text>
        </base.View>
        
      </base.TouchableOpacity>
      </base.View>
  );
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    padding: 20,
  },
});
