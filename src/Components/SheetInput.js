import React from 'react';
import styled from 'styled-components';
import ColInput from './ColInput';

const SheetInput = (props) => {
    if (props.display) {
        let newFormat = props.newFormat;
        let setNewFormat = props.setNewFormat;
        let sheetIndex = parseInt(props.sheetIndex);
        let sheet = {...newFormat.sheets[sheetIndex]}
        let cols = [...sheet.cols];

        const handleAddCol = (e) => {
            e.preventDefault();
            let temp = {...newFormat};
            cols.push({colName: "", colRules: []});
            temp.sheets[sheetIndex].cols = cols;
            setNewFormat(temp)
        }
        
        return(
            <Wrapper>
                <Cols>
                {
                cols.map((col, idy) => 
                    <ColInput 
                        key = {idy} 
                        sheetIndex= {sheetIndex}
                        colIndex = {idy}
                        newFormat = {newFormat} 
                        setNewFormat = {setNewFormat}

                    />)
                }
                <AddButton onClick = {handleAddCol}>+</AddButton>
                </Cols>
            </Wrapper>
        );
        } else{
            return <div></div>
        }
    
}

export default SheetInput;

const Cols = styled.div`
    margin: 20px 0;
    background: rgba(0,0,0,0.05);
    padding: 40px;
    /* width: calc(100% - 324px); */
    white-space: nowrap;
    overflow-y: scroll;
    /* max-width: 80%; */
    border-radius: 10px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

const Wrapper = styled.div`
    
    /* background: white; */
`;



const AddButton = styled.button`
    height: 116px;
    width: 150px;
    min-width: 150px;
    border: none;
    border-radius: 5px;
    font-size: 4rem;
    padding: 0;
    background: rgba(50,50, 50, 0.1);
    margin-right: 20px;
    cursor: grab;
    :hover {
        color: white;
        background: rgba(50,50, 50, 0.4);
    }
    :active {
        color: lightblue;
    }

`;


