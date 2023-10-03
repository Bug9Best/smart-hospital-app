import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';
import Home from '../pages/Home';
import AuthNav from './Authnav';
import AppNav from './Appnav';

const Stack = createNativeStackNavigator();

const RootNav = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="auth" component={AuthNav}/>
                {/* <Stack.Screen name="nav" component={AppNav}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNav;