import React from 'react'
import { CDN_URL } from '../utils/constants';

function ItemList({items}) {

    //console.log(items);

  return (
    <div>
        {items.map((item)=>{
            return(
                <div key = {item.card.info.id} className='p-2 m-2  border-gray-300 border-b-2 text-left flex justify-between'>
                    
                    <div className='w-9/12'>
                    <div className='py-2'>
                    <span>{item.card.info.name}</span>
                    <span>
                         - ₹
                         {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}
                         </span>

                    </div>
                    <p>
                    <span className='text-xs'>{item.card.info.description}</span>

                    </p>
                    </div>
                    <div className='w-3/12 p-4'>
                    <div className='absolute'>
                        <button className='p-1 mx-5 rounded-lg bg-white shadow-lg  h-8'>Add +</button>
                        </div>

                        <img src={CDN_URL+item.card.info.imageId} alt='img' className='w-full'/>

                    </div>

                   
                </div>

            )
        })}
    </div>
  )
}

export default ItemList
