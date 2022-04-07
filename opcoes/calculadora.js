import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, StatusBar} from 'react-native';
import * as Speech from 'expo-speech'


import meuestilo from './estilos/meuestilo';

export default class App extends React.Component{
  state={
    valor1:0.0,
    valor2:0.0,
    resultado:0.0,
  }

  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }
  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }
   atualizaResultado=(number)=>{
    this.setState({resultado:number})
  }

  soma(){
    this.state.resultado=parseFloat(this.state.valor1)+parseFloat(this.state.valor2);
    Speech.speak("o resultado dessa soma é"+this.state.resultado)
    alert("O Resultado é: "+this.state.resultado);
  }

  multi(){
    this.state.resultado=parseFloat(this.state.valor1)*parseFloat(this.state.valor2);
    Speech.speak("o resultado dessa multiplicação é"+this.state.resultado)
    alert("O Resultado é: "+this.state.resultado);
  }

  division(){
    this.state.resultado=parseFloat(this.state.valor1)/parseFloat(this.state.valor2);
    Speech.speak("o resultado dessa divisão é"+this.state.resultado)
    alert("O Resultado é: "+this.state.resultado);
  }

  subtra(){
     this.state.resultado=parseFloat(this.state.valor1)-parseFloat(this.state.valor2);
     Speech.speak("o resultado dessa subtração é"+this.state.resultado)
     alert("O Resultado é: "+this.state.resultado);
  }

  render(){
    return(
      <View style={meuestilo.container}>
      
        <StatusBar backgroundColor="black" style={meuestilo.fontegrande}/>
        <TextInput underlineColorAndroid="transparent" 
        placeholder="digite valor 1" 
        placeholderTextColor="black"
        autoCapitalize='none'
        onChangeText={this.atualizaValor1}
        keyboardType='numeric'
        style={meuestilo.input} />

        <TextInput underlineColorAndroid="transparent" 
        placeholder="digite valor 2" 
        placeholderTextColor="black"
        autoCapitalize='none'
        onChangeText={this.atualizaValor2}
        keyboardType='numeric' 
        style={meuestilo.input}/>

        <TouchableOpacity onPress={()=>this.soma(this.state.valor1, this.state.valor2, this.state.resultado)} style={meuestilo.submitButton}>
          <Text style={meuestilo.submitButtonText}>Somar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.multi(this.state.valor1, this.state.valor2, this.state.resultado)} style={meuestilo.submitButton}>
          <Text style={meuestilo.submitButtonText}>Multiplicar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.division(this.state.valor1, this.state.valor2, this.state.resultado)} style={meuestilo.submitButton}>
          <Text style={meuestilo.submitButtonText}>Divisão</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={()=>this.subtra(this.state.valor1, this.state.valor2, this.state.resultado)} style={meuestilo.submitButton}>
          <Text style={meuestilo.submitButtonText}>Subtrair</Text>
        </TouchableOpacity>
        
        </View>
    )
  }
}