import  { useState } from 'react';
import { 
  StyleSheet, Text, TextInput, View, Pressable, FlatList 
} from 'react-native';

const Create = ({data,setdata}) => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [isEdit,setIsEdit] =useState(false);
  const [editItemId,seteditItemId] = useState(null);
  const handleAdditem=()=>{
    if (!itemName.trim()) return;
    const newItem ={
        id:Date.now(),
        name:itemName,
        stock:stock
    }
    setdata([...data,newItem])
    setItemName('');
    setStock('');
    setIsEdit(false);
  }
  const deleteItemHandler=(id)=>{
    setdata(data.filter((item)=>item.id !== id))
  }
  const editItemHandler=(item)=>{
    setIsEdit(true);
    setItemName(item.name);
    setStock(item.stock);
    seteditItemId(item.id);
  }
  const updateItemHandler = () => {
  setdata(data.map(item =>
    item.id === editItemId
      ? { ...item, name: itemName, stock: stock }
      : item
  ));

  setItemName('');
  setStock('');
  setIsEdit(false);
  seteditItemId(null);
};

const handleItemNameChange=(text)=>{
  const filteredText = text.replace(/[^a-zA-Z\s]/g, '')
  setItemName(filteredText)
}

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={handleItemNameChange}
      />
      <TextInput
        placeholder="Enter an item name.."
        placeholderTextColor="#999"
        style={styles.input}
        value={stock}
        onChangeText={item => setStock(item)}
      />
      <Pressable style={styles.addbutton}
      onPress={()=>isEdit ? updateItemHandler() : handleAdditem()}
      >
        <Text style={styles.btnText}>{isEdit ? "Edit Item" : "Add Item"}</Text>
      </Pressable>
      <View style={{marginTop:10}}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Items</Text>
          <Text>Quantity</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BFFF' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{flexDirection:"row",gap:20}}>
              <Text style={styles.itemText}>{item.stock}</Text>
              {/* items ko bhja because jab me click karu tab mereko wo item dikhe TextInput ke andar  */}
                <Pressable onPress={()=>editItemHandler(item)}>
                    <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={()=>deleteItemHandler(item.id)}>
                    <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          // this will give in every element row gap 10
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    paddingVertical:'4%',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#72C37AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  addbutton: {
    backgroundColor: '#7762beff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headingContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:10
  },
  headingText:{
    fontWeight:"500",
    fontSize:16,
    marginVertical:10
  },
  itemContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7
  },
  itemText:{
    fontWeight:"400",
    fontSize:14
  }
});
