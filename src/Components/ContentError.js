import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ContentError = (props) => {
    let errorInfo = props.errorInfo;
    let index = props.index;
    let setIndex = props.setIndex;
    let arrLength = props.arrLength;
    const formatRowNum = () => {
        return parseInt(errorInfo.rowNum) + 1;
    }
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
                        <thead>
                            <th></th>
                            <Th>{errorInfo.colName}</Th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <EllipsisTd>&#8942;</EllipsisTd>
                            </tr>
                            <tr>
                                <RowNum>{formatRowNum()}</RowNum>
                                <Td>{errorInfo.currVal}</Td>
                            </tr>
                        </tbody>
                    </TableStyle>
                    <P><FontAwesomeIcon icon={faExclamationTriangle} fixedWidth size="sm" /> {errorInfo.msg}</P>
                    
                </div>
                
                {formatIndex() === arrLength ? <Link to = "/finish"><Finish>Finish&rarr;</Finish></Link> : <Button disabled = {index + 1 === arrLength} onClick = {handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} fixedWidth size="4x" />
                </Button>}
            </Container>
        </Wrapper>
    );

}

export default ContentError;

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

const TableStyle = styled.table`
    border-collapse: collapse;
    text-align: center;
    background: rgba(0,0,0,0);
    margin: 50px 100px;
`;

const Th = styled.th`
    color: #ffffff;
    border-radius: 5px;
    background: #ff653b;
    font-size: 0.75rem;
    padding: 15px 40px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);
`;


const EllipsisTd = styled.td`
    font-size: 2rem;
    text-align: center;
    background: none;
    opacity: 0.3;
`;

const Td = styled.td`
    font-size: 0.75rem;
    padding-top: 8px;
    padding-bottom: 8px;
    padding: 10px 40px;
    text-align: left;
    background: white;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);
    
`;

const RowNum = styled.td`
    font-size: 0.75rem;
    color: rgb(180,180,180);
    padding-right: 5px;
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

const Finish = styled.button`
    font-size: 1rem;
    color: white;
    background: #18f051;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    cursor: grab;

    :hover {
        background: #00c233;
    }
`;