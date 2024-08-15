/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React,{useState} from 'react';
import {SafeAreaView,View,Text,FlatList, StyleSheet} from 'react-native';
import ToDoCard from './components/ToDoCard';
import AddingBar from './components/AddingBar';


type TodoItem = {
    id: number;
    title: string;
    isDeleted: boolean;
};


function App(){
  const [isStrikethrough, setIsStrikethrough] = useState(false);
    const [number , setNumber]=useState(0);
    const [list,setList]=useState<TodoItem[]>([]);
    const [mydata,setMydata]=useState("");


    function upLoadNumber(){
      setNumber(number+1);
      const deger:TodoItem={
        id:number,
        title:mydata,
        isDeleted:false,  };

        setList([...list,deger]);
        console.log(deger)
    }
    function decreaseNumber(item:TodoItem){
      const updatedList = list.map(todo => {
        if (todo.id === item.id) {
          if (!todo.isDeleted) {
            setNumber(number - 1);
          }else{setNumber(number+1);}
          return { ...todo, isDeleted: !todo.isDeleted };
        }
        return todo;
      });
      setList(updatedList);
  
      
    }
  return(
        <View style ={styles.container}>
           <Text style = {{fontSize:40,fontWeight:'bold',color:'orange',padding:25}}>YAPILACAKLAR   {number}</Text>
           
           <FlatList
               keyExtractor={item =>item.id.toString()}
               data={list}
               renderItem={({item}) => (<ToDoCard item={item} isStrikethrough={item.isDeleted} onToggle ={decreaseNumber}  />)}
   />
              <AddingBar setUpdate ={upLoadNumber} text={mydata} settext={setMydata}/>
              
              
        </View>
       
    );
}
   const styles = StyleSheet.create({
     container:{
        flex:1,
        backgroundColor:'black',
     },
   })
   export default App;

