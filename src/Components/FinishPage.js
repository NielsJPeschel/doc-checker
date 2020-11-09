import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const FinishPage = (props) => {
    let state = props.state;
    let setState = props.setState
    useEffect(() => {
        // Update the document title using the browser API
        setState({...state, currStep: 3});
    }, [setState]);
    return(
        <Wrapper>
            <FinishWrapper>
                <FinishIconWrapper>
                    <FontAwesomeIcon icon={faCheckCircle} style = {{fontSize: "15rem"}} />
                </FinishIconWrapper>
                
                <P>
                    You're all set!  
                </P>
                
            </FinishWrapper>
            <Link to = "/"><Finish>Upload New</Finish></Link>
        </Wrapper>
    )
}


export default FinishPage;

const Wrapper = styled.div`
    text-align: center;
`;


const FinishIconWrapper = styled.div`
    color: #00b533;

`;
const FinishWrapper = styled.div`
    text-align: center;
    background: rgb(240,240,240);
    /* background: #e6ffed; */
    margin: 25px 15%;
    padding: 50px;
    border-radius: 20px;
`;

const P = styled.p`
    /* font-weight: bold; */
    text-align: center;
    font-size: 1.25rem;
    padding: 20px 40px;
    border-radius: 5px;
    margin: 0 10%;
`;
    
const Finish = styled.button`
    margin: 0 ;
    font-size: 1rem;
    color: white;
    background: #ff653b;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    cursor: grab;
    :hover {
        background: #9c4300;
    }
`;