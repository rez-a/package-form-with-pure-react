import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';

const Span = styled.span`
    text-decoration: none;
    color: ${props => props.theme} ;
    transition: all 0.3s ease-in-out;
`;

const ChangingLink = ({ children, to, className, type }) => {
    const { theme } = useContext(themeContext);
    return (

        type === 'Link' ?
            <Link to={to} className={className}>
                <Span theme={theme}>{children}</Span>
            </Link> :
            <a href='#' className={className}>
                <Span theme={theme}>{children}</Span>
            </a>

    );
};

export default ChangingLink;
