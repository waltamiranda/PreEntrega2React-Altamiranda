import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../../Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [item, setItem]= useState([]);
  const {id} = useParams();
  useEffect(()=>{
    const promesa = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(id ? arrayProductos.filter(item=>item.categoria === id) : arrayProductos)
      },3000)
    });
    promesa.then((data)=>{
      setItem(data)
    })
  },[id])
  
  return (
    <div className='container'>
      <div className='row'>
        <ItemList item={item}/>
      </div>
        
    </div>
  )
}

export default ItemListContainer