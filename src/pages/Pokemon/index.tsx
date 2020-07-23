import React from 'react';
import {SafeAreaView} from 'react-native';

import {
  MainScrollView,
  BackButtonContainer,
  BackButtonTouchable,
  BackButtonImage,
  PokemonHeader,
  PokemonHeaderImageContainer,
  PokemonHeaderImage,
  PokemonHeaderInfo,
  PokemonInfoID,
  PokemonInfoNameTitle,
  PokemonBadges,
  PokemonInfoBadgeContainer,
  PokemonInfoBadgeIcon,
  PokemonInfoBadgeTitle,
  MainStats,
  StatsContainer,
  StatsTitle,
  Stat,
  StatName,
  StatGaph,
  StatBar,
  StatValue,
  Pokedex,
  PokedexTitle,
  PokedexData,
  PokedexDataName,
  PokedexDataNames,
  PokedexDataActive,
  PokedexDataInative,
} from './styles';

import PokemonBadgeIcon from '../../components/PokemonBadgeIcon';
import backButton from '../../assets/icons/Back/Back.png';
import circlePattern from '../../assets/patterns/circle/Circle.png';
import infoPattern from '../../assets/patterns/info/info.png';

const Pokemon: React.FC = ({route, navigation}) => {
  const {name, stats, abilities, types, id, sprites} = route.params;
  const typeName = types[0].type.name;

  return (
    <SafeAreaView>
      <MainScrollView>
        <BackButtonContainer typeName={typeName}>
          <BackButtonTouchable onPress={() => navigation.goBack()}>
            <BackButtonImage resizeMode="cover" source={backButton} />
          </BackButtonTouchable>
        </BackButtonContainer>
        <PokemonHeader typeName={typeName} source={infoPattern}>
          <PokemonHeaderImageContainer source={circlePattern}>
            <PokemonHeaderImage source={{uri: sprites.front_default}} />
          </PokemonHeaderImageContainer>
          <PokemonHeaderInfo>
            <PokemonInfoID>#{id}</PokemonInfoID>
            <PokemonInfoNameTitle>{name}</PokemonInfoNameTitle>
            <PokemonBadges>
              {types.map((type) => (
                <PokemonInfoBadgeContainer
                  key={type.type.name}
                  typeName={type.type.name}>
                  <PokemonInfoBadgeIcon>
                    <PokemonBadgeIcon type={type.type.name} />
                  </PokemonInfoBadgeIcon>
                  <PokemonInfoBadgeTitle>
                    {type.type.name}
                  </PokemonInfoBadgeTitle>
                </PokemonInfoBadgeContainer>
              ))}
            </PokemonBadges>
          </PokemonHeaderInfo>
        </PokemonHeader>
        <MainStats typeName={typeName}>
          <StatsContainer>
            <StatsTitle typeName={typeName}>Base Stats</StatsTitle>
            {stats.map((item) => {
              return (
                <Stat key={item.stat.name}>
                  <StatName>{item.stat.name}</StatName>
                  <StatGaph>
                    <StatBar porcentaje={item.base_stat} typeName={typeName} />
                  </StatGaph>
                  <StatValue>{item.base_stat}</StatValue>
                </Stat>
              );
            })}
          </StatsContainer>
        </MainStats>
        <Pokedex>
          <PokedexTitle typeName={typeName}>Pokédex Data</PokedexTitle>
          <PokedexData>
            <PokedexDataName>Abilities</PokedexDataName>
            <PokedexDataNames>
              {abilities.map((item, i) =>
                !item.is_hidden ? (
                  <PokedexDataActive key={item.slot}>
                    {i + 1}. {item.ability.name}
                  </PokedexDataActive>
                ) : (
                  <PokedexDataInative key={item.slot}>
                    {item.ability.name} (hidden ability)
                  </PokedexDataInative>
                ),
              )}
            </PokedexDataNames>
          </PokedexData>
        </Pokedex>
      </MainScrollView>
    </SafeAreaView>
  );
};

export default Pokemon;
