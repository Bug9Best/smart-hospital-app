import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import { View, StyleSheet, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import BaseURL from "../services/base/base_service";

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [firstRender, setFirstRender] = useState(false);

  var usersAPI = new BaseURL("users");
  var path = "";

  const getUser = async () => {
    try {
      const response = await axios.get(path);
      setUser(response.data);
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

  const signout = async () => {
    navigation.navigate('SignIn');
    try {
      await AsyncStorage.removeItem('user');
    } catch (e) {
    }
  }

  useEffect(() => {
    if (!firstRender) {
      getData();
      setFirstRender(true);
    }
  }, [firstRender]);

  return (
    <base.SafeAreaView style={styles.box}>
      <base.ScrollView>
        <View style={styles.DisplayProfile}>
          <Image
            source={require('../assets/image/Cat.jpeg')}
            style={styles.profileImage} />
          <Text style={{ marginTop: 10, fontWeight: 'bold', color: '#FF8A48', fontSize: 22 }}>{`${user?.PatientRecord.firstName} ${user?.PatientRecord.lastName}`}</Text>
          <Text style={{ marginTop: 10, fontWeight: 'bold', color: 'black', fontSize: 17 }}>HN : {user?.PatientRecord.hnNumber}</Text>
        </View>

        <View>
          <base.TouchableOpacity style={styles.addressButton} onPress={() => { navigation.navigate('Policy', { text: "text" }) }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons style={styles.icons} name="document-text-outline" size={24} />
              <Text style={styles.addressButtonText}>ข้อกำหนดและเงื่อนไข</Text>
            </View>
            <View>
              <Ionicons style={styles.icons} name="chevron-forward-outline" size={24} />
            </View>
          </base.TouchableOpacity>

          <base.TouchableOpacity style={styles.addressButton} onPress={() => { navigation.navigate('Privacy', { text: "text" }) }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons style={styles.icons} name="document-text-outline" size={24} />
              <Text style={styles.addressButtonText}>นโยบายความเป็นส่วนตัว</Text>
            </View>
            <View>
              <Ionicons style={styles.icons} name="chevron-forward-outline" size={24} />
            </View>
          </base.TouchableOpacity>
          
          <View>
            <base.TouchableOpacity style={styles.logoutButton} onPress={() => { signout() }}>
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
    padding: 16,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
  },

  DisplayProfile: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 16,
    backgroundColor: "white",
    borderColor: "#7d869e40",
    shadowColor: "#7d869e40",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    width: 380,
    paddingBottom: 16,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 300,
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: "#FF8A48",
    marginTop: 40, // Adjust the marginTop as needed
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
    color: "black",
    marginTop: 13, // Adjust the marginTop as needed
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  addressButtonText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  icons: {
    color: "gray",
  }

});

export default Profile;
