import React, {useState, useEffect} from 'react';
import { FileDrop } from 'react-file-drop';
import xlsxParser from 'xlsx-parse-json';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload} from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

// import { useState } from 'react';

const UploadPage = (props) => {
    let state = props.state;
    let setState = props.setState
    useEffect(() => {
        // Update the document title using the browser API
        setState({...state, currStep: 1});
      }, [setState]);
    const [isDragging, setIsDragging] = useState(false);
    const [isDropped, setIsDropped] = useState(false);

    const handleDragEnter = () => {
        setIsDragging(true);
    }
    const handleDragLeave = () => {
        setIsDragging(false);
    }
    // determines the type of file being uploaded and routes accordingly
    const handleDrop = (files) => {
        console.log(files[0]);
        let fileName = files[0].name;
        let extension = fileName.split('.').pop()
        switch(extension) {
            default: 
                handleTxt(files);
                break;
            
            case 'xlsx':
                handleExcel(files);
                break;
            
            case 'xls':
                handleExcel(files);
                break;
        }
    }

    // handles .txt files
    const handleTxt= (files) => {
        console.log("txt")
        let file = files[0]
        let fileData = new FileReader();
        fileData.onloadend = (e) => {
            const content = e.target.result;
            setState({...state, data: content});
            setIsDropped(true);
        };
        fileData.readAsText(file);
    }

    // handles .xlsx files
    const handleExcel = (files) => {
        console.log("excel")
        var f = files[0];
        xlsxParser.onFileSelection(f).then(
            data => {
                var parsedData = data;
                setState({... state, data: parsedData});
                setIsDropped(true);
                
            }
        );
        // <Redirect to="/Correct" />
    }
    
    

    return (
        <Container>
            <Title>Upload</Title>
            <FileDrop 
                onDrop = {(files) => handleDrop(files)}
                onFrameDragEnter = {handleDragEnter}
                onFrameDragLeave = {handleDragLeave}
            >
                <DropZone isDragging = {isDragging}>
                    <div>
                        <FontAwesomeIcon icon={faFileUpload} fixedWidth size="8x" />
                        <P>
                            <Label for="inputId">Choose file </Label> 
                            or drop it here
                            <input id="inputId" type="file" style={{display: "none"}}/>
                        </P>
                    </div>
                </DropZone>
            </FileDrop>
            { isDropped? <Redirect to = "/correct" /> : '' }
        </Container>
    );
}

export default UploadPage;

const Container = styled.div`
    text-align: center;
`;
const DropZone  = styled.div`
        background: ${props => props.isDragging? "rgb(220,220,220)" : "rgb(240,240,240)"};
        padding: 5%;
        margin: 0 20%;
        min-height: 40vh;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        color: ${props => props.isDragging? "black" : "rgb(200,200,200)"};
        border: ${props => props.isDragging? "dashed 5px rgba(150,150,150,1)" : "dashed 5px rgba(150,150,150,0)"};
    `;
const Title = styled.h1`
    font-size: 2rem;
    margin: 50px;
    font-family: 'Montserrat', sans-serif;
`;

 const P = styled.p`
    color: rgb(50,50,50);
    margin-top: 50px;
    font-size: 1.4rem;
 `;
const Label = styled.label`
    font-weight: bold;
    display: inline;
    cursor: grab;
    :hover{
        color: lightblue;
    }
`;