import { useState, useEffect } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Layer from "../Layout/lgradient";
import base from "../modules/base_module";
import BaseURL from "../services/base/base_service";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../components/input";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Signin({ navigation }) {
  const [tab, setTab] = useState(true);

  var authAPI = new BaseURL("auth/login/user");

  const signin = async () => {
    let data = {
      citizenId: formik.values.citizenId,
      password: formik.values.password,
    };

    try {
      const response = await axios.post(authAPI.BaseURL, data);
      if (response.data) {
        const jsonValue = JSON.stringify(response.data);
        await AsyncStorage.setItem("user", jsonValue);
        navigation.navigate("Appnav", { text: "text" });
      }
    } catch (error) {
      alert("รหัสผ่านไม่ถูกต้อง");
    }
  };

  const LoginSchema = Yup.object().shape({
    citizenId: Yup.string()
      .min(12, "Your Citizen Id too short")
      .max(100, "Too long")
      .required("Required"),
    password: Yup.string()
      .min(4, "Your Password too short")
      .max(100, "Too long")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      citizenId: "",
      password: ""
    },
    onSubmit: values => {
    },
    validationSchema: LoginSchema,


  });

  return (

    <Layer>
      <base.View style={styles.container}>
        <base.SafeAreaView>
          <base.View style={styles.Image}>
            <base.Image
              source={require("../assets/Kmitl-logo.png")}
              style={{ width: "40%", height: "60%" }}
            ></base.Image>
          </base.View>
          <base.View style={styles.Input}>
            <base.View style={{ flexDirection: "row", gap: 50 }}>
              <TouchableOpacity
                onPress={() => {
                  setTab(true);
                }}
              >
                <base.View
                  style={{
                    borderColor: tab ? "#FF8A48" : "black",
                    borderBottomWidth: tab ? 2 : 0,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <base.Text
                    style={{
                      color: tab ? "#FF8A48" : "black",
                      fontSize: 21,
                    }}
                  >
                    เข้าสู่ระบบ
                  </base.Text>
                </base.View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setTab(false);
                }}
              >
                <base.View
                  style={{
                    borderColor: tab ? "black" : "#FF8A48",
                    borderBottomWidth: tab ? 0 : 2,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <base.Text
                    style={{
                      color: tab ? "black" : "#FF8A48",
                      fontSize: 21,
                    }}
                  >
                    ลงทะเบียน
                  </base.Text>
                </base.View>
              </TouchableOpacity>
            </base.View>

            {tab ? (
              <base.View
                style={{
                  alignItems: "center",
                  width: windowWidth,
                  marginTop: 20,
                }}
              >
                <base.View
                  style={{
                    width: 380,
                  }}
                >
                  <Input
                    icon="user"
                    placeholder="หมายเลขบัตรประชาชน"
                    onChangeText={formik.handleChange('citizenId')}
                    error={formik.errors.citizenId}
                    touched={formik.touched.citizenId}
                    onBlur={formik.handleBlur('citizenId')}
                    value={formik.values.citizenId}
                  />
                </base.View>
                <base.View
                  style={{
                    width: 380,
                    marginTop: 20,
                  }}
                >
                  <Input
                    icon="lock"
                    error={formik.errors.password}
                    touched={formik.touched.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    value={formik.values.password}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                </base.View>

                <base.TouchableOpacity
                  onPress={async () => {
                    await signin();
                  }}
                >
                  <base.View
                    style={{
                      paddingHorizontal: 165,
                      paddingVertical: 20,
                      marginTop: 25,
                      backgroundColor: "#FF8A48",
                      borderRadius: 10,
                    }}
                  >
                    <base.Text style={{ color: "white" }}>
                      เข้าสู่ระบบ
                    </base.Text>
                  </base.View>
                </base.TouchableOpacity>
              </base.View>
            ) : (
              <base.View
                style={{
                  alignItems: "center",
                  width: windowWidth,
                  marginTop: 20,
                }}
              >
                <base.TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Newsignup", { text: "text" });
                  }}
                >
                  <base.View
                    style={{
                      paddingHorizontal: 112,
                      paddingVertical: 20,
                      margin: 20,
                      backgroundColor: "#FF8A48",
                      borderRadius: 10,
                    }}
                  >
                    <base.Text style={{ color: "white" }}>
                      ลงทะเบียนเข้าใช้งาน
                    </base.Text>
                  </base.View>
                </base.TouchableOpacity>
              </base.View>
            )}
          </base.View>
        </base.SafeAreaView>
      </base.View >
    </Layer >
  );
}
const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: "1px",
    width: windowWidth,
  },
  Input: {
    flex: 2,
    alignItems: "center",
    width: windowWidth,
  },
  Realinput: {
    borderRadius: 10,
    height: 50,
    borderWidth: 0.5,
    width: "90%",
    marginTop: "5%",
    padding: 16,
  },
});
