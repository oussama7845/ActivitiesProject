import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`);
  const json = await result.json();
  return json;
}

export function useVoiture() {
  return useQuery(["Voiture"], fetchData);
}
