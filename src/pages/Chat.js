import React, { useState, Component, useEffect } from "react";
import base from '../modules/base_module'
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Layer from "../Layout/lgradient";
import Input from "../components/input";
import { Entypo as Icon } from '@expo/vector-icons';


export default function Chat({ }) {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  var usersAPI = new BaseURL("users");
  var path = "";

  const getUser = async () => {
    try {
      const response = await axios.get(path);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      console.log(jsonValue)
      path = `${usersAPI.BaseURL}/${JSON.parse(jsonValue).userId}`;
      console.log(path)
      getUser();
    } catch (e) {
    }
  };

  const send = async () => {
    await getData();

    // try {
    // } catch (e) {
    // }
  }

  useEffect(() => {
  }, []);

  return (
    <Layer>
      <base.SafeAreaView style={styles.container}>
        <base.ScrollView>
          <base.View>
          </base.View>
        </base.ScrollView>
        <base.View style={styles.messageContainer}>
          <base.View style={styles.customInput}>
            <Input onChangeText={setMessage}>
            </Input>
          </base.View>
          <base.TouchableOpacity style={styles.sendButton} onPress={() => { send() }}>
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
    alignItems: "center",
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
    fontSize: 15
  },

  subTitle: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center"
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
});