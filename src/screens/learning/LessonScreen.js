import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Tabs, Tab, TabHeading } from 'native-base';
import { BaseHeader } from '../../components/base';
import { TextForm } from '../../components/form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LessonList, ChapterList } from '../../components/learning';

export default class LessonScreen extends Component {

  onGoBackHandler = () => {
    this.props.navigation.navigate('CourseScreen');
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <BaseHeader
          title="Bài học"
          onGoBack={this.onGoBackHandler}
        />
        <Content>
          <Tabs>
            <Tab heading={
                <TabHeading>
                  <Ionicons name="ios-list-box" size={20} />
                  <TextForm style={styles.tabText}>Bài học</TextForm>
                </TabHeading>
            }>
              <LessonList navigation={navigation} />
            </Tab>
            <Tab heading={
                <TabHeading>
                  <Ionicons name="ios-photos" size={21} />
                  <TextForm style={styles.tabText}>Chương</TextForm>
                </TabHeading>
            }>
              <ChapterList navigation={navigation} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  tabText: {
    marginBottom: 2,
    marginLeft:7,
    fontWeight: '600'
  }
});