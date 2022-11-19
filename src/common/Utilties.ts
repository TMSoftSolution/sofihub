import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";

export const window = Dimensions.get('window');

export enum FormState {
    Init,
    Input,
    Valid,
    InValid
}

export const EmailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const NumberPattern: RegExp = /\d/
export const SpecialCharPattern: RegExp = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/

export const showError = (message: string) => {
    Toast.show({
        type: 'error',
        text1: message
    });
}