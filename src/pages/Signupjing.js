import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import DateTimePicker from '@react-native-community/datetimepicker';
import Layer from "../Layout/lgradient";
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Input from "../components/input";
import Textareainput from "../components/textareainput";

export default function Signupjing({ navigation }) {
  const [citizenId, setCitizenId] = useState();
  const [password, setPassword] = useState();
  const [prefix, setPrefix] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();

  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  var authAPI = new BaseURL("auth/register/user");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  sinin = async () => {
    let data = {
      citizenId: citizenId,
      password: password,
      prefix: prefix,
      firstName: firstName,
      lastName: lastName,
      birthDate: date,
      address: address,
    };
    try {
      const response = await axios.post(authAPI.BaseURL, data);
      alert("สมัครสมาชิกสำเร็จ");
      navigation.navigate("SignIn");
    } catch (error) {
      alert("สมัครสมาชิกไม่สำเร็จ");
    }
  };
  return (
    <base.View style={styles.container}>
      <base.ScrollView>
      <base.View style={styles.box}>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text>หมายเลขบัตรประชาชน</base.Text>
            <base.Text style={{ color: "red" }}>*</base.Text>
          </base.View>
          <base.View style={{marginTop: 10}}>
          <Input placeholder="13 หลัก" onChangeText={setCitizenId}/>
          </base.View>
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>คำนำหน้า</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.View style={{marginTop: 10}}>
          <Input placeholder="นาย" onChangeText={setPrefix}/>
          </base.View>
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>ชื่อจริง</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.View style={{marginTop: 10, color: "#ede8e8"}}>
          <Input  placeholder="ex: แสนดี" onChangeText={setFirstName}/>
          </base.View>
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>นามสกุล</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.View style={{marginTop: 10}}>
          <Input placeholder="ex: ยอดงาม" onChangeText={setLastName}/>
          </base.View>
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>วันเดือนปีเกิด</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <DateTimePicker
            style={{ alignSelf: "start", marginLeft: -10, marginTop: 10 }}
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>ที่อยู่</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.View style={{marginTop: 10}}>
          <Textareainput  placeholder="ที่อยู่โดยสังเขป" onChangeText={setAddress}/>
          </base.View>
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>รหัสผ่าน</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.View style={{marginTop: 10}}>
          <Input placeholder="ex : 1234" onChangeText={setPassword}/>
          </base.View>
        </base.View>
      </base.View>
      </base.ScrollView>
      <base.View>
        <base.TouchableOpacity onPress={() => sinin()}>
          <base.View
            style={{
              paddingHorizontal: 125,
              paddingVertical: 15,
              marginBottom: 20,
              backgroundColor: "#FF8A48",
              borderRadius: 10,
            }}>
            <base.Text style={{ color: "white" }}>ดำเนินการต่อ</base.Text>
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
    width: 400,
    marginTop: 10,
    borderRadius: 10,
    padding: 16,
    marginLeft: 15,
    marginRight: 15,
  },
  Realinput: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    width: "100%",
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
