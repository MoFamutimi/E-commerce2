import React from 'react'
import React, {useEffect} from 'react'
import axios from 'axios'

const Api = () => {

    const url="https://fakestoreapi.com/products"

    const getApi =()=>{
      axios.get(url)
      .then(res => console.log(res))
    }

    useEffect(()=>{
        getApi()
    },[]) 

}

export default Api