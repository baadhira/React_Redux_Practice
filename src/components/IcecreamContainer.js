import React from 'react'
import {buyIcecream} from '../redux'
import {connect } from 'react-redux'

function IcecreamContainer(props) {
  return (
    <div>
        <h2>no of cakes - {props.numOfIcecream}</h2>
        <button onClick={props.buyIcecream}>buy icecream</button>
    </div>
    
  )
}

const mapStateToProps=state=>{
  return{
    numOfIcecream:state.iceCream.numOfIcecream
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    buyIcecream:()=>dispatch(buyIcecream())
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (IcecreamContainer)

