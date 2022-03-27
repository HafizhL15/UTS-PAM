import React, {useState} from 'react';
import { View, Text, StatusBar, StyleSheet,TextInput, TouchableOpacity, Button, Modal, SafeAreaView } from 'react-native';

import { ModalPicker } from './components/ModalPicker';
import { ModalPicker2 } from './components/ModalPicker2';
import { ModalPicker3 } from './components/ModalPicker3';
import { ModalPicker4 } from './components/ModalPicker4';
import Pesanan from './Pesanan';

export default function HomeScreen({ navigation }) {


    const [chooseData, setchooseData] = useState('Pilih Pelabuhan Awal');
    const [chooseData2, setchooseData2] = useState('Pilih Pelabuhan Akhir');
    const [chooseData3, setchooseData3] = useState('Pilih Layanan');
    const [chooseData4, setchooseData4] = useState('     Dewasa                                             1 Orang');

    const [isModalVisible, setisModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
    }



    

    const [isModalVisible2, setisModalVisible2] = useState(false);
    const changeModalVisibility2 = (bool) => {
        setisModalVisible2(bool)
    }

    const setData2 = (option) => {
        setchooseData2(option)
        
    }




    
    const [isModalVisible3, setisModalVisible3] = useState(false);
    const changeModalVisibility3 = (bool) => {
        setisModalVisible3(bool)
    }

    const setData3 = (option) => {
        setchooseData3(option)
        
    }



    const [isModalVisible4, setisModalVisible4] = useState(false);
    const changeModalVisibility4 = (bool) => {
        setisModalVisible4(bool)
    }

    const setData4 = (option) => {
        setchooseData4(option)
        
    }



    return (
        <View style={{flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor="#1976d2"/>

            <View style={styles.form}>
                <Text style={styles.heading}>Kapalzy</Text>

                <Text style={styles.isiform}>Pelabuhan Awal</Text>
                
                    <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => changeModalVisibility(true)}>
                        
                        <Text style={styles.text}>{chooseData}</Text>
                    </TouchableOpacity>

                    <Modal 
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible}
                        nRequestClose={() => changeModalVisibility(false)}
                    >
                        <ModalPicker
                            changeModalVisibility={changeModalVisibility}
                            setData={setData}
                        />
                    </Modal>

                <Text style={styles.isiform}>Pelabuhan Tujuan</Text>
                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => changeModalVisibility2(true)}>
                        
                        <Text style={styles.text}>{chooseData2}</Text>
                    </TouchableOpacity>

                    <Modal 
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible2}
                        nRequestClose={() => changeModalVisibility2(false)}
                    >
                        <ModalPicker2
                            changeModalVisibility2={changeModalVisibility2}
                            setData2={setData2}
                        />
                    </Modal>



                <Text style={styles.isiform}>Kelas Layanan</Text>
                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => changeModalVisibility3(true)}>
                        
                        <Text style={styles.text}>{chooseData3}</Text>
                    </TouchableOpacity>

                    <Modal 
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible3}
                        nRequestClose={() => changeModalVisibility3(false)}
                    >
                        <ModalPicker3
                            changeModalVisibility3={changeModalVisibility3}
                            setData3={setData3}
                        />
                    </Modal>





                
                <Text style={styles.isiform}>Tanggal Masuk Pelabuhan</Text>
                <TextInput placeholder='Pilih Tanggal Masuk' placeholderTextColor='#000' style={styles.TextInput}/>

                <Text style={styles.isiform}>Jam Masuk Pelabuhan</Text>
                <TextInput placeholder='Pilih Jam Masuk' placeholderTextColor='#000' style={styles.TextInput}/>




                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => changeModalVisibility4(true)}>
                        
                        <Text style={styles.text}>{chooseData4}</Text>
                    </TouchableOpacity>

                    <Modal 
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible4}
                        nRequestClose={() => changeModalVisibility4(false)}
                    >
                        <ModalPicker4
                            changeModalVisibility4={changeModalVisibility4}
                            setData4={setData4}
                        />
                    </Modal>
                <TouchableOpacity
                    style={styles.tombol}
                    onPress={console.log('Coba Input')}
                >
                    <Text style={styles.textTombol}>Buat Tiket</Text>
                </TouchableOpacity>
            
            </View>
            <Text style={styles.footer}>Copyright By Hafizh Londata-119140049</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    form:{
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor:'#FFFFFF',
        padding:20,
        elevation: 3,
        borderRadius: 3,
    },

    heading:{
        color: '#1976d2',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
      
    },

    isiform:{
        fontSize: 15,
        color: '#a8a8a8',
        fontWeight: 'bold'

    },

    TextInput: {
        borderWidth:1,
        paddingHorizontal:10,
        borderColor:'#999999',
        borderRadius:4,
        marginTop:10,
        color:'#666666',
        fontSize: 12,
        paddingVertical:2,
        marginBottom:10,
        backgroundColor: '#e6e6e6',
        shadowColor: '#d1d1d1',
    },

    button: {
        marginTop: 15,
        backgroundColor: "#dddddd",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },

    tombol: {
        marginTop: 5,
        backgroundColor: "#f5a742",
        padding: 10,
        borderRadius: 7,
        marginHorizontal: 50
    },

    textTombol: {
        color: "#ffffff",
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    text: {
        marginVertical:6,
        fontSize: 13,
        color: 'black',
        fontWeight: '500'   
    },

    touchableOpacity: {
        borderWidth:1,
        paddingHorizontal:10,
        borderColor:'#999999',
        borderRadius:4,
        marginTop:10,
        color:'#666666',
        fontSize: 12,
        paddingVertical:2,
        marginBottom:10,
        backgroundColor: '#e6e6e6',
        shadowColor: '#d1d1d1',
    },
    footer: {
        textAlign:'center',
    },

});