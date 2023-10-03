import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Children } from 'react';

    const Layer = ({children}) => {
        return(
            <LinearGradient colors={["#FF8A4800","#FF8A4820", "#FF8A4880"]} style={style.LinearGradient}>
                {children}
            </LinearGradient>
        )
    }
    const style = StyleSheet.create ({
        LinearGradient:{
            flex: 1,
    }
    })
    export default Layer;