import React from 'react'
import styled from 'styled-components'

const Title = ({ title, className }) => {
    return (
        <div className={className}>
            <h2 className="mb-5">{title}</h2>
        </div>
    )
}

export default styled(Title)`
text-align: center;
h2{
    font-size: 30px;
    text-transform: capitalize;
    font-weight: 700;
    margin-top: 0;
    text-align: center;
    color: var(--dark);
    position: relative;
    display: inline-block;
    &:after{
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background-color: var(--primary);
    }
}
`
