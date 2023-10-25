import base from "../modules/base_module";
import Layer from "../Layout/lgradient";


export default function Aboutus({ navigation }) {
  return (
    
    <base.View style={styles.container}>
      <base.ScrollView>

      <base.View style={{ padding: 5 }}>
        <base.Text style={{ color: "#FF8A48", fontSize: 20, fontWeight: 800 }}>
          ความเป็นมา
        </base.Text>
      </base.View>
      
      <base.View style={styles.box}>
        <base.Image
          source={require("../assets/image/Haerin.png")}
          style={{width: "100%", height: 500, marginTop: 10}}
        />
        <base.Text style={{marginTop: 10, fontSize: 15, fontWeight: 400, padding: 10 }}>
          คลินิกเวชกรรม สจล. เดิมที เป็นหน่วยงานสุขภาพอนามัย บริหารภายใต้สังกัด
          กองกิจการนักศึกษา สำนักงานอธิการบดี สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณ
          ทหารลาดกระบัง ภายหลังเปลี่ยนเป็น คลินิกเวชกรรม สจล. บริหารภายใต้สังกัด
          คณะแพทยศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
        </base.Text>
        <base.Image
          source={require("../assets/image/Haerin.png")}
          style={{marginTop: 10, width: "100%", height: 500}}
        />
        <base.Text style={{marginTop: 15, fontSize: 15, fontWeight: 400, padding: 10}}>
          คลินิกเวชกรรม สจล. เดิมที เป็นหน่วยงานสุขภาพอนามัย บริหารภายใต้สังกัด
          กองกิจการนักศึกษา สำนักงานอธิการบดี สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณ
          ทหารลาดกระบัง ภายหลังเปลี่ยนเป็น คลินิกเวชกรรม สจล. บริหารภายใต้สังกัด
          คณะแพทยศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
        </base.Text>

      </base.View>

      </base.ScrollView>
    </base.View>

  );
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  box: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
    marginLeft: 5,
    marginRight: 5
    
  },
});
