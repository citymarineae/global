
// GLOBAL CUSTOM HOOKS
import Index from '../components/blocks/home/Index'

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/home-about`, { next: { revalidate: 60 } });
  const data = await response.json();

  const marineResponse = await fetch(`${process.env.BASE_URL}/sectors/marine/section`, { next: { revalidate: 60 } });
  const marineData = await marineResponse.json();
  return (
    <Index data={data} marineData={marineData} />
  );
}
