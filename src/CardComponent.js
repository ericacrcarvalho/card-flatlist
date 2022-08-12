import { StyleSheet  } from 'react-native';
import { Card, Paragraph, Title, Avatar } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = () => {
  return (
    <Card>
        <Card.Title title="Meu álbum" subtitle="2022" left={LeftContent} />
        <Card.Content>
            <Title>Eurotrip</Title>
            <Paragraph>Arquitetura</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
            <Title>USA</Title>
            <Paragraph>Paisagens</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/800' }} />
    </Card>
  );
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
