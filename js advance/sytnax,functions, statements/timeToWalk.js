function solve(steps, footprintLength, speed) {

    let distance = steps * footprintLength;
    let rest = Math.floor(distance / 500);
    let walkingTimeHours = distance / (speed * 1000);
    let walkingTimeMinutes = walkingTimeHours * 60 + rest;

    let hours = Math.floor(walkingTimeMinutes / 60);
    let minutes = Math.floor(walkingTimeMinutes % 60);
    let seconds = Math.round((walkingTimeMinutes % 1) * 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

}
solve(4000, 0.60, 5);