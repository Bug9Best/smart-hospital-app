import React, { useState, Component, useEffect } from "react";
import base from "../modules/base_module";
import Ionicons from "@expo/vector-icons/Ionicons";
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Layer from "../Layout/lgradient";

export default function Druginfo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstRender, setFirstRender] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [drug, setDrug] = useState();
  const [selectedDrug, setSelectedDrug] = useState({});

  var drugService = new BaseURL("drug");

  const getDrug = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(drugService.BaseURL);
      if (response.status === 200) {
        setDrug(response.data);
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
  }, [drug, firstRender]);

  return (
    <Layer>
      <base.View style={styles.container}>
        <base.Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}>
          <base.View style={styles.centeredView}>
            <base.View style={styles.modalView}>
              <base.Image
                source={{ uri: selectedDrug?.img }}
                style={{ width: 200, height: 300, marginTop: 10 }} />
              <base.Text
                style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}>
                {selectedDrug?.name + " " + selectedDrug?.dosage}
              </base.Text>
              <base.Text style={{ marginTop: 10, fontSize: 16 }}>
                {selectedDrug?.description}
              </base.Text>
              <base.TouchableOpacity
                style={{
                  paddingHorizontal: 100,
                  paddingVertical: 5,
                  marginTop: "10%",
                  backgroundColor: "#FF8A48",
                  borderRadius: 10,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <base.Text
                  style={{
                    fontSize: 12,
                    padding: 16,
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}>
                  ปิดหน้าต่างนี้
                </base.Text>
              </base.TouchableOpacity>
            </base.View>
          </base.View>
        </base.Modal>
        <base.View style={{ alignItems: "center" }}>
          <base.TextInput
            style={styles.Realinput}
            placeholder="ค้นหาความรู้เรื่องยา">
            <Ionicons name="search-outline" />
          </base.TextInput>
        </base.View>
        <base.ScrollView>
          <base.FlatList
            data={drug}
            renderItem={({ item }) => {
              return (
                <base.TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                    setSelectedDrug(item);
                  }}>
                  <base.View
                    style={{
                      backgroundColor: "white",
                      borderRadius: 10,
                      padding: 16,
                      margin: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    }}>
                    <base.View style={{ flex: 1, flexDirection: "row" }}>
                      <base.Image
                        source={{ uri: item.img }}
                        style={{
                          width: 120,
                          height: 100,
                          marginTop: 10,
                          borderRadius: 10,
                        }} />
                      <base.View
                        style={{
                          flex: 1,
                          flexDirection: "column",
                          marginTop: 30,
                          marginLeft: 16,
                        }}>
                        <base.Text style={{ fontSize: 20, fontWeight: "bold" }}>
                          {item.name + " " + item.dosage}
                        </base.Text>
                        <base.Text
                          style={{
                            marginTop: 10,
                            fontSize: 15,
                          }}>
                          {item.description}
                        </base.Text>
                      </base.View>
                    </base.View>
                  </base.View>
                </base.TouchableOpacity>
              );
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  Realinput: {
    borderRadius: 10,
    height: 50,
    borderWidth: 0.4,
    width: "95%",
    marginTop: 5,
    padding: 16,
    backgroundColor: "white",
    marginLeft: 5,
    marginRight: 5,
    borderColor: "gray",
  },
  modalView: {
    margin: 20,
    marginTop: "20%",
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 100,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
