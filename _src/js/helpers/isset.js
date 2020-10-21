// function isset(accessor) {

//     try {
//         // Note we're seeing if the returned value of our function is not
//         // undefined
//         // return typeof accessor() !== 'undefined';
//         return (typeof accessor() !== 'undefined' && accessor() !== '' && accessor() !== null);
//     } catch (e) {
//         // And we're able to catch the Error it would normally throw for
//         // referencing a property of undefined
//         return false;
//     }

// }