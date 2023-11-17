import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Layer from "../Layout/lgradient";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryDetail = ({ route }) => {
  const { appoint } = route.params;
  var appointService = new BaseURL('users');
  var path = "";

  return (
    <Layer>
      <base.SafeAreaView style={styles.container}>
        <base.ScrollView contentContainerStyle={styles.scrollViewContent}>
          {appoint?.map((item) => {
            return (
              <base.TouchableOpacity onPress={() => console.log(appoint)}>
                <base.View style={styles.eventCard}>
                  <base.Text style={styles.eventTitle}>{item.title}</base.Text>
                  <base.Text style={styles.eventDate}>แพทย์ : {item.Doctor.prefix + item.Doctor.firstName + " " + item.Doctor?.lastName}</base.Text>
                  <base.Text style={styles.eventDate}>{item.date}</base.Text>
                </base.View>
              </base.TouchableOpacity>)
          })}
        </base.ScrollView>
      </base.SafeAreaView>
    </Layer>
  );
};


const styles = base.StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  title: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -1,
  },
  eventCard: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },

  centerImage: {
    justifyContent: 'end',
    alignItems: 'center',
  },

  eventImage: {
    height: 170,
    width: 480,
    resizeMode: "cover",
  },

  eventTitle: {
    padding: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  eventDate: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontSize: 14,
    color: "#3F3D3C",
  },
});

export default HistoryDetail;
