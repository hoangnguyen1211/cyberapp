import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../../screens/home';

export default createStackNavigator({
    HomeScreen
},
{
    initialRouteName: 'HomeScreen',
    headerMode: 'none'
});