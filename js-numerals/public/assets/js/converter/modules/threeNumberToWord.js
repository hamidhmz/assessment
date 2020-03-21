/*
 
   _____                         _                 _                                _     
  |___ /   _ __  _   _ _ __ ___ | |__   ___ _ __  | |_ ___   __      _____  _ __ __| |___ 
    |_ \  | '_ \| | | | '_ ` _ \| '_ \ / _ \ '__| | __/ _ \  \ \ /\ / / _ \| '__/ _` / __|
   ___) | | | | | |_| | | | | | | |_) |  __/ |    | || (_) |  \ V  V / (_) | | | (_| \__ \
  |____/  |_| |_|\__,_|_| |_| |_|_.__/ \___|_|     \__\___/    \_/\_/ \___/|_|  \__,_|___/
                                                                                          
 
*/

/* -------------------------------------------------------------------------- */
/*                              3 number to words                             */
/* -------------------------------------------------------------------------- */

import { getD1, getD2, getD3 } from './index.js';
export function numberToWords(units, i, d1, d2, d3) {
    // TODO change the name of the function
    const d3Result = +d3 ? getD3(d3, units) : '';
    const d2Result = +d2 ? getD2(d2, units) : '';
    const d1Result = getD1(d1, +!Boolean(d2Result || +d2 - 1), units);

    return (
        d3Result +
        (i == 0 && d3Result && (d2Result || d1Result) ? 'and ' : '') +
        d2Result +
        d1Result
    );
}
