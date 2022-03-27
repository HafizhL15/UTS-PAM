import * as React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function Pesanan({ navigation }) {
    return (
        <View style={{ flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor="#1976d2"/>

            <View style={styles.kotak}>
                <Text style={styles.alamat}>Bakauheni           ->            Merak</Text>

                <Text style={styles.jadwalMasuk}>Jadwal Masuk Pelabuhan</Text>
                <Text style={styles.tanggal}>Kamis, 17 Maret 2022</Text>
                <Text style={styles.tanggal}>15.30 WIB</Text>

                <Text style={[styles.jadwalMasuk, {paddingTop:10}]}>Layanan</Text>
                <Text style={[styles.tanggal, {paddingBottom:5}]}>Executive</Text>

                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginLeft:30,
                    marginRight: 30
                }}
                />

                <Text style={styles.harga}>Dewasa x1                                         Rp 65.000,00</Text>
            </View>
            <Text>Copyright Hafizh Londata - 119140049</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    kotak: {
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
    },

    alamat: {
        fontSize: 18,
        marginHorizontal: 5,
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 20
    },

    jadwalMasuk: {
        color: 'black',
        fontWeight: '500',
        marginHorizontal: 30,
        marginBottom: 2,

    },
    tanggal: {
        color: 'black',
        marginLeft: 30
    },

    harga: {
        color: 'black',
        marginLeft: 30,
        fontSize: 12,
        paddingVertical: 8
    }


})