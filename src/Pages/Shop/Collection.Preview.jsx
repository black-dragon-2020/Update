import React, { Component } from 'react'
import './Shop.scss'

import CollectionsItem from './Collection.Items'

 const Collections =({title,items})=>(
    <div className="collection-preview">
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            { 
            items
            .filter((item,idex)=>idex<4)
            .map(({id,...otherCollctions}) =>(
                <CollectionsItem key={id} {...otherCollctions}/>
                ))
            }
        </div>
    </div>
)


export default Collections



