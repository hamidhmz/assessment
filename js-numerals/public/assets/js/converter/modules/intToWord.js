/*
 
   _       _                         _                                _ 
  (_)_ __ | |_ ___  __ _  ___ _ __  | |_ ___   __      _____  _ __ __| |
  | | '_ \| __/ _ \/ _` |/ _ \ '__| | __/ _ \  \ \ /\ / / _ \| '__/ _` |
  | | | | | ||  __/ (_| |  __/ |    | || (_) |  \ V  V / (_) | | | (_| |
  |_|_| |_|\__\___|\__, |\___|_|     \__\___/    \_/\_/ \___/|_|  \__,_|
                   |___/                                                
 
*/

export function intToWord(
    numberToWords,
    getD1,
    getD2,
    getD3,
    units,
    strNumber
) {
    return strNumber.reduce((result, value, i) => {
        const tempResult = numberToWords(
            getD1,
            getD2,
            getD3,
            units,
            i,
            ...value
        );
        return tempResult + (tempResult ? units[i][3] : '') + result;
    }, '');
}
