import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Signupjing from "../pages/Signupjing";
import Register from "../pages/Register";
import Doctorscheduled from "../pages/Doctor-schelude";
import Forgetpassword from "../pages/Forgetpassword";

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={Signin} 
      options={{
        headerShown: false,
    }}/>
      <Stack.Screen name="Newsignup" component={SignUp} 
      options={{
        title: "ลงทะเบียนผู้ป่วยใหม่",
    }}/>
      <Stack.Screen name="Signupjing" component={Signupjing} 
      options={{
        title: "ลงทะเบียนผู้ป่วยใหม่",
    }}/>
      <Stack.Screen name="Register" component={Register} 
      options={{
        title: "ลงทะเบียนผู้ใช้งาน",
    }}/>
    <Stack.Screen name="Forgetpassword" component={Forgetpassword} 
      options={{
        title: "ลืมรหัสผ่าน",
    }}/>
    </Stack.Navigator>
  );
};

export default AuthNav;
