import React from "react";
import base from "../modules/base_module";
import { View, StyleSheet, Text, Image, Pressable, ScrollView, } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Layer from "../Layout/lgradient";


const Profile = ({ navigation }) => {
  return (
    <base.SafeAreaView style={styles.box}>
      <base.ScrollView>
        <View style={styles.header}>
        </View>
        <View style={styles.DisplayProfile}>
          <Image
            source={require('../assets/image/Cat.jpeg')}
            style={styles.profileImage}
          />
          <Text style={{ marginTop: -90, marginLeft: 100, fontWeight: 'bold', color: '#FF8A48', fontSize: 17 }}>ชื่อ : นายนันทนนท์ จินขุนทอง</Text>
          <Text style={{ marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'black', fontSize: 17 }}>HN : 5915159</Text>
          <Text style={{ marginTop: 10, marginLeft: -33, fontWeight: 'bold', color: 'black', fontSize: 17 }}>อายุ 21 ปี</Text>
        </View>

        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 300, color: '#FF8A48', marginVertical: 15 }}>
            การตั้งค่า
          </Text>

          {/* Add the "ที่อยู่" button */}
          <base.TouchableOpacity style={styles.addressButton} onPress={() => { navigation.navigate('AddressInfo', { text: "text" }) }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="map-outline" size={32} />
              <Text style={styles.addressButtonText}>ที่อยู่</Text>
            </View>

            <View>
              <Ionicons name="chevron-forward-outline" size={32} />
            </View>
          </base.TouchableOpacity>

          <base.TouchableOpacity style={styles.addressButton} onPress={() => { navigation.navigate('PhoneInfo', { text: "text" }) }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="phone-portrait-outline" size={32} />
              <Text style={styles.addressButtonText}>เบอร์โทรศัพท์</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={32} />
            </View>
          </base.TouchableOpacity>

          <base.TouchableOpacity style={styles.addressButton} onPress={() => { navigation.navigate('Policy', { text: "text" }) }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="document-text-outline" size={32} />
              <Text style={styles.addressButtonText}>ข้อกำหนดและเงื่อนไข</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={32} />
            </View>
          </base.TouchableOpacity>

          <base.TouchableOpacity style={styles.addressButton} onPress={() => { navigation.navigate('Privacy', { text: "text" }) }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="document-text-outline" size={32} />
              <Text style={styles.addressButtonText}>นโยบายความเป็นส่วนตัว</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={32} />
            </View>
          </base.TouchableOpacity>

          <base.TouchableOpacity style={styles.addressButton}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="trash-outline" size={32} />
              <Text style={styles.addressButtonText}>ลบบัญชีผู้ใช้</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={32} />
            </View>
          </base.TouchableOpacity>
          <View>
            <base.TouchableOpacity style={styles.logoutButton} onPress={() => { navigation.navigate('SignIn') }}>
              <Text style={styles.logoutButtonText}>ออกจากระบบ</Text>
            </base.TouchableOpacity>
          </View>
        </View>
      </base.ScrollView>
    </base.SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#F0F0F0",
    alignItems: "center",
  },
  DisplayProfile: {
    backgroundColor: "white",
    marginTop: 15, // 
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
    height: 150,
    width: 380,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 300,
    marginTop: 20,
    marginRight: 250,
  },
  logoutButton: {
    backgroundColor: "#FF8A48",
    marginTop: 20, // Adjust the marginTop as needed
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleText: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  addressButton: {
    backgroundColor: "white",
    marginTop: 13, // Adjust the marginTop as needed
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  addressButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },

});

export default Profile;
