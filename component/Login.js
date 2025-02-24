import React,{useState} from 'react';
import {Text , View , TextInput, Image , StyleSheet , TouchableOpacity } from 'react-native';

const logoImage = require('../assets/favicon.png');
const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handling = () => {
    console.log('Email',email);
    console.log('Password',password);
    };

    return (
        <View style ={styles.container}>
            <Image source ={logoImage} style={styles.logo}/>
            <Text style={styles.subtitle}>Login to MyApp</Text>

            <TextInput 
            style={styles.input} 
            placeholder='xyz@example.com'
            value = {email}
            onChangeText={setEmail}
            />
            <TextInput 
            style = {styles.input}
            placeholder = {'*************'}
            value = {password}
            onChangeText ={setPassword}
            secureTextEntry = {true}
            />

            <TouchableOpacity style={styles.button} onPress={handling}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.signupText} >Not a memeber? Scroll down to signup</Text>
        </View>

    );
};

const styles = StyleSheet.create({
 container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
 }, 
 logo:{
    width: 100,
    height: 100,
    marginBottom:10,
    marginTop:100,
 }, 
 input:{
    width: '100%',
    height: 45,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 5,
 },
 subtitle:{
    fontSize:20,
    marginBottom: 20,
 }, 
 button:{
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems:'center',
 }, 
 buttonText:{
    color: 'white',
    fontSize: 18,
 },
 signupText:{
    marginTop: 300,
    fontSize:14,
    color: 'grey',
    marginBottom: 300,
 },

});

export default Login;


