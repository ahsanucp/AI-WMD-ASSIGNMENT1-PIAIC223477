export const Activity45 = () => {
  function store_car_info(manufacturer: string, model: string, ...args: [string, any][]) {
    let carInfo: Record<string, any> = {
        "manufacturer": manufacturer,
        "model": model
    };

    for (let i = 0; i < args.length; i++) {
        const [key, value] = args[i];
        carInfo[key] = value;
    }

    return carInfo;
  }

  let car = store_car_info("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);

  console.log(car);
}