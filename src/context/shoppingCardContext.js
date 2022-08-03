import {useState, createContext} from "react";

export const ShoppingCardContext = createContext({
    order: new Map(),
    // orderId: 0,
    saveOrderId: () => {
        // This is intentional
    },
    addItemToOrder: () => {
        // This is intentional
    },
    removeItemFromOrder: () => {
        // This is intentional
    },
    cleanShoppingCard: () => {
        // This is intentional
    }
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

const getId = () => {
    if (localStorage.getItem('orderId')) {
        return Number(localStorage.getItem('orderId'));
    } else {
        return 0;
    }
}

const setId = (id) => {
    localStorage.setItem("orderId", id);
}

export const ShoppingCardContextProvider = ({children}) => {
    const [order, setOrder] = useState(getOrder());
    const [orderId, setOrderId] = useState(getId());

    const saveOrderId = (newOrderId) => {
        setOrderId(newOrderId);
        setId(newOrderId);
        console.log(newOrderId)
    }


    const addItemToOrder = (newItem) => {
        let newOrder = new Map(order)
        if(newOrder.get(newItem.ID) === undefined) {
            newOrder.set(newItem.ID, {item: newItem, quantity: 1})
        } else {
            newOrder.set(newItem.ID,{item: newItem, quantity: newOrder.get(newItem.ID).quantity+1})
        }
        setOrder(newOrder);
        setOrderToStorage(newOrder);
    }

    const removeItemFromOrder = (item) => {
        let newOrder = new Map(order)
        if(newOrder.get(item.ID).quantity === 1) {
            newOrder.delete(item.ID)
        } else {
            newOrder.set(item.ID,{item: item, quantity: newOrder.get(item.ID).quantity-1})
        }
        setOrderToStorage(newOrder);
        setOrder(newOrder);
    }
    const cleanShoppingCard = () => {
        let newOrder = new Map()
        setOrderToStorage(newOrder);
        setOrder(newOrder);
    }

    return (
        <ShoppingCardContext.Provider value={{
            order,
            orderId,
            saveOrderId,
            addItemToOrder,
            removeItemFromOrder,
            cleanShoppingCard,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}