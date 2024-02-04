// import { v4 } from "uuid";
import Card from "./components/card/Card";
// import CardsContainer from "./components/cardscontainer/CardsContainer";
import HeaderSubTitle from "./components/headersubtitle/HeaderSubTitle";
import HeaderTitle from "./components/headertitle/HeaderTitle";
import Rateds from "./components/rateds/Rateds";
import { InfoCards } from "./constants/InfoCards";
import { RATEDSTEXT } from "./constants/ratedsText";
import { GlobalStyles } from "./styles/GlobalStyles";
// import Wrapper from "./wrapper/Wrapper";

const App = () => {
	return (
		<>
			<GlobalStyles />

			<div className="wrapper">
				<header className="header">
					<div className="header__left">
						<HeaderTitle text="10,000+ of our users love our products." />
						<HeaderSubTitle text="We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services." />
					</div>

					<div className="header__right">
						{RATEDSTEXT.map(ratedText => {
							return (
								<Rateds key={ratedText.id}
									text={ratedText.text} />
							);
						})}
						{/* <Rateds text="Rated 5 Stars in Reviews" />
						<Rateds text="Rated 5 Stars in Report Guru"  />
						<Rateds text="Rated 5 Stars in BestTech" /> */}

					</div>			
				</header>

				<main>
					<div className="wrapperCards">
						{InfoCards.map(infocard => {
							return (
								<Card
									key={infocard.id}
									urlImage={infocard.urlImage}
									name={infocard.name}
									verified={infocard.verified}
									information={infocard.information}
								/>
							);
						})}
					</div>
				</main>
			</div>
		</>
	);
};

export default App;
