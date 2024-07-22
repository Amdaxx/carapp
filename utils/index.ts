import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {


    const { manufacturer, year, model, limit, fuel } = filters;

 const headers = {
    'x-rapidapi-key': '4683d37fa3msh40650b94c291a6dp1aaa5ejsn1e28e9fca779',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
}   
const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&fuel_type=${fuel}&year=${year}&model=${model}&limit=${limit}`,
    {
      headers: headers,
    }
  );
const result = await response.json();
return result;

}

export const calculateRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}


export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`
  return newPathName
}