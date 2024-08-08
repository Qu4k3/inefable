'use client'
import { useRouter } from 'next/navigation';
import { checkFamilyCodeExistance } from "@/app/actions"
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { Button, Flex, rem, TextInput } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

export function CheckForm() {
  const router = useRouter();

  const [isErrorSubmit, setIsErrorSubmit] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async ({ searchFamily }) => {
    const family_code = searchFamily.toLowerCase();
    setIsSubmit(true)
    try {
      const exists = await checkFamilyCodeExistance(family_code);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        size="md"
        radius="xl"
        ta="center"
        placeholder="Ingresa tu código"
        error={errors.searchFamily ? errors.searchFamily.message : isErrorSubmit ? isErrorSubmit : ''}
        withErrorStyles={isErrorSubmit ? true : false}
        leftSectionPointerEvents="none"
        name="familyCode"
        autoComplete="off"
        leftSectionWidth="14px"
        leftSectionProps
        leftSection={
          errors.searchFamily || isErrorSubmit ?
            <IconExclamationCircle
              style={{ width: rem(20), height: rem(20), position: "absolute", left: "10px" }}
              color="var(--mantine-color-error)"
            />
            : null
        }
        styles={{
          root: { maxWidth: "350px", margin: "0 auto" },
          input: { textAlign: "center" },
          error: { textAlign: "center" }
        }}
        {...register("searchFamily", {
          validate: (value) => {
            if (value.length === 0) return "No has introducido ningún código";
            if (value.length !== 3) return "El código tiene que ser de 3 carácteres";
            return true;
          },
          onChange: () => {
            if (isErrorSubmit) setIsErrorSubmit('')
          }
        })}
      />

      <Flex
        justify="center"
        mt="20px"
      >
        <Button
          variant="filled"
          color="#E8BCCD"
          radius="xl"
          size="md"
          type='submit'
          disabled={isSubmit}
        /*loading={isSubmit}
        loaderProps={{ type: 'dots' }}*/
        >
          {isSubmit ? 'Comprobando...' : 'Comprobar'}
        </Button>
      </Flex>
    </form>
  )
}

export default CheckForm;