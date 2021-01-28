import React, {useEffect, useRef, useState} from 'react';
import {View, Image, Text, TextInput, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationScreenProp} from "react-navigation";
import AppStyles from "../styles/AppStyles";
import {Screens} from "../Constants";
import {Card} from "../components/Card";
import Utils from "../util/Utils";
import {Pokemon, PokemonStat} from "../types/Types";

type props = {
    navigation: NavigationScreenProp<object>
}

export default function MainScreen(props: props) {

    const [pokeList, setPokeList] = useState([] as Pokemon[]);
    const pokemonsList = useRef([] as Pokemon[]);

    useEffect(() => {
        loadFirstGenerationPokemons();
    }, [])


    const fetchPokemons = (pokeNamesList: []) => {
        Promise.all(pokeNamesList.map(pokeName =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                .then(resp => resp.json())
        )).then((pokeList) => {

            pokemonsList.current = pokeList.map((poke) => {

                const pokemon: Pokemon = {
                    name: poke.name,
                    stats: poke.stats.map((stat: any) => {
                        const pokeStat: PokemonStat = {
                            base_stat: stat.base_stat,
                            effort: stat.effort,
                            name: stat.stat.name
                        }

                        return pokeStat;
                    }),
                    types: poke.types.map((type: any) => type.type.name),
                    sprites: Object.values(poke.sprites)
                        .filter((sprite) => sprite !== null && sprite !== undefined && typeof sprite === 'string') as [string],
                    pictureULR: poke.sprites.front_default,
                }
                return pokemon;
            });

            setPokeList(pokemonsList.current);
        });
    }

    const loadFirstGenerationPokemons = () => {
        findFirstGenerationPokemons();
    }

    const findFirstGenerationPokemons = () => {
        fetch('https://pokeapi.co/api/v2/generation/1')
            .then(resp => resp.json())
            .then((resp) => {
                const firstGenerationPokemonNames = resp.pokemon_species.map((pokemon: { name: string, url: string }) => pokemon.name);

                fetchPokemons(firstGenerationPokemonNames);
            });
    }

    const renderItem = ({item}: { item: Pokemon }) => {

        const {name, pictureULR} = item;

        return (

            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate(Screens.details, {pokemon: item})
                }}
            >
                <Card style={AppStyles.common.row}>
                    <Image
                        style={AppStyles.image.thumbnail}
                        source={{uri: pictureULR}}
                    />
                    <Text style={AppStyles.text.title}>{Utils.capitalizeFirstLetter(name)}</Text>
                </Card>
            </TouchableOpacity>


        );
    };

    const filterPokeList = (filterString: string) => {

        const filteredList = pokemonsList.current.filter((pokemon: Pokemon) => {
            if (pokemon.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())) {
                return pokemon;
            }
        });

        setPokeList(filteredList);
    }

    return (
        pokemonsList.current.length === 0 ?
            <View style={AppStyles.common.container}>
                <Image
                    style={{
                        height: 200,
                        width: 200
                    }}
                    source={require('../../assets/images/icon.png')}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: AppStyles.dimensions.marginSmall,
                }}>
                    <ActivityIndicator size='large' color='red'/>
                    <Text style={AppStyles.text.title}> Loading ... </Text>
                </View>
            </View>
            :
            <SafeAreaView>
                <View style={AppStyles.common.textInputContainer}>
                    <TextInput
                        style={AppStyles.common.textInput}
                        onChangeText={filterPokeList}
                        placeholder={'Search for your favourite Pokemon'}
                        numberOfLines={1}
                        clearButtonMode={'always'}
                        autoCorrect={false}
                    />
                </View>
                <FlatList
                    data={pokeList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                    style={{alignSelf: 'stretch'}}
                />
            </SafeAreaView>
    );
}
