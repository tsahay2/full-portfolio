import React, { Component } from 'react'
import Typical from 'react-typical'

class TypewriterTextComponent extends React.Component {
    render () {
        return (
            <div style={{color:"white"}}>
            <p>I am trying to be a{' '}
            <Typical
                steps={['coder.', 1000,
                    'drummer.', 1000,
                    'footballer.', 1000,
                    'photographer.', 1000,
                    'funny person.', 1000]}
                loop={Infinity}
                wrapper="b"
            />
            </p>
            </div>
        )
    }
}

export default TypewriterTextComponent;