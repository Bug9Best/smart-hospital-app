import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import BaseURL from "../services/base/base_service";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Layer from "../Layout/lgradient";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


const Home = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [listqueue, setListQueue] = useState(null);
  const [queue, setQueue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalQueue, setModalQueueVisible] = useState(false);
  const [modalAppoint, setAppoint] = useState(false);

  var usersAPI = new BaseURL("users");
  var queueAPI = new BaseURL("queue");
  var path = "";

  const getUser = async () => {
    try {
      const response = await axios.get(path);
      setUser(response.data);
      setQueue(response.data.PatientRecord.Qeue);
    } catch (error) {
      console.error(error);
    }
  }

  const getQueue = async () => {
    try {
      const response = await axios.get(queueAPI.BaseURL);
      setListQueue(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      path = `${usersAPI.BaseURL}/${JSON.parse(jsonValue).userId}`;
      getUser();
    } catch (e) {
    }
  };

  const addQueue = async () => {
    let data = {
      userId: user.userId,
      status: "WAITING",
      date: new Date(),
    }
    try {
      const response = await axios.post(queueAPI.BaseURL, data);
      alert("จองคิวสำเร็จ");
      getUser();
    } catch (error) {
      console.error(error);
      alert("ไม่สามารถจองคิวได้");
    }
  };

  const addAppoint = async () => {
    console.log("addAppoint");
  };

  useEffect(() => {
    getData();
    getQueue();
  }, []);

  return (

    <base.SafeAreaView style={styles.box}>

      <base.Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <base.View style={styles.centeredView}>
          <base.View style={styles.modalView}>
            <base.Text style={styles.modalText}>เลือกดำเนินการ</base.Text>
            <base.TouchableOpacity
              style={{
                paddingHorizontal: 96,
                paddingVertical: 5,
                marginTop: "3%",
                backgroundColor: "#FF8A48",
                borderRadius: 10,
              }}
              onPress={() => {
                setModalQueueVisible(true);
                setModalVisible(false)
              }}>
              <base.Text
                style={{
                  fontSize: 12,
                  padding: 16,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}>
                จองคิวออนไลน์
              </base.Text>
            </base.TouchableOpacity>
            <base.TouchableOpacity
              style={{
                paddingHorizontal: 91,
                paddingVertical: 5,
                marginTop: "5%",
                backgroundColor: "#FF8A48",
                borderRadius: 10,
              }}
              onPress={() => {
                setAppoint(true);
                setModalVisible(false)
              }}>
              <base.Text
                style={{
                  fontSize: 12,
                  padding: 16,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}>
                นัดหมายออนไลน์
              </base.Text>
            </base.TouchableOpacity>
            <base.TouchableOpacity
              style={{
                paddingHorizontal: 100,
                paddingVertical: 5,
                marginTop: "5%",
                borderRadius: 10,
                borderWidth: 0.5,
                marginTop: 30,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);

              }}>
              <base.Text
                style={{
                  fontSize: 12,
                  padding: 16,
                  color: "#FF8A48",
                  fontWeight: "bold",
                  textAlign: "center",
                }}>
                ปิดหน้าต่างนี้
              </base.Text>
            </base.TouchableOpacity>
          </base.View>
        </base.View>
      </base.Modal>

      <base.Modal
        animationType="fade"
        transparent={true}
        visible={modalQueue}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalQueue);
        }}>
        <base.View style={styles.centeredView}>
          <base.View style={styles.modalView}>
            <base.Text style={styles.modalText}>จองคิวออนไลน์</base.Text>
            <base.Text
              style={{
                fontSize: 15,
                padding: 16,
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
              }}>
              {listqueue ? `มีคิวก่อนหน้าคุณ ${listqueue.length} คิว` : "ยังไม่มีคิวก่อนหน้า คุณเป็นคิวแรก"}
            </base.Text>
            <base.TouchableOpacity
              style={{
                paddingHorizontal: 110,
                paddingVertical: 2,
                marginTop: "5%",
                backgroundColor: "#FF8A48",
                borderRadius: 10,
              }}
              onPress={() => {
                setModalQueueVisible(!modalQueue);
                addQueue();
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
                paddingHorizontal: 110,
                paddingVertical: 5,
                marginTop: "5%",
                borderRadius: 10,
                borderWidth: 0.5
              }}
              onPress={() => {
                setModalQueueVisible(!modalQueue);
                setModalVisible(true)

              }}>
              <base.Text
                style={{
                  fontSize: 12,
                  padding: 16,
                  color: "#FF8A48",
                  fontWeight: "bold",
                  textAlign: "center",
                }}>
                ปิดหน้าต่างนี้
              </base.Text>
            </base.TouchableOpacity>
          </base.View>
        </base.View>
      </base.Modal>
      <base.Modal
        animationType="fade"
        transparent={true}
        visible={modalAppoint}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalAppoint);
        }}>
        <base.View style={styles.centeredView}>
          <base.View style={styles.modalView}>
            <base.Text style={styles.modalText}>นัดหมายออนไลน์</base.Text>
            <base.TextInput
              style={styles.Realinput}
              placeholder="กรอก"
              placeholderTextColor={"#FF8A48"}

            />
            <base.TextInput
              style={styles.Realinput}
              placeholder="กรอก"
              placeholderTextColor={"#FF8A48"}

            />
            <base.TouchableOpacity
              style={{
                paddingHorizontal: 110,
                paddingVertical: 5,
                marginTop: "5%",
                backgroundColor: "#FF8A48",
                borderRadius: 10,
              }}
              onPress={() => {
                setAppoint(!modalAppoint);
                addAppoint();
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
                paddingHorizontal: 110,
                paddingVertical: 5,
                marginTop: "5%",
                borderRadius: 10,
                borderWidth: 0.5
              }}
              onPress={() => {
                setAppoint(!modalAppoint);
                setModalVisible(true)
              }}>
              <base.Text
                style={{
                  fontSize: 12,
                  padding: 16,
                  color: "#ED7D31",
                  fontWeight: "bold",
                  textAlign: "center",
                }}>
                ปิดหน้าต่างนี้
              </base.Text>
            </base.TouchableOpacity>

          </base.View>
        </base.View>
      </base.Modal>


      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.DisplayProfile}>
          <Image
            source={require("../assets/image/Cat.jpeg")}
            style={styles.profileImage}
          />
          <Text
            style={{ marginTop: -30, marginLeft: -250, fontWeight: "bold" }}
          >
            ยินดีต้อนรับ
          </Text>
          <Text style={{ marginTop: 20, marginLeft: -70, fontWeight: "light" }}>
            {`${user?.PatientRecord.firstName} ${user?.PatientRecord.lastName}`}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              color: "#FF8A48",
              marginLeft: 330,
              marginTop: -35,
            }}
          >
            <Ionicons name="notifications" size={32} color="#FF8A48" />
          </Text>
        </View>

        <View style={styles.rectangle}>
          {/* แถวบน */}
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity>
              <View style={{}}>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="calendar" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  ตารางเวรแพทย์
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Formdownload", { text: "text" })
              }
            >
              <View>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="document" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  แบบฟอร์ม
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Staff", { text: "text" })}
            >
              <View>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="people" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  บุคลากร
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Druginfo", { text: "text" })}
            >
              <View>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="alert-circle" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  ความรู้เรื่องยา
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* แถวล่าง */}
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Aboutus", { text: "text" })}
            >
              <View style={{ marginTop: 20, marginLeft: 15 }}>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="business" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  เกี่ยวกับเรา
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Contactus", { text: "text" })}
            >
              <View style={{ marginTop: 20, marginLeft: 22 }}>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="call" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  ติดต่อเรา
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 10,
            marginRight: 230,
            color: "#FF8A48",
          }}
        >
          รายการนัดหมาย
        </Text>

        <View style={styles.smallRectangle}>
          <Text></Text>
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 10,
            marginRight: 270,
            color: "#FF8A48",
          }}
        >
          คิวของคุณ
        </Text>

        <View style={styles.smallRectangle}>
          <Text style={styles.textCard}>{queue ? `คิวของคุณคือคิวลำดับที่ ${queue[listqueue.length -1].id}` : "คุณยังไม่มีคิว"}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginBottom: 20,
              color: "#FF8A48",
              marginLeft: 340,
              position: "absolute",
              bottom: 0,
            }}
          ></Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <Ionicons name="add-circle-sharp" size={70} color="#FF8A48" />
        </View>
      </TouchableOpacity>
    </base.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  DisplayProfile: {
    backgroundColor: "white",
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#7d869e40",
    borderRadius: 12,
    shadowColor: "#7d869e40",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    height: 80,
    width: 400,
    alignItems: "center",
    flexDirection: "row",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 1,
    marginRight: 300,
    marginHorizontal: 15,
  },
  rectangle: {
    marginHorizontal: 15,
    justifyContent: "center",
    flexDirection: "space-between",
    backgroundColor: "white",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#7d869e40",
    borderRadius: 12,
    shadowColor: "#7d869e40",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    height: 200,
    width: 400,
    padding: 20,
  },
  smallRectangle: {
    backgroundColor: "white",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#7d869e40",
    borderRadius: 12,
    shadowColor: "#7d869e40",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    height: 98,
    width: 400,
  },
  modalView: {
    color: "#ED7D31",
    margin: 20,
    marginTop: "20%",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Realinput: {
    borderRadius: 10,
    height: 50,
    borderWidth: 0.5,
    width: "90%",
    marginTop: "5%",
    padding: 16,
  },
  textCard: {
    textAlign: "center",
    marginTop: 35,
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default Home;
