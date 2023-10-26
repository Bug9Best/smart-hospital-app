import * as React from "react";
import { StyleSheet, View, Text, Pressable, SafeAreaView } from "react-native";
import Layer from "../Layout/lgradient";
import BaseURL from "../services/base/base_service";

const History1 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [appoint, setAppoint] = useState();

  var appointService = new BaseURL("appoint");

  const getAppoint = async () => {
    try {
      const response = await axios.get(appointService.BaseURL);
      setAppoint(response.data);
      setIsLoading(false);
    } catch (error) {
      alert("An error has occurred");
    }
  };

  useEffect(() => {
    getAppoint();
  }, [appoint]);

  return (
    <Layer>
      <SafeAreaView style={styles.container}>
        <base.ScrollView contentContainerStyle={styles.scrollViewContent}>
          <base.FlatList
            data={appoint}
            renderItem={({ item }) => {
              return (
                renderEventCard(
                  item.title,
                  item.date,
                  item.img,
                )
              );
            }}
          />
        </base.ScrollView>
      </SafeAreaView>
    </Layer>
  );
};

const renderEventCard = (title, date, imageSource) => (
  <base.View style={styles.eventCard}>
    <base.View style={styles.centerImage}>
      <base.Image source={{ uri: imageSource }} style={styles.eventImage} />
    </base.View>
    <base.Text style={styles.eventTitle}>{title}</base.Text>
    <base.Text style={styles.eventDate}>{date}</base.Text>
  </base.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the component takes up the entire screen
    height: "100%", // Make sure the component takes up the entire screen
    marginTop: 1,
    alignItems: "center",
  },
  box: {
    width: "100%",
    height: "5%",
    justifyContent: "center",
  },
  titleText: {
    color: "#FF8A48",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  historyTabContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center",

  },
  historyTabLeft: {
    backgroundColor: "#FFA370",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    margin: 1,
    borderTopLeftRadius: 10
  },
  historyTabRight: {
    backgroundColor: "#FFA370",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    margin: 1,
    borderTopRightRadius: 10
  },
  historyContainer: {
    width: "95%",
    height: "90%",
    marginTop: 15,
    borderRadius: 10,
  },
});

export default History1;
