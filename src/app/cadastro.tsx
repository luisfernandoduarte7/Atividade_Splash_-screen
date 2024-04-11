import { StatusBar } from 'expo-status-bar';
import {View,Image,TextInput,Text, TouchableOpacity } from 'react-native';
import { styles } from '../css/style';
import{Link}from"expo-router";

export default function cadastro() {
  return (
    // div principal
    <View style={styles.imagemBody}>
      {/* imagem logo senai */}
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.png')}/>

      {/* inicio do formulario */}
      <View style={styles.form}>

        {/* texto nome */}
        <Text style={styles.text}>Nome:</Text>
        
        {/* input do nome */}
        <TextInput placeholder="Insira seu nome" style={styles.input}/>

        {/* texto do email */}
        <Text style={styles.text}>Email:</Text>

        {/* input do email */}
        <TextInput secureTextEntry placeholder="Insira seu email" style={styles.input}/>

        {/* texto da senha */}
        <Text style={styles.text}>Senha:</Text>

        {/* input da senha */}
        <TextInput secureTextEntry placeholder="Insira sua senha" style={styles.input}/>

        {/* div para alinha o botão entrada */}
      <View style= {styles.formbtn}>
        <Link href={'home'} style={styles.btn}>Cadastrar</Link>
      </View>
      </View>
        
    </View>
  );
}

