import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
    let display = props.display;
    let setDisplay = props.setDisplay;
    let title = props.title;
    let component = props.component

    if(display){
        const handleClick = () => {
            setDisplay(false);
        }
        return (
            <ModalWrapper>              
                <ModalContainer>
                    <CloseButton onClick = {handleClick}>&times;</CloseButton>
                    <header>
                        {title ? <h1>{title}</h1> : ''}
                    </header> 
                    <div style = {{textAlign: "center"}}>
                        {component}
                    </div>
                </ModalContainer>
            </ModalWrapper>
            
        );
        } else {return null;}
    
}

export default Modal;

const ModalWrapper = styled.div`
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.8);

`;

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* margin: 5%; */
    background: white;
    border-radius: 5px;
    padding: 25px;
    min-height: 50%;
    width: 90%;
`;

const CloseButton = styled.button`
    font-size: 2rem;
    border: none;
    background: none;
    text-align: center;
    width: 38px;
    border-radius: 5px;
    float: right;
    cursor: grab;
    :hover {
        background: rgba(0,0,0,.2);
    }
`;