import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchPhotos} from '../../store/slices/photosSlice';

const Error = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Ooops, something went wrong</Text>
      <Button title="Try again" onPress={() => dispatch(fetchPhotos())}>
        Try again
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 22,
  },
});

export default Error;
