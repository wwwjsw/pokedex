import React from 'react';
import {View, ViewProps} from 'react-native';
import {Image} from './styles';
import {badges} from '../../constants';

interface Props extends ViewProps {
  type: keyof typeof badges;
}

const PokemonBadgeIcon = (props: Props) => {
  const {type} = props;

  return (
    <View>
      <Image resizeMode="contain" source={badges[type]} />
    </View>
  );
};

export default PokemonBadgeIcon;
