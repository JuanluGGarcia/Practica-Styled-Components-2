import Stars from "../stars/Stars";
import { StyledRateds, StyledRatedsContainer } from "./styles";

const Rateds = ({ text }) => {
    return <StyledRatedsContainer>
                <StyledRateds>
                    <Stars urlImage='./assets/images/icon-star.svg' />
                    <span>{text}</span>
                </StyledRateds>
            </StyledRatedsContainer>
                
            

};

export default Rateds;