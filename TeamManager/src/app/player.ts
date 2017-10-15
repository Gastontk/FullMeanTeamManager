import { Gamestatus } from './gameStatus';


export class Player {
    constructor(
 		public _id: Number,
    	public name: String,
    	public position: String,
    	public status:Array<Gamestatus>,
    ) {}
}