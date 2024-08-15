import React from 'react';
import {View, Text,TouchableOpacity,TextInput} from 'react-native';
import styles from './AddingBar.styles';

  const AddingBar=(props)=>{
    return(
     <View style ={styles.container} >
        <TextInput value={props.text} onChangeText={props.settext} placeholder="Yapılacak..." />
        <View style ={styles.button_container}>
        <TouchableOpacity style={styles.button_title} onPress={props.setUpdate}><Text>KAYDET</Text></TouchableOpacity>
     </View>
     </View>

)  }

export default AddingBar;