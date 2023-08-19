/*
Yes, there is a difference between default exports and named exports in JavaScript modules.

> Default Export:
1.You can have only one default export per module.
2.When importing a default export, you can give it any name you want during the import.
3.You don't need to use curly braces when importing.
4.You can directly import the default export without specifying its exact name.

Example:
Module file (createBoard.js)
const createBoard = ... ;
export default createBoard;

Importing in another file
import myCustomName from './createBoard.js';

> Named Export:
1.You can have multiple named exports in a single module.
2.When importing named exports, you need to use the exact name during the import.
3.You need to use curly braces {} when importing named exports.
4.You import only the specific named exports you need.

Example:
Module file (userEvent.js)
const userEvent = ... ;
export { userEvent };

Importing in another file
import { userEvent } from './userEvent.js';

Which one to use depends on the organization and structure of your code. 
If you have only one primary export from a module, you might use a default export.
If you have multiple related functions or values to export, you might use named exports.
Both approaches are valid and useful in different scenarios.*/

/////////////////////////////////////////////////////////////////////////////////////////

import boardLayout from "./gameboard.js";
import userEvent from "./gameflow.js";

boardLayout.createBoard();
userEvent.gameLogic();