'use server'
import { checkFamilyCode, updateGuestById } from "@/helpers/queries"

export async function checkFamilyCodeExistance(familyCode) {
  return await checkFamilyCode(familyCode)
}
 
export async function updateGuestsForm(data) {
  const guests = Object.keys(data).map(id => ({
    id: parseInt(id, 10),
    confirmation: data[id]
  }));

  guests.forEach(async guest => {
    await updateGuestById(guest)
  });
}