import React, {useEffect, useState, ReactNode} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {connect, useSelector} from 'react-redux';
import {ActivityIndicatorContainer, Loading} from './styles';

import {PokemonItem} from '../../components';
import {fetchPokemons, fetchMorePokemons} from '../../redux/actions/fetch';
import {colors} from '../../constants';

interface Props {
  fetchPokemonsList: (page?: number, limit?: number) => void;
  fetchMorePokemonsList: (page?: number, limit?: number) => void;
  children?: ReactNode;
}

interface State {
  data: any[];
  loading: boolean;
}

interface itemProp {
  item: any;
}

const Home = (props: Props) => {
  const [page, setPage] = useState(0);
  let limit = 10;

  const {data, loading} = useSelector((state: State) => state);

  const {fetchPokemonsList, fetchMorePokemonsList, navigation} = props;

  useEffect(() => {
    fetchPokemonsList(page, limit);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        initialNumToRender={6}
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({item}: itemProp) => {
          return (
            <PokemonItem
              id={item.id}
              avatar={item.sprites.front_default}
              title={item.name}
              types={item.types}
              navTo={() => navigation.navigate('Pokemon', item)}
            />
          );
        }}
        onEndReached={() => {
          setPage(page + limit);
          fetchMorePokemonsList(page + limit, limit);
        }}
        ListFooterComponent={
          loading ? (
            <ActivityIndicatorContainer>
              <Loading color={colors.textColor} />
            </ActivityIndicatorContainer>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.data,
  loading: state.loading,
});

function bindToAction(dispatch: any) {
  return {
    fetchPokemonsList: (page?: number, limit?: number) =>
      dispatch(fetchPokemons(page, limit)),
    fetchMorePokemonsList: (page?: number, limit?: number) =>
      dispatch(fetchMorePokemons(page, limit)),
  };
}

export default connect(mapStateToProps, bindToAction)(Home);
