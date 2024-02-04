import styled from 'styled-components';

const StyledWrapperCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px){
        /* flex-direction: row; */

        &:nth-child(1) {
			justify-content: start;
		}
		&:nth-child(2) {
			justify-content: center;
		}
		&:nth-child(3) {
			justify-content: flex-end;
		}
    }
`;

const StyledCardContainer = styled.div`
	padding: 2rem 1rem;
	border-radius: 8px;
	background: #512051;
	display: flex;
	flex-direction: column;
	color: #fff;
	background-color: #512051;
	font-size: 1.0625rem;

	@media screen and (min-width: 768px) {
		/* width: 33%;
		height: 190px; */

		
	}
`;

const StyledCardHeader = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	margin-bottom: 1rem;
`;

const StyledCardHeaderImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 48px;
	margin-right: 1rem;
`;

const StyledCardHeaderLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 0.3rem;
`;

const StyledCardHeaderNameUser = styled.h2`
	color: #fff;
	font-weight: 700;
`;

const StyledCardHeaderVerified = styled.h3`
	color: #ee69a4;
	font-weight: 400;
`;

const StyledCardHeaderInformation = styled.p`
	color: #fff;
	font-weight: 500;
	text-align: left;
`;

export {
    StyledWrapperCards,
	StyledCardContainer,
	StyledCardHeader,
	StyledCardHeaderImage,
	StyledCardHeaderInformation,
	StyledCardHeaderLeft,
	StyledCardHeaderNameUser,
	StyledCardHeaderVerified
}
