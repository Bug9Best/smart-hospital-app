import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Layer from "../Layout/lgradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from '@react-native-community/datetimepicker';


const HistoryDetail = ({ route }) => {
  const { appoint } = route.params;
  var appointService = new BaseURL("users");
  var path = "";

  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  console.log(appoint);

  return (
    <Layer>
      <base.Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <base.View style={styles.centeredView}>
          <base.View style={styles.modalView}>
            <base.Text style={styles.modalText}>เลือกดำเนินการ</base.Text>
            <base.View>
            <DateTimePicker
                style={{ alignSelf: "start", marginLeft: -10, marginTop: 10 }}
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
              </base.View>
              <base.TouchableOpacity
                style={{
                  paddingHorizontal: 128,
                  paddingVertical: 5,
                  marginTop: "5%",
                  backgroundColor: "#FF8A48",
                  borderRadius: 10,
                }}
                onPress={() => {

                }}>
                <base.Text
                  style={{
                    fontSize: 12,
                    padding: 16,
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}>
                  ดำเนินการต่อ
                </base.Text>
              </base.TouchableOpacity>
            <base.TouchableOpacity
              style={{
                paddingHorizontal: 100,
                paddingVertical: 5,
                marginTop: "5%",
                borderRadius: 10,
                borderWidth: 0.5,
                marginTop: 20,
                width: "100%",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              
              <base.Text
                style={{
                  fontSize: 12,
                  padding: 16,
                  color: "#FF8A48",
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
      <base.SafeAreaView style={styles.container}>
        <base.ScrollView contentContainerStyle={styles.scrollViewContent}>
          <base.TouchableOpacity onPress={() => console.log(appoint)}>
            <base.View style={styles.eventCard}>
              <base.Text style={{marginLeft: 15, fontSize: 18, marginTop: 10}}>

              รายละเอียดผู้ทำการนัดหมาย</base.Text>
            <base.View style={{marginTop: 10}}>
              <base.Text style={styles.eventDate}>
                แพทย์ :{" "}
                {appoint.Doctor.prefix +
                  appoint.Doctor.firstName +
                  " " +
                  appoint.Doctor?.lastName}
              </base.Text>
              </base.View>
              <base.Text style={styles.eventDate}>{appoint.date}</base.Text>
              <base.Text style={styles.eventDate}>
                {appoint.description}
              </base.Text>
            </base.View>
            <base.View style={styles.eventCard}>
              <base.Text style={{marginLeft: 15, fontSize: 18, marginTop: 10}}>

              รายการละเอียดการนัด</base.Text>
              <base.Text style={styles.eventTitle}>{appoint.title}</base.Text>
              <base.Text style={styles.eventDate}>
                แพทย์ :{" "}
                {appoint.Doctor.prefix +
                  appoint.Doctor.firstName +
                  " " +
                  appoint.Doctor?.lastName}
              </base.Text>
              <base.Text style={styles.eventDate}>{appoint.date}</base.Text>
              <base.Text style={styles.eventDate}>
                {appoint.status}
              </base.Text>
            </base.View>
          </base.TouchableOpacity>
          <base.View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <base.TouchableOpacity
              style={styles.sendButton}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <base.Text style={styles.sendButtonText}>เลื่อนนัดหมาย</base.Text>
            </base.TouchableOpacity>
            <base.TouchableOpacity
              style={styles.sendButton}
              onPress={() => {
                send();
              }}
            >
              <base.Text style={styles.sendButtonText}>ยกเลิกนัดหมาย</base.Text>
            </base.TouchableOpacity>
          </base.View>
        </base.ScrollView>
      </base.SafeAreaView>
    </Layer>
  );
};

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  title: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -1,
  },
  eventCard: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },

  centerImage: {
    justifyContent: "end",
    alignItems: "center",
  },

  eventImage: {
    height: 170,
    width: 480,
    resizeMode: "cover",
  },

  eventTitle: {
    padding: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  eventDate: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontSize: 14,
    color: "#3F3D3C",
  },
  sendButton: {
    backgroundColor: "#FF8A48",
    width: "90%",
    marginTop: 10,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalView: {
    color: "#ED7D31",
    margin: 20,
    marginTop: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
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
    marginTop: 20,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HistoryDetail;
