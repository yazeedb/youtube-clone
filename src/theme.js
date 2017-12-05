import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white } from 'material-ui/styles/colors';
import Typography from 'material-ui/styles/typography';

export const almostBlack = '#282828';
export const youtubeRed = '#FF0000';

export default getMuiTheme({
	palette: {
		primary1Color: white,
		textColor: almostBlack,
		alternateTextColor: almostBlack
	},
	appBar: {
		titleFontWeight: Typography.fontWeightMedium
	},
	bottomNavigation: {
		selectedColor: youtubeRed
	}
});
