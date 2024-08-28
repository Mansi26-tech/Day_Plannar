import React from 'react';
import books from './books.json';
import MobileList from './MobileList'

export default function Mobile() {
  return (
    <div>
      {
        books.map((ele)=>
        {
            return<MobileList 
            image={ele.image}
            title={ele.title}
            price={ele.price}/>
        })
      }
    </div>
  )
}
