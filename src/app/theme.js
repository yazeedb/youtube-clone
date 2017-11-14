import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white } from 'material-ui/styles/colors';

const almostBlack = '#282828';
const youtubeRed = '#FF0000';

export default getMuiTheme({
  palette: {
    primary1Color: white,
    textColor: almostBlack,
    alternateTextColor: almostBlack
  },
  bottomNavigation: {
    selectedColor: youtubeRed
  }
});
