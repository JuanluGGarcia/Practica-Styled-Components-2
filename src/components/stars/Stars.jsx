import { StyledStar } from "./styles";

const Stars = ({ urlImage }) => {
    return (
        <StyledStar>
            <img src={urlImage} />
            <img src={urlImage} />
            <img src={urlImage} />
            <img src={urlImage} />
            <img src={urlImage} />
        </StyledStar>
    );
};

export default Stars;