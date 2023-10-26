import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../pages/SignIn";
import Signup from "../pages/SignUp";
import Home from "../pages/Home";
import AuthNav from "./Authnav";
import Appnav from "./Appnav";
import DoctorSchedule from "../pages/Doctor-Meeting";
import Formdownload from "../pages/Form-dowload";
import Staff from "../pages/Staff";
import Druginfo from "../pages/Druginfo";
import Aboutus from "../pages/Aboutus";
import Contactus from "../pages/Contactus";
import Notification from "../pages/Notification";
import AddressInfo from "../pages/AddressInfo";
import PhoneInfo from "../pages/PhoneInfo";
import Changepassword from "../pages/Changepassword";
import Policy from "../pages/Policy";
import Privacy from "../pages/Privacy";

const Stack = createNativeStackNavigator();

const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="auth"
          component={AuthNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Appnav"
          component={Appnav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DoctorSchedule"
          component={DoctorSchedule}
          options={{
            title: "ตารางแพทย์ตรวจ",
          }}
        />
        <Stack.Screen
          name="Formdownload"
          component={Formdownload}
          options={{
            title: "แบบฟอร์ม",
          }}
        />
        <Stack.Screen
          name="Staff"
          component={Staff}
          options={{
            title: "บุคลากรของเรา",
          }}
        />
        <Stack.Screen
          name="Druginfo"
          component={Druginfo}
          options={{
            title: "ความรู้เรื่องยา",
          }}
        />
        <Stack.Screen
          name="Aboutus"
          component={Aboutus}
          options={{
            title: "เกี่ยวกับเรา",
          }}
        />
        <Stack.Screen
          name="Contactus"
          component={Contactus}
          options={{
            title: "ติดต่อเรา",
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            title: "แจ้งเตือน",
          }}
        />
        <Stack.Screen
          name="AddressInfo"
          component={AddressInfo}
          options={{
            title: "แก้ไขที่อยู่",
          }}
        />
        <Stack.Screen
          name="PhoneInfo"
          component={PhoneInfo}
          options={{
            title: "แก้ไขที่อยู่",
          }}
        />
        <Stack.Screen
          name="Changepassword"
          component={Changepassword}
          options={{
            title: "แก้ไขที่อยู่",
          }}
        />
        <Stack.Screen
          name="Policy"
          component={Policy}
          options={{
            title: "แก้ไขที่อยู่",
          }}
        />
                <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{
            title: "แก้ไขที่อยู่",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
