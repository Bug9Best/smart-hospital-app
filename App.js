import base from './src/modules/base_module';
import { DoctorService } from './src/services/doctor/doctor_service';
import { UserService } from './src/services/user/user_service';

export default function App() {
  const userService = new UserService();
  userService.create();

  return (
    <base.View style={styles.container}>
      <base.Text>Best</base.Text>
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
