import styled from "styled-components";

const StyledRatedsContainer = styled.div`
    display: flex;
    

    @media screen and (min-width: 768px) {
        /* justify-content: space-between; */
        &:nth-child(1) {
            justify-content: left;
        }
        &:nth-child(2) {
            justify-content: center;
        }
        &:nth-child(3) {
            justify-content: right;
        }
    }
`;

const StyledRateds = styled.div`
    width: 100%;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #F7F2F7;
    color: #512051;
    font-size: 1.0625rem;
    font-weight: 700;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
        width: 445px;
        height: 56px;
        flex-direction: row;

    }
`;


export { StyledRatedsContainer, StyledRateds};