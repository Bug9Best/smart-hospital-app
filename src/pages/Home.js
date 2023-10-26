// import base from "../modules/base_module";

// export default function Home({ route }) {
//   console.log(route);
//   return (
//     <base.View style={styles.container}>
//       <base.View style={styles.box}>
//         <base.Text>หมายเลขผู้ป่วย(HN) *</base.Text>
//         <base.TextInput
//           style={styles.Realinput}
//           placeholder="useless placeholder"
//         />
//         <base.Text style={{ marginTop: 10 }}>หมายเลขบัตรประชาชน *</base.Text>
//         <base.TextInput
//           style={styles.Realinput}
//           placeholder="useless placeholder"
//         />
//       </base.View>
//       <base.View>
//         <base.TouchableOpacity>
//           <base.View
//             style={{
//                 paddingHorizontal: 125,
//                 paddingVertical: 15,
//                 marginTop: 400,
//                 backgroundColor: "#FF8A48",
//                 borderRadius: 10,
//             }}
//           >
//             <base.Text style={{fontSize: 20, color: "white", fontWeight: 800}}>
//             ดำเนินการต่อ
//             </base.Text>
//           </base.View>
//         </base.TouchableOpacity>
//       </base.View>
//     </base.View>
//   );
// }

// const styles = base.StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//   },
//   box: {
//     backgroundColor: "white",
//     width: "95%",
//     height: "30%",
//     marginTop: 15,
//     borderRadius: 10,
//     padding: 10,
//   },
//   Realinput: {
//     borderWidth: "2px",
//     borderRadius: 10,
//     height: 50,
//     borderWidth: 0.5,
//     width: "90%",
//     marginTop: 10,
//     padding: 10,
//   },
// });
import React from "react";
import base from "../modules/base_module";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  return (
    <base.SafeAreaView style={styles.box}>
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
            Nantanon Jinkunthong
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
            <TouchableOpacity onPress={() => handleTopIconPress("calendar")}>
              <View style={{}}>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="calendar" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  ตารางเวรแพทย์
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTopIconPress("document")}>
              <View>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="document" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  แบบฟอร์ม
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTopIconPress("people")}>
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
              onPress={() => handleTopIconPress("alert-circle")}
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
            <TouchableOpacity onPress={() => handleBottomIconPress("business")}>
              <View style={{ marginTop: 20, marginLeft: 15 }}>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  <Ionicons name="business" size={32} color="#FF8A48" />
                </Text>
                <Text style={{ alignSelf: "center", color: "#FF8A48" }}>
                  เกี่ยวกับเรา
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleBottomIconPress("call")}>
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
          <Text></Text>
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
      <TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          marginRight: 10,
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
    width: "85%",
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
    marginBottom: 50,
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
    width: 365,
    padding: 20,
  },
  smallRectangle: {
    backgroundColor: "white",
    marginBottom: 50,
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
    width: "78%",
  },
});

export default Home;
