import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../../components/card/Card';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchPhotos,
  incrementPage,
  setPage,
} from '../../store/slices/photosSlice';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';

const Home = () => {
  const dispatch = useDispatch();
  const {photos, isLoading, isError, page} = useSelector(state => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos(page));
  }, [dispatch, page]);

  if (isLoading && !photos) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={photos}
        onRefresh={() => dispatch(setPage(1))}
        refreshing={isLoading}
        renderItem={item => <Card data={item.item} />}
        ItemSeparatorComponent={<View style={styles.separator} />}
        contentContainerStyle={styles.content}
        onEndReached={() => dispatch(incrementPage())}
        keyExtractor={item => item.id}
      />
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  separator: {
    height: 16,
  },
});

export default Home;
