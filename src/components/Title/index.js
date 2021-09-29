import React from 'react'
import { View } from 'react-native'
import { Text, Button, CheckBox } from 'react-native-elements'
import styles from "./style"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>CONTROLE DE ILUMINAÇÃO</Text>
        </View>
    );
}