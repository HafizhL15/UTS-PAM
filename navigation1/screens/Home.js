import React, {useState} from 'react';
import { View, Text, StatusBar, StyleSheet,TextInput, TouchableOpacity, Button, Modal, SafeAreaView } from 'react-native';

import { ModalPicker } from './components/ModalPicker';
import { ModalPicker2 } from './components/ModalPicker2';


export default function HomeScreen({ navigation }) {


    const [chooseData, setchooseData] = useState('Pilih Pelabuhan Awal');
    const [chooseData2, setchooseData2] = useState('Pilih Pelabuhan Akhir');
    const [chooseData3, setchooseData3] = useState('Pilih Layanan');

    const [isModalVisible, setisModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
        setchooseData2(option)
        
    }



    

    const [isModalVisible2, setisModalVisible2] = useState(false);
    const changeModalVisibility2 = (bool) => {
        setisModalVisible2(bool)
    }

    const setData2 = (option) => {
        setchooseData3(option)
        
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
                    onPress={() => changeModalVisibility(true)}>
                        
                        <Text style={styles.text}>{chooseData2}</Text>
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

                
                <Text style={styles.isiform}>Kelas Layanan</Text>
                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={() => changeModalVisibility2(true)}>
                        
                        <Text style={styles.text}>{chooseData3}</Text>
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

                
                <Text style={styles.isiform}>Tanggal Masuk Pelabuhan</Text>
                <TextInput placeholder='Pilih Tanggal Masuk' placeholderTextColor='#000' style={styles.TextInput}/>

                <TouchableOpacity
                    style={styles.button}
                    onPress={console.log('Hehehe')}
                >
                    <Text style={{color:'black', fontWeight:'bold'}}>     Dewasa                                             1 Orang</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.tombol}
                    onPress={console.log('Hehehehe')}
                >
                    <Text style={styles.textTombol}>Buat Tiket</Text>
                </TouchableOpacity>
                

                {/* <Text style={styles.isiform}>Pelabuhan Tujuan</Text>
                <TextInput placeholder='Pilih Pelabuhan Tujuan' placeholderTextColor='#000' style={styles.TextInput}/>

                <Text style={styles.isiform}>Kelas Layanan</Text>
                <TextInput placeholder='Pilih Layanan' placeholderTextColor='#000' style={styles.TextInput}/>

                <Text style={styles.isiform}>Tanggal Masuk Pelabuhan</Text>
                <TextInput placeholder='Pilih Tanggal Masuk' placeholderTextColor='#000' style={styles.TextInput}/>

                <Text style={styles.isiform}>Jam Masuk Pelabuhan</Text>
                <TextInput placeholder='Pilih Jam Masuk' placeholderTextColor='#000' style={styles.TextInput}/>

                <TouchableOpacity
                    style={styles.button}
                    onPress={console.log('Hehehe')}
                >
                    <Text style={{color:'black', fontWeight:'bold'}}>     Dewasa                                             1 Orang</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.tombol}
                    onPress={console.log('Hehehehe')}
                >
                    <Text style={styles.textTombol}>Buat Tiket</Text>
                </TouchableOpacity> */}

            </View>
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
        // marginBottom: 35 
    },

    isiform:{
        fontSize: 15,
        color: '#a8a8a8',

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
    }

});