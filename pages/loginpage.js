import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function LoginPage({navigation}) {

    const[userName, setUsername] = useState('')
    const[Password, setPassword] = useState('')

    const apiCall = () => {
        axios.post('http://94.74.86.174:8080/login', {userName})
            .then(response => setUsername(response.data.userName));
    }

    useEffect(() => {
        apiCall()
    }, []);
    console.log(response.data.userName)

    return (
        <View>
            <View>
                <Text>Username</Text>
                <TextInput style={styles.textinput} />
                <Text>Password</Text>
                <TextInput style={styles.textinput} />
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textinput:{
        borderWidth:1,
        borderColor:'#000'
    }
})
