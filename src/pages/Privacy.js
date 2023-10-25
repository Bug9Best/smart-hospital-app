import base from '../modules/base_module'
import Layer from "../Layout/lgradient";



export default function Privacy({ navigation }){
    return(
    <base.View style={styles.container}>
        <base.ScrollView>
        <base.View style={styles.box}>
         <base.Text style={{color: "#FF8A48" ,fontSize: 15, fontWeight: 800}}>
            ข้อตกลงและเงื่อนไข
        </base.Text>
        <base.Text style={{marginTop: 20, fontWeight: 600}} >
        1. ลงทะเบียนได้เฉพาะผู้ที่มีบัตรประจำตัวประชาชน 
(Thai National ID Card) และยังไม่ถึงวันหมดอายุ
        </base.Text>
        <base.Text style={{marginTop: 20, fontWeight: 600}}>
        2. ผู้ลงทะเบียนขอรับรองว่าข้อมูลที่จะให้กับคลินิกเวชกรรม สจล. ทั้งหมดนี้ถูกต้องตรงกับความจริงทุกประการและยินยอมให้ทาง
คลินิกเวชกรรม สจล. ตรวจสอบจากฐานข้อมูลทางทะเบียนใดๆ ของรัฐฯ รวมถึงอนุญาตให้ใช้รูปภาพของข้าพเจ้าเพื่อการมีเวชระเบียนและการตรวจ
รักษา หากมีข้อมูลใดไม่ถูกต้องหรือไม่ตรงกับความจริงและอาจจะทำให้
เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่น ข้าพเจ้ายินยอมรับผิดชอบ ในความเสียหายที่เกิดขึ้นทุกประการ
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
  },
  box: {
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
    marginLeft: 15,
    marginRight: 15,

  },
  box2: {
    backgroundColor: "white",
    marginTop: 50,
    borderRadius: 10,
    padding: 16,
    marginLeft: 15,
    marginRight: 15,
  },
});