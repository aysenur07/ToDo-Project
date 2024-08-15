import React,{useState} from "react";
import {View ,Text,TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';
 const TodoCard= ({ item, isStrikethrough, onToggle } )=>{
      return(
    <View style ={styles.container}>
      <TouchableOpacity onPress={()=>onToggle(item)}>
        <Text style={[styles.txtbox, isStrikethrough && styles.strikethroughText]}>{item.title}</Text>
      </TouchableOpacity>
    </View>
) ;}
export default  TodoCard;