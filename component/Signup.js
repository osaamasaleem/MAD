import React, {useState} from 'react';
import{View , Text , TextInput , StyleSheet , Button , TouchableOpacity, Image } from 'react-native';

const logoImage = require('../assets/favicon.png');
const Signup = () => {
    const [firstName , setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        console.log("Signup caleed");
        console.log("First name :", firstName);
        console.log("Last name :", lastName);
        console.log("Email :", email);
        console.log("Password :", password);
    };

    return(
        <View style={styles.container}>
            <Image source={logoImage} style={styles.logo}/>
            <Text style={styles.subtitle}>Signup Here</Text>
            
            <TextInput 
            placeholder='First Name'
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
            />

            <TextInput 
            placeholder='Last Name'
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            />

            <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            />

            <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>
            Already have an account? Scroll up to Login
            </Text>

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
        marginBottom:20,
        
     }, 
     input:{
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        
        borderColor: 'gray',
        paddingHorizontal:10,
        borderRadius: 5,
     },
     subtitle:{
        fontSize:20,
        marginBottom: 20,
     }, 
     button:{
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems:'center',
        marginTop: 10,
     }, 
     buttonText:{
        color: 'white',
        fontSize: 18,
     },
     loginText:{
        marginTop: 100,
        fontSize:14,
        color: 'grey',
     },
});

export default Signup;