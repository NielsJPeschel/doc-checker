import React, {useState} from 'react';
import SheetInput from './SheetInput';
import SheetButton from './SheetButton';
import Select from 'react-select';
import styled from 'styled-components';


const CreatePage = (props) => {
    const [newFormat, setNewFormat] = useState(
        {
            name: "",
            extension: "",
            sheets: [
                {sheetName: "Sheet 1", cols: [
                    {colName: "", colRules: []},
                    {colName: "", colRules: []},
                    {colName: "", colRules: []}
                ]}
            ]
        });

    const [currSheet, setCurrSheet] = useState(0);

    const handleAddSheet = (e) => {
        e.preventDefault(); 
        let temp = [...newFormat.sheets];
        temp.push(
            {sheetName: "Sheet " + (temp.length + 1), cols: [
                {colName: "", colRules: []},
                {colName: "", colRules: []},
                {colName: "", colRules: []}
            ]
        });
        setNewFormat({...newFormat, sheets: temp});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newFormat);
    }
    const handleExt = (e) => {
        setNewFormat({...newFormat, extension: e.value});
    }
    const handleFormatName = (e) => {
        e.preventDefault();
        setNewFormat({...newFormat, name: e.target.value});
    }
    const handleCurrSheet = (e) => {
        e.preventDefault();
        setCurrSheet(parseInt(e.target.value));
    }

    const sheetNameHandler = (e, sheetIndex) => {
        console.log(sheetIndex);
        let temp = {...newFormat};
        temp.sheets[sheetIndex].sheetName = e.target.value;
        setNewFormat(temp);
    }
    const handleRemoveSheet = (e, sheetIndex) => {
        e.preventDefault()
        let temp = {...newFormat};
        temp.sheets.splice(sheetIndex, 1);
        setNewFormat(temp);


    }

    
    return (
        <Wrapper>
            <Title>Create Format</Title>
            <Form>
                <FormatInfo>
                    <Input onChange = {handleFormatName} value = {newFormat.name} placeholder = "Format name" />
                    <SelectWrapper>
                        <Select 
                            options = {[
                                {value: "xlsx", label: "xlsx"},
                                {value: "csv", label: "csv"},
                                {value: "txt", label: "txt"},
                            ]}
                            onChange = {handleExt}
                            theme={(theme) => ({
                                ...theme,
                                backgroundColor: 'orange',
                                borderRadius: 5,
                                colors: {
                                ...theme.colors,
                                  text: 'orangered',
                                  primary25: '#ff8361',
                                  primary: 'white',
                                  neutral0: '#ff653b',
                                  neutral5: 'white',
                                  neutral10: 'white',
                                  neutral20: 'white',
                                  neutral30: 'white',
                                  neutral50: 'white',
                                  neutral70: 'white',
                                  neutral80: 'white',
                                  neutral90: 'white',
                                },
                              })}
                        />
                    </SelectWrapper>
                </FormatInfo>
                <SheetButtons>
                {
                    newFormat.sheets.map((sheet, idx) => (
                        <SheetButton 
                            disabled = {idx === parseInt(currSheet)}
                            sheetName = {sheet.sheetName}
                            sheetNameHandler = {sheetNameHandler} 
                            handleCurrSheet = {handleCurrSheet}
                            handleRemoveSheet = {handleRemoveSheet}
                            sheetIndex={idx}
                            key = {idx}
                        /> 
                    ))  
                }
                <AddButton onClick={handleAddSheet}>+</AddButton>
                </SheetButtons>
                {
                    newFormat.sheets.map((sheet, idx) => (
                        <SheetInput 
                            key = {idx}
                            display = {idx === currSheet}
                            sheetIndex = {currSheet}
                            newFormat = {newFormat}
                            setNewFormat = {setNewFormat}
                        />
                    ))
                }
                <Button onClick = {handleSubmit} >Save</Button>
            </Form>
        </Wrapper>
    );
}

export default CreatePage;

const Wrapper = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 50px;
    font-family: 'Montserrat', sans-serif;
`;

const Form = styled.form`
    text-align: left;
    max-width: 90vw;
    margin: 0 5%;
    padding: 50px;
    background: rgb(240,240,240);
    border-radius: 10px;
`;

const Input = styled.input`
    background-color: hsl(0,0%,100%);
    border: none;
    border-width: 1px;
    min-height: 32px;
    padding: 2px 8px;
    color: hsl(0,0%,50%);
    font-size: 1rem;
    margin: 0 2px;
    display: inline;
    width: 250px;

    ::placeholder {
        color: hsl(0,0%,50%);
    }

`;
const FormatInfo = styled.div`
    margin-right: calc(100% - 400px);
    margin-bottom: 20px;
    background: white;
    padding: 5px;
    border-radius: 10px;
    display: flex;
`;

const SelectWrapper = styled.div`
    margin: 0 2px;
    width: 125px;
    display: inline;
`;

const Button = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);
    font-size: 1rem;
    cursor: grab;
    border: 1px solid white;
    margin: 5px;
    :hover {
        color: orange;
        border: 1px solid lightgray;
    }
`;
const AddButton = styled.button`
    display: inline-block;
    border-radius: 5px;
    background: white;
    /* height: 30px;
    width: 30px; */
    padding: 7px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.049);
    font-size: 1rem;
    cursor: grab;
    /* border: none; */
    border: 1px solid rgba(255,255,255,0);
    :hover {
        color: orange;
        border: 1px solid lightgray;
    }
`;

const SheetButtons = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;