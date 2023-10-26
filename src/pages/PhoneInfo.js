import base from "../modules/base_module";
import Layer from "../Layout/lgradient";
import React, { useState, Component, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


export default function PhoneInfo({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState(false);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      setPhoneNumber(jsonValue.PatientRecord.phoneNumber);
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
          <base.View style={{ display: "flex", flexDirection: "column" }}>

            <base.View style={{ display: "flex", flexDirection: "row" }}>
              <base.Text>เบอร์โทรศัพท์</base.Text>
              <base.Text style={{ color: "red" }}>*</base.Text>
            </base.View>
            <base.TextInput
              style={styles.Realinput}
              placeholder="เช่น 0988888888"
            />
          </base.View>
        </base.View>
        <base.View>
          <base.TouchableOpacity onPress={() => { navigation.navigate('Profile', { text: "text" }) }}>
            <base.View
              style={{
                paddingHorizontal: 125,
                paddingVertical: 15,
                marginTop: "170%",
                backgroundColor: "#FF8A48",
                borderRadius: 10,
              }}
            >
              <base.Text style={{ color: "white", }}>
                ดำเนินการต่อ
              </base.Text>
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
    height: "15%",
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
});
