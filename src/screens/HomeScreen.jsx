import { Pressable, StyleSheet, Text, View } from 'react-native'
import CreateScreen from './Create';
import AllItems from './AllItems';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';


const STORAGE_KEY = "item_data";

const HomeScreen = () => {
  const [view,setView] =useState(0);
  const [data,setData]=useState([
  {id:1,name:'Wheat',stock:5,unit:"kg"},
  {id:2,name:'Rice',stock:15,unit:"kg"},
  {id:3,name:'Basmati Rice',stock:25,unit:"kg"},
  {id:4,name:'Pulse',stock:50,unit:"kg"},
  {id:5,name:'Corn',stock:19,unit:"kg"},
])
useEffect(()=>{
  const loadData = async()=>{
    const storedData =await AsyncStorage.getItem(STORAGE_KEY);
    if(storedData){
      setData(JSON.parse(storedData));
    }
  }
  loadData();
},[])
useEffect(()=>{
  const saveData =async()=>{
    await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(data))
  }
  saveData();
},[data])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DashBoard</Text>
      <View style={styles.buttonContainer}>

        <Pressable style={[styles.button ,view === 0 ? {backgroundColor:'#72C37AFF'} :null ] } onPress={()=>setView(0)}>
          <Text style={[styles.btnText,view === 0 ? {color:'white'} : null]}>All items</Text>
        </Pressable>

        <Pressable style={[styles.button ,view === 1 ? {backgroundColor:'#72C37AFF'} :null ] } onPress={()=>setView(1)}>
          <Text style={[styles.btnText,view === 1 ? {color:'white'} : null]}>Low Stocks</Text>
        </Pressable>

        <Pressable style={[styles.button ,view === 2 ? {backgroundColor:'#72C37AFF'} :null ] } onPress={()=>setView(2)}>
          <Text style={[styles.btnText,view === 2 ? {color:'white'} : null]}>Create</Text>
        </Pressable>
      </View>
      {/* i pass data as props to get inside allItems  */}
      {view === 0 && <AllItems data={data}/>}
      {view === 1 && <AllItems data={data.filter((item)=>item.stock <20)}/>}
      {view === 2 && <CreateScreen data={data} setdata={setData}/>}
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    padding:20,
    backgroundColor:"#ffffff"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:"#333",
    marginBottom:10
  },
  buttonContainer:{
    flexDirection:"row",
    gap:10,
    marginVertical:10

  },
  button:{
    paddingVertical:3,
    paddingHorizontal:10,
    borderRadius:50,
    borderWidth:1,
    borderColor:"#72C37AFF"
  },
  btnText:{
    color:"#72C37AFF",
    fontSize:12
  }

})