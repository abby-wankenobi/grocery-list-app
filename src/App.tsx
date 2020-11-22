import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import { ListContainer } from './components/ListContainer';

const AppContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-image: url( citrusbg1.jpg );
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const App: React.FC = () => {
    return (
        <AppContainer>
            <ListContainer />
        </AppContainer>
    );
}

export default App;
