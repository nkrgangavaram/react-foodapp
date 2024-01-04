import React from 'react'

const Contactus = () => {
  return (
    <div className='font-bold text-3xl p-4 m-4'>
      
      <h1> contact us: +918374548456
      mail:reddynithin33@gmail.com</h1>
      <form>
        <input type='text' className='border border-black p-2 m-2' placeholder='name'/>
        <input type='text' className='border border-black p-2 m-2' placeholder='message'/>
        <button className='border border-black p-2 m-2 bg-gray-100 rounded-xl'>Submit</button>
      </form>
    </div>
  )
}

export default Contactus
