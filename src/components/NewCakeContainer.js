import React,{useState} from 'react'
import {buyCake} from '../redux'
import {connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number,setNumber]=useState(1)
  return (
    <div>
        <h2>no of cakes - {props.numOfCakes}</h2>
        <input type='text' value={number}  onchange={e=>setNumber(e.target.value)}/>
        <button onClick={()=>props.buyCake(number)}>buy {number} cakes</button>
    </div>
    
  )
}

const mapStateToProps=state=>{
  return{
    numOfCakes:state.cake.numOfCakes
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    buyCake:number=>dispatch(buyCake(number))
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer)