import { Platform } from "react-native";

export const Images = {
    bgOnboarding1: require('./../assets/images/bg_onboard_1.png'),
    imgOnboarding1: require('./../assets/images/img_onboard_1.png'),
    bgOnboarding2: require('./../assets/images/bg_onboard_2.png'),
    imgOnboarding2: require('./../assets/images/img_onboard_2.png'),
    bgOnboarding3: require('./../assets/images/bg_onboard_3.png'),
    imgOnboarding3: require('./../assets/images/img_onboard_3.png'),
    logo: require('./../assets/images/logo.png'),
    logoWithBrand: require('./../assets/images/logo_with_brand.png'),
    welcomeLogo: require('./../assets/images/welcome_logo.png'),
    bgWelcome: require('./../assets/images/bg_welcome.png'),
}

 export const backIcon = Platform.OS == 'android' ? 'arrow-left' : 'chevron-left';

 export const Errors = {
    emmailValid: "Please enter the vaild email address.",
    passwordValid: "Password must be greater than 8 characters."
 }