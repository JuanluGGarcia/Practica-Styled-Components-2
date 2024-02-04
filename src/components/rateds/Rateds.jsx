import Stars from "../stars/Stars";
import { StyledRateds, StyledRatedsContainer } from "./styles";

// const Rateds = ({ text, top, left }) => {
const Rateds = ({ text }) => {
    // return <StyledRateds top={top} left={left}>
    //             <Stars urlImage='./assets/images/icon-star.svg' />
    //             <span>{text}</span>
    //         </StyledRateds>
    return <StyledRatedsContainer>
                <StyledRateds>
                    <Stars urlImage='./assets/images/icon-star.svg' />
                    <span>{text}</span>
                </StyledRateds>
            </StyledRatedsContainer>
                
            

};

export default Rateds;