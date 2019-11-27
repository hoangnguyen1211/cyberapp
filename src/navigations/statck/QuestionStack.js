import { createStackNavigator } from 'react-navigation-stack';
import { QuestionScreen } from '../../screens/question';

const QuestionStack = createStackNavigator({
    QuestionScreen
},
{
    initialRouteName: 'QuestionScreen',
    headerMode: 'none'
});

export default QuestionStack;