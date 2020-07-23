import {Dispatch} from 'redux';
import {fetchPokemonService} from '../services/pokemon';

export const IMAGE_DATA_FETCHED = 'IMAGE_DATA_FETCHED';
export const DATA_LOADING = 'DATA_LOADING';
export const FETCH_MORE = 'FETCH_MORE';

export function fetchPokemons(page?: number, limit?: number) {
  return (dispatch: Dispatch) => {
    dispatch(loading(true));
    fetchPokemonService(page, limit)
      .then((res: any) => {
        dispatch(pokemonsFetched(res));
        dispatch(loading(false));
      })
      .catch(() => {
        dispatch(loading(false));
      });
  };
}

export function fetchMorePokemons(page?: number, limit?: number) {
  return (dispatch: Dispatch) => {
    dispatch(loading(true));
    fetchPokemonService(page, limit)
      .then((res: any) => {
        dispatch(fetchMore(res));
        dispatch(loading(false));
      })
      .catch(() => {
        dispatch(loading(false));
      });
  };
}

const pokemonsFetched = (data: any[]) => ({
  type: IMAGE_DATA_FETCHED,
  payload: data,
});

const fetchMore = (data: any[]) => ({
  type: FETCH_MORE,
  payload: data,
});

export const loading = (loader: boolean) => ({
  type: DATA_LOADING,
  payload: loader,
});
