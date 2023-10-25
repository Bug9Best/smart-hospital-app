import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import Ionicons from "@expo/vector-icons/Ionicons";
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Layer from "../Layout/lgradient";

const drug = [
  {
    title: "Haerin1",
  },
  {
    title: "Haerin1",
  },
  {
    title: "Haerin1",
  },
];

export default function Druginfo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  // const [firstRender, setFirstRender] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [drug, setDrug] = useState();

  // var drugService = new BaseURL("drug");

  // const getDrug = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get(drugService.BaseURL);
  //     if (response.status === 200) {
  //       setDrug(response.data);
  //       setIsLoading(false);
  //     } else {
  //       throw new Error("An error has occurred");
  //     }
  //   } catch (error) {
  //     alert("An error has occurred");
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   if (!firstRender) {
  //     getDrug();
  //     setFirstRender(true);
  //   }
  // }, [drug, firstRender])

  return (
    <base.View style={styles.container}>
      <base.Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <base.View style={styles.centeredView}>
          <base.View style={styles.modalView}>
            <base.Image
              source={require("../assets/image/Haerin.png")}
              style={{ width: 200, height: 300, marginTop: 10 }}
            />
            <base.Text style={{marginTop: 10, fontWeight: "bold", fontSize: 18}}>
            asdasdasd
            </base.Text>
            <base.Text style={{marginTop: 10,  fontSize: 16}}>
            คลินิกเวชกรรม สจล. เดิมที เป็นหน่วยงานสุขภาพอนามัย บริหารภายใต้สังกัด
          กองกิจการนักศึกษา สำนักงานอธิการบดี สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณ
          ทหารลาดกระบัง ภายหลังเปลี่ยนเป็น คลินิกเวชกรรม สจล. บริหารภายใต้สังกัด
          คณะแพทยศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            </base.Text>
            <base.TouchableOpacity
              style={{
                paddingHorizontal: 100,
                paddingVertical: 5,
                marginTop: "45%",
                backgroundColor: "#FF8A48",
                borderRadius: 10,
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <base.Text
                style={{
                  fontSize: 12,
                  padding: 16,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ปิดหน้าต่างนี้
              </base.Text>
            </base.TouchableOpacity>
          </base.View>
        </base.View>
      </base.Modal>
      <base.ScrollView>
        <base.View style={{ alignItems: "center" }}>
          <base.TextInput
            style={styles.Realinput}
            placeholder="ค้นหาความรู้เรื่องยา"
          >
            <Ionicons name="search-outline" />
          </base.TextInput>
        </base.View>
        <base.FlatList
          data={drug}
          renderItem={({ item }) => {
            return (
              <base.TouchableOpacity onPress={() => setModalVisible(true)}>
                <base.View
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 16,
                    marginTop: 10,
                  }}
                >
                  <base.View style={{ flexDirection: "row" }}>
                    <base.View style={{ padding: 20 }}>
                      <base.Text style={{ fontSize: 20, fontWeight: 400 }}>
                        {item.title}
                      </base.Text>
                      <base.Text style={{ marginTop: 10, fontSize: 20 }}>
                        {item.title}
                      </base.Text>
                    </base.View>
                  </base.View>
                </base.View>
              </base.TouchableOpacity>
            );
          }}
        />
      </base.ScrollView>
    </base.View>
  );
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  Realinput: {
    flex: 1,
    borderRadius: 10,
    height: "50%",
    borderWidth: 0.1,
    width: "95%",
    marginTop: 5,
    padding: 16,
    backgroundColor: "white",
  },
  modalView: {
    margin: 20,
    marginTop: "20%",
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    height: "80%",
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 100,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
