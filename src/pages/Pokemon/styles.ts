import styled from 'styled-components/native';
import {colorsBadge, colorsCard, colors} from '../../constants';

interface BadgePropsCard {
  typeName: keyof typeof colorsCard;
}

interface BadgePropsBadge {
  typeName: keyof typeof colorsBadge;
}

interface PorcentajeProps {
  porcentaje: number;
  typeName: keyof typeof colorsBadge;
}

export const MainScrollView = styled.ScrollView`
  background: ${colors.containerBg};
  min-height: 100%;
`;

export const BackButtonContainer = styled.View`
  background: ${(props: BadgePropsCard) => colorsCard[props.typeName]};
  padding: 20px 20px;
`;

export const BackButtonTouchable = styled.TouchableOpacity``;

export const BackButtonImage = styled.Image``;

export const PokemonHeader = styled.ImageBackground`
  background: ${(props: BadgePropsCard) => colorsCard[props.typeName]};
  padding: 20px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PokemonHeaderImageContainer = styled.ImageBackground`
  width: 125px;
  height: 125px;
`;

export const PokemonHeaderImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const PokemonHeaderInfo = styled.View`
  padding: 0px 10px;
  flex: 1;
`;

export const PokemonInfoID = styled.Text`
  font-family: 'SFProDisplay-Regular';
  color: rgba(23, 23, 27, 0.6);
  font-weight: bold;
  font-size: 16px;
`;

export const PokemonInfoNameTitle = styled.Text`
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const PokemonBadges = styled.View`
  flex-direction: row;
`;

export const PokemonInfoBadgeContainer = styled.View`
  flex-direction: row;
  min-width: 61px;
  height: 25px;
  background: ${(props: BadgePropsBadge) => colorsBadge[props.typeName]};
  border-radius: 3px;
  align-items: center;
  margin-right: 5px;
`;

export const PokemonInfoBadgeIcon = styled.View`
  width: 15px;
  height: 15px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

export const PokemonInfoBadgeTitle = styled.Text`
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  align-items: center;
  text-align: center;
  margin: 5px;
  text-transform: capitalize;
  color: #fff;
`;

export const MainStats = styled.View`
  background: ${(props: BadgePropsCard) => colorsCard[props.typeName]};
`;

export const StatsContainer = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 40px;
  background: ${colors.containerBg};
`;

export const StatsTitle = styled.Text`
  color: ${(props: BadgePropsBadge) => colorsBadge[props.typeName]};
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const StatName = styled.Text`
  color: ${colors.textStat};
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  width: 100px;
`;

export const StatGaph = styled.View`
  flex-grow: 1;
  align-items: flex-start;
`;

export const StatBar = styled.View`
  background: ${(props: PorcentajeProps) => colorsBadge[props.typeName]};
  border-radius: 2px;
  height: 4px;
  width: ${(props: PorcentajeProps) => (props.porcentaje / 3) * 2}px;
`;

export const StatValue = styled.Text`
  color: ${colors.textStatValue};
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

export const Pokedex = styled.View`
  margin: 0px 40px;
`;

export const PokedexTitle = styled.Text`
  color: ${(props: BadgePropsBadge) => colorsBadge[props.typeName]};
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const PokedexData = styled.View`
  flex-direction: row;
`;

export const PokedexDataName = styled.Text`
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${colors.textStat};
  width: 100px;
`;

export const PokedexDataNames = styled.View``;

export const PokedexDataActive = styled.Text`
  font-family: 'SFProDisplay-Regular';
  color: ${colors.textStatValue};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

export const PokedexDataInative = styled.Text`
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  color: ${colors.textStatValue};
  font-weight: 500;
  font-size: 12px;
`;
