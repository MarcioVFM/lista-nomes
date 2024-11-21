import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 30
    },
    eventCity: {
        color: '#FDFCFE',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 15
    },
    input: {
        backgroundColor: '#1F1E25',
        height: 50,
        borderRadius: 10,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1
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
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }
})