import React from 'react'

interface KeyWordProps{
    children: React.ReactNode;
}

function KeyWord({children} : KeyWordProps) {
  return (
    <span style={{color: 'royalblue'}}>{children}</span>
  )
}

export default KeyWord