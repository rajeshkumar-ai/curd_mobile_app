import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
const AllItems = ({ data }) => {
  const { cartItems, setCartItems } = useContext(ItemContext);

  const addToCartHandler = item => {
    const alreadyInCart = cartItems.find(i => i.id === item.id);
    if (!alreadyInCart) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headingContainer}>
        <Text style={[styles.headingText, { flex: 2 }]}>Items</Text>
        <Text style={[styles.headingText, { flex: 1, textAlign: 'center' }]}>
          Quantity
        </Text>
        <View style={{ flex: 1 }} />
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
            <Text style={[styles.itemText, { flex: 2 }]}>{item.name}</Text>
            <Text style={[styles.itemText, { flex: 1, textAlign: 'center' }]}>
              {item.stock}
            </Text>
            <Pressable
              onPress={() => addToCartHandler(item)}
              style={styles.cartBtn}
            >
              <Text style={styles.cartText}>ADD To Cart</Text>
            </Pressable>
          </View>
        )}
        // this will give in every element row gap 10
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 14,
  },
  cartBtn: {
    backgroundColor: '#7762beff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
  cartText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
