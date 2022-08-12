import { StyleSheet, Text, View, FlatList } from 'react-native';

const DATA = [
  {
    num: '1',
    title: 'Primeiro item',
    color: 'blue',
  },
  {
    num: '2',
    title: 'Segundo item',
    color: 'red',
  },
  {
    num: '3',
    title: 'Terceiro item',
    color: 'green',
  },
];

const Item = ({ title, color }) => (
  <View style={styles.item}>
    <Text style={[styles.title, {backgroundColor: color}]}>{title}</Text>
  </View>
);

const Flatlist = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} color={item.color} />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.num}
    />
  );
}
export default Flatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});