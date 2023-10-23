import base from "../modules/base_module";

export default function Contactus({ navigation }) {
  return (
    <base.View style={styles.container}>
      <base.View style={{}}>
        <base.Text style={{ color: "#FF8A48", fontSize: 20, fontWeight: 800 }}>
          คลินิกเวชกรรม สจล. คณะแพทยศาสตร์
        </base.Text>
        <base.Text style={{ marginTop: 15, fontSize: 15, fontWeight: 800 }}>
          เปิดทำการ จันทร์ – ศุกร์ เวลา 09:00 น. -17:00 น.                เสาร์ – อาทิตย์ เวลา
          09.00 น. - 11.00 น.                                 วันหยุดนักขัตฤกษ์ เวลา 09:00 น. -17:00 น.
        </base.Text>
        <base.Text style={{ marginTop: 10, fontSize: 12, fontWeight: 400 }}>
          สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          เลขที่ 1 ฉลองกรุง 1 เขตลาดกระบัง กรุงเทพมหานคร 10520
          โทรศัพท์ 02 329 8143 หรือ 02 329 8000 ต่อ 3633
          โทรสาร 02 329 8143
        </base.Text>
        <base.Text style={{ marginTop: 10, fontSize: 12, fontWeight: 400, marginRight: 50 }}>
          <base.Image source={require("../assets/image/facebooklogo.png")} style={{ width: 30, height: 20, borderRadius: 100 }} />
          Facebook : ศูนย์การแพทย์ สจล. KMITL Medical Centre
        </base.Text>
        <base.Text style={{ marginTop: 10, fontSize: 12, fontWeight: 400 }}>
          <base.Image source={require("../assets/image/Line.png")} style={{ width: 30, height: 20, borderRadius: 100 }} />

          Line : คลินิกเวชกรรม สจล.
        </base.Text>
      </base.View>
      <base.View></base.View>
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
