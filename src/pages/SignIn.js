import { useState, useEffect } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Layer from "../Layout/lgradient";
import base from "../modules/base_module";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Signin({ navigation }) {
  const [tab, setTab] = useState(true);

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
                    style={{ color: tab ? "#FF8A48" : "black", fontSize: 21 }}
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
                    style={{ color: tab ? "black" : "#FF8A48", fontSize: 21 }}
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
                <base.TextInput
                  style={styles.Realinput}
                  placeholder="E-mail"
                />
                <base.TextInput
                  style={styles.Realinput}
                  placeholder="Password"
                />
                <base.TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Appnav", { text: "text" });
                  }}
                >
                  <base.View
                    style={{
                      paddingHorizontal: 145,
                      paddingVertical: 20,
                      margin: 20,
                      backgroundColor: "#FF8A48",
                      borderRadius: 10,
                    }}
                  >
                    <base.Text style={{ color: "white" }}>
                      เข้าสู่ระบบ
                    </base.Text>
                  </base.View>
                </base.TouchableOpacity>
                <base.TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Forgetpassword", { text: "text" });
                  }}
                >
                  <base.View
                    style={{
                      paddingHorizontal: 140,
                      paddingVertical: 20,
                      borderRadius: 10,
                      borderWidth: 0.5,
                      borderColor: "#FF8A48",
                    }}
                  >
                    <base.Text style={{ color: "#FF8A48" }}>
                      ลืมรหัสผ่าน
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
                    navigation.navigate("Register", { text: "text" });
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
                <base.TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Newsignup", { text: "text" });
                  }}
                >
                  <base.View
                    style={{
                      paddingHorizontal: 110,
                      paddingVertical: 20,
                      borderRadius: 10,
                      borderWidth: 0.5,
                      borderColor: "#FF8A48",
                    }}
                  >
                    <base.Text style={{ color: "#FF8A48"}}>
                      ลงทะเบียนผู้ป่วยใหม่
                    </base.Text>
                  </base.View>
                </base.TouchableOpacity>
              </base.View>
            )}
          </base.View>
        </base.SafeAreaView>
      </base.View>
    </Layer>
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
    borderWidth: "0.2%",
    width: "90%",
    marginTop: "5%",
    padding: 16,
  },
});
