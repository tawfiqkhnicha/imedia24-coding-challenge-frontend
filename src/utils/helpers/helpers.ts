export const findClosestValue = (arr: number[], target: number) => {
    
    let closestValue = arr[0];
    let minDifference = Math.abs(target - arr[0]);

    for (let i = 1; i < arr.length; i++) {
        const difference = Math.abs(target - arr[i]);
        if (difference < minDifference) {
            minDifference = difference;
            closestValue = arr[i];
        }
    }

    return closestValue;
}