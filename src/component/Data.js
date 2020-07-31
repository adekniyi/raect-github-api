import React, { useState } from 'react'
import DataOutput from './DataOutput'

function Data() {
    const [getValue, setGetValue] = useState("")
    const [user, getUser] = useState("")



    const submitForm = (e) => {
        e.preventDefault()
        getUser(getValue)
    }


    return ( <
        div className = "dataStyle" >
        <
        form className = "formStyle"
        onSubmit = { submitForm } >
        <
        div className = "form-control" >
        <
        input type = "text"
        placeholder = "type Username"
        value = { getValue }
        onChange = {
            (e) => setGetValue(e.target.value)
        }
        / > <
        button type = "submit" > Search Github User < /button> < /
        div > <
        /
        form > <
        DataOutput user = { user }
        / > < /
        div >
    )
}

export default Data