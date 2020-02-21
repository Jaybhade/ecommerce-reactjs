import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

export const MenuItems = ({title, imageUrl, size, history, linkUrl}) => (
    <div className={`${size} menu-item`} >
        <div 
        style={{
            backgroundImage : `url(${imageUrl})`
        }}
        className='background-image'>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    </div>
)

export default withRouter(MenuItems);