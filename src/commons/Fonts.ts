import { Platform, Dimensions } from 'react-native';

const DEVICE_SCALE = Dimensions.get('window').width / 375;
const DEVICE_SCALE_HEIGHT = Dimensions.get('window').height / 768;

const Stanley = 'Stanley';
const AverageSans_Regular = 'AverageSans-Regular';
const Roboto_Black = "Roboto-Black";
const Roboto_BlackItalic = "Roboto-BlackItalic";
const Roboto_Bold = "Roboto-Bold.ttf"
const Roboto_BoldItalic = "Roboto-BoldItalic.ttf"
const Roboto_Italic = "Roboto-Italic.ttf"
const Roboto_Light = "Roboto-Light.ttf"
const Roboto_LightItalic = "Roboto-LightItalic.ttf"
const Roboto_Medium = "Roboto-Medium.ttf"
const Roboto_MediumItalic = "Roboto-MediumItalic.ttf"
const Roboto_Regular = "Roboto-Regular.ttf"
const Roboto_Thin = "Roboto-Thin.ttf"
const Roboto_ThinItalic = "Roboto-ThinItalic.ttf"

function normalize(size: number): number {
    return Math.round(DEVICE_SCALE * size);
}

export default {
    Stanley,
    AverageSans_Regular,
    Roboto_Black,
    Roboto_BlackItalic,
    Roboto_Bold,
    Roboto_BoldItalic,
    Roboto_Italic,
    Roboto_Light,
    Roboto_LightItalic,
    Roboto_Medium,
    Roboto_MediumItalic,
    Roboto_Regular,
    Roboto_Thin,
    Roboto_ThinItalic,
    h: (size: number): number => Math.round(DEVICE_SCALE_HEIGHT * size),
    w: normalize,
}
