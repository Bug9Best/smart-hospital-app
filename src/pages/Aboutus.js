import base from "../modules/base_module";

export default function Aboutus({ navigation }) {
  return (
    <base.View style={styles.container}>
    <base.ScrollView>
      <base.View style={{ padding: 5 }}>
        <base.Text style={{ color: "#FF8A48", fontSize: 20, fontWeight: 800 }}>
          ความเป็นมา
        </base.Text>
      </base.View>
      <base.Image
        source={require("../assets/image/Haerin.png")}
        style={{ width: "100%", height: "300%" }}
      ></base.Image>
      <base.Text style={{marginTop: 10, fontSize: 15, fontWeight: 400 }}>
        คลินิกเวชกรรม สจล. เดิมที เป็นหน่วยงานสุขภาพอนามัย บริหารภายใต้สังกัด
        กองกิจการนักศึกษา สำนักงานอธิการบดี สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณ
        ทหารลาดกระบัง ภายหลังเปลี่ยนเป็น คลินิกเวชกรรม สจล. บริหารภายใต้สังกัด
        คณะแพทยศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
      </base.Text>
      </base.ScrollView>
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
