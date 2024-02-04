import {
    StyledWrapperCards,
	StyledCardContainer,
	StyledCardHeader,
	StyledCardHeaderImage,
	StyledCardHeaderInformation,
	StyledCardHeaderLeft,
	StyledCardHeaderNameUser,
	StyledCardHeaderVerified
} from './styles';

const Card = ({ urlImage, name, verified, information }) => {
	return (
		<>
			<StyledWrapperCards>
				<StyledCardContainer>
					<StyledCardHeader>
						<StyledCardHeaderImage src={urlImage} />

						<StyledCardHeaderLeft>
							<StyledCardHeaderNameUser>{name}</StyledCardHeaderNameUser>
							<StyledCardHeaderVerified>{verified}</StyledCardHeaderVerified>
						</StyledCardHeaderLeft>
					</StyledCardHeader>
					<StyledCardHeaderInformation>
						{information}
					</StyledCardHeaderInformation>
				</StyledCardContainer>
			</StyledWrapperCards>
		</>
	);
};

export default Card;
