import React, { useReducer, useEffect } from 'react'


interface state {
    index: number;
    fullText: string;
    text: string;
}

const initialState: state = {
    index: 0,
    text: 'W',
    fullText: 'eb developer'
}

const reducer = (state: state, action: { type: string }) => {
    switch (action.type) {
        case 'increaseCount':
            return { ...state, index: state.index + 1 }
        case 'updateText':
            return { ...state, text: state.text + state.fullText[state.index] }
        case 'reset':
            return { ...state, index: 0, text: initialState.text }
        default:
            return state
    }
}


function Firstdiv() {
    const [state, updateState] = useReducer(reducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            if (state.index < state.fullText.length) {
                updateState({ type: 'updateText' })
                updateState({ type: 'increaseCount' })
            }
        }, 100)

        setTimeout(() => {
             if (state.index === state.fullText.length) { updateState({ type: 'reset' }) } 
            }, 1000)
    })
   

    return (
        <div className='first'>
        <div className='firstDiv'>
            <h1>Hi😃, I'm Jibola!</h1>
            <p style={{color:'white'}}>{state.text}</p>
            <button>Hire me</button>      
            <button style={{background:'none',color:'white',border:'1px solid #a6e1fa'}}>Resume</button>
            
         
        </div>

<img src={require('../images/web-development.png')} className='heroImage' alt="" />
</div>
    )
}

export default Firstdiv;