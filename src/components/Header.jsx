'use client'
import { Container, Flex, Title } from "@mantine/core";
import Countdown from "./Countdown";

const Header = () => {
  return (
    <Container>
      <Flex direction="column" align="center" gap="40px">
        <Countdown className="countdown" finalDate="2024-11-02T17:00:00" />

        <div className="bottom">
          <p>I & P</p>
          <small>02.11.24</small>
        </div>
      </Flex>
    </Container>
  );
}

export default Header;