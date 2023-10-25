import React, { useState, Component, useEffect } from "react";
import base from '../modules/base_module'
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Layer from "../Layout/lgradient";

export default function Staff({ navigation }) {
  const [firstRender, setFirstRender] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [doctor, setDoctor] = useState();
  const [selectedDoctor, setSelectedDoctor] = useState({});

  var doctorService = new BaseURL("doctor");

  const getDrug = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(doctorService.BaseURL);
      if (response.status === 200) {
        setDoctor(response.data);
        setIsLoading(false);
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!firstRender) {
      getDrug();
      setFirstRender(true);
    }
  }, [doctor, firstRender]);

  return (
    <Layer>
      <base.View style={styles.container}>
        <base.ScrollView>
          <base.FlatList
            data={doctor}
            numColumns={2}
            horizontal={false}
            renderItem={({ item }) => {
              return (
                <base.View style={styles.box}>
                  <base.Image source={{ uri: item.img }} style={{ width: 145, height: 200 }} />
                  <base.Text style={styles.title}>{item.prefix + item.firstName + " " + item.lastName}</base.Text>
                  <base.Text style={styles.subTitle}>{item.position}</base.Text>
                  <base.Text style={styles.subTitle}>{item.branch}</base.Text>
                </base.View>
              )
            }}
          />
        </base.ScrollView>
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
    padding: 16,
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15
  },

  subTitle: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center"
  }
});