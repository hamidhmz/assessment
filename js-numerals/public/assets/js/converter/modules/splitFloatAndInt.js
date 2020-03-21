export function splitFloatAndInt(strNumber) {
    return {
        intNumber: strNumber.split('.')[0],
        floatNumber: strNumber.split('.')[1]
    };
}
