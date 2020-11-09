import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const SheetButton = (props) => {
    let sheetName = props.sheetName;
    let disabled = props.disabled;
    let sheetNameHandler = props.sheetNameHandler;
    let handleRemoveSheet = props.handleRemoveSheet;
    let handleCurrSheet = props.handleCurrSheet;
    let sheetIndex = props.sheetIndex;

    const [editMode, setEditMode] = useState(false)

    const handleEdit = (e) => {
        e.preventDefault();
        setEditMode(! editMode);
    }
    if(editMode) {
        return (
            <Wrapper>
                <Input 
                    value = {sheetName}
                    onChange = { e => sheetNameHandler(e, sheetIndex)} 
                    placeholder = "Sheet name" 
                />
                <EditButton onClick = {handleEdit}>
                    <FontAwesomeIcon icon={faCheck} fixedWidth size="lg" />
                </EditButton>
                <DeleteButton onClick = {e => handleRemoveSheet(e, sheetIndex)}>
                    {/* Remove */}
                    <FontAwesomeIcon icon={faTimes} fixedWidth size="lg" />
                </DeleteButton>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <Button disabled = {disabled} value = {sheetIndex} onClick = {handleCurrSheet} >{sheetName}</Button>
                <EditButton onClick = {handleEdit}>
                    <FontAwesomeIcon icon={faPen} fixedWidth size = "lg" />
                </EditButton>
            </Wrapper>
        );
    }
}

export default SheetButton;

const Wrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);
    background: white;
    border-radius: 5px;
    padding: 8px 10px 8px 15px;
    display: inline;
    margin-right: 2px;
`;
const Input = styled.input`
    font-size: 1rem;
    background: white;
    border: none;
    padding: none;
    margin: none;
    :disabled {
        color: black;
    }
`;


const Button = styled.button`
    color: rgb(180,180,180);
    font-size: 1rem;
    background: white;
    padding: 0;
    margin: 0;
    border: none;
    cursor: grab;
    :hover {
        color: orange;
    }
    :disabled{
        color: black; 
        cursor: default;
    }
`;

const DeleteButton = styled.button`
    background: white;
    padding: 0;
    margin: 0;
    border: none;
    color: red;
    cursor: grab;
`;
const EditButton = styled.button`
    margin: 0;
    padding: 0;
    padding-left: 15px;
    border: none;
    background: white;
    color: rgb(200,200,200);
    cursor: grab;
    :hover {
        color: orange;
    }
`;

