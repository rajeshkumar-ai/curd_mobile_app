import { StyleSheet, Text, View,FlatList } from 'react-native';
import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const CartScreen = () => {
  const { cartItems } = useContext(ItemContext);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>MyCart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#2ea978ff',
              padding: 10,
              marginVertical: 5,
              borderRadius: 8,
            }}
          >
            <Text>{item.name}</Text>
            <Text>Qty: {item.quantity}</Text>

          </View>
        )}
        ListEmptyComponent={
          <Text style={{ marginTop: 40, textAlign: 'center' }}>
            Cart is empty
          </Text>
        }
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
