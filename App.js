import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  
  const [carroSelecionado, setCarroSelecionado] = useState (0);
  const [carros, setCarros] = useState([
    {key: 1, nome: 'Golf Highline 1.4', valor: 80.000},
    {key: 2, nome: 'Jetta', valor: 72.000},
    {key: 3, nome: 'Saveiro', valor: 58.000},
    {key: 4, nome: 'Nivus', valor: 115.000},
    {key: 5, nome: 'Gol G6', valor: 52.000},
  ]);

  let carrosItem = carros.map((value, key) => {
    return <Picker.Item key={key} value={key} label= {value.nome}/>
  })

  return (
    <View style={styles.container}>

      <Picker
      selectedValue={carroSelecionado}
      onValueChange={ (itemValue, itemIndex) => setCarroSelecionado(itemValue) }
      >
        {carrosItem}
      </Picker>

<Text style={styles.carros}>Carro: {carros[carroSelecionado.nome]}</Text>
<Text style={styles.carros}>Carro: {carros[carroSelecionado.valor.toFixed(3)]}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  carros: {
    marginTop: 15,
    fontSize: 25,
    
  }
});
