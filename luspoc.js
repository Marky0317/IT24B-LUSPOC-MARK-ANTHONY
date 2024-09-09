class bogart{ 
    constructor (day,time){ 
        this.day = day; 
        this.time = time; 
    } 
displaybogart()
{ 
    console.log("Saturday: "+ this.day) 
    console.log("time: "+ this.time) 
}
 } 
const bogart1 = new bogart("Basketball","3:00pm")
 bogart1.displaybogart()