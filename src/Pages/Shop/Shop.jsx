import React, { Component } from 'react'
import  Shop_Data from './Shop.data'
import Collections from './Collection.Preview'


class Shop extends Component {
    constructor(props){
        super(props);
        this.state={
            collectionsData:Shop_Data
        }
    }



    render() {
        return (
            <div className='shop-page'>
                {
                     this.state.collectionsData.map(({id,...CollectionsData})=>(
                        <Collections key={id} {...CollectionsData}/>
                    ))
               }
            </div>
        )
    }
}

export default Shop
