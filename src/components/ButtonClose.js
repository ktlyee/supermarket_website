import React from 'react'

const ButtonClose = ({ isShow, toggle }) => {
    return (
        isShow && 
        <button className='btn-close' onClick={toggle}>X</button>
    )
}

export default ButtonClose
