import React from 'react'
import './LogoAndC.css'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

function LogoAndC() {
  return (
    <div className='Copyright'>
        <p>shlomov-websites</p>
        <AiOutlineCopyrightCircle className='CopyrightLogo' size="20px"/>
    </div>
  )
}

export default LogoAndC