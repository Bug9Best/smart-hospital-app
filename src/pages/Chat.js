import React, { useState, Component, useEffect } from "react";
import base from '../modules/base_module'
import BaseURL from "../services/base/base_service";
import axios from "axios";
import Layer from "../Layout/lgradient";
import Input from "../components/input";
import { Entypo as Icon } from '@expo/vector-icons';


export default function Chat({ navigation }) {
  const [firstRender, setFirstRender] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [doctor, setDoctor] = useState();
  const [selectedDoctor, setSelectedDoctor] = useState({});


  return (
    <Layer>
    <base.SafeAreaView style={styles.container}>
      <base.ScrollView>
        <base.View>
        </base.View>  
      </base.ScrollView>
      <base.View  style={{marginBottom: 10, width: "90%",backgroundColor: "#fff",borderRadius: 10,
}}>
      <Input>       
        </Input>
        </base.View>  

      </base.SafeAreaView>
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