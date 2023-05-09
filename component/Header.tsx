import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Avatar,
  theme,
} from "@chakra-ui/react";
import { FiHome, FiChevronDown, FiBell } from "react-icons/fi";
import { FaSearchLocation } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const locationName = "화성";
  const username = "Yea Chan";
  const [showNotification, setShowNotification] = useState(false);
  const backgroundColor = colorMode === "light" ? "white" : "gray.800";

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const HeaderStyles = styled(Flex)``;
  const LocationButton = styled(Button)``;
  const SearchBox = styled(Box)``;
  const Search = styled(Input)``;
  const SearchIcon = styled(Box)``;
  const Darkmode = styled(Button)``;
  const BellIcon = styled(Box)``;
  const FlexCenter = styled(Flex)``;
  const HomeLink = styled(Link)``;
  const HomeIcon = styled(Box)``;
  const LocationIcon = styled(Box)``;
  const Searchcenter = styled(Box)``;
  const Notification = styled(Box)``;
  const Username = styled(Text)``;
  const NewPostText = styled(Text)``;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;
  const isPC = windowWidth > 768;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <HeaderStyles
      alignitems="center"
      backgroundColor={backgroundColor}
      display={{ base: "flex", md: "flex" }}
      justify-content="space-between"
      left="0"
      right="0"
      top="0"
      margin={{ base: "0 auto", md: "none" }}
      maxWidth={{ base: "none", md: "1150px" }}
      padding={{ base: "4px 6px", md: "1rem" }}
      position="fixed"
      width="100%"
      zIndex="100"
    >
      {isMobile && (
        <>
          <LocationButton
            variant="ghost"
            backgroundColor={theme.colors.teal[500]}
            color="white"
            borderRadius="full"
            paddingLeft={3}
            paddingRight={3}
            alignItems="center"
          >
            {locationName}
            <Box as={FiChevronDown} ml="2" />
          </LocationButton>
          <Darkmode
            variant="ghost"
            onClick={toggleColorMode}
            backgroundColor="transparent"
            color={colorMode === "light" ? "gray.900" : "white"}
            borderColor={theme.colors.gray[700]}
            borderRadius="full"
            padding="0.5rem 1rem"
            fontSize="1.5rem"
            marginLeft="auto"
            marginRight="auto"
          >
            {colorMode === "light" ? <FiMoon /> : <FiSun />}
          </Darkmode>
          <BellIcon
            as={FiBell}
            cursor="pointer"
            fontSize={40}
            borderColor={theme.colors.gray[300]}
            borderRadius={theme.radii.md}
            padding="2"
            display="flex"
            alignItems="center"
            backgroundColor={colorMode === "light" ? "white" : "gray.800"}
            color={colorMode === "light" ? "gray.900" : "white"}
            marginRight={0}
            onClick={handleNotificationClick}
          />
          {showNotification && (
            <Notification
              position="absolute"
              top="55px"
              right={0}
              left={0}
              borderRadius="md"
              boxShadow="sm"
              zIndex="100"
              padding="2"
              display="flex"
              align-items="center"
              backgroundColor="gray.300"
            >
              <Avatar name={username} size="sm" mr="2" />
              <Username fontWeight="bold">{username}</Username>
              <NewPostText>님이 새 글을 작성하셨습니다.</NewPostText>
            </Notification>
          )}
        </>
      )}

      {isPC && (
        <>
          <FlexCenter alignItems="center">
            <HomeLink href={"/"}>
              <HomeIcon
                as={FiHome}
                cursor="pointer"
                color="#38b2ac"
                size={40}
              />
            </HomeLink>
            <LocationButton
              backgroundColor="#009688"
              color="white"
              borderRadius="full"
              padding-left="3"
              align-items="center"
              marginLeft="10px"
              display="flex"
            >
              {locationName}
              <LocationIcon as={FiChevronDown} marginLeft="5px" />
            </LocationButton>
          </FlexCenter>
          <Searchcenter flex={1} textAlign="center">
            <SearchBox
              position="relative"
              display="inline-block"
              maxWidth="500px"
              width="100%"
            >
              <Search
                type="text"
                placeholder="화성 근처에서 검색"
                borderRadius="full"
                padding="1.5rem 3rem"
                fontSize="lg"
                backgroundColor="#e5e5e5"
                transition="width 0.3s ease-in-out"
                _placeholder={{ color: "gray.500" }}
              />

              <SearchIcon
                as={FaSearchLocation}
                width="19px"
                height="22px"
                color="gray.500"
                position="absolute"
                top="50%"
                left="1rem"
                transform="translateY(-50%)"
              />
            </SearchBox>
          </Searchcenter>
          <FlexCenter>
            <Darkmode
              onClick={toggleColorMode}
              backgroundColor={colorMode === "light" ? "white" : "gray.800"}
              border-radius="50px"
              font-size="20px"
              marginRight="10px"
            >
              {colorMode === "light" ? <FiMoon /> : <FiSun />}
            </Darkmode>
            <BellIcon
              as={FiBell}
              onClick={handleNotificationClick}
              size={40}
              cursor="pointer"
              marginLeft="4"
              padding="2"
              display="flex"
              alignItems="center"
              justifyContent="center"
            />
            {showNotification && (
              <Notification
                position="absolute"
                top="70px"
                right={0}
                borderRadius="md"
                box-shadow="sm"
                zIndex="100"
                padding="2"
                display="flex"
                align-items="center"
                backgroundColor="gray.500"
              >
                <Avatar name={username} size="sm" mr="2" />
                <Username fontWeight="bold">{username}</Username>
                <NewPostText>님이 새 글을 작성하셨습니다.</NewPostText>
              </Notification>
            )}

            <Avatar
              name={username}
              size="md"
              cursor="pointer"
              ml={{ base: "4", md: "6" }}
            />
          </FlexCenter>
        </>
      )}
    </HeaderStyles>
  );
};
export default Header;
