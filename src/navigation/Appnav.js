import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signin from "../pages/SignIn";
import Home from "../pages/Home";
import History from "../pages/History";
import Event from "../pages/Event";
import Profile from "../pages/Profile";
import Chat from "../pages/Chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Doctorscheduled from "../pages/Doctor-schelude";
import Ionicons from "@expo/vector-icons/Ionicons";


const Stack = createBottomTabNavigator();
const Tab = createNativeStackNavigator();

const Appnav = () => {
  return (
    <Stack.Navigator screenOptions={{ tabBarActiveTintColor: "orange" }}>
        
      <Stack.Screen
        name="Home"

        component={Home}
        options={{
          title: "หน้าแรก",
          tabBarLabel: "Home",
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home" size={32} color="#FF8A48" />
          }
        }}
      />



      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: "ประวัติการรักษา/นัดหมาย",
          tabBarLabel: "History",
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="documents" size={32} color="#FF8A48" />
          }
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "แชท",
          tabBarLabel: "Chat",
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="chatbubble" size={32} color="#FF8A48" />
          }
        }}>
      </Stack.Screen>
      <Stack.Screen
        name="Event"
        component={Event}
        options={{
          title: "ข่าวสาร/กิจกรรม",
          tabBarLabel: "Event",
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="calendar" size={32} color="#FF8A48" />
          }
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "ข้อมูลบัญชี",
          tabBarLabel: "Profile",
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="person" size={32} color="#FF8A48" />
          }
        }}
      />
    </Stack.Navigator>

  );
};

export default Appnav;
