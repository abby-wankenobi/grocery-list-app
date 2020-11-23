import React, { useEffect, useState } from 'react';
// @ts-ignore
import styled from 'styled-components';

const NewItemContainer = styled.div`
    input:first-of-type {
        margin-right: 15px;
        width: 150px;
    }

    input:last-of-type {  width: 50px; }

    .save {
        cursor: pointer;
        background: green;
        color: white;
        font-size: 12px;
        padding: 5px;
        margin-left: 10px;
        border-radius: 3px;
    }
`;

interface NewItemProps {
    save: ( newName: string, newPrice: number  ) => void;
    error: string;
}

const NewItem: React.FC<NewItemProps> = ( { save, error } ) => {
     
    const [ newName, setNewName ] = useState<string>( '' );
    const [ newPrice, setNewPrice ] = useState<number>( 0 );
    
    return (
        <>
        <NewItemContainer>
            <input type="text" onChange={ e => setNewName( e.target.value ) } />
            $<input type="number" onChange={ e => setNewPrice( parseInt( e.target.value ) ) } />
            <span className="save" onClick={ () => save( newName, newPrice ) }>
                Save item
            </span>
        </NewItemContainer> 
        { error && <span className="error">{ error }</span> }
        </>
    )
}

export { NewItem }