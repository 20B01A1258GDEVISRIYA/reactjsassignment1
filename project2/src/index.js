// import necessary dependancies
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import logo from './logo512.png';
import Sample from './Sample.js'
// create a component 
const msg=<h1 >WELCOME TO REACT JS</h1>
let college='SVECW'
let location='bvrm'
function Welcome(){
    return(<div>
        <h1>Welcome to {college+" "+location}</h1>
        <h1 style={{color:'pink'}}>branches in SVECW</h1>
        <ul className='one'>
            <li>cse</li>
            <li>it</li>
        </ul>
        <img src={logo}></img>
    </div>
        )
}
//show it to user
ReactDOM.render(
    //what to display
   //msg,    
    <div>
    <h1 style={{backgroundColor:'aliceblue'}}>hello</h1>
    <Welcome />
    <Sample/>
    </div>,
  //where to display
    document.getElementById('root')
)
//imperative-what to do,how to do
// let ele=document.getElementById('h1');
// ele.innerHTML='this is through js';
// document.getElementById('root').appendChild(ele);
