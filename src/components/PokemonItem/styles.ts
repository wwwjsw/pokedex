import styled from 'styled-components/native';
import {colorsBadge, colorsCard} from '../../constants';

interface BadgePropsCard {
  typeName: keyof typeof colorsCard;
}

interface BadgePropsBadge {
  typeName: keyof typeof colorsBadge;
}

export const PokemonCard = styled.TouchableOpacity`
  min-width: 300px;
  height: 115px;
  width: 90%;
  margin: 15px auto;
  background: ${(props: BadgePropsCard) => colorsCard[props.typeName]};
  border-radius: 10px;
`;

export const Background = styled.ImageBackground`
  height: 115px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PokemonInfo = styled.View`
  margin: 20px;
`;

export const PokemonInfoNameSection = styled.View``;

export const PokemonInfoID = styled.Text`
  font-family: 'SFProDisplay-Regular';
  color: rgba(23, 23, 27, 0.6);
  font-weight: bold;
  font-size: 12px;
`;

export const PokemonInfoNameTitle = styled.Text`
  font-family: 'SFProDisplay-Regular';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
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

export const PokemonImageContainer = styled.View`
  align-self: center;
  justify-content: flex-start;
`;

export const PokemonImage = styled.Image`
  width: 130px;
  height: 130px;
`;
