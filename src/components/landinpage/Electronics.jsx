import React from 'react'
import { useSelector } from 'react-redux'
import {BsCartFill} from "react-icons/bs"
import {AiFillEye} from "react-icons/ai"


const Electronics = () => {
  const allproduct = useSelector((state)=> state.persisitedReducer.allProduct)
  console.log(allproduct)

  const electronicsdata = allproduct.filter((e)=>e.category === "electronics")
  console.log(electronicsdata)
  return (
    <div className='AllProduct'>
    {
       electronicsdata?.map((props)=>(
           <div className="allproductcard" key={props?.id}>
       <div className="imgCard">
           <div className='IconShow'>
            <div className='IconShowDiv'>
               <div className='IconSma'><BsCartFill/></div>
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
</div>
  )
}

export default Electronics