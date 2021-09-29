import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeContext: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    subtitulo:{
        flexDirection: "row",
        height: "30%",
        width: "100%",
        paddingTop: 70,
        marginBottom: 60,
    },
    Textsubtitulo:{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 50,
        marginRight: 50,
        fontSize: 30,
        fontWeight: "bold",
        color: "#FF0043",
    },
    refreshstyle: {
        width: "100%",
        height: "100%",
      },
    buttonImageIconStyle: {
        width: "20%",
        height: "30%",
        marginTop: 5,
        resizeMode: "center",
    },
    body:{
        height: "10%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    textbody:{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        marginLeft: 50,
        marginRight: 50,
        fontSize: 30,
        fontWeight: "bold",
        borderBottomColor: "#FF0043",
        borderBottomWidth: 1,
    },
    responsebody:{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 20,
        fontSize: 30,
        fontWeight: "bold",
        color: "#FF0043",
        borderBottomWidth: 1,
    },
  });

  export default styles