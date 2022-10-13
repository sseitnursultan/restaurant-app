import React, {useEffect, useState} from 'react'
import {AddRounded, Favorite, StarRounded} from "@mui/icons-material";
import {Items} from "./Data";
import {useStateValue} from "./ContextProvider";
import {actionType} from "./reducers";

let  cardData=[]

const ItemCard = (props) => {

    const [isFavorite,setFavorite] = React.useState(false)
    const [currentValue,setCurrentValue]=React.useState(props.ratings)

    const [isCart,setCart] = useState(null)
    const [{},dispatch] = useStateValue()


    useEffect(()=>{
        if(isCart){
            cardData.push(isCart)
            dispatch({
                type:actionType.SET_CART,
                cart:cardData
            })
        }

    },[isCart])

    const handleClick = (value) =>{
        setCurrentValue(value)
    }


    const setFavoritee = ()=>{
        setFavorite(!isFavorite)
    }

    return (
        <div className={'ItemCard'} id={props.itemId}>
            <div className={`isFavorite ${isFavorite ? 'active' : ''}`} onClick={setFavoritee}>
                <Favorite/>
            </div>

            <div className={'imgBox'}>
                <img src={props.imgSrc} className={'itemImg'}/>
            </div>

            <div className="itemContent">
                <h3 className={'itemName'}>{props.name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, {length: 5}).map((e, i) => (
                            <i key={i} className={`rating ${currentValue > i ? 'orange' : 'gray'}`} onClick={()=>handleClick(i+1)}>
                                <StarRounded/>
                            </i>
                        ))}
                        <h4 className={'price'}><span>$ </span>{props.price}</h4>
                    </div>
                    <i className="addToCard" onClick={()=> setCart(Items.find(n=>n.id === props.itemId))}>
                        <AddRounded/>
                    </i>
                </div>
            </div>
        </div>
    )
}

export default ItemCard