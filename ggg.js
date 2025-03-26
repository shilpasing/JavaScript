// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
    let color;
    switch(color){
      case "red":
       trafficLightAction= "stop";
       break;
       case "yellow":
       trafficLightAction= "slow down";
       break;
       case "Green":
       trafficLightAction= "Go";
       break;
       case "Blue":
       trafficLightAction= "Invalid color";
       break;
       
       
    }
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    return trafficLightAction;
  }

  console.log (color);
