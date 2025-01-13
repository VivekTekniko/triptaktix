"use client"
import React, { useState,useEffect } from 'react'

const HeroMatrix = () => {
    const [state, setState] = useState({
        state:0,
        destination:0,
        customers:0
    })



    useEffect(()=>{
    let stateTimer;
    if(state.state<10){
        stateTimer = setInterval(()=>{
           setState((prevState)=>({
            ...prevState,
            state:prevState.state+1
           }))
        },200)
    }else{
        clearInterval(stateTimer)
    }

    return ()=>clearInterval(stateTimer)
    },[state.state])

    useEffect(()=>{
   let destinationTimer;
     if(state.destination<50){
        destinationTimer = setInterval(()=>{
           setState((prevState)=>({
            ...prevState,
            destination:prevState.destination+1
           }))
        },50)
     }else{
        clearInterval(destinationTimer)
     }
     return()=>clearInterval(destinationTimer)
    },[state.destination])

    useEffect(()=>{
        let customersTimer;
          if(state.customers<200){
             customersTimer = setInterval(()=>{
                setState((prevState)=>({
                 ...prevState,
                 customers:prevState.customers+4
                }))
             },50)
          }else{
             clearInterval(customersTimer)
          }
          return()=>clearInterval(customersTimer)
         },[state.customers])

  return (
    <div class="px-4 py-16 bg-orange mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20">
    <div class="grid row-gap-8 grid-cols-3">
        <div class="text-center">
            <h6 class="text-5xl font-bold text-white">{state.state}+</h6>
            <p class="font-bold text-white">States</p>
        </div>
        <div class="text-center">
            <h6 class="text-5xl font-bold text-white">{state.destination}+</h6>
            <p class="font-bold text-white">Destination</p>
        </div>
        <div class="text-center">
            <h6 class="text-5xl font-bold text-white">{state.customers}+</h6>
            <p class="font-bold text-white">Happy Customers</p>
        </div>
    </div>
</div>
  )
}

export default HeroMatrix