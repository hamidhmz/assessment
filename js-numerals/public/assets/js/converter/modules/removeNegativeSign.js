/*
 
                                                              _   _                 _               _  __             _     _       
   _ __ ___ _ __ ___   _____   _____   _ __   ___  __ _  __ _| |_(_)_   _____   ___(_) __ _ _ __   (_)/ _|   _____  _(_)___| |_ ___ 
  | '__/ _ \ '_ ` _ \ / _ \ \ / / _ \ | '_ \ / _ \/ _` |/ _` | __| \ \ / / _ \ / __| |/ _` | '_ \  | | |_   / _ \ \/ / / __| __/ __|
  | | |  __/ | | | | | (_) \ V /  __/ | | | |  __/ (_| | (_| | |_| |\ V /  __/ \__ \ | (_| | | | | | |  _| |  __/>  <| \__ \ |_\__ \
  |_|  \___|_| |_| |_|\___/ \_/ \___| |_| |_|\___|\__, |\__,_|\__|_| \_/ \___| |___/_|\__, |_| |_| |_|_|    \___/_/\_\_|___/\__|___/
                                                  |___/                               |___/                                         
 
*/
export function removeNegativeSign(strInt){
    if (strInt.startsWith('-')) {
        return strInt.replace('-', '');
    }
    return strInt;
}