import styled from "styled-components";

const StyledRateds = styled.div`
    width: 100%;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
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
        display: flex;
        flex-direction: row;
        position: absolute;
		left: ${({ left }) => left + 'px'};
		top: ${({ top }) => top + 'px'};

        /* &:nth-child(1) {
            align-items: center;
        }

        &:nth-child(2) {
            align-items: end;
        } */
    }
`;


export { StyledRateds};