import React, {useEffect, useState} from 'react'
import {AddRounded, RemoveRounded} from "@mui/icons-material";
import {useStateValue} from "./ContextProvider";
import {actionType} from "./reducers";

let cartItems = []


const CartItem = (props) =>{


    const [qty,setQty] = useState(1);
    const [{cart},{dispatch}] = useStateValue();
    const [itemPrice,setItemPrice] = useState(parseInt(qty)*parseFloat(props.price))

    useEffect(()=>{
        cartItems = cart;
        setItemPrice(parseInt(qty) * parseFloat(props.price))
    },[qty])


    const updateQty = (action,id) => {
        if(action==='add'){
            setQty(qty+1)
        }
        else {
            if(qty===1){
                cartItems.pop(id)
                dispatch({
                    type:actionType.SET_CART,
                    cart:cartItems,
                })

            }
            setQty(qty-1)
        }
    }

    return <div className={'cardItem'}>
        <div className="imgBox">
            <img src={props.imgSrc} alt=""/>
        </div>

        <div className="itemSection">
            <h2 className={'itemName'}>{props.name}</h2>
            <div className="itemQuantity">
                <span>x {qty} </span>
                <div className="quantity">
                    <RemoveRounded className={'itemRemove'} onClick={()=>updateQty('remove',props.itemId)}/>
                    <AddRounded className={'itemAdd'} onClick={()=>updateQty('add',props.itemId)}/>

                </div>
            </div>

        </div>

        <p className="itemPrice">
            <span className={'dollarSign'}>$ </span>
            <span className={'itemPriceValue'}>{itemPrice}</span>
        </p>

    </div>
}
export default CartItem