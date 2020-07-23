import React, {memo} from 'react';
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

interface Props {
  id: number;
  title: string;
  avatar: string;
  types: any[];
  navTo: () => void;
}

export const PokemonItem = memo(({id, title, avatar, types, navTo}: Props) => (
  <PokemonCard typeName={types[0].type.name} onPress={navTo}>
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
));
