import { useEffect, useState } from "react";
import { Box, Text, Grid, useColorMode, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavigationBar = () => {
  const [selectedNavItemIndex, setSelectedNavItemIndex] = useState(0);

  const navItems = [
    { link: "/HomePage", label: "일상" },
    { link: "/HomePage", label: "동네소식" },
    { link: "/HomePage", label: "중고거래" },
    { link: "/HomePage", label: "동네맛집" },
    { link: "/HomePage", label: "알바" },
    { link: "/HomePage", label: "같이해요" },
    { link: "/HomePage", label: "운동" },
  ];

  const handleNavItemClicked = (index) => {
    setSelectedNavItemIndex(index);
  };
  const { colorMode, toggleColorMode } = useColorMode();

  const Nav = styled(Box)``;
  const StyledGrid = styled(Box)``;

  return (
    <Nav as="nav" p="4">
      <StyledGrid
        as="ul"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        listStyleType="none"
        position="fixed"
        borderRadius={{ base: 0, md: "10px" }}
        maxWidth={{ base: "none", md: "517px" }}
        w="100%"
        h={{ base: "auto", md: "48px" }}
        top={{ base: "48px", md: "80px" }}
        zIndex="50"
        backgroundColor={colorMode === "light" ? "white" : "gray.800"}
        boxShadow={{ base: 0, md: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        overflowX={{ base: "auto", md: "hidden" }}
        overflowY="hidden"
        whiteSpace="nowrap"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            index={index}
            link={navItem.link}
            label={navItem.label}
            isSelected={selectedNavItemIndex === index}
            onNavItemClicked={handleNavItemClicked}
          />
        ))}
      </StyledGrid>
    </Nav>
  );
};

const NavItem = ({ index, link, label, isSelected, onNavItemClicked }) => {
  const backgroundColor = isSelected ? "#38B2AC" : "transparent";

  const handleClick = () => {
    onNavItemClicked(index);
  };
  const NavItemWrapper = styled(Box)``;
  const NavItemLink = styled(Link)`
    font-weight: bold;
  `;
  const NavItemText = styled(Text)``;
  return (
    <NavItemWrapper as="li" margin="10px 14px" display="flex">
      <NavItemLink to={link} onClick={handleClick}>
        <NavItemText
          bg={backgroundColor}
          fontSize="14px"
          borderRadius="5px"
          marginTop="3px"
        >
          {label}
        </NavItemText>
      </NavItemLink>
    </NavItemWrapper>
  );
};

export default NavigationBar;
