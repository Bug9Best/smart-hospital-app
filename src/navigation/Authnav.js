import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from '../pages/SignIn';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Signupjing from '../pages/Signupjing';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={Signin}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Newsignup" component={SignUp}/>
                <Stack.Screen name="Signupjing" component={Signupjing}/>
            </Stack.Navigator>
    );
}

export default AuthNav;