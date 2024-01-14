import styled from "styled-components";

export const StyledCardContainer = styled.div`
    padding: 2rem 1rem;
    border-radius: 8px;
    background: #512051;
    display: flex;
    flex-direction: column;
    /* align-items: start; */
    color: #fff;
    background-color: #512051;
    font-size: 1.0625rem;
    margin-bottom: 1rem;
    /* padding: 0.1px; */

    @media screen and (min-width: 768px){
        width: 325px;
        height: 234px;

    }

`;

export const StyledCardHeader = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 1rem;
    
`;

export const StyledCardHeaderImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 48px;
    margin-right: 1rem;

`;

export const StyledCardHeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .3rem;

`;

export const StyledCardHeaderNameUser = styled.h2`
    color: #FFF;
    font-weight: 700;
`;

export const StyledCardHeaderVerified = styled.h3`
    color: #EE69A4;
    font-weight: 400;
`;

export const StyledCardHeaderInformation = styled.p`
    color: #FFF;
    font-weight: 500;
    text-align: left;
`;
