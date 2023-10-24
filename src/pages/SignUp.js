import base from '../modules/base_module'

export default function SignUp({ navigation }){
    return(
    <base.View style={styles.container}>
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
        <base.Text style={{marginTop: 20, fontWeight: 600}}>
        3. ผู้ลงทะเบียนยินยอมให้ใช้ข้อมูลประวัติการรักษาของผู้ลงทะเบียนไป
ใช้เพื่อการศึกษา การรักษาพยาบาล การวิจัย การเรียนการสอน และการ
พัฒนาคุณภาพโรงพยาบาลฯ
        </base.Text>
        <base.Text style={{marginTop: 20, fontWeight: 600}}>
        4. กรณีผู้ลงทะเบียนไม่เคยมีบัตรประจำตัวประชาชน หรือบุคคลต่างชาติ-
ต่างด้าว ขอให้มาติดต่อลงทะเบียนที่เวชระเบียน คลินิกเวชกรรม สจล.
        </base.Text>
      </base.View>
      <base.View>
        <base.TouchableOpacity onPress={()=>{navigation.navigate('Signupjing', {text: "text"})}}>
          <base.View
            style={{
                paddingHorizontal: 125,
                paddingVertical: 15,
                marginTop: 200,
                backgroundColor: "#FF8A48",
                borderRadius: 10,
            }}
          >
            <base.Text style={{color: "white"}} >
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
    height: "62%",
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
    
  },
  Realinput: {
    borderWidth: "2px",
    borderRadius: 10,
    height: 50,
    borderWidth: 0.5,
    width: "90%",
    marginTop: 10,
    padding: 16,
  },
});