import React from 'react';
import rules from '../Data/rules';
import styled from 'styled-components';


const ColInput = (props) => {
    let sheetIndex = parseInt(props.sheetIndex);
    let colIndex = parseInt(props.colIndex);
    let newFormat = props.newFormat;
    let setNewFormat = props.setNewFormat;
    let col = newFormat.sheets[sheetIndex].cols[colIndex];
    let ruleNames = Object.keys(rules);
    
    const handleColName = (e) => {
        e.preventDefault();
        col.colName = e.target.value;
        let temp = {...newFormat}
        temp.sheets[sheetIndex].cols[colIndex] = col;
        setNewFormat(temp);
    }
    const handleChecked = (e) => {
        e.persist();
        if(e.target.checked){
            col.colRules.push(e.target.value);
        }
        else{
            col.colRules = col.colRules.filter(item => {return item !== e.target.value});
        }
        let temp = {...newFormat}
        temp.sheets[sheetIndex].cols[colIndex] = col;
        setNewFormat(temp);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        // console.log(colIndex)
        let temp = {...newFormat}
        console.log(temp.sheets[sheetIndex].cols);
        temp.sheets[sheetIndex].cols.splice(colIndex, 1);
        console.log(temp.sheets[sheetIndex].cols);
        setNewFormat(temp);
    }
    return (
        <Col>
            <InputWrapper>
                <Input onChange = {handleColName} value = {col.colName} placeholder = "Enter column name..." />
                <RemoveButton onClick = {handleRemove}>&times;</RemoveButton>
            </InputWrapper>
            <Rules>
                {
                    ruleNames.map((rule, count) => (
                        <div key={count}> 
                            <input name = {sheetIndex + colIndex + count} onChange = {handleChecked} type="checkbox" value={rule} />
                            <label htmlFor = {sheetIndex + colIndex + count}>{rule}</label>
                        </div>
                    ))
                }
                
            </Rules>
        </Col>
    );
}
export default ColInput;

const Col = styled.div`
    display: inline-block;
    margin-right: 10px;

`;
const Input = styled.input`
    color: white;
    padding: 5px;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    ::placeholder{
        color: white;
        opacity: 0.8;
        font-size: 0.75rem;
    }
`;

const InputWrapper = styled.div`
    padding: 5px;
    color: white;
    background: #ff653b;
    /* background: white; */
    border: none;
    border-radius: 5px 5px 0 0;
`;

const Rules = styled.div`
    text-align: left;
    background: white;
    padding: 25px 20px;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);

`;

const RemoveButton = styled.button`
    border-radius: 100%;
    height: 27px;
    width: 27px; 
    background: rgba(0,0,0,0);
    color: rgb(240,240,240);
    font-size: 1.25rem;
    cursor: grab;
    border: none;
    margin: 5px;
    :hover {
        color: red;
        background: white;
    }
`;