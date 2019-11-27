import { createStackNavigator } from 'react-navigation-stack';
import { LearnScreen, CourseScreen, LessonScreen } from '../../screens/learning';
import QuestionStack from './QuestionStack';

const LearnStack = createStackNavigator({
    LearnScreen,
    CourseScreen,
    LessonScreen,
    QuestionStack
},
{
    initialRouteName: 'LearnScreen',
    headerMode: 'none'
});

LearnStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    //   if (navigation.state.index > 0) {
    //     tabBarVisible = false;
    //   }

    return {
        tabBarVisible,
    };
};
export default LearnStack;