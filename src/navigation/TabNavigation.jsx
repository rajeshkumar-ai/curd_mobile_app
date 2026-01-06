import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import DeleteScreen from '../screens/DeleteScreen';

import {  useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const Tab = createBottomTabNavigator();

// shopping-cart
const TabNavigation = () => {
    const {cartItems} = useContext(ItemContext)
  return (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({color,size})=>{
                if(route.name === "Home"){
                    return <FontAwesome name="home" size={size} color={color}/>
                }
                if(route.name === "Cart"){
                    return <FontAwesome name="shopping-cart" size={size} color={color}/>
                }
                if(route.name === "Delete"){
                    return <AntDesign name="delete" size={size} color={color}/>
                }
            },
            tabBarActiveTintColor:'#ca5959ff',
            headerShown:false
      })}
    >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen 
            name='Cart' 
            component={CartScreen}
            options={{
                tabBarBadge :cartItems.length > 0 ? cartItems.length :null
        }}
        />
        <Tab.Screen name='Delete' component={DeleteScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigation
const styles = StyleSheet.create({})