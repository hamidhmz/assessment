/*
 
                         _                 _                                _                   _        
   _ __  _   _ _ __ ___ | |__   ___ _ __  | |_ ___   __      _____  _ __ __| |  _ __ ___   __ _(_)_ __   
  | '_ \| | | | '_ ` _ \| '_ \ / _ \ '__| | __/ _ \  \ \ /\ / / _ \| '__/ _` | | '_ ` _ \ / _` | | '_ \  
  | | | | |_| | | | | | | |_) |  __/ |    | || (_) |  \ V  V / (_) | | | (_| | | | | | | | (_| | | | | | 
  |_| |_|\__,_|_| |_| |_|_.__/ \___|_|     \__\___/    \_/\_/ \___/|_|  \__,_| |_| |_| |_|\__,_|_|_| |_| 
                                                                                                         
 
*/
import {
    validate,
    removeAdditionalChar,
    splitFloatAndInt,
    fixSizeOfNumber,
    stringNumberToArray,
    intToWord,
    floatToWord,
    createFinalResult,
    negativeDetecter,
    floatDetectAndToWord,
    getD1,
    getD2,
    getD3,
    numberToWords
} from './index.js';
import { units } from '../constants/index.js';

/***************************
 * INPUT MUST BE IN STRING *
 ***************************/
export function numberToWordMain(num) {
    if (!validate(num)) return 'not valid input';

    let strNumber = removeAdditionalChar(num);

    let strFloat = splitFloatAndInt(strNumber).floatNumber;

    let strInt = splitFloatAndInt(strNumber).intNumber;

    const negative = negativeDetecter(strInt).isNegative; //return true or false
    strInt = negativeDetecter(strInt).strNumber;
    strInt = fixSizeOfNumber(strInt);

    strInt = stringNumberToArray(strInt);

    const intWord = intToWord(
        numberToWords,
        getD1,
        getD2,
        getD3,
        units,
        strInt
    );

    const floatWord = floatDetectAndToWord(strFloat, floatToWord, getD1, units); //return number or ''

    return createFinalResult(negative, intWord, floatWord);
}
