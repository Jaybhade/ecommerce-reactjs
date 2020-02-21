import React from 'react';
import './collection-item.styles.scss';

export const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />
            <div className='collection-footer'>
                <spam className='name'>{name}</spam>
                <spam className='price'>${price}</spam>
            </div>
    </div>
)