import React from 'react'

const BannerName =(props)=>{
    return (
        <div className={'bannerContent'}>
            <h3>Hello {props.name}</h3>
            <p>
                Get free discount for every <span> $ {props.discount} purchase</span>
            </p>

            <a href={props.link}>Learn More</a>
        </div>
    )
}

export default BannerName