import react from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
       textAlign: 'center',
       padding: 20
    },
    greeting: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 75,
    },
    calculatorWrapper: {
        margin: 20
    },
    calcDisplay: {
        border: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10,
        padding: 3,
        height: 80,
        letterSpacing: 2,
        fontSize: 30,
        textAlign: 'right',
    },
    buttonsContainer: {
        border: 'solid',
        borderWidth: 1,
        margin: 10,
        height: "70%",
    },
});

export default styles;