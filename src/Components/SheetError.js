import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const SheetError = (props) => {
    let errorInfo = props.errorInfo;
    let index = props.index;
    let setIndex = props.setIndex;
    let arrLength = props.arrLength;

    const formatIndex = () => {
        return index + 1;
    }
    const handleNext = () => {
        setIndex(index + 1);
    }

    const handlePrev = () => {
        setIndex(index - 1);
    }
    return (
        <Wrapper>
            <Title>Error {formatIndex()} of {arrLength}</Title>
            <Container>
                <Button disabled = {index === 0} onClick = {handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth size="4x" />
                </Button>
                <div>
                    <Sheets>
                        {errorInfo.corrVal.map(sheet => <Sheet>{sheet.sheetName}</Sheet>)}
                    </Sheets>
                    <P><FontAwesomeIcon icon={faExclamationTriangle} fixedWidth size="sm" /> {errorInfo.msg}</P>
                    <Link to = "/"><RestartButton>Restart</RestartButton></Link>
                </div>
                <Button disabled = {index + 1 === arrLength} onClick = {handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} fixedWidth size="4x" />
                </Button>
            </Container>
        </Wrapper>
    );

}

export default SheetError;

const Wrapper = styled.div`
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: rgb(240,240,240);
    margin: 0 15%;
    min-height: 40vh;
    border-radius: 10px;
`;


const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin: 50px;
    font-family: 'Montserrat', sans-serif;
`;


const Button = styled.button`
    background: none;
    border: none;
    color: rgb(110,110,110);
    :hover:enabled {
        color: orange;
        cursor: grab;
    }
    :disabled {
        opacity: 0
    }
`;

const P = styled.p`
    text-align: center;
    background: #ffdbdb;
    color: #ab1616;
    /* border: 1px solid red; */
    padding: 20px 40px;
    border-radius: 5px;
    margin: 0 10%;
`;

const Sheets = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 5%;
    li:first-child {
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;

    }
    li:last-child {
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
`;

const Sheet = styled.li`
    background: white;
    border: none;
    font-size: 1rem;
    padding: 5px 40px;
    margin: 0 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);

`;
    
const RestartButton = styled.button`
    background: #ce4b27;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    margin: 15px;
    :hover{
        cursor: grab;
        background: #9c4300;
    }
`;