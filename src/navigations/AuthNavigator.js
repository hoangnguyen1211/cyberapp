import { createStackNavigator } from 'react-navigation-stack';
import { SignInScreen, SignUpScreen } from '../screens/authen';

export default createStackNavigator({
    SignIn: {
        screen: SignInScreen
    },
    SignUp: {
        screen: SignUpScreen
    }
},
{
    initialRouteName: 'SignIn',
    headerMode: 'none'
});
