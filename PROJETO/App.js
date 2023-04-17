import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [botao1, setBotao1] = useState(true);
  const [texto, setTexto] = useState('SEU LOGIN');

  const [shops, setShops] = useState([
    {nome: 'Steam', key: 1 },
    {nome: 'Epic Games', key: 2 },
    {nome: 'Playstation', key: 3 },
    {nome: 'Xbox', key: 4 },
    {nome: 'Ubisoft', key: 5 },
    {nome: 'EA', key: 6 },
    
  ]);
  
  const apertou = () => {
    setBotao1(!botao1);


    if (botao1 == false) {
      setTexto('SEU LOGIN')
    } else if (botao1 == true) {
      setTexto('LOGIN')
    }
  };

  const apertarBotao = (key) => {
    setShops(
      (pessoasAnteriores) => {
        return pessoasAnteriores.filter(pessoas => pessoas.key != key)
      }
    )
  }

  const listaJogos = ({item}) => ( 
    <TouchableOpacity onPress={() => apertarBotao(item.key)}>
      <View style={styles.item}>
        <Text style={{fontSize:24, }} > {item.nome}</Text></View>
    </TouchableOpacity>

  );

  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.descgames}> DescGames </Text>
      <Text style={styles.login}>Login</Text>
      <View style = {styles.box}>
      <MaterialIcons name="email" size={24} color="black" />
        <TextInput
          
          style={styles.emailsenha}
          placeholder="Email"
          onChangeText={(emailDigitado) => setEmail(emailDigitado)}
        />
      </View>
      <View style = {styles.box}>
      <FontAwesome5 name="key" size={24} color="black" />
        <TextInput
          style={styles.emailsenha}
          placeholder="Senha"
          onChangeText={(senhaDigitada) => setSenha(senhaDigitada)}
        />
      </View>

      <View style = {styles.botao}>
          <Button title={texto} onPress={apertou} />
      </View>

        <View style={styles.subview}>
          {
            botao1 ? <Text> Email: {email} | Senha: {senha}</Text> : <Text> </Text>
          }
        </View>
         <View style={styles.texto }>
          <Text style= {{fontSize: 16, fontWeight: 'bold'}} >
            Selecione abaixo as lojas virtuais em que você não deseja visualizar os descontos!
          </Text>
        </View> 

          <ScrollView>
          <FlatList
      numColumns={1}
      keyExtractor={(item) => item.key}
      data={shops}
      renderItem={listaJogos}/>
          </ScrollView>
      
      </View>

      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55C7FA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  descgames: {
    fontSize: 50,
    marginBottom: 40,
    marginTop: 50,
    fontWeight: 'bold',
  },

  login: {
    fontSize: 30,
    padding: 15,
    fontWeight: 'bold',
  },

  emailsenha: {
    borderColor: '#777',
    margin: 10,
    width: 150,
   
  },

  subview: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  box: {
    borderWidth: 3,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    margin: 20,
    borderRadius: 50,
    height: 85,
    width: 300,
  },
 
  botao: {
   margin:10
},

item: {
  marginTop: 24,
  padding: 30,
  backgroundColor: 'white',
  fontSize: 24,
  margin: 10,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1, 
  },
  
  
  texto:{
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginLeft: 30, 
    marginRight: 30,
    marginTop: 10,
  },
    


});