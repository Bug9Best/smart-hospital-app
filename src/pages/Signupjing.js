import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import DateTimePicker from '@react-native-community/datetimepicker';
import Layer from "../Layout/lgradient";


export default function Signupjing({ navigation }) {
  const [open, setOpen] = useState(false)
  const [citizenId, setCitizenId] = useState();
  const [prefix, setPrefix] = useState();
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  sinin = () => {
    console.log("sinin");
  };
  return (
    <base.View style={styles.container}>
      <base.View style={styles.box}>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text>หมายเลขบัตรประชาชน</base.Text>
            <base.Text style={{ color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="13 หลัก" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>คำนำหน้า</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="ex. นาย" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>ชื่อจริง</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="ex.แสนดี" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>ชื่อกลาง</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="ex. ยอดมาก" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>
          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>นามสกุล</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <base.TextInput style={styles.Realinput} placeholder="ยอดงาม" />
        </base.View>
        <base.View style={{ display: "flex", flexDirection: "column" }}>

          <base.View style={{ display: "flex", flexDirection: "row" }}>
            <base.Text style={{ marginTop: 10 }}>วันเดือนปีเกิด</base.Text>
            <base.Text style={{ marginTop: 10, color: "red" }}>*</base.Text>
          </base.View>
          <DateTimePicker
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
          <base.TextInput style={styles.Addressinput} placeholder="รายละเอียดพอสังเขป" multiline={true} />
        </base.View>


      </base.View>
      <base.View>
        <base.TouchableOpacity onPress={() => sinin()}>
          <base.View
            style={{
              paddingHorizontal: 125,
              paddingVertical: 15,
              marginTop: 30,
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
    width: "95%",
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
    marginLeft: 15,
    marginRight: 15,
  },
  Realinput: {
    borderWidth: 0.2,
    borderRadius: 10,
    height: 50,
    width: "100%",
    marginTop: 10,
    padding: 16,
  },
  Addressinput: {
    borderWidth: 0.2,
    borderRadius: 10,
    width: "100%",
    height: 100,
    marginTop: 10,
    padding: 16,
  },
});
