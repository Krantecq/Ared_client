import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {COLORS, SIZES} from '../../constant';
import BackTopbar from '../../components/BackTopbar';
import ProjectContainer from '../../components/ProjectContainer';
import {project} from '../../constant/data';

const ProjectScreen = () => {
  console.log(SIZES.width * 0.057);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <BackTopbar name={''} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Choose your preferred carbon offset project
        </Text>
      </View>
      <View style={{height: SIZES.height * 0.73}}>
        <ProjectContainer data={project} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryItem: {
    alignItems: 'center',
    marginLeft: SIZES.width * 0.051,
    width: SIZES.width * 0.255,
    height: SIZES.width * 0.0765,
    borderRadius: 55,
    borderWidth: 0.5,
    borderColor: '#CCC',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.013,
  },
  iconContainer: {
    width: SIZES.width * 0.051,
    height: SIZES.width * 0.051,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  categoryTitle: {
    fontSize: SIZES.width * 0.026,
    color: COLORS.black,
    fontWeight: '300',
    lineHeight: SIZES.width * 0.041,
  },
  flatListContent: {
    paddingVertical: SIZES.width * 0.041,
  },
  title: {
    color: '#000',
    fontSize: SIZES.width * 0.057,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.08,
  },
  titleContainer: {
    marginHorizontal: SIZES.width * 0.08,
    marginTop: SIZES.width * 0.03,
  },
});

export default ProjectScreen;
