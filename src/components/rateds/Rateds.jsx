import Stars from "../stars/Stars";
import { StyledRateds } from "./styles";

const Rateds = ({ text, top, left }) => {
    return <StyledRateds top={top} left={left}>
                <Stars urlImage='./assets/images/icon-star.svg' />
                <span>{text}</span>
            </StyledRateds>

};

export default Rateds;