import * as React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";

const DoctorSchedule = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.doctorSchedule}>
      <View style={styles.doctorScheduleChild} />
      <View style={[styles.other, styles.otherLayout]}>
        <View style={[styles.otherChild, styles.childShadowBox]} />
        <View style={[styles.parent, styles.parentPosition1]}>
          {/* <Text style={[styles.text, styles.textTypo3]}>{`อุบัติเหตุฉุกเฉิน

`}</Text> */}
          {/* <Text
            style={[styles.text1, styles.textTypo3]}
          >{`การทำหัตถการ ล้างแผล ตัดไหม ฉีดยาตามนัด ผ่าตัดเล็ก

`}</Text> */}
          {/* <Text style={[styles.text2, styles.textTypo2]}>
            วันจันทร์ – ศุกร์ 08.00-17.30 น.
          </Text> */}
          {/* <Text
            style={[styles.text3, styles.textTypo2]}
          >{`วันเสาร์ – อาทิตย์   09.00-11.00 น.
`}</Text> */}
        {/* </View>
        <View style={[styles.group, styles.groupLayout]}> */}
          {/* <Text style={[styles.text4, styles.textTypo5]}>{`คลินิกความดันโลหิต


`}</Text> */}
         {/* <Text style={[styles.text2, styles.textTypo2]}>
            วันจันทร์ 0 8.00-17.00 น.
          </Text> */}
        {/* </View>
        <View style={[styles.container, styles.groupLayout]}> */}
          {/* <Text style={[styles.text4, styles.textTypo5]}>{`คลินิกสุขภาพเด็กดี


`}</Text> */}
          {/* <Text style={[styles.text2, styles.textTypo2]}>
            วันอังคาร 8.00-12.00 น.
          </Text> */}
        {/* </View>
        <View style={[styles.groupView, styles.groupLayout]}> */}
          {/* <Text
            style={[styles.text4, styles.textTypo5]}
          >{`ขอใบส่งตัว (วันหยุดราชการและวันหยุกนักขัตฤกษ์ ไม่ออกใบส่งตัว)


`}</Text> */}
          {/* <Text style={[styles.text2, styles.textTypo2]}>
            วันพุธ 8.00-17.00 น.
          </Text> */}
        {/* </View>
        <View style={styles.parent1}> */}
          {/* <Text style={[styles.text10, styles.textTypo5]}>{`คลินิกฝากครรภ์
คลินิกเบาหวาน, เบาหวาน-ความดันฯ


`}</Text> */}
          {/* <Text style={[styles.text2, styles.textTypo2]}>
            วันพฤหัสบดี 8.00-17.00 น.
          </Text> */}
        </View>
        {/* <Text style={[styles.text12, styles.textTypo1]}>
          ตารางให้บริการอื่นๆ
        </Text> */}
        {/* <Text style={[styles.text13, styles.textTypo]}>
          {`หมายเหตุ 
การทำหัตถการจะปิดรับผู้ป่วยทำบัตรตรวจก่อนเวลา 17.30 น.
เอกสารที่ต้องเตรียมมาเพื่อพิจารณาการส่งตัว
– บัตรประชาชน
– ใบนัดจากโรงพยาบาล
– ใบตอบกลับหรือใบประวัติการรักษาของสถานพยาบาลที่รับการรักษาประจำและเหตุผล`}{" "}
          การรักษาต่อเนื่อง– นำยาที่ใช้ประจำมาเพื่อตรวจสอบ–
          นำเอกสารการตรวจวินิจฉัย เช่น ผลเลือด ผลเอ็กซเรย์ มาเพื่อพิจารณา–
          ส่งเอกสารเพื่อพิจารณาไม่น้อยกว่า 7
          วัน**กรณีที่ผู้ป่วยไปรักษาที่โรงพยาบาลชำระเงินเองหรือเข้าฉุกเฉิน
          ให้ขอประวัติการรักษา แนบมาด้วยทุกครั้ง
          ถ้าไม่มีประวัติต้องไปขอประวัติมา**
        </Text> */}
      </View>
      <View style={[styles.specific, styles.specificLayout]}>
        <View style={[styles.specificChild, styles.specificLayout]} />
        <View style={[styles.parent2, styles.parentPosition1]}>
          <Text
            style={[styles.text14, styles.textTypo4]}
          >{`ศูนย์ส่องกล้องและโรคทางเดินอาหาร     09.00-16.00 น.
คลินิกกายภาพบำบัด     09.00-12.00 น.
ศูนย์สมองและโรคปวดศีรษะ     13.00-16.00 น.

`}</Text>
          <Text style={[styles.text2, styles.textTypo2]}>วันจันทร์</Text>
        </View>
        <View style={[styles.parent3, styles.parentPosition]}>
          <Text
            style={[styles.text16, styles.groupLayout]}
          >{`คลินิกฝังเข็มระงับปวด     09.00-12.00 น.
คลินิกกุมารเวชกรรมและโรคภูมิแพ้     09.00-12.00 น.

`}</Text>
          <Text style={[styles.text2, styles.textTypo2]}>วันอังคาร</Text>
        </View>
        <View style={styles.parent4}>
          <Text style={[styles.text18, styles.textTypo]}>
            {`คลินิกกุมารเวชกรรมและประสาทวิทยา    13.00-16.00 น.
คลินิกกระดูกและข้อ     09.00-12.00 น. `}
            (วันพุธสัปดาห์ที่ 1 และ 3 ของเดือน)ศูนย์อายุรกรรมโรคหัวใจ
            09.00-12.00 น.ศูนย์โรคปอดและการนอนหลับ 09.00-12.00 น.คลินิกจิตเวช
            13.00-16.00 น.{" "}
          </Text>
          <Text style={[styles.text2, styles.textTypo2]}>วันพุธ</Text>
        </View>
        <View style={[styles.parent5, styles.parentPosition]}>
          <Text
            style={[styles.text20, styles.groupLayout]}
          >{`คลินิกสูติ-นารีเวช    09.00-12.00 น.
คลินิกฝังเข็มระงับปวด     09.00-12.00 น. 

`}</Text>
          <Text style={[styles.text2, styles.textTypo2]}>วันพฤหัสบดี</Text>
        </View>
        <View style={styles.parent6}>
          <Text
            style={[styles.text22, styles.textTypo5]}
          >{`คลินิกกายภาพบำบัด    09.00-12.00 น.

`}</Text>
          <Text style={[styles.text2, styles.textTypo2]}>วันศุกร์</Text>
        </View>
        <Text style={[styles.text12, styles.textTypo1]}>
          ตารางแพทย์ตรวจเฉพาะทาง
        </Text>
        <Text style={[styles.text25, styles.textTypo]}>
          <Text>
            <Text style={styles.text26}>{`หมายเหตุ 
`}</Text>
            <Text style={styles.text27}>การนัดแพทย์เฉพาะทาง</Text>
          </Text>
          {/* <Text style={styles.text27}>
            – ต้องทำการนัดล่วงหน้าอย่างน้อย 1 สัปดาห์–
            การทำแฟ้มประวัติตรวจควรทำก่อนการตรวจครึ่งชั่วโมง
          </Text> */}
          {/* <Text style={styles.text27}>การนัดจิตแพทย์และการให้คำปรึกษา</Text> */}
          <Text
            style={styles.text27}
          >{`– การเข้ารับการตรวจสามารถติดต่อที่เคาน์เตอร์รับยาเพื่อทำแบบทดสอบและประเมินผล `}</Text>
          <Text style={styles.text27}> ก่อนทำการนัดในวันและเวลาราชการ</Text>
          {/* <Text style={styles.text27}>
            – การทำแฟ้มประวัติตรวจควรทำก่อนการตรวจครึ่งชั่วโมง
          </Text> */}
        </Text>
      </View>
      <View style={[styles.general, styles.generalLayout]}>
        <View style={[styles.generalChild, styles.generalLayout]} />
        <Text style={[styles.text33, styles.textClr]}>
          หมายเหตุ : การตรวจโรคทั่วไปจะปิดรับผู้ป่วยทำบัตรตรวจก่อน เวลา 17.00 น.
        </Text>
        <Text style={[styles.text34, styles.textTypo5]}>{`แพทย์หญิงภาวินี บุญยศ
แพทย์หญิงอธิชา อุดมเดช
นายแพทย์จิรกร จำรัสนโรดม
นายแพทย์ฐปนนท์ ทรัพย์สุวรรณ
`}</Text>
        <Text style={[styles.text35, styles.textTypo2]}>
          วันเสาร์ - อาทิตย์ เวลา 09.00 น. - 11.00 น.
        </Text>
        <Text style={[styles.text36, styles.textTypo2]}>
          วันจันทร์ - ศุกร์ เวลา 08.00 น. - 16.00 น.
        </Text>
        <Text style={[styles.text37, styles.textTypo1]}>ตรวจโรคทั่วไป</Text>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  otherLayout: {
    height: 637,
    width: 373,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(126, 134, 158, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
  },
  parentPosition1: {
    top: 42,
    width: 334,
    left: 15,
    position: "absolute",
  },
  textTypo3: {
    height: 23,
    width: 327,
    textAlign: "left",
    color: Color.colorDimgray_100,

    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    left: 7,
    position: "absolute",
  },
  textTypo2: {
    color: Color.colorCoral_200,
    textAlign: "left",

    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupLayout: {
    height: 47,
    position: "absolute",
  },
  textTypo5: {
    textAlign: "left",

    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
  },
  textTypo1: {
    color: Color.colorCoral_100,
    fontSize: FontSize.size_base,
    textAlign: "left",

    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    left: 15,
    position: "absolute",
  },
  textTypo: {
    whiteSpace: "pre-wrap",
    textAlign: "left",

    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  specificLayout: {
    height: 664,
    width: 373,
    position: "absolute",
  },
  textTypo4: {
    width: 327,
    textAlign: "left",
    color: Color.colorDimgray_100,

    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    left: 7,
    top: 21,
  },
  parentPosition: {
    height: 68,
    left: 15,
    position: "absolute",
  },
  generalLayout: {
    height: 210,
    width: 373,
    position: "absolute",
  },
  textClr: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_3xs,
  },
  doctorScheduleChild: {
    top: 90,
    width: 393,
    height: 1557,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke,
  },
  otherChild: {
    height: 637,
    width: 373,
    position: "absolute",
  },
  text: {
    top: 21,
    height: 23,
  },
  text1: {
    top: 73,
  },
  text2: {
    top: 0,
    color: Color.colorCoral_200,
    left: 0,
  },
  text3: {
    top: 52,
    left: 0,
  },
  parent: {
    height: 96,
    width: 334,
    left: 15,
  },
  text4: {
    height: 26,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    left: 7,
    top: 21,
    width: 334,
    position: "absolute",
  },
  group: {
    width: 341,
    top: 138,
    left: 15,
  },
  container: {
    top: 193,
    width: 341,
    left: 15,
  },
  groupView: {
    top: 248,
    width: 341,
    left: 15,
  },
  text10: {
    height: 48,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    left: 7,
    top: 21,
    width: 334,
    position: "absolute",
  },
  parent1: {
    top: 303,
    height: 69,
    width: 341,
    left: 15,
    position: "absolute",
  },
  text12: {
    top: 12,
  },
  text13: {
    top: 376,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_3xs,
    lineHeight: 21,
    left: 15,
  },
  other: {
    top: 993,
    left: 10,
  },
  specificChild: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(126, 134, 158, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
  },
  text14: {
    height: 67,
    position: "absolute",
  },
  parent2: {
    height: 88,
    width: 334,
    left: 15,
  },
  text16: {
    width: 327,
    textAlign: "left",
    color: Color.colorDimgray_100,

    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    left: 7,
    top: 21,
  },
  parent3: {
    top: 138,
    width: 334,
  },
  text18: {
    height: 129,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    lineHeight: 21,
    left: 7,
    top: 21,
    width: 334,
  },
  parent4: {
    top: 214,
    height: 150,
    width: 341,
    left: 15,
    position: "absolute",
  },
  text20: {
    textAlign: "left",

    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    left: 7,
    top: 21,
    width: 334,
  },
  parent5: {
    top: 372,
    width: 341,
  },
  text22: {
    height: 24,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    left: 7,
    top: 21,
    width: 334,
    position: "absolute",
  },
  parent6: {
    top: 448,
    height: 45,
    width: 341,
    left: 15,
    position: "absolute",
  },
  text26: {
    lineHeight: 21,
  },
  text27: {
    lineHeight: 18,
  },
  text25: {
    top: 501,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_3xs,
    left: 15,
  },
  specific: {
    top: 246,
    left: 35,
  },
  generalChild: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(126, 134, 158, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
  },
  text33: {
    top: 179,
    left: 14,
    textAlign: "left",

    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 21,
    position: "absolute",
  },
  text34: {
    top: 87,
    left: 22,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text35: {
    top: 63,
    left: 15,
  },
  text36: {
    top: 39,
    left: 15,
  },
  text37: {
    top: 15,
  },
  general: {
    top: 18,
    left: 34,
  },
  doctorSchedule: {
    flex: 1,
    width: "100%",
    height: 926,
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default DoctorSchedule;
