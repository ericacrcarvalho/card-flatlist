import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Card, Paragraph, Title, Avatar, Button } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const DATA = [
  {
    num: '1',
    title: 'Europa',
    subtitle: 'Arquitetura',
    photo: 'https://picsum.photos/600'
  },
  {
    num: '2',
    title: 'USA',
    color: 'Paisagens',
    photo: 'https://picsum.photos/700'
  },
  {
    num: '3',
    title: 'Chile',
    color: 'Montanhas',
    photo: 'https://picsum.photos/800'
  },
];

const Item = ({ title, color, photo }) => (
    <Card>
        <Card.Content>
            <Title>{title}</Title>
            <Paragraph>{color}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: photo }} />
    </Card>
);

const CardFlatlist = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} subtitle={item.color} photo={item.photo} />
  );

  return (
    <Card>
        <Card.Title title="Meu álbum" subtitle="2022" left={LeftContent} />
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.num}
        />
    </Card>    
  );
}
export default CardFlatlist;

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