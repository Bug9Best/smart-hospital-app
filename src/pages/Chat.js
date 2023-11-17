import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Layer from "../Layout/lgradient";
import Input from "../components/input";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Chat({}) {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  var chatAPI = new BaseURL("chat");
  var pathSend = "";
  var pathGet = "";

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      setUser(JSON.parse(jsonValue));
      getMessage();
    } catch (e) {
      console.log(e);
    }
  };

  const send = async () => {
    let data = {
      senderId: user.userId,
      receiverId: "ff923b50-3537-443b-a7ec-01988dc7ccc9",
      content: message,
    };
    pathSend = `${chatAPI.BaseURL}/send`;
    console.log(pathSend);
    console.log(data);
    try {
      const response = await axios.post(pathSend, data);
      console.log(response.data);
      setMessage("");
      getMessage();
    } catch (error) {
      console.error(error);
    }
  };

  const getMessage = async () => {
    pathGet = `${chatAPI.BaseURL}/${user.userId}`;
    console.log(pathGet);
    try {
      const response = await axios.get(pathGet);
      console.log(response.data);
      setMessage(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layer>
      <base.SafeAreaView style={styles.container}>
        <base.ScrollView>
          <base.View>
          <base.View style={{}}>
            <base.View style={styles.myChatbox}>
              <base.Text>dsafasfasfasfasfasasdasdafedgdsv</base.Text>
            </base.View>
            </base.View>
            <base.View style={styles.anotherChat}>
              <base.Text>dsafasfasfasfasfasasdasdafedgdsv</base.Text>
            </base.View>
          </base.View>
        </base.ScrollView>
        <base.View style={styles.messageContainer}>
          <base.View style={styles.customInput}>
            <Input onChangeText={setMessage}></Input>
          </base.View>
          <base.TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              send();
            }}
          >
            <base.Text style={styles.sendButtonText}>ส่ง</base.Text>
          </base.TouchableOpacity>
        </base.View>
      </base.SafeAreaView>
    </Layer>
  );
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
  },

  box: {
    padding: 16,
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
  },

  subTitle: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
  },

  messageContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },

  customInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  sendButton: {
    backgroundColor: "#FF8A48",
    width: 100,
    marginLeft: 10,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  myChatbox: {
    backgroundColor: "#FF8A48",
    justifyContent: "flex-end",
    marginTop: "5%",
    padding: 16,
    borderRadius: 10,
    width: "50%",
  },
  anotherChat: {
    backgroundColor: "#82c1ff",
    alignItems: "flex-start",
    marginTop: "5%",
    padding: 16,
    borderRadius: 10,
  },
});
