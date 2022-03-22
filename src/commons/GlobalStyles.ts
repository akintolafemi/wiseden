import Colors from './Colors';
import Fonts from './Fonts';

export default {
    globalScreenBg: {flex:1, backgroundColor: Colors.colorWhite, padding: Fonts.h(20)},
    paddingArround: Fonts.h(20),
    buttonStyle: {
        borderRadius: Fonts.w(12),
        height: Fonts.h(55),
        backgroundColor: Colors.colorOne
    },
    buttonContainerStyle: {
        height: Fonts.h(55),
        backgroundColor: Colors.colorOne,
        marginVertical: Fonts.h(10)
    }
};
