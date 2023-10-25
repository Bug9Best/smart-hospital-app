import base from "../modules/base_module";
import Ionicons from "@expo/vector-icons/Ionicons";
import Layer from "../Layout/lgradient";



export default function Formdownload({ navigation }) {
  return (
    <Layer>
      <base.View style={styles.container}>
        <base.TouchableOpacity
          onPress={() => base.Linking.openURL("http://medicalcenter.kmitl.ac.th/wp-content/uploads/2020/05/21052020150256.pdf")}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 16
          }}>
          <base.View style={{ display: 'flex', flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 3 }} name="document" size={18} color="#FF8A48" />
            <base.Text style={{
              fontWeight: 600, marginLeft: 10,
              marginRight: 10,
            }}>
              แบบคำร้องลงทะเบียนบัตรทอง
            </base.Text>
          </base.View>
        </base.TouchableOpacity>

        <base.TouchableOpacity
          onPress={() => base.Linking.openURL("https://drive.google.com/file/d/13EF05R-UcS9LX3k0LxuhtB5HYeuW1JjT/view")}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 16,
            marginTop: 10,
          }}>
          <base.View style={{ display: 'flex', flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 3 }} name="document" size={18} color="#FF8A48" />
            <base.Text style={{
              fontWeight: 600, marginLeft: 10,
              marginRight: 10,
            }}>
              แบบขอความอนุเคราะห์ยาและเวชภัณฑ์ทางการแพทย์
            </base.Text>
          </base.View>
        </base.TouchableOpacity>

        <base.TouchableOpacity
          onPress={() => base.Linking.openURL("http://medicalcenter.kmitl.ac.th/wp-content/uploads/2019/12/%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99-%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%A7%E0%B8%8A%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%AA%E0%B8%88%E0%B8%A5.-KMITL-clinic-%E0%B8%9E.%E0%B8%A8.-2560.pdf")}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 16,
            marginTop: 10,
          }}>
          <base.View style={{ display: 'flex', flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 3 }} name="document" size={18} color="#FF8A48" />
            <base.Text style={{
              fontWeight: 600, marginLeft: 10,
              marginRight: 10,
            }}>
              ระเบียบสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ว่าด้วยการบริหารคลินิกเวชกรรม สจล. (KMITL CLINIC) พ.ศ. 2560
            </base.Text>
          </base.View>
        </base.TouchableOpacity>

        <base.TouchableOpacity
          onPress={() => base.Linking.openURL("http://medicalcenter.kmitl.ac.th/wp-content/uploads/2019/12/%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99-%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%A7%E0%B8%8A%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%AA%E0%B8%88%E0%B8%A5.-KMITL-clinic-%E0%B8%9E.%E0%B8%A8.-2560.pdf")}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 16,
            marginTop: 10,
          }}>
          <base.View style={{ display: 'flex', flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 3 }} name="document" size={18} color="#FF8A48" />
            <base.Text style={{
              fontWeight: 600, marginLeft: 10,
              marginRight: 10,
            }}>
              ระเบียบสถาบัน ว่าด้วยการบริหารคลินิกเวชกรรม สจล. (KMITL clinic) พ.ศ. 2560
            </base.Text>
          </base.View>
        </base.TouchableOpacity>

        <base.TouchableOpacity
          onPress={() => base.Linking.openURL("http://medicalcenter.kmitl.ac.th/wp-content/uploads/2019/08/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5.pdf")}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 16,
            marginTop: 10,
          }}>
          <base.View style={{ display: 'flex', flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 3 }} name="document" size={18} color="#FF8A48" />
            <base.Text style={{
              fontWeight: 600, marginLeft: 10,
              marginRight: 10
            }}>
              ประกาศอัตราค่ารักษาพยาบาล
            </base.Text>
          </base.View>
        </base.TouchableOpacity>

        <base.TouchableOpacity
          onPress={() => base.Linking.openURL("http://medicalcenter.kmitl.ac.th/wp-content/uploads/2019/08/%E0%B8%81%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5.pdf")}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 16,
            marginTop: 10,
          }}>
          <base.View style={{ display: 'flex', flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 3 }} name="document" size={18} color="#FF8A48" />
            <base.Text style={{
              fontWeight: 600, marginLeft: 10,
              marginRight: 10,
            }}>
              กำหนดสิทธิการรักษาพยาบาล
            </base.Text>
          </base.View>
        </base.TouchableOpacity>

        <base.TouchableOpacity
          onPress={() => base.Linking.openURL("http://medicalcenter.kmitl.ac.th/wp-content/uploads/2019/08/%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%A7%E0%B8%8A%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%AA%E0%B8%88%E0%B8%A5.-%E0%B8%9E.%E0%B8%A8.2562.pdf")}
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 16,
            marginTop: 10,
          }}>
          <base.View style={{ display: 'flex', flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 3 }} name="document" size={18} color="#FF8A48" />
            <base.Text style={{
              fontWeight: 600, marginLeft: 10,
              marginRight: 10,
            }}>
              อัตราค่ารักษาพยาบาลคลินิกเวชกรรม สจล. พ.ศ.2562
            </base.Text>
          </base.View>
        </base.TouchableOpacity>
      </base.View>
    </Layer>
  );
}

const styles = base.StyleSheet.create({
  container: {
    padding: 16,
  },
});
