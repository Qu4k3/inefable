'use client'
import { useForm } from "react-hook-form"

export function GuestForm({ rows }) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {rows.map((row) => (
        <div key={row.id}>
          {console.log(row.confirmed_assistance)}
          <span>{row.first_name} {row.last_name}</span>
          {row.confirmed_assistance !== null &&
            <small
              className={!row.confirmed_assistance && 'no-assistant'}
            >{row.confirmed_assistance ? '¡Asistiré!' : 'No asistiré'}</small>
          }
        </div>
      ))}
      {/*errors.exampleRequired && <span>This field is required</span>*/}

      <button>Confirmar</button>
    </form>
  )
}