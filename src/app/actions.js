'use server'
import { updateGuestById, updateGuestsById } from "@/helpers/queries"
 
export async function updateGuestsForm(data) {
  const guests = Object.keys(data).map(id => ({
    id: parseInt(id, 10),
    confirmation: data[id]
  }));

  //console.log('guests', guests)
  guests.forEach(async guest => {
    await updateGuestById(guest)
    //const result = await updateGuestById(guest)
    //console.log('result', result)
  });
  // const result = await updateGuestsById(guests)
}