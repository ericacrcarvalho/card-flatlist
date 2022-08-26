import { StyleSheet, Text, View } from 'react-native';
import FlatlistComponent from './src/FlatlistComponent';
import CardComponent from './src/CardComponent';
import CardFlatlistModalize from './src/CardFlatlistModalize';

const App = () => {
  return (
    <View style={styles.container}>
      <CardFlatlistModalize />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
