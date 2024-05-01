
function carDetails(manufacturer : string, modelName : string, ...addInfo)
{
    const car = {manufacturer,modelName,...Object.fromEntries(addInfo)};
    return car;
};

const myCarDetails=carDetails("toyota", "corolla", ['color', 'blue'], ['year', 2018]);
console.log(myCarDetails);
