import { Grid, Flex, Text, Icon, Box, useColorMode } from "@chakra-ui/react";
import { FiHome, FiMapPin, FiMessageSquare, FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const ASidebar = () => {
  const [active, setActive] = useState("홈");

  const handleItemClick = (name) => {
    setActive(name);
  };
  const { colorMode, toggleColorMode } = useColorMode();

  const TopGrid = styled(Grid)``;
  const InsideFlex = styled(Flex)``;
  const HomeButton = styled(Box)``;
  const NeighButton = styled(Box)``;
  const ChatButton = styled(Box)``;
  const WritingButton = styled(Box)``;
  const HomeIcon = styled(Icon)``;
  const HomeText = styled(Text)``;
  const LocationIcon = styled(Icon)``;
  const LocationText = styled(Text)``;
  const ChatIcon = styled(Icon)``;
  const ChatText = styled(Text)``;
  const WritingIcon = styled(Icon)``;
  const WritingText = styled(Text)``;

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <Box>
      {isMobile ? (
        <Box />
      ) : (
        <TopGrid
          as="aside"
          templateColumns="250px"
          position="fixed"
          height="224px"
          marginTop="87px"
          borderRadius="10px"
          backgroundColor={colorMode === "light" ? "white" : "gray.800"}
          display="flex"
          justifyItems="center"
          justifyContent="center"
          padding="4px"
        >
          <InsideFlex flexDirection="column" padding="4px">
            <HomeButton
              as="button"
              onClick={() => handleItemClick("홈")}
              display="flex"
              alignItems="center"
              marginBottom="24px"
            >
              <HomeIcon
                as={FiHome}
                color={active === "홈" ? "#38B2AC" : "gray.600"}
                width="32px"
                height="32px"
                marginRight="12px"
                _hover={{
                  color: "#38b2ac",
                }}
              />
              <HomeText
                color={active === "홈" ? "#38B2AC" : "gray.600"}
                fontWeight="bold"
                fontSize="18px"
              >
                홈
              </HomeText>
            </HomeButton>
            <NeighButton
              as="button"
              onClick={() => handleItemClick("내 근처")}
              display="flex"
              alignItems="center"
              marginBottom="24px"
            >
              <LocationIcon
                as={FiMapPin}
                color={active === "내 근처" ? "#38B2AC" : "gray.600"}
                width="32px"
                height="32px"
                marginRight="12px"
                _hover={{
                  color: "#38b2ac",
                }}
              />
              <LocationText
                color={active === "내 근처" ? "#38B2AC" : "gray.600"}
                fontWeight="bold"
                fontSize="18px"
              >
                내 근처
              </LocationText>
            </NeighButton>
            <ChatButton
              as="button"
              onClick={() => handleItemClick("채팅")}
              display="flex"
              alignItems="center"
              marginBottom="24px"
            >
              <ChatIcon
                as={FiMessageSquare}
                color={active === "채팅" ? "#38B2AC" : "gray.600"}
                width="32px"
                height="32px"
                marginRight="12px"
                _hover={{
                  color: "#38b2ac",
                }}
              />
              <ChatText
                color={active === "채팅" ? "#38B2AC" : "gray.600"}
                fontWeight="bold"
                fontSize="18px"
              >
                채팅
              </ChatText>
            </ChatButton>
            <WritingButton
              as="button"
              alignItems="center"
              justifyContent="center"
              height="32px"
              width="216px"
              marginBottom="2px"
              backgroundColor="#009688"
              color="white"
              borderRadius="20px"
              display="flex"
            >
              <WritingIcon as={FiPlus} />
              <WritingText
                fontWeight="bold"
                textAlign="center"
                marginLeft="8px"
              >
                글쓰기
              </WritingText>
            </WritingButton>
          </InsideFlex>
        </TopGrid>
      )}
    </Box>
  );
};

export default ASidebar;
