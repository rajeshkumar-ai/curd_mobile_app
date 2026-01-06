import { createContext, useState } from "react"


export const ItemContext = createContext();

const ItemProvider =({children})=>{
    const[data,setData] = useState([
    { id: 1, name: 'Wheat', stock: 5, unit: "kg" },
    { id: 2, name: 'Rice', stock: 15, unit: "kg" },
    { id: 3, name: 'Basmati Rice', stock: 25, unit: "kg" },
    { id: 4, name: 'Pulse', stock: 50, unit: "kg" },
    { id: 5, name: 'Corn', stock: 19, unit: "kg" },
  ]);
    const[deletedItems,setDeletedItems] = useState([]);
    const[cartItems,setCartItems] =useState([]);

    return(
        <ItemContext.Provider
            value={{
                data,
                setData,
                deletedItems,
                setDeletedItems,
                cartItems,
                setCartItems
            }}
        >
            {children}
        </ItemContext.Provider>
    )

}
export default ItemProvider