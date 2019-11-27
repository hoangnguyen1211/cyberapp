import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title } from 'native-base';
import HomeScheduleItem from './HomeScheduleItem';

export default HomeSchedule = (props) => {
    const { navigation } = props;
    const data = [
        { id: 1, title:"Frontend", image: "https://i.imgur.com/JGuotDh.png" },
        { id: 1, title:"Backend", image: "https://i.imgur.com/JGuotDh.png"  },
        { id: 1, title:"Mobile", image: "https://i.imgur.com/JGuotDh.png"  },
        { id: 1, title:"Design", image: "https://i.imgur.com/JGuotDh.png"  }
    ]

    onPress = () => {
        navigation.navigate('CourseScreen');
    }

    return (
        <View style={styles.conatainer}>
            <Title style={styles.title}>
                {props.title}
            </Title>
            <FlatList 
                data={data}
                renderItem={ ({item, index}) => 
                    <HomeScheduleItem  
                        title={item.title}
                        image={item.image}
                        onPress={onPress}
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
        paddingVertical: 10
    },
    title: {
        textAlign: 'left',
        marginLeft: 5,
        marginBottom: 5
    }
})
