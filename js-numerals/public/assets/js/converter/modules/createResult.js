/*
 
                       _                             _ _   
    ___ _ __ ___  __ _| |_ ___   _ __ ___  ___ _   _| | |_ 
   / __| '__/ _ \/ _` | __/ _ \ | '__/ _ \/ __| | | | | __|
  | (__| | |  __/ (_| | ||  __/ | | |  __/\__ \ |_| | | |_ 
   \___|_|  \___|\__,_|\__\___| |_|  \___||___/\__,_|_|\__|
                                                           
 
*/

export function createFinalResult(intWord, floatWord) {
    return ((intWord ? intWord : 'zero ') + (floatWord ? floatWord : '')).trim();
}
