import base from './src/modules/base_module';

export default function App() {
  return (
    <base.View style={styles.container}>
      <base.Text>Open up App.js to start working on your app!</base.Text>
      <base.TouchableOpacity>
      </base.TouchableOpacity>
    </base.View>
  );
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
