import { unstable_noStore as noStore } from 'next/cache';
import { sql } from "@vercel/postgres";

export const getGuestsByFamily = async (family_code) => {
  noStore();
  try {
    const result = await sql`
      SELECT * FROM GUEST
      WHERE family_code=${family_code}
    `;
    return result;
  } catch (error) {
    console.error('Error fetching guests by family code:', error);
    throw error;
  }
};

export const updateGuestById = async ({id, confirmation}) => {
  try {
    const result = await sql`UPDATE guest SET confirmed_assistance = ${confirmation} WHERE id = ${id};`;
    return result;
  } catch (error) {
    console.error('Error updating guest by ID:', error);
    throw error;
  }
};

export const updateGuestsById = async (guests) => {
  const cases = guests.map(({ id, confirmation }) => sql`WHEN id = ${id} THEN ${confirmation}`);
  const ids = guests.map(({ id }) => sql`${id}`);

  try {
    const result = await sql`
      UPDATE guest
      SET confirmed_assistance = CASE
        ${cases}
      END
      WHERE id IN (${ids});
    `;
    return result;
  } catch (error) {
    console.error('Error updating guest by ID:', error);
    throw error;
  }
};