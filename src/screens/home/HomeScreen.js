import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import { BaseHeader } from '../../components/base';
import { HomeCourse, HomeCarousel, HomeSchedule, HomeCategory } from '../../components/home';

const COURSE_TITLE = "Khoá học của tôi";
const SCHEDULE_TITLE = "Học theo lộ trình";

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <BaseHeader title="Trang chủ" />
        <Content>
          <HomeCarousel />
          <HomeCourse title={COURSE_TITLE} />
          <HomeSchedule 
              title={SCHEDULE_TITLE}
              navigation={this.props.navigation}
           />
          <View>
            <HomeCategory title="Html" />
            <HomeCategory title="Css" />
            <HomeCategory title="Javascript" />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});