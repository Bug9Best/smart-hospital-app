import base from "../modules/base_module";
import Ionicons from "@expo/vector-icons/Ionicons";
import Layer from "../Layout/lgradient";



export default function Formdownload({ navigation }) {
  return (
    
    <base.View style={styles.container}>
      <base.View style={{ marginTop: 5, padding: 5 }}>
        <base.Text style={{ color: "#FF8A48", fontSize: 20, fontWeight: 800 }}>
          แบบฟอร์ม
        </base.Text>
      </base.View>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 16
        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons style={{marginRight: 3}} name="document" size={18} color="#FF8A48" />
          <base.Text style={{fontWeight: 600, marginLeft: 10,
    marginRight: 10,}}>

          แบบคำร้องลงทะเบียนบัตรทอง
          </base.Text>
        </base.View>
      </base.TouchableOpacity>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 16,
          marginTop: 10,
        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
        <Ionicons style={{marginRight: 3}} name="document" size={18} color="#FF8A48" />
          <base.Text style={{ fontWeight: 600 ,marginLeft: 10,
    marginRight: 10,}}>
          แบบขอความอนุเคราะห์ยาและเวชภัณฑ์ทางการแพทย์
          </base.Text>
        </base.View>
      </base.TouchableOpacity>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 16,
          marginTop: 10,
        }}
      >
      <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons style={{marginRight: 3}} name="document" size={18} color="#FF8A48" />
          <base.Text style={{fontWeight: 600, marginLeft: 10,
    marginRight: 10,}}>
          สื่อการสอน CPR & FIRST AID (THAI VERSION)
          </base.Text>
        </base.View>
      </base.TouchableOpacity>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 16,
          marginTop: 10,
        }}
      >
               <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons style={{marginRight: 3}} name="document" size={18} color="#FF8A48" />
          <base.Text style={{fontWeight: 600, marginLeft: 10,
    marginRight: 10,}}>
          ระเบียบสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ว่าด้วยการบริหารคลินิกเวชกรรม                   สจล. (KMITL CLINIC) พ.ศ. 2560
          </base.Text>
        </base.View>
      </base.TouchableOpacity>
      <base.View style={{ marginTop: 5, padding: 5 }}>
        <base.Text style={{ color: "#FF8A48", fontSize: 20, fontWeight: 800 ,}}>
          แบบฟอร์ม
        </base.Text>
      </base.View>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 16,
          marginTop: 10,
          
        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons style={{marginRight: 3}} name="document" size={18} color="#FF8A48" />
          <base.Text style={{fontWeight: 600,     marginLeft: 10,
    marginRight: 10,}}>
          ระเบียบสถาบัน ว่าด้วยการบริหารคลินิกเวชกรรม สจล. (KMITL clinic) พ.ศ. 2560
          </base.Text>
        </base.View>
      </base.TouchableOpacity>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 16,
          marginTop: 10,
        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons style={{marginRight: 3}} name="document" size={18} color="#FF8A48" />
          <base.Text style={{fontWeight: 600,     marginLeft: 10,
    marginRight: 10}}>
          ประกาศอัตราค่ารักษาพยาบาล
          </base.Text>
        </base.View>
      </base.TouchableOpacity>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 16,
          marginTop: 10,
        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons style={{marginRight: 3}} name="document" size={18} color="#FF8A48" />
          <base.Text style={{fontWeight: 600, marginLeft: 10,
    marginRight: 10,}}>
          กำหนดสิทธิการรักษาพยาบาล
          </base.Text>
        </base.View>
      </base.TouchableOpacity>
      <base.TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          padding: 16,
          marginTop: 10,
        }}
      >
        <base.View style={{display: 'flex', flexDirection: 'row'}}>
          <Ionicons style={{marginRight: 3}} name="document" size={18} color="#FF8A48" />
          <base.Text style={{fontWeight: 600,     marginLeft: 10,
    marginRight: 10,}}>
          อัตราค่ารักษาพยาบาลคลินิกเวชกรรม สจล. พ.ศ.2562
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
    padding: 16,
  },
});
