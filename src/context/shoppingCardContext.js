import {useState, createContext} from "react";

export const ShoppingCardContext = createContext({
    order: new Map(),
    addItemToOrder: () => {
        // This is intentional
    },
    removeItemFromOrder: () => {
        // This is intentional
    },
});

const getOrder = () => {
    if (localStorage.getItem('order')) {
        return new Map(JSON.parse(localStorage.getItem('order')));
    } else {
        return new Map();
    }
}

const setOrderToStorage = (items) => {
    localStorage.setItem("order", JSON.stringify([...items]));
}

export const ShoppingCardContextProvider = ({children}) => {
    const [order, setOrder] = useState(getOrder());

    const addItemToOrder = (newItem) => {
        if(order.get(newItem.ID) === undefined) {
            order.set(newItem.ID, {item: newItem, quantity: 1})
        } else {
          order.set(newItem.ID,{item: newItem, quantity: order.get(newItem.ID).quantity+1})
        }
        setOrderToStorage(order);
        setOrder(order);
    }

    const removeItemFromOrder = (item) => {
        if(order.get(item.ID).quantity === 1) {
            order.delete(item.ID)
        } else {
            order.set(item.ID,{item: item, quantity: order.get(item.ID).quantity-1})
        }
        setOrderToStorage(order);
        setOrder(order);
    }

    return (
        <ShoppingCardContext.Provider value={{
            order,
            addItemToOrder,
            removeItemFromOrder,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}