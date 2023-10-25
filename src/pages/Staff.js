import base from '../modules/base_module'
import Layer from "../Layout/lgradient";

const fakedata = [
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
  {
    id: '4',
    title: 'Haerin4',
    image: require("../assets/image/Haerin.png")

  },
  {
    id: '5',
    title: 'Haerin5',
    image: require("../assets/image/Haerin.png")

  },
  {
    id: '6',
    title: 'Haerin6',
    image: require("../assets/image/Haerin.png")

  },
  {
    id: '6',
    title: 'Haerin6',
    image: require("../assets/image/Haerin.png")

  },
  {
    id: '6',
    title: 'Haerin6',
    image: require("../assets/image/Haerin.png")

  },
];

export default function Staff({ navigation }) {
  return (
    <Layer>
      <base.View style={styles.container}>
        <base.ScrollView>
          <base.FlatList
            data={fakedata}
            numColumns={2}
            horizontal={false}
            renderItem={({ item }) => {
              return (
                <base.View style={{ margin: 40, alignItems: 'center' }}>
                  <base.Image source={item.image} style={{ width: 145, height: 200 }} />
                  <base.Text style={{ marginTop: 10 }}>{item.title}</base.Text>
                  <base.Text style={{ color: "#FF8A48", marginTop: 10 }}>{item.title}</base.Text>

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
});