import { StyleSheet, } from 'react-native';

const BaseStyle = StyleSheet.create({
    flex: {
        display: "flex",
        flexDirection: "row",
    },

    flexColumn: {
        display: "flex",
        flexDirection: "column",
    },

    justifyContentCenter: {
        justifyContent: "center",
    },

    justifyContentStart: {
        justifyContent: "flex-start",
    },

    justifyContentEnd: {
        justifyContent: "flex-end",
    },

    justifyContentSpaceBetween: {
        justifyContent: "space-between",
    },

    justifyContentSpaceAround: {
        justifyContent: "space-around",
    },

    alignItemsCenter: {
        alignItems: "center",
    },

    alignItemsStart: {
        alignItems: "flex-start",
    },

    alignItemsEnd: {
        alignItems: "flex-end",
    },

    alignItemsStretch: {
        alignItems: "stretch",
    },

    alignContentCenter: {
        alignContent: "center",
    },

    alignContentStart: {
        alignContent: "flex-start",
    },

    alignContentEnd: {
        alignContent: "flex-end",
    },

    alignContentSpaceBetween: {
        alignContent: "space-between",
    },

    alignContentSpaceAround: {
        alignContent: "space-around",
    },

    alignContentStretch: {
        alignContent: "stretch",
    },

    alignSelfCenter: {
        alignSelf: "center",
    },

    alignSelfStart: {
        alignSelf: "flex-start",
    },

    alignSelfEnd: {
        alignSelf: "flex-end",
    },

    alignSelfStretch: {
        alignSelf: "stretch",
    },

    grid: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: -0.5,
        marginRight: -0.5,
        marginLeft: -0.5,
    },

    col3: {
        flex: "0 0 auto",
        width: "25%",
        padding: 0.5,
    },

    col4: {
        flex: "0 0 auto",
        width: "33.3333%",
        padding: 0.5,
    },

    col6: {
        flex: "0 0 auto",
        width: "50%",
        padding: 0.5,
    },

    col12: {
        flex: "0 0 auto",
        width: "100%",
        padding: 0.5,
    },

    textCenter: {
        textAlign: "center",
    },

    textLeft: {
        textAlign: "left",
    },

    textRight: {
        textAlign: "right",
    },


});

export default BaseStyle;
