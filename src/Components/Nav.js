import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from './Modal'
import Table from  './Table';

const Nav = (props) => {
    let data = props.data;
    let table = <Table data = {data} />
    let [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    }

    return (
        <NavStyle>
            <Ul>
                <Link to = "/" style = {{textDecoration:"inherit"}}><Li>Home</Li></Link>
                <Link to = "/create" style = {{textDecoration:"inherit"}}><Li>Create</Li></Link>
                <Link to = "/error" style = {{textDecoration:"None"}}><Li>Rules</Li></Link>
            </Ul>
            {data ? <TableButton onClick = {handleModal}>Data</TableButton> : ''}
            <Modal display = {showModal} setDisplay = {setShowModal} title = "Data" component = {table} />
        </NavStyle>
    );
    }


export default Nav;
const NavStyle = styled.div`
    background: rgb(50, 50, 50);
    width: 100vw;
    min-height: 40px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-bottom: solid 1px #ff8400; */
`;

const Ul = styled.ul`
    padding: none;
    margin: none !important;
    list-style: none;
    display: inline;
`;
const Li = styled.li`
    color: white;
    padding: 5px 15px;
    background: rgb(0,0,0, 0.2);
    border-radius: 5px;
    margin: 5px;
    display: inline;
    :hover{
        text-decoration: underline;
        background: rgb(0,0,0,0.8)
    }
`;

const TableButton = styled.button`
    background: #1e4c96;
    font-size: 1rem;
    color: white;
    padding: 5px 15px;
    display: inline;
    border: none;
    border-radius: 5px;
    margin: 5px 40px;
    cursor: grab;
    :hover{
        text-decoration: underline;
        background: rgb(0,0,0,0.8)
    }
`;
// background: #ce4b27;
