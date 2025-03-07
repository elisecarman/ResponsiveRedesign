import React from 'react'
import "../App.css"

interface CalloutProp{
    isDarkMode: boolean,
    text: string
}

function Callout(props: CalloutProp) {
  return (
    <h5 className={props.isDarkMode ? "dark-callout" : "callout"}>
        {props.text}
    </h5>
  )
}

export default Callout