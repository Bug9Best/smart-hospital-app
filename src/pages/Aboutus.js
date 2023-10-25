import base from "../modules/base_module";
import Layer from "../Layout/lgradient";


export default function Aboutus({ navigation }) {
  return (
    <Layer>
      <base.View style={styles.container}>
        <base.ScrollView>
          <base.View style={styles.box}>
            <base.Image
              source={{ uri: 'http://medicalcenter.kmitl.ac.th/wp-content/uploads/2019/05/93748.jpg' }}
              style={{ width: "100%", height: 300 }} />
            <base.Text style={{ marginTop: 10, fontSize: 20, fontWeight: 800, padding: 10 }}>
              ความเป็นมา
            </base.Text>
            <base.Text style={{ fontSize: 15, padding: 10 }}>
              คลินิกเวชกรรม สจล. เดิมที เป็นหน่วยงานสุขภาพอนามัย บริหารภายใต้สังกัด
              กองกิจการนักศึกษา สำนักงานอธิการบดี สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณ
              ทหารลาดกระบัง ภายหลังเปลี่ยนเป็น คลินิกเวชกรรม สจล. บริหารภายใต้สังกัด
              คณะแพทยศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            </base.Text>
            <base.Image
              source={{ uri: 'http://medicalcenter.kmitl.ac.th/wp-content/uploads/2019/05/e0b982e0b884e0b8a3e0b887e0b881e0b8b2e0b8a3e0b888e0b8b4e0b895e0b8ade0b8b2e0b8aae0b8b2170261_e0b991e0b998e0b990e0b997e0b990e0b992_0109.jpg' }}
              style={{ marginTop: 10, width: "100%", height: 300 }}
            />
            <base.Text style={{ marginTop: 15, fontSize: 15, fontWeight: 400, padding: 10 }}>
              โดย การให้บริการของคลินิกเวชกรรม สจล. นี้ จัดขึ้นเพื่อดูแล ป้องกัน รักษา และแนะนำเกี่ยวกับการ
              ดูแลสุขภาพอนามัยของตนเอง และชุมชน ซึ่งเป็นสิ่งจำเป็นเพื่อให้มีสุขภาพแข็งแรง สมบูรณ์ ทั้งทางร่างกาย จิตใจ อารมณ์และสังคม
              เพื่อให้ปราศจากโรคภัยไข้เจ็บ ที่จะบั่นทอนความสามารถในการดำรงชีวิต
            </base.Text>
          </base.View>
        </base.ScrollView>
      </base.View>
    </Layer>
  );
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 16,
    padding: 16,
  },
});
