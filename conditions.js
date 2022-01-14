const actualTemp = 50;
const desiredTemp = 80;

if (actualTemp<desiredTemp) {
    console.log("run heat");
} else if (actualTemp>desiredTemp){
    console.log("run A/C")
}else if (actualTemp===desiredTemp){
            console.log("Standby")
        }


        const tempCelsius = 0;
        const targetUnit = "C";

switch (targetUnit) {
    case "F" :
        console.log(tempCelsius * 1.8) + 32);
        break;
        case "K" :
            console.log(tempCelsius +273.15);
            case "C":
                console.log(tempCelsius);
                break;
}