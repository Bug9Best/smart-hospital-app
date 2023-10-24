import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';
import Home from '../pages/Home';
import AuthNav from './Authnav';
import Appnav from './Appnav';
import Doctorscheduled from '../pages/Doctor-schelude';
import Formdownload from '../pages/Form-dowload';
import Staff from '../pages/Staff';
import Druginfo from '../pages/Druginfo';
import Aboutus from '../pages/Aboutus';
import Contactus from '../pages/Contactus';
import Notification from '../pages/Notification';

const Stack = createNativeStackNavigator();

const RootNav = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            >
                <Stack.Screen name="auth" component={AuthNav}
                options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="Appnav" component={Appnav}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Doctorscheduled" component={Doctorscheduled} 
                options={{
                    title: "ตารางแพทย์ตรวจ",
                }}/>
                <Stack.Screen name="Formdownload" component={Formdownload} 
                options={{
                    title: "แบบฟอร์ม",
                }}/>
                <Stack.Screen name="Staff" component={Staff} 
                options={{
                    title: "บุคลากรของเรา",
                }}/>
                <Stack.Screen name="Druginfo" component={Druginfo} 
                options={{
                    title: "ความรู้เรื่องยา",
                }}/>
                <Stack.Screen name="Aboutus" component={Aboutus} 
                options={{
                    title: "เกี่ยวกับเรา",
                }}/>
                <Stack.Screen name="Contactus" component={Contactus} 
                options={{
                    title: "ติดต่อเรา",
                }}/>
                <Stack.Screen name="Notification" component={Notification} 
                options={{
                    title:"แจ้งเตือน",
                }}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default RootNav;