import axios from "axios"
import { useState, useEffect } from "react"
import { setIsLoading } from "../store/slices/isLoading"
import { useDispatch } from "react-redux"

const Favorites = () => {
 const dispatch=useDispatch()
 const [purchases, setPorcheses]=useState([])

 useEffect(()=>{
    dispatch(setIsLoading(true))
    axios
    .get('')
    .then(resp=> setPorcheses(resp.date))
    .cacth(error => console-error(error))
    .finally(()=> dispatch(setIsLoading(false)))
 } [])

    return(
        <main>
            <h1>Favoritos / Purchases</h1>
            <ul>
                {
                    purchases.map(item=>(
                      <li key={item.id}>
                        <img  src={item.product?.imagnes[0].url} alt=''
                      style={{objectFit:'contain'}}  ></img>
                      </li>  
                    ))
                }
            </ul>
        </main>
    )
}

export default Favorites

