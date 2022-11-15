import { Dimensions } from "react-native";

export const window = Dimensions.get('window');

export enum FormState {
    Init,
    Input,
    Valid,
    InValid
}

export const EmailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;