import { Container, Flex, Text, Title } from "@mantine/core";
import CheckForm from "../forms/CheckForm";

const ConfirmAssistance = () => {
    return (
        <Container
            id="confirmacion"
            py="100px"
            fluid
        >
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

                <Text ta="center">Si los QRs no son lo tuyo, o tu dispositivo no permite escanear QRs, también puedes ingresar el código presente en la tarjeta de la invitación.</Text>
                <CheckForm />
            </Flex>
        </Container>
    );
}

export default ConfirmAssistance;