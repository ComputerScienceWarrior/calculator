import { Text, View, TextInput } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.greeting}>Welcome to the calculator!</Text>
      <View style={styles.calculatorWrapper}>
        <TextInput style={styles.calcDisplay} />
        <View style={styles.buttonsContainer}>

        </View>
      </View>
    </View>
  );
}
