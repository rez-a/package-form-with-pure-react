import React, { useContext } from 'react';
import styled from 'styled-components';
import { themeContext } from '../../context/ThemeContext';

const Button = styled.button`
    background-color: ${props => props.theme};
    border-color: ${props => props.theme};
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${props => props.theme};
        border-color: ${props => props.theme};
    }
    &:focus{
        background-color: ${props => props.theme};
        border-color: ${props => props.theme};
        box-shadow: 0 0 10px 0 ${props => props.theme} !important;
    }
`;
const BtnPrimary = ({ icon, text, type, handleSubmit }) => {
    const { theme } = useContext(themeContext);
    return (
        <Button theme={theme} onClick={handleSubmit} type={type} className={`btn btn-primary d-flex align-items-center ${type}`}>
            {icon && <span>{icon}</span>}
            {text && <span className={icon ? 'mx-3' : ''}>{text}</span>}
        </Button>
    )
}

export default BtnPrimary;