import React from 'react'
import loaderPng from '../../assets/loaderPng.png';

const LoadingButton = ({className}) => {
  return (
    <button className={className}>
        <img src={loaderPng} className='h-6 w-6 object-cover' alt="" />
    </button>
  )
}

export default LoadingButton