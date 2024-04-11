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

        {/* texto redefina sua senha */}
        <Text style={styles.text}>Redefina sua senha:</Text>
        
        {/* input da senha */}
        <TextInput placeholder="sua senha antiga" style={styles.input}/>

        {/* texto da senha nova */}
        <Text style={styles.text}>Confirme sua nova senha:</Text>

        {/* input da senha nova*/}
        <TextInput secureTextEntry placeholder="sua senha nova" style={styles.input}/>

        {/* div para alinha o botão entrada */}
      <View style= {styles.formbtn}>
        <Link href={'login'} style={styles.btn}>Criar nova senha</Link>
      </View>
      </View>
        
    </View>
  );
}

