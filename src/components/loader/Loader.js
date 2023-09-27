import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loader;
