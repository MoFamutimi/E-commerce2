
import "./Cart.css";
import {AiOutlinePlus, AiOutlineMinus, AiFillDelete} from "react-icons/ai"
import {useSelector } from 'react-redux'
import { removeCart } from '../Redux/ProductState'
import { useDispatch } from 'react-redux';

const Cart = () => {
    
    const Dispatch = useDispatch()
    const Cart = useSelector((state)=> state.persisitedReducer.addcart)
    const qty = useSelector((state)=> state.persisitedReducer.Qty)
    console.log(qty)
    return (
        <div className="shopping-cart" style={{ overflow: "scroll" }}>
            <div className="title">
                <h3>Your Cart, You've Got ({Cart.length}) items in it</h3>
            </div>
                   {
                    Cart?.map((props)=>(
                        <div className="item" >
                        <div className="buttons">
                                <AiFillDelete className="Delete" onClick={()=> Dispatch(removeCart(props))}/>
                        </div>
                        <div className="image">
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={props.image}
                                alt=""
                            />
                        </div>
                        <div className="description">
                            <h3 style={{fontSize: "10px"}}>{props.title}</h3>
                            {/* <span>color</span> */}
                        </div>
                        <div className="quantity">
                            <button
                                className="plus-btn"
                                type="button"
                                name="button"
                            >
                                <AiOutlineMinus/>
                            </button>
                            <span style={{ margin: "5px 10px" }}>
                             0    
                            </span>
                            <button
                                className="minus-btn"
                                type="button"
                                name="button"
                            >
                                <AiOutlinePlus/>
                            </button>
                        </div>
                        <div className="total-price">#{props.price}</div>
                    </div>
                    ))
                   }
            <div
                className="order-summary"
                style={{
                    display: "flex",
                    width: "250px",
                    height: "200px",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "column",
                    background: "lightblue",
                    position: "absolute",
                    right: "0",
                    top: "400px",
                }}
            >
                <h2>Order Summary</h2>
                <h3>Total Quantity: 43</h3>
                <h3>Total Price:= 0000</h3>
                <button style={{ padding: "10px" }}>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
