import { StyledHeader, HeaderContainer, HeaderTitle } from "./Header.styles";

export function Header(){
	return(
		<HeaderContainer>
			<StyledHeader>
				<HeaderTitle>The Weather App.</HeaderTitle>
			</StyledHeader>
		</HeaderContainer>
	)
}