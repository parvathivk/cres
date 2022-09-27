import React from 'react'
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'

const Login=()=>{
    const[user,setUser]=useState(""); 
	const[passw,setPassw]=useState("")
	return(
		<div>
			<form action=""> 
				<div> 
					<input type="text" name="username" id="username" placeholder='Username'/> 
				</div> 
				<div> 
					<input type="text" name="passw" id="passw" placeholder='Password'/> 
				</div>  
				<Link to={'/dashboard'}><button type="submit">Login</button></Link>
			</form>
		</div>
	)
}

export default Login