export const Activity38 = () => {
  function describe_city(city: string, country: string = "Pakistan") {
    console.log(city + " is in " + country + ".");
  }

  describe_city("Karachi");
  describe_city("Paris", "France");
  describe_city("Sydney", "Australia");
}