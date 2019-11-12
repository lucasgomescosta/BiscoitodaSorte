import React, { Component } from 'react';

import { Image, View, Text, StyleSheet,TouchableOpacity } from 'react-native';

class Botao extends Component{

  constructor(props){
    super(props);
    this.state = {};

    this.styles = StyleSheet.create({
      botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: props.cor,
        borderRadius: 25
      },
      btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: props.cor
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.eventoBotao}>
        <View style={this.styles.btnArea}>
            <Text style={this.styles.btnTexto}>{this.props.nome}</Text> 
        </View>
      </TouchableOpacity>
    )
  }
}

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      textofrase: ''
    };

    this.quebrarbiscoito = this.quebrarbiscoito.bind(this);

    this.frase = [
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'
    ];

  }
  
  
  quebrarbiscoito(){
    let state = this.state;

    let numeroaleatorio = Math.floor(Math.random() * this.frase.length)

    state.textofrase = '" '+this.frase[numeroaleatorio]+' "';

    this.setState(state);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/biscoito.png')} style={styles.image} />
        <Botao cor="#dd7b22" nome="Abrir Biscoito" eventoBotao={this.quebrarbiscoito} />
        <Text style={styles.textoFrase}> {this.state.textofrase} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  image: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 18,
    color: '#dd7b22',
    margin: 10,
    fontStyle: 'italic',
    textAlign: 'center'
  } 
});
