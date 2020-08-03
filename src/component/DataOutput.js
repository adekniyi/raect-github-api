import React, { useState, useEffect } from 'react'
import logo from '../logo.svg';


function DataOutput(props) {
    const [users, setUsers] = useState({})


    const user = props.user === "" ? "adekniyi" : props.user
    const client_id = "Iv1.6d532b6c69dc31ae"
    const client_secret = "b0e3c5671b49920301d88513a7e98ba9e988d24c"
    const proxy = 'https://cors-anywhere.herokuapp.com/'


    useEffect(() => {
        fetch(`${proxy}https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            }).catch((err) => console.log(`cannot fetch data ${err}`))
    }, [users])
    const { avatar_url, followers, login, name, public_repos, location } = users
    return ( <
        div className = "dataOutput" >
        <
        img src = { avatar_url === undefined ? logo : avatar_url }
        className = "App-logo"
        alt = "logo" / > <
        h3 style = {
            { paddingBottom: "12px" }
        } > { login === undefined ? "can't fetch name" : login } < /h3> 

        <
        h5 style = {
            { paddingBottom: "5px" }
        } > Real Name < /h5> 

        <
        p style = {
            { paddingBottom: "12px" }
        } > { name === undefined ? "can't fetch name" : name } < /p> 

        <
        h5 style = {
            { paddingBottom: "5px" }
        } > Location < /h5> 

        <
        p style = {
            { paddingBottom: "12px" }
        } > { location === undefined ? "can't fetch location" : location } < /p> 

        <
        h5 style = {
            { paddingBottom: "5px" }
        } > Number of Public repo < /h5> 

        <
        p style = {
            { paddingBottom: "12px" }
        } > { public_repos === undefined ? "can't fetch public repos" : public_repos } < /p> 

        <
        h5 style = {
            { paddingBottom: "5px" }
        } > Number of followers < /h5> 

        <
        p > { followers === undefined ? "can't fetch followers" : followers } < /p> 

        <
        /
        div >
    )
}

export default DataOutput