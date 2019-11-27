import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { AuthLoadingScreen } from '../screens/initializer';

const InitNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthNavigator,
        App: AppNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
    }
)
export default createAppContainer(InitNavigator);