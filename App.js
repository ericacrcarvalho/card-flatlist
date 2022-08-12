import { StyleSheet, Text, View } from 'react-native';
import FlatlistComponent from './src/FlatlistComponent';
import CardComponent from './src/CardComponent';
import CardFlatlist from './src/CardFlatlist';

const App = () => {
  return (
    <View style={styles.container}>
      <CardComponent />
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
