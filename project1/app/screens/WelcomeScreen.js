import React from 'react';
import { ImageBackground, StyleSheet, View, Dimensions, Image ,Text} from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={style.background}
            source={require("../assets/img.jpg")}>

            <Image
                style={style.logo}
                source={require("../assets/logo.png")} />

            <View style={style.registerButton}>
                    <Text style={style.Text}> Start Now</Text>
            </View>


            <View style={style.loginButton}>
                    <Text style={style.Text}>Login now</Text>
            </View>

          
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        
    },
    loginButton: {
        width: Dimensions.get('screen').width,
        height: 50,
        backgroundColor: '#997950',

    },
    registerButton: {
        width: Dimensions.get('screen').width,
        height: 50,
        backgroundColor: '#7F461B',
        

    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 20,
        left: 170,
    },
    Text:{
        fontSize: 20,
        color: '#fff',
        textAlign:'center',
        top:15,
    }
})

export default WelcomeScreen;