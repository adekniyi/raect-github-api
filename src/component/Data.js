import React from 'react'
import DataOutput from './DataOutput'

function Data() {
    return ( <
        div className = "dataStyle" >
        <
        form className = "formStyle" >
        <
        div className = "form-control" >
        <
        input type = "text"
        placeholder = "type Username" / >
        <
        button type = "submit" > Search Github User < /button> <
        /div> <
        /
        form > <
        DataOutput / >
        <
        /div>
    )
}

export default Data