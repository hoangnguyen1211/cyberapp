import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import { Title } from 'native-base';
import HomeCourseItem from './HomeCourseItem';

export default HomeCourse = (props) => {

    const images = [
        { imageUri: 'https://cdn2.iconfinder.com/data/icons/flat-ii/284/Flat_Elements-21-512.png' },
        { imageUri: 'https://cdn2.iconfinder.com/data/icons/flat-ii/290/Flat_Elements-09-512.png' },
        { imageUri: 'https://cdn2.iconfinder.com/data/icons/flat-ii/285/Flat_Elements-22-512.png' },
        { imageUri: 'https://cdn2.iconfinder.com/data/icons/flat-ii/289/Flat_Elements-30-512.png' }
    ]

    // Props for ScrollView component
    defaultProps = {
        // Arrange screens horizontally
        horizontal: true,
        // Hide all scroll indicators
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false
    };

    return (
        <View style={styles.container}>
            <Title style={styles.title}>
                { props.title }
            </Title>
            <ScrollView {...defaultProps}>
                {
                    images.map((item, index) => {
                        return <HomeCourseItem 
                                    imageUri={item.imageUri} 
                                    key={index} 
                                />
                    })
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    title: {
        textAlign: 'left',
        marginBottom: 5
    }
})
