import React, {useEffect} from "react";
import {Image, View, Text} from "react-native";
import {NavigationParams} from "react-navigation";
import Carousel from 'react-native-snap-carousel';
import AppStyles from "../styles/AppStyles";
import {Pokemon, PokemonStat} from "./MainScreen";
import {Card} from "../components/Card";

type props = {
    navigation: any
    route: NavigationParams
}

export default function DetailsScreen(props: props) {
    const pokemon = props.route.params.pokemon as Pokemon;

    useEffect(() => {

        if (pokemon.name) {
            props.navigation.setOptions({title: pokemon.name})
        }
    }, []);

    const renderCarouselItem = ({item, index}: { item: string, index: number }) => {
        return <View style={{
            width: AppStyles.screenWidth - 70,
            height: AppStyles.screenWidth - 70,
        }}>
            <Card>
                <Image
                    style={AppStyles.image.normal}
                    source={{uri: item}}
                />
            </Card>
        </View>

    }

    const renderTypes = () => {
        return pokemon.types.map((type: string) => {

            let typeColor;

            switch (type) {

                case 'fire'     :
                    typeColor = 'red';
                    break;
                case 'water'    :
                    typeColor = 'blue';
                    break;
                case 'poison'   :
                    typeColor = 'green';
                    break;
                case 'bug'      :
                    typeColor = 'limegreen';
                    break;
                case 'grass'    :
                    typeColor = '#92EF04';
                    break;
                case 'flying'   :
                    typeColor = 'darkorange';
                    break;
                case 'ground'   :
                    typeColor = 'saddlebrown';
                    break;
                case 'rock'   :
                    typeColor = 'darkgray';
                    break;

                default:
                    typeColor = 'gray'
            }

            return <View style={[AppStyles.common.typeLabel, {backgroundColor: typeColor}]} key={type}>
                <Text style={AppStyles.text.pokeType}>{type}</Text>
            </View>

        });
    }

    const renderStats = () => {
        return pokemon.stats.map((stat: PokemonStat) => {
            return <View style={AppStyles.common.statsLabel} key={stat.name}>
                <Text style={AppStyles.text.normal}> - {stat.name} : {stat.base_stat}</Text>
            </View>
        })
    }

    console.log(pokemon);

    return (
        <View>
            <View style={{ marginVertical: AppStyles.dimensions.marginGeneral }}>
                <Carousel
                    layout={'stack'}
                    data={pokemon.sprites.reverse()}
                    renderItem={renderCarouselItem}
                    sliderWidth={AppStyles.screenWidth - 40}
                    itemWidth={AppStyles.screenWidth - 70}
                    loop
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={AppStyles.common.label}>
                    <Text style={AppStyles.text.title}> Type: </Text>
                </View>
                {renderTypes()}
            </View>
            <View style={{marginVertical: AppStyles.dimensions.marginGeneral}}>
                <View style={AppStyles.common.label}>
                    <Text style={AppStyles.text.title}> Stats: </Text>
                    {renderStats()}
                </View>
            </View>
        </View>
    );
}
