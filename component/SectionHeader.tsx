import styled from "@emotion/styled";
import { Box, Flex, Text, theme, IconButton } from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

const ProfileBox = styled(Box)``;
const Profile = styled(Flex)``;
const Profilecenter = styled(Flex)``;
const ProfileTextBox = styled(Flex)``;
const ProfileText = styled(Text)``;
const LocationText = styled(Text)``;

function SectionHeader({ username }) {
  return (
    <Profile
      alignItems="center"
      justifyContent="space-between"
      marginBottom="15px"
    >
      <Profilecenter alignItems="center">
        <ProfileBox
          backgroundColor="#edf2f7"
          color="#4a5568"
          borderRadius="9999px"
          height="40px"
          width="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          fontSize="16px"
          marginRight="10px"
        >
          {username[0]}
        </ProfileBox>
        <ProfileTextBox flexDirection="column">
          <ProfileText fontsize="16px" fontWeight="bold">
            {username}
          </ProfileText>
          <LocationText
            color={theme.colors.gray[500]}
            fontsize="lg"
            fontWeight="bold"
            marginBottom="1px"
          >
            화성 · 1h
          </LocationText>
        </ProfileTextBox>
      </Profilecenter>
      <IconButton
        icon={<FaEllipsisH />}
        aria-label="Options"
        size="md"
        variant="ghost"
        colorScheme="gray"
        zIndex="0"
        alignSelf="flex-end"
      />
    </Profile>
  );
}

export default SectionHeader;
