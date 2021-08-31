import React from 'react'

const Square = (props) => {
    return (
       // eslint-disable-next-line react/destructuring-assignment
       <button type="button" className="square">{props.value}</button>
    )
}

export default Square
