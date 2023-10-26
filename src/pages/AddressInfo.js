import base from "../modules/base_module";
import Layer from "../Layout/lgradient";
import React, { useState, Component, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import BaseURL from "../services/base/base_service";


export default function AddressInfo({ navigation }) {
  const [address, setAddress] = useState("");
  const [newaddress, setNewAddress] = useState("");


  var usersAPI = new BaseURL("users");

  const updateAddress = async () => {
    let path = `${usersAPI.BaseURL}/${JSON.parse(jsonValue).userId}`;
    try {
      const response = await axios.patch(path, {
        address: newaddress
      });
      navigation.navigate('Profile', { text: "text" });
    } catch (error) {
      console.error(error);
    }
  }

  const getUser = async () => {
    try {
      const response = await axios.get(path);
      setAddress(response.data.PatientRecord.address);
    } catch (error) {
      console.error(error);
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      path = `${usersAPI.BaseURL}/${JSON.parse(jsonValue).userId}`;
      getUser();
    } catch (e) {
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layer>
      <base.View style={styles.container}>
        <base.View style={styles.box}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>ที่อยู่</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Addressinput} placeholder="แก้ไขที่อยู่" multiline={true} value={address} onChangeText={address} />
        </base.View>

        <base.View>
          <base.TouchableOpacity
            onPress={() => {
              updateAddress();
            }}
          >
            <base.View
              style={{
                paddingHorizontal: 125,
                paddingVertical: 15,
                marginTop: "165%",
                backgroundColor: "#FF8A48",
                borderRadius: 10,
              }}
            >
              <base.Text style={{ color: "white" }}>ดำเนินการต่อ</base.Text>
            </base.View>
          </base.TouchableOpacity>
        </base.View>
      </base.View>
    </Layer>
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
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
  },
  Realinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    width: "100%",
    marginTop: 10,
    padding: 16,
  },
  Rowinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    width: 179,
    marginTop: 10,
    padding: 16,
  },
  Addressinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: "100%",
    height: 100,
    marginTop: 10,
    padding: 16,
  },
});
