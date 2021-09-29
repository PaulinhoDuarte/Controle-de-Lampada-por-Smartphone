import {useEffect, useState} from 'react';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text,  CheckBox } from 'react-native-elements';
import styles from "./style";
import axios from 'axios';

export default function Home(){
    const[ligar, setSelected] = useState(false)
    const[Automatico, Selected] = useState(false)
    Connect = "http://192.168.1.15/"
    const [counter, setCounter]=useState(5)

    function plus(){
        if ((counter != 9) && (!Automatico) && (ligar)){
            return (
                setCounter(counter+1),
                axios.post(Connect+"countplus", {
                    Count: {counter}
                })
                .then(function (response) {
                console.log(response);
                })
                .catch(function (error) {
                console.log(error);
                })
            )
        }
    }

    function sub(){
        if ((counter != 1) && (!Automatico) && (ligar)){
            return (
                setCounter(counter-1),
                axios.post(Connect+"countsub", {
                    count: {counter}
                })
                .then(function (response) {
                console.log(response);
                })
                .catch(function (error) {
                console.log(error);
                })
            )
        }
    }

    function interruptor(){
        setSelected(!ligar)
        if (!ligar){
            return(
                axios.get(Connect+"ledon")
                .then(function (response) {
                console.log(response);
                })
                .catch(function (error) {
                console.log(error);
                })
            )
        }
        else{
            return(
                axios.get(Connect+"ledoff")
                .then(function (response) {
                console.log(response);
                })
                .catch(function (error) {
                console.log(error);
                })
            )
        }
    }

    function Auto(){
        if (ligar){
            Selected(!Automatico)
            if (!Automatico){
                return(
                    axios.get(Connect+"auto")
                    .then(function (response) {
                    console.log(response);
                    })
                    .catch(function (error) {
                    console.log(error);
                    })
                )
            }
            else{
                return(
                    axios.get(Connect+"manual")
                    .then(function (response) {
                    console.log(response);
                    })
                    .catch(function (error) {
                    console.log(error);
                    })
                )
            }
        }
    }

    return(
        <View style={styles.homeContext}>
            <View style={styles.checkbox}>
                <Text style={styles.homeLabel}>Interruptor</Text>
                <CheckBox
                    title=""
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={ligar}
                    onPress={() => {interruptor()}}
                />
                <Text style={styles.homeLabel}>Modo Automático</Text>
                <CheckBox  
                    title=""
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={Automatico}
                    onPress={() => {Auto()}}
                />
                <Text style={styles.homeLabel}>Modo Manual</Text>
                <View style={styles.buttongrid}>
                    <TouchableOpacity
                    style={styles.buttonLayout} 
                    onPress={() => {sub()}}
                    >
                        <Text style={styles.textbButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.textCounter}>{counter}</Text>
                    <TouchableOpacity
                    style={styles.buttonLayout}  
                    onPress={() => {plus()}}
                    >
                        <Text style={styles.textbButton}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )};

