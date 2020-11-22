import React, { useEffect, useState } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { NewItem } from './NewItem';

const ListOuterContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 7px;
    -webkit-box-shadow: 0px 0px 41px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 41px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 41px -6px rgba(0,0,0,0.75);
    min-width: 320px;
    margin: 15px;
    
    .list-header {
        font-weight: bold;
        display: flex;
        
        span:first-of-type {
            width: 75%;
        }
    }
    
    .error {
        color: #9f060b;
        font-size: 12px;
    }
    
    .placeholder {
        height: 20px;
    }
    
    button {
        width: 100%;
        padding: 10px;
        background: #02a104;
        color: white;
        outline: none;
        border: none;
        border-radius: 3px;
        margin: 20px 0;
        -webkit-box-shadow: 0px 12px 29px -9px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 12px 29px -9px rgba(0,0,0,0.75);
        box-shadow: 0px 12px 29px -9px rgba(0,0,0,0.75);
        font-weight: bold;
        cursor: pointer;
    }
`;

interface ListProps {
    name: string;
    price: number;
}

const ListContainer: React.FC = () => {
    
    const [ groceryList, setGroceryList ] = useState([ { name: 'test', price: 3 } ] );
    const [ newItem, setNewItem ] = useState( false );
    const [ totalPrice, setTotalPrice ] = useState( 0 );
    const [ error, setError ] = useState( '' );
    
    const totalCost = () => {
        return groceryList.reduce( ( total, current ) => total + current.price, 0 );
    }
    
    const saveNewItem = ( newName: string, newPrice: number ) => {
        if ( !newName || !newPrice ) setError( 'Fields must not be empty' );
        else {
            setGroceryList( [ ...groceryList, { name: newName, price: Math.round( newPrice ) } ] );
            setNewItem( false );
            setError( '' );
        }
    }
    
    const deleteFromList = ( itemToRemove: ListProps ) => {
        setGroceryList(
            groceryList.filter( item =>  item !== itemToRemove )
        );
    }
    
    return (
        <ListOuterContainer>
            <h3>Grocery List</h3>
            { groceryList.length ? 
                <div className="list-header">
                    <span>Item</span>
                    <span>Price</span>
                </div>
                :
                ''
            }
            { groceryList.length ? 
                groceryList.map( ( item, i ) => {
                    return <ListItem key={ 'item-' + i } 
                                     item={ item }  
                                     name={ item.name } 
                                     price={ item.price }
                                     deleteItem={ deleteFromList } />
                })
                :
                <p>No items on your list</p>
            }
            { newItem ? 
                <NewItem save={ saveNewItem } error={ error } />
                : 
                <div className="placeholder"></div>
            }
            <button onClick={ () => setNewItem( true ) }>Add new item</button>
            <p>Total: ${ totalCost() }</p>
            { totalCost() > 30 && <p>Over budget!</p>}
        </ListOuterContainer>
    )
}

export { ListContainer }