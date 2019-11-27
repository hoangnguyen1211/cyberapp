import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title } from 'native-base';
import CourseItem from './CourseItem';

export default CourseList = (props) => {

    const { navigation } = props;
    const data = [
        { id: 1, title:"Html5", image: "https://i.imgur.com/JGuotDh.png", isActive: true },
        { id: 1, title:"Css3", image: "https://i.imgur.com/VsPmH1K.png", isActive: false  },
        { id: 1, title:"Bootstrap 4", image: "https://i.imgur.com/7CBZZDP.png", isActive: false  },
        { id: 1, title:"Javascript", image: "https://i.imgur.com/MZVzckI.png", isActive: false  }
    ]

    onPressHandler = () => {
        navigation.navigate('LessonScreen');
    }

    return (
        <View style={styles.conatainer}>
            <Title style={styles.title}>
                {props.title}
            </Title>
            <FlatList 
                data={data}
                renderItem={ ({item, index}) => 
                    <CourseItem  
                        title={item.title}
                        image={item.image}
                        actived={item.isActive}
                        onPress={onPressHandler}
                    /> 
                }
                keyExtractor={ (item,index) => index.toString() }
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer: {
        // paddingVertical: 10
    },
    title: {
        textAlign: 'left',
        marginLeft: 5,
        marginBottom: 5
    }
})
