import React from "react";
import {
    StyleSheet, Text, View,
    TouchableOpacity, Dimensions, ScrollView
} from 'react-native';


const OPTIONS = [
    'Ekonomi',
    'Bisnis',
    'VIP',
    'Eksekutif'

];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker2 = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility2(false);
        props.setData2(option);
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity 
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >

            <Text style={styles.text}>
                {item}
            </Text>

            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibility2(false)}
            style={styles.container}
        >

            <View style={[styles.modal, {width: WIDTH - 20, height:HEIGHT / 2 }]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
    },

    option: {
        alignItems: 'flex-start',

    },

    text: {
        margin: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
})

export {ModalPicker2}