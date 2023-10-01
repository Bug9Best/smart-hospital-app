import base from './src/modules/base_module';

export default function App() {

  return (
    <base.View style={styles.container}>
      
      <base.TouchableOpacity>
      </base.TouchableOpacity>
    </base.View>
  );
}

const styles = base.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
