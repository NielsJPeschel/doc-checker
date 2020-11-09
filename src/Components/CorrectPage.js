import React, {useState, useEffect} from 'react';
import Table from './Table';
import SheetError from './SheetError';
import ColError from './ColError';
import ContentError from './ContentError';
import styled from 'styled-components';
// import catgories from '../Data/categories.json';
import rules from '../Data/rules';
import { Redirect } from 'react-router-dom';


// import { Redirect } from 'react-router-dom';


const CorrectPage = (props) => {
    let [stage, setStage] = useState(0)
    let [index, setIndex] = useState(0);
    let state = props.state;
    let setState = props.setState;
    // setState({...state, currStep: 2});
    
    useEffect(() => {
        // Update the document title using the browser API
        setState({...state, currStep: 2});
    }, [setState]);
    
    switch(stage){
        default:
            return(
                <Wrapper>
                    <Title>Your Data</Title>
                    <Table data = {state.data} setStage = {setStage} />
                </Wrapper>
                
            )
        case 1: 
            let errors = [];
            checkSheets(state.data, state.format, errors);
            console.log("Sheets checked");
            console.log(errors);
            if(errors.length === 0) {
                checkCols(state.data, state.format, errors);
                console.log("Columns checked");
                console.log(errors);
                if(errors.length === 0) {
                    checkContent(state.data, state.format, errors)
                    console.log("Content checked");
                    console.log(errors);
                    if(errors.length === 0){
                        return (<Redirect to = "/" />);
                    }
                }
            } 
            switch(errors[index].type) {
                default: 
                    return <Redirect to="/finish" />
                case "sheet": 
                    return <SheetError index = {index} setIndex = {setIndex} arrLength= {errors.length} errorInfo = {errors[index]} />
                case "col":
                    return <ColError index = {index} setIndex = {setIndex} arrLength= {errors.length} errorInfo = {errors[index]} />
                case "content":
                    return <ContentError index = {index} setIndex = {setIndex} arrLength= {errors.length} errorInfo = {errors[index]} />
            }
            
    }
}

export default CorrectPage;
const Wrapper = styled.div`
    text-align: center;
`;
const Title = styled.h1`
    font-size: 2rem;
    margin: 50px;
    font-family: 'Montserrat', sans-serif;
`;

const checkSheets = (data, format, errors) => {
    let dataNumSheets = Object.keys(data).length;
    let formatNumSheets = format.sheets.length;

    if (dataNumSheets !== formatNumSheets) {
        errors.push({
            type: "sheet",
            msg: "Incorrect number of sheets. Change sheets to as seen above and re-upload document.",
            rowNum: null,
            colNum: null,
            corrVal: format.sheets
        });
    } 
    else {
        for (var i = 0; i < dataNumSheets; i++) {
            if (Object.keys(data)[i] !== format.sheets[i].sheetName) {
                errors.push({
                    type: "sheet",
                    msg: "Incorrect Sheet name, '" + Object.keys(data)[i] +  "'. Change sheets to as seen above and re-upload document.",
                    rowNum: null,
                    colNum: null,
                    currVal: Object.keys(data)[i],
                    corrVal: format.sheets
                });
            }
        }
    }
}

const checkCols = (data, format, errors) => {
    // check colErrors
    let dataCols = {};
    let formatCols = {}

    for(const sheet in data) {
        dataCols[sheet] = Object.keys(data[sheet][0]);
    }

    format.sheets.forEach( sheet => {
        formatCols[sheet.sheetName] = [];
        sheet.cols.forEach(col => {
            formatCols[sheet.sheetName].push(col.colname);
        });
    });
    for (const key in dataCols) {
        let currDataCols = dataCols[key];
        let currFormatCols = formatCols[key];
        for(var i = 0; i < currDataCols.length; i++) {
            if (currDataCols[i] !== currFormatCols[i]) {
                errors.push({
                    type: "col",
                    msg: "Incorrect column name, '" + currDataCols[i] + "', please change to as seen above and retry.",
                    rowNum: 0,
                    colNum: i,
                    currVal: currDataCols[i],
                    corrVal: formatCols[key]
                });
            }
        }
    }
}

const checkContent = (data, format, errors) => {
    // let contentErrors = [];
    let sheetCount = 0;
    for(const sheet in data) {
        console.log("sheets");
        let sheetFormat = format.sheets[sheetCount];
        for(const row in data[sheet]) {
            let colNum = 0;
            for(const col in data[sheet][row])
            {
                let colRules = sheetFormat.cols[colNum].rules;
                colRules.forEach( ruleName => {
                    if (! rules[ruleName](data[sheet][row][col])) {
                        errors.push({
                            type: "content",
                            msg: "Failed " + ruleName + "test",
                            rowNum: row,
                            colNum: colNum,
                            colName: Object.keys(data[sheet][row])[colNum],
                            currVal: data[sheet][row][col],
                            corrVal: null
                        });
                    }
                });
                colNum++;
            }
        }
        sheetCount++;
    }
}