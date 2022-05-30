import React from 'react'
import imgavatar from '../Images/image-avatar.png'

export const Avatar = ({OnClick}) => {
  return (
    <div className='avatar'>
      <div>
        <img className='imgavatar' src={imgavatar} onClick={OnClick} alt="avatar"></img>        
      </div>
      <div>
        Creation of Jules Wyvern
      </div>
    </div>
  )
}
export default Avatar;