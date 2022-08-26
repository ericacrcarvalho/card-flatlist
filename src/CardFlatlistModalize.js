import React, { useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Card, Paragraph, Title, Avatar } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const DATA = [
  {
    num: '1',
    title: 'Europa',
    subtitle: 'Arquitetura',
    photo: 'https://picsum.photos/600',
    text: 'Conheça vários países em uma única viagem'
  },
  {
    num: '2',
    title: 'USA',
    color: 'Paisagens',
    photo: 'https://picsum.photos/700',
    text: 'Visitando a América e os outlets'
  },
  {
    num: '3',
    title: 'Chile',
    color: 'Montanhas',
    photo: 'https://picsum.photos/800',
    text: 'Vendo a neve pela primeira vez'
  },
];

const Item = ({ title, color, photo, text }) => (
    <View>      
      <Card.Content>
          <Title style={{fontWeight: 600}}>{title}</Title>
          <Paragraph>{color}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: photo }} /> 
      <Text style={{textAlign: 'center'}}>{text}</Text>        
    </View>
  );

const CardFlatlistModalize = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} subtitle={item.color} photo={item.photo} text={item.text} />
  );

  const modalizeRef = useRef(null);

  const openModalize = () => {
      modalizeRef.current?.open();
  };

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  return (
    <View style={{flex: 1}}>
      <Card>
          <Card.Title title="Viagens" subtitle="2022" left={LeftContent} />
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.num}
          />     
      </Card>  
      <TouchableOpacity
        style={styles.button}
        onPress={openModalize}>
          <Text>Dicas de viagens</Text>
        </TouchableOpacity>
        <Modalize
        ref={modalizeRef}
          snapPoint={480}
          modalHeight={600}>
        <View style={styles.viewModalize}>
          <Text style={styles.title}>10 dicas de viagens </Text>
          <Text style={styles.text}>
            1 . Basta ir – viaje sem medo!<br></br>
            2 . Viaje sozinho<br></br>
            3 . Seja flexível<br></br>
            4. Seja leal às companhias aéreas: faça sempre seu cadastro no programa de milhagem<br></br>
            5. Contrate um seguro de viagem<br></br>
            6. Menos é mais (e melhor)<br></br>
            7. Leve um lenço grande ou uma canga<br></br>
            8. Enrole suas roupas na hora de guardá-las na mala<br></br>
            9. Leve um kit completo de primeiras necessidades na mala de mão<br></br>
            10. E não esqueça de uma muda de roupas extra!<br></br>
          </Text>
          <TouchableOpacity
                style={styles.buttonModalize}
                onPress={closeModalize}>
                <Text>Esconder</Text>
          </TouchableOpacity>      
        </View>
      </Modalize>      
    </View>
  );
}
export default CardFlatlistModalize;

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
  button: {
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 20
  },
  viewModalize: {
    flex: 1,
    margin: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 10,
  },
  text: {
    textAlign: 'left',
    fontSize: 18,
  },
  buttonModalize: {
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    padding: 8,
    margin: 15
  }
});