import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={Signin}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
    );
}

export default AuthNav;