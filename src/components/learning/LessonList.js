import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import LessionItem from './LessionItem';

export default LessonList = (props) => {

    const data = [
        {
            "id": "1",
            "title": "Introduction to HTML",
            "isActive": "true",
            "numQuestion": "30",
            "courseId": "1"
        },
        {
            "id": "2",
            "title": "Basic Structure of HTML",
            "isActive": "true",
            "numQuestion": "27",
            "courseId": "1"
        },
        {
            "id": "3",
            "title": "What is a Web page ?",
            "isActive": "true",
            "numQuestion": "20",
            "courseId": "1"
        },
        {
            "id": "4",
            "title": "The paragraph tag",
            "isActive": "false",
            "numQuestion": "22",
            "courseId": "1"
        },
        {
            "id": "5",
            "title": "The break tag",
            "isActive": "false",
            "numQuestion": "16",
            "courseId": "1"
        },
        {
            "id": "6",
            "title": "Headings in HTML",
            "isActive": "false",
            "numQuestion": "43",
            "courseId": "1"
        },
        {
            "id": "7",
            "title": "Bold, Italics Underline",
            "isActive": "false",
            "numQuestion": "35",
            "courseId": "1"
        },
        {
            "id": "8",
            "title": "The image tag",
            "isActive": "false",
            "numQuestion": "18",
            "courseId": "1"
        }
    ]

    let arrActive = data.filter(x => x.isActive == "true");

    onPressHandler = () => {
        props.navigation.navigate('QuestionScreen');
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => 
                    <LessionItem 
                        title={item.title}
                        numQuestion={item.numQuestion}
                        actived={item.isActive}
                        unlocked={(arrActive.length + 1) === (index + 1)}
                        onPress={onPressHandler}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
})