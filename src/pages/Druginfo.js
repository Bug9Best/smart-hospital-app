import base from '../modules/base_module'
import Ionicons from "@expo/vector-icons/Ionicons";


const fakedrug = [
  {
    id: '1',
    title: 'Haerin1',
    image: require("../assets/image/Haerin.png")
  },
  {
    id: '2',
    title: 'Haerin2',
    image: require("../assets/image/Haerin.png")
  },
  {
    id: '3',
    title: 'Haerin3',
    image: require("../assets/image/Haerin.png")
  },
];

export default function Druginfo({ navigation }) {
  return (
    <base.View style={styles.container}>
      <base.ScrollView>
        <base.View style={{ alignItems: 'center' }}>
          <base.TextInput style={styles.Realinput}
            placeholder="useless placeholder" >
            <Ionicons name='search-outline' />
          </base.TextInput>
        </base.View>
        <base.FlatList
          data={fakedrug}
          renderItem={({ item }) => {
            return <base.View style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 10,
              padding: 10,
              marginTop: 10,
            }}>
              <base.View style={{ flexDirection: 'row' }}>

                <base.Image source={item.image} style={{ width: 75, height: 75, borderRadius: 100, marginTop: 15 }} />
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
    height: 40,
    borderWidth: 0.2,
    width: "95%",
    marginTop: 5,
    padding: 10,
    backgroundColor: "white"
  },
});