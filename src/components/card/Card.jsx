import { StyledCardContainer, StyledCardHeader, StyledCardHeaderImage, StyledCardHeaderInformation, StyledCardHeaderLeft, StyledCardHeaderNameUser, StyledCardHeaderVerified } from "./styles";

const Card = ({ urlImage, name, verified, information }) => {
    return (
        <>
            <StyledCardContainer>
                <StyledCardHeader>
                    <StyledCardHeaderImage src={urlImage} /> 
                    
                    <StyledCardHeaderLeft>
                        <StyledCardHeaderNameUser>{name}</StyledCardHeaderNameUser>
                        <StyledCardHeaderVerified>{verified}</StyledCardHeaderVerified>
                    </StyledCardHeaderLeft>

                </StyledCardHeader>
                <StyledCardHeaderInformation>{information}</StyledCardHeaderInformation>
            </StyledCardContainer>
        </>
        
    );
    
};

export default Card;