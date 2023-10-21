import React from "react";
import base from "../modules/base_module" 
import { View, StyleSheet, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


const Home = () => {

  return (
    <base.SafeAreaView style={styles.box}>
       
       <base.SafeAreaView style={styles.DisplayProfile}>
  <Image
    source={require('../../assets/image/Cat.jpeg')}
    style={styles.profileImage}
  />
  <Text style={{marginTop: -50, marginLeft: -120, fontWeight: 'bold'}}>ยินดีต้อนรับ</Text>
  <Text style={{marginTop: 7, marginLeft: -40, fontWeight: 'light'}}>Nantanon Jinkunthong</Text>
  <Text style={{alignSelf: 'center', color: '#FF8A48', marginLeft: 330, marginTop: - 35 }}> 
              <Ionicons name="notifications" size={32} color="#FF8A48" />
            </Text>
</base.SafeAreaView>
        
      <View style={styles.rectangle}>


        {/* แถวบน */}
        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'space-around'}}>
          <View style={{}}>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              <Ionicons name="calendar" size={32} color="#FF8A48" />
            </Text>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              ตารางเวรแพทย์
            </Text>
          </View>

          <View>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              <Ionicons name="document" size={32} color="#FF8A48" />
            </Text>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              แบบฟอร์ม
            </Text>
          </View>

          <View>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              <Ionicons name="people" size={32} color="#FF8A48" />
            </Text>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              บุคลากร
            </Text>
          </View>

          <View>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              <Ionicons name="alert-circle" size={32} color="#FF8A48" />
            </Text>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              ความรู้เรื่องยา
            </Text>
          </View>
        </View>

        {/* แถวล่าง */}
        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{marginTop: 20, marginLeft:15 }}>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              <Ionicons name="business" size={32} color="#FF8A48" />
            </Text>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              เกี่ยวกับเรา
            </Text>
          </View>

          <View style={{marginTop: 20, marginLeft:22}}>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
              <Ionicons name="call" size={32} color="#FF8A48" />
            </Text>
            <Text style={{alignSelf: 'center', color: '#FF8A48'}}> 
            ติดต่อเรา
            </Text>
          </View>
        </View>
      
      
      </View>
     
     
        
      <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10, marginRight: 270, color: '#FF8A48' }}>
        รายการนัดหมาย
      </Text>

      <View style={styles.smallRectangle}>
        <Text>
        </Text>
      </View>


      <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10, marginRight: 300, color: '#FF8A48' }}>
        คิวของคุณ
      </Text>

      <View style={styles.smallRectangle}>
        <Text>
        </Text>
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
  <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 20, color: '#FF8A48', marginLeft: 340 }}></Text>
  <Ionicons name="add-circle-sharp" size={70} color="#FF8A48" />
</View>


    </base.SafeAreaView>



  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
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
    width: 395,
    padding: 20
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
    width: 400,
  },
  DisplayProfile: {
    backgroundColor: "white",
    marginBottom: 40,
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
    height: 90,
    width: 400,
    alignItems: "center", // จัดกลางแนวนอน
  },

  profileImage: {
    width: 60, // ปรับขนาดรูปตามที่คุณต้องการ
    height: 60, // ปรับขนาดรูปตามที่คุณต้องการ
    borderRadius: 30, // ทำให้รูปโปรไฟล์เป็นวงกลม
    marginTop: 10, // ระยะห่างด้านบน
    marginRight: 300,
  },

  welcomeText1: {
    fontSize: 15, // ขนาดตัวอักษรของข้อความ "ยินดีต้อนรับ"
    fontWeight: "bold", // รูปแบบตัวอักษรของข้อความ
    color: "#333", // สีข้อความ
    marginTop:  -40,
    marginLeft:  50,  // ระยะห่างด้านบนระหว่างรูปโปรไฟล์และข้อความ
  },

  welcomeText2: {
    fontSize: 15, // ขนาดตัวอักษรของข้อความ "ยินดีต้อนรับ"
    fontWeight: "bold", // รูปแบบตัวอักษรของข้อความ
    color: "#333", // สีข้อความ
    marginTop:  -35,
    marginLeft:  -130,  // ระยะห่างด้านบนระหว่างรูปโปรไฟล์และข้อความ
  },

});

export default Home;
