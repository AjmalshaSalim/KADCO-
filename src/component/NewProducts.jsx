import React from 'react'
import Cards from './Cards'
import DesignPalette from './DesignPalette'

const NewProducts = () => {
  return (
    <div>
        <div className="w-full text-center">
        <h1 className=' text-slate-700 font-semibold text-lg pb-10'>New Products</h1>
        <DesignPalette/>
        </div>
        <div className='flex gap-20 p-10'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        </div>
        <div className='bg-slate-400 w-full h-3'>

        </div>
        </div>
  )
}

export default NewProducts