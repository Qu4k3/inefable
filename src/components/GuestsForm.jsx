'use client'
import { useRouter } from 'next/navigation';
import { updateGuestsForm } from "@/app/actions"
import { useForm } from "react-hook-form"
import { useState } from 'react';

export function GuestForm({ rows }) {
  const router = useRouter();

  const [edited, setEdited] = useState([])

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()

  const handleChange = (id) => () => {
    if (!edited.includes(id)) {
      setEdited([...edited, id]);
    }

    console.log('edited', edited)
  }

  const onSubmit = async (data) => {
    updateGuestsForm(data)
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {rows
        .sort((a, b) => a.id - b.id)
        .map((row) => (
          <label
            key={row.id}
            onClick={handleChange(row.id)}
            className={edited.includes(row.id) ? 'edited' : ''}
          >
            <div>
              <input
                type="checkbox"
                name="guest"
                {...register(`${row.id}`)}
                defaultChecked={row.confirmed_assistance}
              />
              <span>{row.first_name} {row.last_name}</span>
            </div>
            {row.confirmed_assistance !== null &&
              <small
                className={!row.confirmed_assistance ? 'no-assistant' : undefined}
              >{row.confirmed_assistance ? '¡Asistiré!' : 'No asistiré'}</small>
            }
          </label>
        ))}
      {/*errors.exampleRequired && <span>This field is required</span>*/}

      <button disabled={edited.length === 0}>Confirmar</button>
    </form>
  )
}