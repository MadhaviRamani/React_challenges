import Card from "../Card";
import useSWR from "swr";
const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("Failed to fetch character data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function Character({id}) {
  const url = `https://swapi.py4e.com/api/people/${id}`
  const {data, error, isLoading} = useSWR(url,fetcher);
  
 if (error) {
    return <p>Error: {error.message} (Status: {error.status})</p>;
  }

  if (isLoading || !data) {
    return <p>Loading character...</p>;
  }
  return (
    <Card
      id={id}
      name={data.name}
      height={data.height}
      eyeColor={data.eye_color}
      birthYear={data.birth_year}
    />
  );
}
