import React, { useState } from 'react'

function ShoppingCart() {
  const itemsList = [
    { id: 1, name: 'Watch', price: 2000 },
    { id: 2, name: 'Mobile', price: 1500 },
    { id: 3, name: 'Laptop', price: 50000 },
    { id: 4, name: 'Headphones', price: 300 },
  ];
  
  const [cart,setCart]=useState({});

  const updateCart=(items)=>{
    setCart((prevCart)=>{
      const currentCount=prevCart[items.name]?.count || 0;
      return{
        ...prevCart,
        [items.name]:{
          price:items.price,
          count:currentCount+1
        }
      }
    })
    console.log(cart)
  }
  const totalSum=Object.values(cart).reduce((accu,items)=>accu+items.price*items.count,0)
  return (
    <div>
      <div>
      {
        itemsList.map((items)=>{
          return(
            <div key={items.id}>
              <div>
                <span>
              {items.name} is ₹{items.price}
                </span>
              <button style={{marginLeft:"5px"}} onClick={()=>{updateCart(items)}}>
                +
              </button>
              </div>
            </div>
          )
        })
      }
      </div>
      <div>
        <h3>CART</h3>
      <ul style={{listStyleType:"none"}}>
        {
          Object.entries(cart).map(([itemName,itemData],index)=>{
            return(
              <li key={index}>
                {itemName}*{itemData.count}: ₹ {itemData.price * itemData.count}
              </li>
            )
          })
        }
      </ul>
      totalSum:₹ {totalSum}
      </div>
    </div>
  )
}

export default ShoppingCart