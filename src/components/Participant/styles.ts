import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: '#1F1E25',
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        color: '#FFF',
        fontSize: 16,
        flex: 1,
        marginLeft: 16
    },
    buttonText: {
        color: '#FFF',
        fontSize: 30
    },
    button: {
        width: 50,
        height: 50,
        marginLeft: 5,
        borderRadius: 10,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
    }
})