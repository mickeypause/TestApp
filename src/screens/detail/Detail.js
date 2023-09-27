import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const Detail = () => {
  const route = useRoute();
  const data = route.params.data;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: data.user.name,
    });
  }, [data, navigation]);

  return (
    <View style={styles.wrapper}>
      <Image source={{uri: data.urls.regular}} style={styles.img} />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

export default Detail;
