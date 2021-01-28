import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

class AppStyles {

    static screenWidth = Dimensions.get('window').width;
    static screenHeight = Dimensions.get('window').height;

    static colors = {
        white: '#FFFFFF',
        gray: '#4F5165',        // white
        black: '#0A0A0A',

    }

    static dimensions = {
        paddingGeneral: 16,
        paddingSmall: 8,
        paddingTiny: 4,

        marginBig: 64,
        marginGeneral: 16,
        marginSmall: 8,

        textSizeBig: 24,
        textSizeMedium: 18,
        textSizeNormal: 14,

        thumbnailImageSize: 65,

        textInputSize: 40,
    }

    static image = StyleSheet.create({
        thumbnail: {
            height: AppStyles.dimensions.thumbnailImageSize,
            width: AppStyles.dimensions.thumbnailImageSize,
            margin: AppStyles.dimensions.marginSmall,
        },
        normal: {
            width: '100%',
            height: undefined,
            aspectRatio: 1,
        }
    });

    static text = StyleSheet.create({
        title: {
            color: AppStyles.colors.black,
            fontSize: AppStyles.dimensions.textSizeBig,
            textAlign: 'center',
        },
        normal: {
            color: AppStyles.colors.black,
            fontSize: AppStyles.dimensions.textSizeNormal,
        },
        pokeType: {
            color: AppStyles.colors.white,
            fontSize: AppStyles.dimensions.textSizeMedium,
            textAlign: 'center',
        }
    });

    static common = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        label: {
            marginHorizontal: AppStyles.dimensions.marginSmall,
            padding: AppStyles.dimensions.paddingSmall,
            alignItems: 'flex-start' ,
            justifyContent: 'center',
        },
        typeLabel: {
            marginHorizontal: AppStyles.dimensions.marginSmall,
            padding: AppStyles.dimensions.paddingSmall,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        },
        statsLabel: {
            marginLeft: AppStyles.dimensions.marginBig,
            padding: AppStyles.dimensions.paddingTiny,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        },
        card: {
            flex: 1,
            alignSelf: 'stretch',
            margin: AppStyles.dimensions.marginSmall,
            paddingHorizontal: AppStyles.dimensions.paddingSmall,
            paddingVertical: AppStyles.dimensions.paddingTiny,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: AppStyles.colors.white,
            borderColor: AppStyles.colors.gray,
            shadowOffset: {
                width: 3,
                height: 3,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            shadowColor: AppStyles.colors.black,
        },
        textInputContainer: {
            padding: AppStyles.dimensions.paddingGeneral,
        },
        textInput: {
            height: AppStyles.dimensions.textInputSize,
            paddingHorizontal: AppStyles.dimensions.paddingSmall,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: AppStyles.colors.white,
            borderColor: AppStyles.colors.gray,
        }

    });
}

export default AppStyles;
