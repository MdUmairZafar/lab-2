import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={[styles.text, styles.box1]}>Sindh</Text>
                <Text style={[styles.text, styles.box2]}>Punjab</Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.text, styles.box3]}>Balochistan</Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.text, styles.box4]}>KPK</Text>
                <Text style={[styles.text, styles.box5]}>Gligit</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdfffc",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    row: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: 'center',
        flexDirection: "row",
        width: "100%",
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 6,
    },
    box1: {
      backgroundColor: '#b5c6e0',
      color: '#103783'
    },
    box2: {
      backgroundColor: '#ffc8c8',
      color: '#ff5858'
    },
    box3: {
      backgroundColor: '#f4fdd9',
      color: '#6a8d73'
    },
    box4: {
      backgroundColor: '#f3d9dc',
      color: '#c78283'
    },
    box5: {
      backgroundColor: '#8daa9d',
      color: '#343e3d'
    },
});
