'use client'
import { useRouter } from 'next/navigation';
import { updateGuestsForm } from "@/app/actions"
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { Alert, Button, Container, rem, TextInput, Title } from '@mantine/core';
import { IconAlertCircle, IconExclamationCircle } from '@tabler/icons-react';

export function CheckForm({ rows }) {
  const router = useRouter();

  const [localState, setLocalState] = useState(rows);
  const [wiggle, setWiggle] = useState(false);
  const [isErrorSubmit, setIsErrorSubmit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

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
      setIsSubmit(true)
      setWiggle(false)
      await updateGuestsForm(data);
      // router.refresh()
      router.push('?redirect=confirmed', { scroll: false });
    } catch (error) {
      console.log('Error submit', error)
      setIsErrorSubmit(true)
      setIsSubmit(false)
    }
  }

  return (
    <Container fluid>
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        Confirma tu asistencia
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          mt="md"
          placeholder="Without error styles on input"
          label="Without error styles on input"
          error="Something went wrong"
          withErrorStyles={false}
          rightSectionPointerEvents="none"
          name="familyCode"
          rightSection={
            <IconExclamationCircle
              style={{ width: rem(20), height: rem(20) }}
              color="var(--mantine-color-error)"
            />
          }
          {...register("searchFamily")}
        />

        <Button
          variant="default"
          color="#e1a9bf"
          radius="xl"
          size="md"
          type='submit'
          classNames={{
            root: wiggle ? 'wiggle' : ''
          }}
          disabled={isSubmit}
        >
          {isSubmit ? 'Confirmando...' : 'Confirmar'}
        </Button>
      </form>
    </Container>
  )
}

export default CheckForm;