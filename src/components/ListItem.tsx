import React, { useEffect, useState } from 'react';
// @ts-ignore
import styled from 'styled-components';

const ListItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px  0;
    
    .name {
        width: 75%;
    }
    
    .price {
        flex: 1 0 auto;
    }
    
    svg {
        cursor: pointer;
    }
`;

interface Props {
    name: string;
    price: number;
    item: { name: string, price: number };
    deleteItem: ( item: { name: string, price: number } ) => [];
}

const ListItem: React.FC<Props> = ( { name, price, deleteItem, item } ) => {
    return (
        <ListItemContainer>
            <span className="name">{ name }</span>
            <span className="price">${ price }</span>
            <svg onClick={ () => deleteItem( item ) } width="15px" height="15px" viewBox="0 0 20 20" className="ws-icon">
                <path fill="#9f060b" stroke="none" d="M8.51628 10.4408L3 15.9571L4.94357 17.9007L10.4598 12.3844L16.0316 17.9562L17.9752 16.0126L12.4034 10.4408L17.9007 4.94357L15.9571 3L10.4598 8.49727L5.01807 3.05549L3.0745 4.99905L8.51628 10.4408Z"/>
            </svg>
        </ListItemContainer>
    )
}

export { ListItem }