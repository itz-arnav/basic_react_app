import React from "react";

let greeting = "";
let currTime = new Date().toLocaleTimeString();
let curHr = new Date().getHours();
if(curHr >= 0 && curHr < 12){
      greeting = "Morning!";
}
else if(curHr >= 12 && curHr < 18){
      greeting = "Afternoon!";
}
else if(curHr >= 18 && curHr < 21){
      greeting = "Evening!";
}
else{
      greeting = "Night!";
}

function Body(){
      return (
            <>
                  <h2>Good <span id="greet">{greeting}</span></h2>
                  <h2>The time is <span id = "time">{currTime}</span></h2>
            </>
      );
}

export default Body;