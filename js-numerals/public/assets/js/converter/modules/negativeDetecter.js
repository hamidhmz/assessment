/*
 
                       _  __                                _   _                                   _               
   ___ _ __   ___  ___(_)/ _|_   _   _ __   ___  __ _  __ _| |_(_)_   _____   _ __  _   _ _ __ ___ | |__   ___ _ __ 
  / __| '_ \ / _ \/ __| | |_| | | | | '_ \ / _ \/ _` |/ _` | __| \ \ / / _ \ | '_ \| | | | '_ ` _ \| '_ \ / _ \ '__|
  \__ \ |_) |  __/ (__| |  _| |_| | | | | |  __/ (_| | (_| | |_| |\ V /  __/ | | | | |_| | | | | | | |_) |  __/ |   
  |___/ .__/ \___|\___|_|_|  \__, | |_| |_|\___|\__, |\__,_|\__|_| \_/ \___| |_| |_|\__,_|_| |_| |_|_.__/ \___|_|   
      |_|                    |___/              |___/                                                               
 
*/
export function negativeDetecter(strNumber) {
    if (strNumber.startsWith('-')) {
        strNumber = strNumber.replace('-', '');
        return {
            isNegative: true,
            strNumber: strNumber
        };
    }
    return {
        isNegative: false,
        strNumber: strNumber
    };
}
