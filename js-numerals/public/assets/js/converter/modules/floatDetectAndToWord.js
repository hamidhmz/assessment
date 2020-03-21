/*
 
   _____ _     ___    _  _____   _____ ___   __        _____  ____  ____  
  |  ___| |   / _ \  / \|_   _| |_   _/ _ \  \ \      / / _ \|  _ \|  _ \ 
  | |_  | |  | | | |/ _ \ | |     | || | | |  \ \ /\ / / | | | |_) | | | |
  |  _| | |__| |_| / ___ \| |     | || |_| |   \ V  V /| |_| |  _ <| |_| |
  |_|   |_____\___/_/   \_\_|     |_| \___/     \_/\_/  \___/|_| \_\____/ 
                                                                          
 
*/
/* -------------------------------------------------------------------------- */
/*                 DETECT FLOAT NUMBER AND CHANGE IT TO WORDS                 */
/* -------------------------------------------------------------------------- */

export function floatDetectAndToWord(strFloat, floatToWord, getD1, units) {
    if (strFloat) {
        strFloat = [strFloat];
        const result = floatToWord(strFloat, getD1, units);
        
        return result;
    }
    return '';
}
