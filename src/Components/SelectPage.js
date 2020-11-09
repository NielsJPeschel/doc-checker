import React, {useEffect} from 'react';
import formats from '../Data/categories.json';
import CategoryButton from './CategoryButton';
import styled from 'styled-components';




const SelectPage = (props) => {
    let state = props.state;
    let setState = props.setState;
        
    useEffect(() => {
        setState({...state, currStep: 0});
    }, [setState]);

    return(
        <Container>
            <Title>Select a document</Title>
            <Categories>
                {
                    formats.map(format => (
                        <CategoryButton 
                            key = {format.id}
                            format = {format}
                            state = {state}
                            setState = {setState}
                        />))
                }
            </Categories>
        </Container>
    );
}

export default SelectPage;

const Container = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 50px;
    font-family: 'Montserrat', sans-serif;
`;
const Categories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: rgb(240,240,240);
    margin: 0 15%;
    min-height: 40vh;
    border-radius: 10px;
`;
