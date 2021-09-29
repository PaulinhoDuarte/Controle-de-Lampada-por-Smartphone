import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    checkbox:{
        width: "100%",
        height: "auto",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    homeLabel: {
        color: "#000000",
        fontSize: 30,
        marginTop: 40,
    },
    buttongrid: {
        flexDirection: "row",
    },
    buttonLayout: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        margin: 30,
    },
    textbButton:{
        color: "#f6f6f6",
        fontSize: 20,
        fontWeight: "bold",
    },
    textCounter:{
        color: "#FF0043",
        fontSize: 70,
        fontWeight: "bold",
        paddingTop: 14,
        paddingBottom: 14,
    }
  });

  export default styles