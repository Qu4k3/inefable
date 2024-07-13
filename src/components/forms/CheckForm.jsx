'use client'
import { useRouter } from 'next/navigation';
import { checkFamilyCodeExistance, updateGuestsForm } from "@/app/actions"
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { Alert, Button, Container, Flex, rem, Text, TextInput, Title } from '@mantine/core';
import { IconAlertCircle, IconExclamationCircle } from '@tabler/icons-react';
import { useInputState } from '@mantine/hooks';

export function CheckForm({ rows }) {
  const router = useRouter();

  const [isErrorSubmit, setIsErrorSubmit] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  /*useEffect(() => {
    if (JSON.stringify(rows) !== JSON.stringify(localState)) {
      setIsSubmitDisabled(false);
    }

    if (JSON.stringify(rows) === JSON.stringify(localState)) {
      setIsSubmitDisabled(true);
    }
  }, [localState])*/

  const onSubmit = async ({ searchFamily }) => {
    const family_code = searchFamily.toLowerCase();
    setIsSubmit(true)
    try {
      const exists = await checkFamilyCodeExistance(family_code);
      console.log('-----------result - checkFamilyCodeExistance', exists)

      if (!exists) {
        setIsSubmit(false)
        setIsErrorSubmit("El código proporcionado no existe")
      } else {
        router.push(`/i/${family_code}`);
      }

    } catch (error) {
      console.log('Error submit', error)
      setIsErrorSubmit("Algo no funciona correctamente en el sitio web, vuelve más tarde")
      setIsSubmit(false)
    }
  }

  return (
    <Container fluid>
      <Flex
        direction="column"
        gap="40px"
      >
        <Title
          order={2}
          fw={400}
          ta="center"
        >
          Confirma tu asistencia
        </Title>

        <Text ta="center">Si los QRs no son lo tuyo, también puedes ingresar el código presente en la tarjetilla de la invitación</Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
          size="md"
            radius="xl"
            placeholder="Ingresa tu código"
            error={errors.searchFamily ? errors.searchFamily.message : isErrorSubmit ? isErrorSubmit : ''}
            withErrorStyles={errors.searchFamily || isErrorSubmit ? true : false}
            rightSectionPointerEvents="none"
            name="familyCode"
            autocomplete="off"
            onChange={() => setIsErrorSubmit('')}
            rightSection={
              errors.searchFamily || isErrorSubmit ?
                <IconExclamationCircle
                  style={{ width: rem(20), height: rem(20) }}
                  color="var(--mantine-color-error)"
                />
                : null
            }
            {...register("searchFamily", {
              validate: (value) => value.length === 3 || "El código tiene que ser de 3 carácteres"
            })}
          />

          <Flex
            justify="center"
            mt="20px"
          >
            <Button
              variant="default"
              color="#e1a9bf"
              radius="xl"
              size="md"
              type='submit'
              disabled={isSubmit}
            >
              {isSubmit ? 'Conprobando...' : 'Comprobar'}
            </Button>
          </Flex>
        </form>
      </Flex>
    </Container>
  )
}

export default CheckForm;