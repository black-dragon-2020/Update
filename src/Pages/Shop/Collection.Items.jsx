import React, { Component } from 'react'
import './Collection.Items.scss'

const collectionsItem =({id,name,price,imageUrl})=>(
    <div className='collection-item'>
        <div className='image' 
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        
        
        
    </div>
)
export default collectionsItem;

