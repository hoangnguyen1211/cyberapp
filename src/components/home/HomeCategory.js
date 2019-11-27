import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title } from 'native-base';
import HomeCategoryItem from './HomeCategoryItem';

export default HomeCategory = (props) => {

    const data = [
        { id: 1, title:"Frontend", image: "https://i.imgur.com/JGuotDh.png" },
        { id: 1, title:"Backend", image: "https://i.imgur.com/JGuotDh.png"  },
        { id: 1, title:"Mobile", image: "https://i.imgur.com/JGuotDh.png"  },
        { id: 1, title:"Design", image: "https://i.imgur.com/JGuotDh.png"  }
    ]

    return (
        <View style={styles.conatainer}>
            <Title style={styles.title}>
                {props.title}
            </Title>
            <FlatList 
                data={data}
                renderItem={ ({item, index}) => 
                    <HomeCategoryItem  
                        title={item.title}
                        image={item.image}
                    /> 
                }
                keyExtractor={ (item,index) => index.toString() }
                horizontal={true}
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
