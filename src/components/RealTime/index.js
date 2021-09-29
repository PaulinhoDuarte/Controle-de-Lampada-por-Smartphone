import React from 'react';
import {useState} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, } from 'react-native-elements';
import styles from "./style";
import axios from 'axios';

export default function RealTime(){
    const [Corrente, setCorrente] = useState(0)
    const [kWH, setkHW] = useState(0)
    const [reais, setReais] = useState(0)
    Connect = "http://192.168.1.15/"

    function refresh(){
        return (
            axios.get(Connect+"corrente", {
            })
            .then(function (response) {
            console.log(response);
            setCorrente(response.data);
            setkHW(((Corrente*220)/(3600*1000)).toFixed(11));
            setReais((((Corrente*220)/(3600*1000))*0.6).toFixed(12));
            })
            .catch(function (error) {
            console.log(error);
            })
        )
    };
    return(
        <View style={styles.homeContext}>
            <View style={styles.subtitulo}>
                <Text style={styles.Textsubtitulo}> Real Time</Text>
                <TouchableOpacity
                    style={styles.refreshstyle}
                    onPress={() => {refresh()}}
                    >
                    <Image
                        source={require('../../IMG/refresh.png')}
                        style={styles.buttonImageIconStyle}
                    />
                </TouchableOpacity> 
            </View>
            <View style={styles.body}>
                <Text style={styles.textbody}>Energia Gasta</Text>
                <Text style={styles.responsebody}>{kWH} kWH</Text>
                <Text style={styles.textbody}>Valor Gasto</Text>
                <Text style={styles.responsebody}>R$ {reais} </Text>
            </View>
        </View>
    )};

