/*
 
                                                 _     _ _ _   _                   _    ____ _                
   _ __ ___ _ __ ___   _____   _____    __ _  __| | __| (_) |_(_) ___  _ __   __ _| |  / ___| |__   __ _ _ __ 
  | '__/ _ \ '_ ` _ \ / _ \ \ / / _ \  / _` |/ _` |/ _` | | __| |/ _ \| '_ \ / _` | | | |   | '_ \ / _` | '__|
  | | |  __/ | | | | | (_) \ V /  __/ | (_| | (_| | (_| | | |_| | (_) | | | | (_| | | | |___| | | | (_| | |   
  |_|  \___|_| |_| |_|\___/ \_/ \___|  \__,_|\__,_|\__,_|_|\__|_|\___/|_| |_|\__,_|_|  \____|_| |_|\__,_|_|   
                                                                                                              
 
*/

export function removeAdditionalChar(num) {
    num = num.replace(/[\, ]/g, '');
    return num;
}
