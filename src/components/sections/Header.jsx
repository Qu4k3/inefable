'use client'
import { Button, Container, Flex, Text } from "@mantine/core";
import Countdown from "../elements/Countdown";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IconArrowRight } from "@tabler/icons-react";

const Header = ({ hasVisited, handleVisitClick }) => {
  return (
    <Container
      id="top"
      py="100px"
      pt="80px"
      fluid
      className="header"
      styles={{
        root: { overflowY: !hasVisited ? 'scroll' : 'visible' }
      }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="40px"
      >
        <Countdown className="countdown" finalDate="2024-11-02T17:00:00" />

        <div className="bottom">
          <Text
            size="20px"
            pl="4px"
          >I & P</Text>
          <small>02.11.24</small>
        </div>
        {hasVisited ?
          <DotLottieReact
            className="animated-svg scroll-down"
            src="/lottie/scroll-finger.lottie"
            loop
            autoplay
            autoResizeCanvas={true}
          />
          : <Button
            variant="filled"
            color="#E8BCCD"
            radius="xl"
            rightSection={<IconArrowRight size={14} />}
            className="btn-enter-website wiggle"
            onClick={handleVisitClick}
          >
            Entrar
          </Button>
        }
      </Flex>
    </Container>
  );
}

export default Header;