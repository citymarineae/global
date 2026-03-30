import Index from "components/blocks/our-team/Index";
export default async function Team() {
  const response = await fetch(`${process.env.BASE_URL}/team`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <Index data={data} />
  );
}
