/*
 
       _        _               _                                     
   ___| |_ _ __(_)_ __   __ _  | |_ ___     __ _ _ __ _ __ __ _ _   _ 
  / __| __| '__| | '_ \ / _` | | __/ _ \   / _` | '__| '__/ _` | | | |
  \__ \ |_| |  | | | | | (_| | | || (_) | | (_| | |  | | | (_| | |_| |
  |___/\__|_|  |_|_| |_|\__, |  \__\___/   \__,_|_|  |_|  \__,_|\__, |
                        |___/                                   |___/ 
 
*/

/* -------------------------------------------------------------------------- */
/*                      string to array each field 3 char                     */
/* -------------------------------------------------------------------------- */

export function stringNumberToArray(strNumber) {
    // TODO change name of the function
    return [...strNumber]
        .reverse()
        .join('')
        .match(/.{1,3}/g);
}
