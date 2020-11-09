import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ColError = (props) => {
    let errorInfo = props.errorInfo;
    let index = props.index;
    let setIndex = props.setIndex;
    let arrLength = props.arrLength;

    console.log("corrVal")
    console.log(errorInfo.corrVal);
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
                    <TableStyle>
                        <HeadRow>
                            {errorInfo.corrVal.map(col => <Th>{col}</Th>)}
                        </HeadRow>
                        <tbody>
                            <Tr>
                                {errorInfo.corrVal.map(col => <Td>&mdash;</Td>)}
                            </Tr>
                        </tbody>
                    </TableStyle>
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

export default ColError;

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
    
const RestartButton = styled.button`
    background: #ff653b;
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


const TableStyle = styled.table`
    border-collapse: collapse;
    width: 100% !important;
    background: rgba(0,0,0,0);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);
    margin: 5% 0;
    tr:last-child {
        /* background: black; */
        td:last-child {
            border-bottom-right-radius: 10px;

        }
        td:first-child {
            border-bottom-left-radius: 10px;

        }
    }
`;

const HeadRow = styled.tr`
    color: #ffffff;
    /* background: #008000;    */
    background: #ff653b;
    border-radius: 10px; 

    th:last-child {
        border-top-right-radius: 10px;
    }
    
    th:first-child {
        border-top-left-radius: 10px;
    }
    
`; 

const Th = styled.th`
    font-size: 0.75rem;
    padding: 21px 10px;
    text-align: center;
    background: rgba(0,0,0,0);
`;

const Tr = styled.tr`
    /* border-bottom: 1px solid #f2f2f2; */
    background: rgb(0,0,0,0);
    td:last-child {
        border-bottom-right-radius: 10px;
    }
    
    td:first-child {
        border-bottom-left-radius: 10px;
    }
`;
const Td = styled.td`
    background: white;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(230,230,230);
    padding: 16px 10px;
`;
