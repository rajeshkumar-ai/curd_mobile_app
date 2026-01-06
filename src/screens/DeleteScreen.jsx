import { FlatList, StyleSheet, Text, View,Pressable } from 'react-native'
import { useContext } from 'react'
import { ItemContext } from '../context/ItemContext'

const DeleteScreen = () => {
  const {deletedItems,setDeletedItems,data,setData} = useContext(ItemContext);

  const undoHandler =(item)=>{
    setData([...data,item]);
    setDeletedItems(
      deletedItems.filter(i => i.id != item.id)
    );
  }
  const permanentDeleteHandler=(id)=>{
    //keep every item expect the one whose id matches the given id
    setDeletedItems(
      deletedItems.filter(item=>item.id !== id)
    );
  }
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:20,fontWeight:"bold"}}>Deleted Items</Text>
      <FlatList
        data={deletedItems}
        keyExtractor={item=>item.id.toString()}
        renderItem={({item})=>(
          <View
            style={{
              backgroundColor:"#FFD6D6",
              padding:10,
              borderRadius:8,
              marginVertical:5
            }}
          >
            <Text>{item.name} - {item.stock}</Text>
            <View style={{flexDirection:"row",gap:15,marginTop:5}}>
              <Pressable onPress={()=>undoHandler(item)}>
                <Text style={{color:'green'}}>UNDO</Text>
              </Pressable>
              <Pressable onPress={()=>permanentDeleteHandler(item.id)}>
                <Text style={{color:'red'}}>Permanent Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
        //if item not present show this
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Text style={{ fontSize: 16, color: '#6f1414ff' }}>
              No items present
            </Text>
          </View>
        }
      />
    </View>
  )
}

export default DeleteScreen

const styles = StyleSheet.create({})