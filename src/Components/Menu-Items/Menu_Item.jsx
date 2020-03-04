import React from 'react'
import {withRouter} from 'react-router-dom'
import './Menu_Item.scss'

const MenuItem = ({title,imageUrl,size,history,match,linkUrl}) => {
    console.log(match.url);
    console.log(history);
    return (
              <div 
              className={`${size} menu-item`} 
              onClick={()=>history.push(`${match.url}${linkUrl}`)}
              >
                <div className='backgroun-img' style={{backgroundImage:`url(${imageUrl})`}}>
                </div>
                    <div className='content'>
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
    )
}
export default withRouter(MenuItem)