import React from 'react'

export default function SetTitle(title) {
    React.useEffect(()=>{document.title = title},[title])
}
