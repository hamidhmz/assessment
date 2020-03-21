/*
 
   ____       _            _                            _   _                                   _               
  |  _ \  ___| |_ ___  ___| |_   _ __   ___  __ _  __ _| |_(_)_   _____   _ __  _   _ _ __ ___ | |__   ___ _ __ 
  | | | |/ _ \ __/ _ \/ __| __| | '_ \ / _ \/ _` |/ _` | __| \ \ / / _ \ | '_ \| | | | '_ ` _ \| '_ \ / _ \ '__|
  | |_| |  __/ ||  __/ (__| |_  | | | |  __/ (_| | (_| | |_| |\ V /  __/ | | | | |_| | | | | | | |_) |  __/ |   
  |____/ \___|\__\___|\___|\__| |_| |_|\___|\__, |\__,_|\__|_| \_/ \___| |_| |_|\__,_|_| |_| |_|_.__/ \___|_|   
                                            |___/                                                               
 
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
