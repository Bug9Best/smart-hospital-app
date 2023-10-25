import React, { useState, useEffect } from "react";
import base from "../modules/base_module";
import Layer from "../Layout/lgradient";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const Contactus = ({ props }) => {
  const [region, setRegion] = useState({
    latitude: 13.7295815276,
    longitude: 100.777423316,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const [loadingLocation, setLoadingLocation] = useState(true);
  const [UserAddress, setUserAddress] = useState(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      setLoadingLocation(false);
      return;
    }
    setTimeout(async () => {
      try {
        setLoadingLocation(false);
      } catch (error) {
        console.error("Error fetching current location:", error);
        setLoadingLocation(false);
      }
    }, 2000);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Layer>
      <base.View style={styles.container}>
        <base.ScrollView>
          <base.View style={styles.box}>
            <base.Text style={{ color: "#FF8A48", fontSize: 20, fontWeight: 800, marginBottom: 8 }}>
              คลินิกเวชกรรม สจล. คณะแพทยศาสตร์
            </base.Text>
            <base.Text style={{ fontSize: 15, fontWeight: 700 }}>
              เปิดทำการ จันทร์ – ศุกร์ เวลา 09:00 น. -17:00 น.
            </base.Text>
            <base.Text style={{ fontSize: 15, fontWeight: 700 }}>
              เสาร์ - อาทิตย์ เวลา 09.00 น. - 11.00 น.
            </base.Text>
            <base.Text style={{ fontSize: 15, fontWeight: 700 }}>
              วันหยุดนักขัตฤกษ์ เวลา 09:00 น. -17:00 น.
            </base.Text>
            <base.Text style={{ marginTop: 10, fontSize: 15, fontWeight: 400 }}>
              สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
              เลขที่ 1 ฉลองกรุง 1 เขตลาดกระบัง กรุงเทพมหานคร 10520
            </base.Text>
            <base.Text style={{ fontSize: 15, fontWeight: 400 }}>
              โทรศัพท์ 02 329 8143 หรือ 02 329 8000 ต่อ 3633
            </base.Text>
            <base.Text style={{ fontSize: 15, fontWeight: 400 }}>
              โทรสาร 02 329 8143
            </base.Text>

            <base.View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 10 }}>
              <base.Image source={require("../assets/image/facebooklogo.png")} style={{ width: 20, height: 20 }} />
              <base.Text style={styles.contactText}>
                Facebook : ศูนย์การแพทย์ สจล. KMITL Medical Centre
              </base.Text>
            </base.View>

            <base.View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 10 }}>
              <base.Image source={require("../assets/image/Line.png")} style={{ width: 20, height: 20 }} />
              <base.Text style={styles.contactText}>
                Line : คลินิกเวชกรรม สจล.
              </base.Text>
            </base.View>

          </base.View>
          <base.View>
          </base.View>
          {loadingLocation ? (
            <base.View style={styles.loadingContainer}>
              <base.ActivityIndicator size="large" color="#fff" />
              <base.Text>กำลังโหลดที่ตั้งคลีนิกเวชกรรม สจล.</base.Text>
            </base.View>
          ) : (
            <base.View style={styles.boxmap}>
              <MapView style={styles.map} region={region} provider={PROVIDER_GOOGLE}>
                {UserAddress && (
                  <Marker
                    coordinate={{
                      latitude: UserAddress.latitude,
                      longitude: UserAddress.longitude,
                    }}
                    title="Your Location"
                  />
                )}
              </MapView>
            </base.View>
          )
          }
        </base.ScrollView>
      </base.View>
    </Layer>
  );
};

const styles = base.StyleSheet.create({
  container: {
    padding: 16,
  },

  map: {
    width: "100%",
    height: "100%",
    marginLeft: 5,
    marginRight: 5,
    padding: 16,
  },

  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
    padding: 16,
  },

  box: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 5,
    borderRadius: 5,
    padding: 16,
    marginLeft: 5,
    marginRight: 5

  },
  boxmap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
    marginLeft: 5,
    marginRight: 5,
    height: 500,
  },

  contactText: {
    fontSize: 12,
    fontWeight: 400,
    marginRight: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Contactus;

