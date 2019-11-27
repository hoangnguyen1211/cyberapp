import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ChapperItem from './ChapperItem';

export default ChapterList = (props) => {

    const data = [
        {
            "id": "1",
            "title": "Chapter 01",
            "isActive": "true",
            "lessons": [
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
                    "title": "What is a Web page?",
                    "isActive": "true",
                    "numQuestion": "20",
                    "courseId": "1"
                },
                {
                    "id": "4",
                    "title": "The paragraph tag",
                    "isActive": "true",
                    "numQuestion": "22",
                    "courseId": "1"
                }
            ]
        },
        {
            "id": "2",
            "title": "Chapter 02",
            "isActive": "true",
            "lessons": [
                {
                    "id": "5",
                    "title": "The break tag",
                    "isActive": "true",
                    "numQuestion": "16",
                    "courseId": "1"
                },
                {
                    "id": "6",
                    "title": "Headings in HTML",
                    "isActive": "true",
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
                    <ChapperItem 
                        title={item.title}
                        actived={arrActive.length === (index + 1)}
                        lessons={item.lessons}
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
        paddingHorizontal: 0
    }
})