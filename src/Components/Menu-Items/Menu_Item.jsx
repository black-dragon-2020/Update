import React from 'react'
import './Menu_Item.scss'

export const MenuItem = ({title,imageUrl,size}) => {
    return (
              <div className={`${size} menu-item`}>
                  <div className='backgroun-img' style={{backgroundImage:`url(${imageUrl})`}}>
                </div>
                    <div className='content'>
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
    )
}
