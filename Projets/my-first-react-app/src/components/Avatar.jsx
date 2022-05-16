import React from 'react'
import imgavatar from '../Images/image-avatar.png'

export const Avatar = () => {
  return (
    <div className='avatar'>
      <div>
        <img className='imgavatar' src={imgavatar} alt=""/>
      </div>
      <div>
        Creation of Jules Wyvern
      </div>
    </div>
  )
}
export default Avatar;