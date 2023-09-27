import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Card = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => navigation.navigate('Detail', {data: data})}
        style={styles.imgContainer}>
        <Image source={{uri: data.urls.small}} style={styles.img} />
      </Pressable>
      <View style={styles.column}>
        <Text style={styles.title}>{data.user.name}</Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          {data.alt_description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    gap: 16,
    position: 'relative',
  },
  column: {
    gap: 6,
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    color: '#000',
  },
  subTitle: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.4)',
  },

  img: {
    height: '100%',
    width: 'auto',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgContainer: {
    width: '100%',
    height: '80%',
    position: 'relative',
  },
});

export default Card;
