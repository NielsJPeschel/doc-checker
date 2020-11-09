import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileAlt, faFileCsv, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from "react-router-dom";
import styled from 'styled-components';

const CategoryButton = (props) => {
    let category = props.format.category;
    let extension = props.format.extension;
    let state = props.state;
    let setState = props.setState;

    const Icon = () => {
        switch(extension){
            default:
                return <FontAwesomeIcon icon={faFile} fixedWidth size="4x" />;
            case "xlsx":
                return <FontAwesomeIcon icon={faFileExcel} fixedWidth size="4x" />;
            case "txt":
                return <FontAwesomeIcon icon={faFileAlt} fixedWidth size="4x"/>;
            case "csv":
                return <FontAwesomeIcon icon={faFileCsv} fixedWidth size="4x" />;
        }
    }

    const handlePress = () => {
        setState({...state, format: props.format, formatSelected: true});
    }

    return (
            <Wrapper onClick = {handlePress} >
                <IconWrapper>
                    <Icon />            
                </IconWrapper>
                <Name>{category}</Name>
                { state.formatSelected ? <Redirect to = "/upload" /> : '' } 
            </Wrapper>
    );
}
export default CategoryButton;

const IconWrapper = styled.div`
    padding: 30px 35px;
    color: gray;
    background: rgb(50,50,50);
    border-radius: 10px;
    cursor: grab;
    :hover {
        color: white;
        background: rgb(30, 30, 30);
    }
    :active {
        color: lightblue;
    }
`
const Name = styled.p`
    margin: 10px;
    font-size: 1rem;
    color: rgb(90, 90, 90);
`;

const Wrapper = styled.div`
    margin: 50px;
`;