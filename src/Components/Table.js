import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';



const Table = (props) => {
    let data = props.data;
    let setStage = props.setStage;

    let [sheet, setSheet] = useState(data? Object.keys(data)[0] : null);
    let [pageNum, setPageNum] = useState(0);
    let numPerPage = 5;
    

    let getColNames = (sheet) => {
        let table = data[sheet];
        return Object.keys(table[0]);
    }
    if(data){
        const handleClick = (event) => {
            event.preventDefault();
            setPageNum(0);
            setSheet(event.target.name);
        }
        const handleInc = () => {
            setPageNum(pageNum + 1);
        }
        const handleDec = () => {
            setPageNum(pageNum - 1);
        }
        const handleNext = () => {
            setStage(1);
        }
        let currRows = [];
        for (var i = pageNum * numPerPage; i < (pageNum * numPerPage) + numPerPage && i < data[sheet].length; i++ ){
            currRows.push(data[sheet][i]);
        }
        return (
            <div>
                <TableWrapper>
                    <TableStyle>
                        <thead>
                            <HeadRow>
                                {getColNames(sheet).map(key => <Th>{key}</Th>)}
                            </HeadRow>
                        </thead>
                        <tbody>
                        {
                            currRows.map(row => {
                                let columns = Object.keys(row);
                                return (<Tr>{columns.map(cell => <Td>{row[cell]}</Td>)}</Tr>)})
                        }
                        </tbody>
                    </TableStyle>
                </TableWrapper>
                <TableTools>
                <Sheets>
                    {Object.keys(data).map(key => 
                            <SheetButton 
                                name = {key}
                                disabled = {key === sheet}
                                onClick = {event => handleClick(event)}>
                                    {key}
                            </SheetButton>)}
                </Sheets>
                
                    <Pagination>
                        <PaginateButton 
                            onClick = {handleDec}
                            disabled = {pageNum === 0}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} fixedWidth size="sm" />
                        </PaginateButton>
                        Page {pageNum + 1} of {Math.ceil(data[sheet].length / numPerPage)}
                        <PaginateButton 
                            onClick = {handleInc}
                            disabled = {pageNum + 1 === Math.ceil(data[sheet].length / numPerPage)}
                        >
                            <FontAwesomeIcon icon={faChevronRight} fixedWidth size="sm" />
                        </PaginateButton>
                    </Pagination>
                </TableTools>
                {setStage? <NextButton onClick = {handleNext}>Start Correcting</NextButton> : ''}
            </div>
        );
    } else {
        return(
            <Redirect to = "/error" />
        );
    }

    
}

export default Table;

const Sheets = styled.div`
    margin: 0 25px;
    /* display: inline; */
    /* display: flex;
    justify-content: flex-start; */

    
    button:first-child {
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;

    }
    button:last-child {
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
`;

const SheetButton = styled.button`
    background: rgb(220,220,220);
    font-size: 0.75rem;
    border: none;
    padding: 7px 20px;
    margin: 0 1px;
    cursor: grab;
`;


const TableWrapper = styled.div`
    border-radius: 10px;
    margin: 5px 10% 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);

`;
const TableStyle = styled.table`
    border-collapse: collapse;
    width: 100% !important;
    background: rgba(0,0,0,0);
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
    padding: 21px 40px;
    text-align: left;
`;

const Tr = styled.tr`
    border-bottom: 1px solid #f2f2f2;
    :hover {
        background: rgb(240,240,240);
    }
`;
const Td = styled.td`
    font-size: 0.75rem;
    padding-top: 16px;
    padding-bottom: 16px;
    padding: 16px 40px;
    text-align: left;
`;

const Pagination = styled.div`
    color: rgb(125,125,125);
    margin: 0 25px;
    /* background: red; */
`;
const PaginateButton = styled.button`
    background: none;
    border: none;
    color: rgb(110,110,110);
    :hover:enabled {
        color: orange;
        cursor: grab;
    }
    :disabled {
        opacity: 0;
    }
`;

const TableTools = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 10%;
`;

const NextButton = styled.button`
    background: #ff653b;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    :hover{
        cursor: grab;
        background: #9c4300;
    }
`;