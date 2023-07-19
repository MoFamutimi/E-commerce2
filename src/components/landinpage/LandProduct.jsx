import React, { useState, useEffect } from 'react'
import Electronics from './Electronics'
import Cosmetics from './Cosmetics'
import Cloths from './Cloths'
import Books from './Books'
import Furniture from './Furniture'
import axios from 'axios'
import { allApiData, addToCart } from '../Redux/ProductState'
import { useDispatch, useSelector } from 'react-redux'
import {BsCartFill} from "react-icons/bs"
import {AiFillEye} from "react-icons/ai"


const LandProduct = () => {
    const allproduct = useSelector((state)=> state.persisitedReducer.allProduct)
    const addCart= useDispatch()
    const Dispatch = useDispatch()
    const [electronics, setElectronics] = useState(false)
    // const [furniture, setFurniture] = useState(false)
    const [books, setBooks] = useState(false)
    const [cloth, setCloths] = useState(false)
    const [cosmetics, setCosmetics] = useState(false)
    const [seeAll, setSeeAll] = useState(true)

    // console.log(Cart)


    const url="https://fakestoreapi.com/products"

    const getApi =()=>{
      axios.get(url)
      .then(res => Dispatch(allApiData(res.data)))
    }

    useEffect(()=>{
        getApi()
    },[]) 






  return (
    <div className='LandProduct'>
        <div className='Wrapper'>
            <div className='LandProductNav'>
                <ul>    
                    <li className={electronics? "Active" : null}
                        onClick={()=>{
                            setElectronics(true)
                            setCosmetics(false)
                            setBooks(false)
                            setCloths(false)
                            // setFurniture(false)
                            setSeeAll(false)
                        }}
                    >Electronics</li>    
                    <li className={cosmetics? "Active" : null}
                    onClick={()=>{
                        setElectronics(false)
                        setCosmetics(true)
                        setBooks(false)
                        setCloths(false)
                        // setFurniture(false)
                        setSeeAll(false)
                    }}
                    >Jewelery</li>
                    <li className={cloth? "Active" : null}
                        onClick={()=>{
                            setElectronics(false)
                            setCosmetics(false)
                            setBooks(false)
                            setCloths(true)
                            // setFurniture(false)
                            setSeeAll(false)
                        }}
                    >men's clothing</li>
                    <li className={books? "Active" : null}
                        onClick={()=>{
                            setElectronics(false)
                            setCosmetics(false)
                            setBooks(true)
                            setCloths(false)
                            // setFurniture(false)
                            setSeeAll(false)
                        }}
                    >women's clothing</li>
                    {/* <li className={furniture? "Active" : null}
                        onClick={()=>{
                            setElectronics(false)
                            setCosmetics(false)
                            setBooks(false)
                            setCloths(false)
                            setFurniture(true)
                            setSeeAll(false)
                        }}
                    >Furniture</li> */}
                    <li className={seeAll? "Active" : null}
                        onClick={()=>{
                            setElectronics(false)
                            setCosmetics(false)
                            setBooks(false)
                            setCloths(false)
                            // setFurniture(false)
                            setSeeAll(true)
                        }}
                    >See all</li>
                </ul>
            </div>
            <div className='LandProductPage'>

                {
                    seeAll?(
                    <div className='AllProduct'>
                         {
                            allproduct?.map((props)=>(
                                <div className="allproductcard" key={props?.id}>
                            <div className="imgCard">
                                <div className='IconShow'>
                                 <div className='IconShowDiv'>
                                    <div className='IconSma'><BsCartFill onClick={()=>Dispatch(addToCart(props))}/></div>
                                    <div className='IconSma'><AiFillEye /></div>
                                    <div className='IconSma'></div>
                                 </div>
                                </div>
                                <img src={props?.image} alt="" />
                            </div>
                            <div className='textInfo'>
                                <h5>{props?.title}</h5>
                                <p>${props?.price}</p>
                            </div>
                        </div>
                            ))
                         }
                    </div>):    
                    electronics?(<Electronics/> ):
                    cosmetics?(<Cosmetics/>):
                    cloth?(<Cloths/>):
                    books?(<Books/>):null
                }
                
            </div>
        </div>
    </div>
  )
}

export default LandProduct