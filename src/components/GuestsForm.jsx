'use client'
import { useRouter } from 'next/navigation';
import { updateGuestsForm } from "@/app/actions"
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { Alert, Button } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export function GuestForm({ rows }) {
  const router = useRouter();

  const [localState, setLocalState] = useState(rows);
  const [wiggle, setWiggle] = useState(false);
  const [isErrorSubmit, setIsErrorSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    watch
  } = useForm()

  const handleChange = (id) => {
    const updatedRows = localState.map((row) => {
      if (row.id === id) {
        return { ...row, confirmed_assistance: !row.confirmed_assistance };
      }
      return row;
    });

    setLocalState(updatedRows)

    setTimeout(() => {
      setWiggle(true);
      // setTimeout(() => setWiggle(false), 3000);
    }, 2000);
  }

  /*useEffect(() => {
    if (JSON.stringify(rows) !== JSON.stringify(localState)) {
      setIsSubmitDisabled(false);
    }

    if (JSON.stringify(rows) === JSON.stringify(localState)) {
      setIsSubmitDisabled(true);
    }
  }, [localState])*/

  const onSubmit = async (data) => {
    try {
      await updateGuestsForm(data);
      setWiggle(false)
      // router.refresh()
      router.push('?redirect=confirmed', { scroll: false });
    } catch (error) {
      console.log('Error submit', error)
      setIsErrorSubmit(false)
    }
  }

  return (
    <>
      {isErrorSubmit && <Alert
        variant="light"
        color="red"
        radius="md"
        title="No hemos podido actualizar tus datos"
        icon={<IconAlertCircle />}
        styles={{
          title: { justifyContent: 'center' },
        }}
      >
        Comprueba tu conexión a internet y vuelve a intentarlo
      </Alert>
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        {rows
          .sort((a, b) => a.id - b.id)
          .map((row) => {
            const isChecked = watch(`${row.id}`, row.confirmed_assistance);

            return (
              <label
                key={row.id}
                onClick={() => handleChange(row.id)}
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
                {(row.confirmed_assistance !== null || isChecked) &&
                  <small
                    className={
                      (!isChecked)
                        ? 'no-assistant'
                        : 'assistant'
                    }
                  >
                    {
                      !isChecked
                        ? 'No asistiré'
                        : isChecked && !row.confirmed_assistance
                          ? '¡Asistiré!'
                          : row.confirmed_assistance
                            ? '¡Confirmado!'
                            : ''
                    }
                  </small>
                }
              </label>
            )
          })}
        <Button
          variant="default"
          color="#e1a9bf"
          radius="xl"
          size="md"
          type='submit'
          classNames={{
            root: wiggle ? 'wiggle' : ''
          }}        >
          Confirmar
        </Button>
      </form>
    </>
  )
}