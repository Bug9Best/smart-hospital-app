import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const Event1 = () => {
  return (
    <View style={styles.event}>
      <View style={[styles.scrollData, styles.titlePosition]}>
        <View style={[styles.scrollDataChild, styles.textPosition3]} />
        <View style={[styles.cardEvent, styles.cardLayout]}>
          <View style={[styles.cardEventChild, styles.cardPosition]} />
          <LinearGradient
            style={[styles.cardEventItem, styles.cardPosition]}
            locations={[0, 1, 1]}
            colors={[
              "#ff8a48",
              "rgba(251, 155, 101, 0.49)",
              "rgba(248, 172, 130, 0)",
            ]}
          />
          <Text style={[styles.text, styles.textClr]}>
            คลินิก สจล. เตรียมให้บริการจองคิวออนไลน์
          </Text>
          <Text style={[styles.sep2023, styles.textPosition2]}>1 Sep 2023</Text>
          <Image
            style={[styles.newImage1, styles.newIconLayout]}
            contentFit="cover"
            source={require("../../assets/image/Cat.jpeg")}
          />
        </View>
        <View style={[styles.cardEvent1, styles.cardLayout]}>
          <View style={[styles.cardEventChild, styles.cardPosition]} />
          <LinearGradient
            style={[styles.cardEventItem, styles.cardPosition]}
            locations={[0, 1, 1]}
            colors={[
              "#ff8a48",
              "rgba(251, 155, 101, 0.49)",
              "rgba(248, 172, 130, 0)",
            ]}
          />
          <Text style={[styles.text, styles.textClr]}>
            คลีนิก สจล. เตรียมให้บริการแบบ Drive thru
          </Text>
          <Text style={[styles.sep2023, styles.textPosition2]}>
            15 Sep 2023
          </Text>
          <Image
            style={[styles.newImage1, styles.newIconLayout]}
            contentFit="cover"
            source={require("../../assets/image/Cat.jpeg")}
          />
        </View>
        <View style={[styles.cardEvent2, styles.cardLayout]}>
          <View style={[styles.cardEventChild, styles.cardPosition]} />
          <LinearGradient
            style={[styles.cardEventItem, styles.cardPosition]}
            locations={[0, 1, 1]}
            colors={[
              "#ff8a48",
              "rgba(251, 155, 101, 0.49)",
              "rgba(248, 172, 130, 0)",
            ]}
          />
          <Text style={[styles.text, styles.textClr]}>
            รับบริจาคเพื่อผู้ป่วย ฝีดาดลิง
          </Text>
          <Text style={[styles.sep2023, styles.textPosition2]}>
            15 Sep 2023
          </Text>
          <Image
            style={[styles.newImage12, styles.newIconLayout]}
            contentFit="cover"
            source={require("../../assets/image/Cat.jpeg")}
          />
        </View>
        <View style={[styles.cardEvent3, styles.cardLayout]}>
          <View style={[styles.cardEventChild, styles.cardPosition]} />
          <LinearGradient
            style={[styles.cardEventItem, styles.cardPosition]}
            locations={[0, 1, 1]}
            colors={[
              "#ff8a48",
              "rgba(251, 155, 101, 0.49)",
              "rgba(248, 172, 130, 0)",
            ]}
          />
          <Text style={[styles.text, styles.textClr]}>
            สจล. เปิดบ้านรับบริจาคเลือดเพื่อนการกุศล
          </Text>
          <Text style={[styles.sep2023, styles.textPosition2]}>
            16 Sep 2023
          </Text>
          <Image
            style={[styles.newImage12, styles.newIconLayout]}
            contentFit="cover"
            source={require("../../assets/image/Cat.jpeg")}
          />
        </View>
      </View>
      <View style={[styles.title, styles.titlePosition]}>
        <View style={styles.childPosition} />
        <Text style={styles.text4}>ข่าวสาร/กิจกรรม</Text>
        <Image
          style={[styles.keyboardArrowLeft, styles.newIconLayout]}
          source={require("../../assets/image/Cat.jpeg")}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  titlePosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  textPosition3: {
    left: "0%",
    width: "100%",
  },
  cardLayout: {
    height: 271,
    width: 373,
    left: 10,
    position: "absolute",
  },
  cardPosition: {
    bottom: "2.58%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textClr: {
    color: Color.systemBlack,
    textAlign: "left",
  },
  textPosition2: {
    fontFamily: FontFamily.notoSansThaiUI,
    letterSpacing: 0,
    left: "2.41%",
    width: "92.97%",
    position: "absolute",
  },
  newIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorWhite,
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  homePosition: {
    top: "18.18%",
    height: "81.82%",
    bottom: "0%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorCoral_200,
    fontFamily: FontFamily.kalamRegular,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "44.44%",
    height: "55.56%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  text6Typo: {
    fontFamily: FontFamily.kalamRegular,
    letterSpacing: 0,
  },
  chatPosition: {
    bottom: "0%",
    position: "absolute",
  },
  timePosition: {
    top: "34.88%",
    position: "absolute",
  },
  iosIconLayout: {
    width: 12,
    height: 16,
    display: "none",
  },
  scrollDataChild: {
    height: "103.36%",
    top: "-3.36%",
    backgroundColor: "#f4f4f4",
    bottom: "0%",
    position: "absolute",
    right: "0%",
    left: "0%",
  },
  cardEventChild: {
    height: "97.42%",
    borderRadius: Border.br_5xs,
    top: "0%",
    backgroundColor: Color.colorGainsboro,
    bottom: "2.58%",
  },
  cardEventItem: {
    height: "19.56%",
    top: "77.86%",
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: "transparent",
  },
  text: {
    height: "12.18%",
    top: "80.81%",
    fontSize: FontSize.size_base,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.notoSansThaiUI,
    letterSpacing: 0,
    left: "2.41%",
    width: "92.97%",
    position: "absolute",
  },
  sep2023: {
    height: "6.27%",
    top: "88.93%",
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  newImage1: {
    bottom: "22.06%",
    height: "77.94%",
    maxWidth: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  cardEvent: {
    top: 839,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
  },
  cardEvent1: {
    top: 563,
  },
  newImage12: {
    bottom: "22.06%",
    height: "77.94%",
    maxWidth: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
  },
  cardEvent2: {
    top: 287,
  },
  cardEvent3: {
    top: 11,
  },
  scrollData: {
    top: 90,
    height: 1161,
  },
  text4: {
    height: "52.5%",
    width: "59.29%",
    top: "22.5%",
    left: "20.36%",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorCoral_100,
    fontWeight: "700",
    lineHeight: 21,
    fontFamily: FontFamily.notoSansThaiUI,
    letterSpacing: 0,
    position: "absolute",
  },
  keyboardArrowLeft: {
    height: "75%",
    width: "7.63%",
    top: "15%",
    right: "90.84%",
    bottom: "10%",
    left: "1.53%",
    display: "none",
  },
  title: {
    top: 50,
    height: 40,
  },
  bottomNavigateBarChild: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
  },
  homeIndicator: {
    height: "4.55%",
    width: "24.81%",
    top: "90.91%",
    right: "37.47%",
    bottom: "4.55%",
    left: "37.72%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.grey700,
    position: "absolute",
  },
  text5: {
    width: "92.29%",
    left: "4.66%",
    top: "41.67%",
    height: "58.33%",
    color: Color.colorCoral_200,
  },
  vectorIcon: {
    left: "0%",
    width: "100%",
    right: "0%",
  },
  profile: {
    width: "4.96%",
    right: "5.96%",
    left: "89.08%",
  },
  text6: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.kalamRegular,
    top: "41.67%",
    height: "58.33%",
    textAlign: "center",
    color: Color.colorCoral_100,
    lineHeight: 21,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
 
  event: {
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorGainsboro,
  },
});

export default Event1;
