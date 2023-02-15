import { useQuery } from "react-query";

async function fetchModel(codigo:number) {
  const result = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigo}/modelos`);
  const json = await result.json();
  return json;
}

export function useModel(codigo: number) {
  return useQuery(["Model"], () =>fetchModel(codigo), {
    onError: (error) => console.log("error", error),
    onSuccess: (data) => console.log("data", data)
  });
}

