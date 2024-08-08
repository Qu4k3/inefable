'use client'
import { Button, Container, Flex, Text } from "@mantine/core";
import Countdown from "../elements/Countdown";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header = () => {
  return (
    <Container
      id="top"
      py="100px"
      pt="80px"
      fluid
      className="header"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="30px"
      >
        <Countdown className="countdown" finalDate="2024-11-02T17:00:00" />

        <div className="bottom">
          <Text
            size="20px"
            pl="4px"
          >I <small style={{ fontSize: "16px"}}>&</small> P</Text>
          <small>02.11.24</small>
        </div>
        <DotLottieReact
          className="animated-svg scroll-down"
          src="/lottie/scroll-finger.lottie"
          loop
          autoplay
          autoResizeCanvas={true}
        />
      </Flex>
    </Container>
  );
}

export default Header;