import base from '../modules/base_module'

export default function Home({route}){
    console.log(route)
    return(
        <base.View style={styles.container}>
            <base.Text>
                เก่งมาก ไอควย คิว
            </base.Text>
        </base.View>
    )
}

const styles = base.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});