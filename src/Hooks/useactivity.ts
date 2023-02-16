import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://www.boredapi.com/api/activity`);
  const json = await result.json();
  return json;
}

export function useactivity() {
  return useQuery(["activity"], fetchData);
}
