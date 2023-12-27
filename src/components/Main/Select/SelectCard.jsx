import React from 'react'

const SelectCard = ({images}) => {
  return (
    <div className='select__row'>
      <img className='select__img' src={images} alt="img" />
    </div>
  )
}

export default SelectCard
