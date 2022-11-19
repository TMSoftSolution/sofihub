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
    loginSuccessRibbon: require('./../assets/images/login_success_ribbon.png'),
}

 export const backIcon = Platform.OS == 'android' ? 'arrow-left' : 'chevron-left';

 export const Errors = {
    email: "Please enter the vaild email address.",
    password: "Password must be greater than 8 characters.",
    firstName: "Please enter the first name.",
    lastName: "Please enter the last name.",
    phone: "Please enter the phone number.",
    passwordMath: "Password does not match.",
    termsAgree: "Please agree terms of services and privacy policy."
 }