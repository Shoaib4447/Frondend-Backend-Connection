import React from 'react';

const JokeComp = ({title, content}) => {
  return (
    <div className=' bg-gradient-to-tr bg-orange-500 from-red-500 p-10 w-60 h-60 bg-slate-300 m-3 leading-wide'>
        <h3 className='text-black uppercase font-bold text-xl'>{title}</h3>
        <p className=' '>{content}</p>
    </div>
  )
}

export default JokeComp;