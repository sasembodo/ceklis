import React, {useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function RegisterPage({navigation}) {
    return (
        <View>
            <View>
                <Text>Username</Text>
                <TextInput style={styles.textinput} />
                <Text>Email</Text>
                <TextInput style={styles.textinput} />
                <Text>Password</Text>
                <TextInput style={styles.textinput} />
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text>Submit</Text>
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
