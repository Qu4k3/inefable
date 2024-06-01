import { sql } from "@vercel/postgres";

export default async function Guest({ params }) {
  console.log('-----------params', params)
  const { rows } = await sql`SELECT * FROM GUEST WHERE family_code=${params.family_code}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.family_code} - {row.first_name} - {row.last_name}
        </div>
      ))}
    </div>
  );
}