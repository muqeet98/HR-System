import React, { Component, State } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image,StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const FirstScreen = (props) => {
    return (
        <>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.logo}
                    source={require('./icons/process2.png')}>
                </Image>
            </View>
            <View style={{ marginTop: hp('5%') }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.UserSignIn} onPress={() => props.navigation.navigate("Login")}  >
                        <Text style={styles.buttonText}>Login as Employee</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.UserSignIn} onPress={() => props.navigation.navigate("AdmLogin")}  >
                        <Text style={styles.buttonText}>Login as Admin</Text>
                    </TouchableOpacity>
                    
                </View>
                {/* <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.UserSignIn} onPress={() => props.navigation.navigate("HodLogin")}  >
                        <Text style={styles.buttonText}>Login as HoD</Text>
                    </TouchableOpacity>
                </View> */}
            </View>


        </View>
        </>
    )
}

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    logo: {
        height: hp('30%'),
        width: wp('55%'),


    },
    imageView: {
        marginTop: hp('10%'),
        marginLeft: wp('3%'),
        marginRight: wp('3%'),
        alignItems: 'center',

    },
    buttonContainer: {
        marginTop: ('7%'),
        alignItems: 'center'
    },
    UserSignIn: {
        borderRadius: 30,
        backgroundColor: '#E66E2F',
        borderColor: '#E66E2F',
        borderWidth: 1,
        width: wp('70%'),
        alignItems: 'center',
        height: hp('6%'),
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        justifyContent: 'center',
        color: '#fff'
    }
})