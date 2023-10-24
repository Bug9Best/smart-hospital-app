import React, { useState, Component, useEffect } from 'react';
import base from '../modules/base_module'
import Ionicons from "@expo/vector-icons/Ionicons";
import BaseURL from '../services/base/base_service';
import axios from 'axios';

export default function Druginfo({ navigation }) {
  const [firstRender, setFirstRender] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [drug, setDrug] = useState();

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
  }

  useEffect(() => {
    if (!firstRender) {
      getDrug();
      setFirstRender(true);
    }
  }, [drug, firstRender])

  return (
    <base.View style={styles.container}>
      <base.ScrollView>
        <base.View style={{ alignItems: 'center' }}>
          <base.TextInput style={styles.Realinput}
            placeholder="ค้นหาความรู้เรื่องยา" >
            <Ionicons name='search-outline' />
          </base.TextInput>
        </base.View>
        <base.FlatList
          data={drug}
          renderItem={({ item }) => {
            return <base.View style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 10,
              padding: 16,
              marginTop: 10,
            }}>
              <base.View style={{ flexDirection: 'row' }}>

                <base.View style={{ padding: 20 }}>
                  <base.Text style={{ fontSize: 20, fontWeight: 400 }}>{item.title}</base.Text>
                  <base.Text style={{ marginTop: 10, fontSize: 20 }}>{item.title}</base.Text>
                </base.View>
              </base.View>
            </base.View>
          }}
        />
      </base.ScrollView>
    </base.View>
  );
}

const styles = base.StyleSheet.create({
  container: {
  },
  Realinput: {
    flex: 1,
    borderRadius: 10,
    height: "50%",
    borderWidth: 0.1,
    width: "95%",
    marginTop: 5,
    padding: 16,
    backgroundColor: "white",
  },
});