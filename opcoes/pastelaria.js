import * as React from 'react'
import {Text,TouchableOpacity, TextInput, View} from 'react-native'
import * as Speech from "expo-speech"

import MeuEstilo from './estilos/estiloPastel'

export default class App extends React.Component{
  state={
      pastelCarne:0.0,
      ca:5.0,
      pastelFrango:0.0,
      pf:6.50,
      pastelStrog:0.0,
      ps:8.0,

      pagarP:0.0,
      pagarP2:0.0,
      pagarP3:0.0,
      pagarPT:0.0,

      Rlata:0.0,
      rl:2.50,
      Rseis:0.0,
      rs:4.0,
      Rdois:0.0,
      rd:5.50,
      
      pagarR:0.0,
      pagarR2:0.0,
      pagarR3:0.0,
      pagarRT:0.0,
  }

                    //pastéis
  atualizaPastelCarne=(number)=>{this.setState({pastelCarne:number})}
  atualizaPastelFrango=(number)=>{this.setState({pastelFrango:number})}
  atualizaPastelStrog=(number)=>{this.setState({pastelStrog:number})}

                    //Refris
  atualizaRlata=(number)=>{this.setState({Rlata:number})}
  atualizaRseis=(number)=>{this.setState({Rseis:number})}
  atualizaRdois=(number)=>{this.setState({Rdois:number})}
  
  ajuda=()=>{
    alert("Escolha a seu lanche digitando a quantidade que deseja do mesmo, caso não queira algum dos listados apenas não preencha")
  }

  somar=(pastelCarne, ca, pf,ps, pastelFrango, pastelStrog, pagarP, pagarP2, pagarP3, pagarPT, Rlata, Rdois, Rseis, pagarR, pagarR2,pagarRT, rl, rs, rd)=>{
    //pasteis
     this.state.pagarP = parseFloat(this.state.pastelCarne)*parseFloat(this.state.ca)
     this.state.pagarP2= parseFloat(this.state.pastelStrog)*parseFloat(this.state.ps)
     this.state.pagarP3= parseFloat(this.state.pastelFrango)*parseFloat(this.state.pf)
     this.state.pagarPT= parseFloat(this.state.pagarP) + parseFloat(this.state.pagarP2) + parseFloat(this.state.pagarP3)

     //refris
     this.state.pagarR = parseFloat(this.state.Rlata)*parseFloat(this.state.rl)
     this.state.pagarR2= parseFloat(this.state.Rdois)*parseFloat(this.state.rd)
     this.state.pagarR3= parseFloat(this.state.Rseis)*parseFloat(this.state.rs)
     this.state.pagarRT= parseFloat(this.state.pagarR) + parseFloat(this.state.pagarR2) + parseFloat(this.state.pagarR3)

     Speech.speak(' Total de pastel: R$'+ this.state.pagarPT + ",00" + "Total de refri: R$"+ this.state.pagarRT)
      alert(' Total de pastel: R$'+ this.state.pagarPT + ",00" + "Total de refri: R$"+ this.state.pagarRT)
  }

  render(){
      return(
          <View style={MeuEstilo.container}>
              
            <TouchableOpacity style={MeuEstilo.ajuda}
              onPress={
                  ()=>this.ajuda()
              }>
                  <Text style={MeuEstilo.Text2}>??????HELP???????</Text>
            </TouchableOpacity>

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="0"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaPastelCarne}
              keyboardType='numeric' /> <Text style={MeuEstilo.Text}>Pastel de Carne: R$5,00</Text>

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="0"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaPastelFrango}
              keyboardType='numeric' /> <Text style={MeuEstilo.Text}>Pastel de Frango: R$6,50</Text>

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="0"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaPastelStrog}
              keyboardType='numeric' /><Text style={MeuEstilo.Text}>Pastel de Strogonoff: R$8,00</Text>

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="0"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaRlata}
              keyboardType='numeric' /><Text style={MeuEstilo.Text}>Refrigerante de lata: R$2,50</Text>

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="0"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaRdois}
              keyboardType='numeric' /><Text style={MeuEstilo.Text}>Refrigerante de 2L: R$5,50</Text>

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="0"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaRseis}
              keyboardType='numeric' /><Text style={MeuEstilo.Text}>Regrigerante de 600ml: R$4,00</Text>

              <TouchableOpacity style={MeuEstilo.submitButton}
              onPress={
                  ()=>this.somar(this.state.pastelCarne, this.state.pastelFrango, this.state.pastelStrog, this.state.pf, this.state.ca, this.state.ps, this.state.Rlata, this.state.Rdois, this.state.Rseis, this.state.pagarP, this.state.pagarP2, this.state.pagarP3, this.state.pagarPT, this.state.pagarR, this.state.pagarR2, this.state.pagarR3, this.state.pagarRT)
              }>
                  <Text style={MeuEstilo.submitButtonText}>CONFIRMAR COMPRA</Text>
              </TouchableOpacity>
          </View>
      )
  }
}