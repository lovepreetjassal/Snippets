//ReadFile
import { readFile } from './utility.js';
const data = await readFile('data.txt');
console.log(data);