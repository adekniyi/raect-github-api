import React from 'react'
import logo from '../logo.svg';


function DataOutput() {
    return ( <
        div className = "dataOutput" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >

        <
        h3 style = {
            { paddingBottom: "12px" }
        } > Adek Niyi < /h3> <
        h5 style = {
            { paddingBottom: "5px" }
        } > Real Name < /h5> <
        p style = {
            { paddingBottom: "12px" }
        } > Adekunle Adeniyi < /p> <
        h5 style = {
            { paddingBottom: "5px" }
        } > Location < /h5> <
        p style = {
            { paddingBottom: "12px" }
        } > Lagos Nigeria < /p> <
        h5 style = {
            { paddingBottom: "5px" }
        } > Number of Public repo < /h5> <
        p style = {
            { paddingBottom: "12px" }
        } > 55 < /p> <
        h5 style = {
            { paddingBottom: "5px" }
        } > Number of followers < /h5> <
        p > 119 < /p> < /
        div >
    )
}

export default DataOutput