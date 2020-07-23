import React from 'react';
import {ViewProps} from 'react-native';
import PokemonBadgeIcon from '../PokemonBadgeIcon';

import {
  PokemonCard,
  Background,
  PokemonInfo,
  PokemonInfoNameSection,
  PokemonInfoID,
  PokemonInfoNameTitle,
  PokemonBadges,
  PokemonInfoBadgeContainer,
  PokemonInfoBadgeIcon,
  PokemonInfoBadgeTitle,
  PokemonImageContainer,
  PokemonImage,
} from './styles';

interface Props extends ViewProps {
  id: number;
  title: string;
  avatar: string;
  types: any[];
}

export const PokemonItem = (props: Props) => {
  const {id, title, avatar, types} = props;
  return (
    <PokemonCard typeName={types[0].type.name} {...props}>
      <Background source={require('../../assets/card/bg.png')}>
        <PokemonInfo>
          <PokemonInfoNameSection>
            <PokemonInfoID>#{id}</PokemonInfoID>
            <PokemonInfoNameTitle>{title}</PokemonInfoNameTitle>
          </PokemonInfoNameSection>
          <PokemonBadges>
            {types.map((type) => (
              <PokemonInfoBadgeContainer
                key={type.type.name}
                typeName={type.type.name}>
                <PokemonInfoBadgeIcon>
                  <PokemonBadgeIcon type={type.type.name} />
                </PokemonInfoBadgeIcon>
                <PokemonInfoBadgeTitle>{type.type.name}</PokemonInfoBadgeTitle>
              </PokemonInfoBadgeContainer>
            ))}
          </PokemonBadges>
        </PokemonInfo>
        <PokemonImageContainer>
          <PokemonImage source={{uri: avatar}} />
        </PokemonImageContainer>
      </Background>
    </PokemonCard>
  );
};
