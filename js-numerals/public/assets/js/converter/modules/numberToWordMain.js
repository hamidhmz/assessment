/*
 
                         _                 _                                _                   _        
   _ __  _   _ _ __ ___ | |__   ___ _ __  | |_ ___   __      _____  _ __ __| |  _ __ ___   __ _(_)_ __   
  | '_ \| | | | '_ ` _ \| '_ \ / _ \ '__| | __/ _ \  \ \ /\ / / _ \| '__/ _` | | '_ ` _ \ / _` | | '_ \  
  | | | | |_| | | | | | | |_) |  __/ |    | || (_) |  \ V  V / (_) | | | (_| | | | | | | | (_| | | | | | 
  |_| |_|\__,_|_| |_| |_|_.__/ \___|_|     \__\___/    \_/\_/ \___/|_|  \__,_| |_| |_| |_|\__,_|_|_| |_| 
                                                                                                         
 
*/
import {
    validate,
    numberToString,
    splitFloatAndInt,
    fixSizeOfNumber,
    stringNumberToArray,
    intToWord,
    floatToWord,
    createFinalResult
} from './index.js';
import { units } from '../constants/index.js';

export function numberToWordMain(num) {
    if (!validate(num)) return 'not a number';

    let strNumber = numberToString(num);

    let strFloat = splitFloatAndInt(strNumber).floatNumber;

    let strInt = splitFloatAndInt(strNumber).intNumber;

    if (strInt.startsWith('-')) {
        strInt = strInt.replace('-', '');
        var negative = true;
    }
    strInt = fixSizeOfNumber(strInt);
    strInt = stringNumberToArray(strInt);
    const intWord = intToWord(negative, units, strInt);

    if (strFloat) {
        strFloat = [strFloat];
        var floatWord = floatToWord(strFloat);
    }
    return createFinalResult(intWord, floatWord);
}
