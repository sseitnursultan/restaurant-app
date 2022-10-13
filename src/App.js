import './App.css'
import Header from "./Components/Header/Header";
import MenuComponent from './Components/BottomMenu/Bottommenu'
import React from 'react'
import {
    AccountBalanceWalletRounded, ChatRounded,
    Favorite,
    HomeRounded,
    SettingsRounded,
    SummarizeRounded
} from "@mui/icons-material";
import BannerName from "./Components/BannerName"
import delivery from './assets/delivery.png'
import SubMenuContainer from "./Components/SubMenuContainer"
import MenuCard from './Components/MenuCard'
import {MenuItems, Items} from './Components/Data'
import ItemCard from './Components/ItemCard'
import burger from './assets/burger1.png'
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";
import {useStateValue} from "./Components/ContextProvider";

function App() {

    const [isMainData,setMainData] = React.useState(
        Items.filter(element => element.itemId === 'buger01')
    )

    const [{cart},dispatch] = useStateValue()

    React.useEffect(() => {
        const menuLi = document.querySelectorAll('#menu li')
        console.log(menuLi)

        function setMenuActive() {
            menuLi.forEach((n) => n.classList.remove("active"))
            this.classList.add("active")
        }

        menuLi.forEach(n => n.addEventListener('click', setMenuActive))

        /*MenuCard Active toggle **/

        const menuCards = document
            .querySelector('.rowContainer')
            .querySelectorAll('.rowMenuCard')

        function setMenuCardActive() {
            menuCards.forEach(n => n.classList.remove('active'))
            this.classList.add('active')
        }

        menuCards.forEach((n) => n.addEventListener('click', setMenuCardActive))
    }, [isMainData,cart])

    const setData = (itemId) =>{
        setMainData(Items.filter((element)=>element.itemId===itemId))
    }

    return (
        <div className="App">
            <Header/>


            {/*Main content*/}

            <main>
                <div className={'mainContainer'}>
                    {/*Banner*/}
                    <div className={'banner'}>
                        <BannerName name={'Nursultan'} discount={'20'} link={'#'}/>
                        <img src={delivery} className={'deliveryPic'}/>
                    </div>


                    <div className={'dishContainer'}>
                        <div className={'menuCard'}>
                            <SubMenuContainer name={'Menu Category'}/>
                        </div>
                        <div className={'rowContainer'}>
                            {
                                MenuItems && MenuItems.map(data => (
                                    <div key={data.id} onClick={()=>setData(data.itemId)}>
                                        <MenuCard imgSrc={data.imgSrc} name={data.name}
                                                  isActive={ data.id===1 ? true:false}/>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="dishItemContainer">
                            {isMainData && isMainData.map((data)=>(
                                <ItemCard
                                    key={data.id}
                                    itemId={data.id}
                                    imgSrc={data.imgSrc}
                                    name={data.name}
                                    ratings={data.ratings}
                                    price={data.price}/>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={'rightMenu'}>
                    <div className="debitCardContainer">
                        <div className="debitCard">
                            <DebitCard/>
                        </div>
                    </div>

                    {!cart ? <div></div> :
                        <div className="cardCheckOutContainer">
                            <SubMenuContainer name={'Cart Items'}/>
                            <div className="cartContainer">

                                <div className="cartItems">

                                    {
                                        cart && cart.map(data=>(
                                            <CartItem
                                                key={data.id}
                                                itemId={data.id}
                                                name={data.name}
                                                imgSrc={data.imgSrc}
                                                price={data.price}
                                            />
                                        ))
                                    }


                                </div>
                            </div>

                            <div className="totalSection">
                                <h3>Total</h3>
                                <p><span>$ </span>45.0</p>
                            </div>

                            <button className={'checkOut'}>
                                Check Out
                            </button>

                        </div>}


                </div>
            </main>


            {/*Main content ends*/}


            {/*Bottom MEnu */}

            <div className={'bottomMenu'}>
                <ul id={"menu"}>
                    <MenuComponent link={'#'} icon={<HomeRounded/>} isHome/>
                    <MenuComponent link={'#'} icon={<ChatRounded/>}/>
                    <MenuComponent link={'#'} icon={<AccountBalanceWalletRounded/>}/>
                    <MenuComponent link={'#'} icon={<Favorite/>}/>
                    <MenuComponent link={'#'} icon={<SummarizeRounded/>}/>
                    <MenuComponent link={'#'} icon={<SettingsRounded/>}/>

                    <div className={'indicator'}></div>

                </ul>
            </div>
        </div>
    );
}

export default App;
