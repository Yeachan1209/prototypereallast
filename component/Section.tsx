import { useEffect, useRef, useState } from "react";
import { Box, Flex, IconButton, Text, Image, Grid } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
export default function section({ id, imageSrc }) {
  const username = "Yea Chan";
  const content =
    "안녕하세요. 반갑습니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다.";
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(10);
  const boxRef = useRef(null);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  useEffect(() => {
    if (boxRef.current) {
      const boxHeight = boxRef.current.scrollHeight;
      if (boxHeight > boxRef.current.offsetHeight) {
        boxRef.current.style.height = `${boxHeight}px`;
      }
    }
  }, [content]);

  const StyledGrid = styled(Grid)``;
  const StyledBox = styled(Box)``;
  const HeaderBox = styled(Box)``;
  const ImageBox = styled(Box)``;
  const ImageEmotion = styled(Image)``;
  const ContentBox = styled(Box)``;
  const Content = styled(Text)``;
  const IconFlex = styled(Flex)``;
  const IconFlexcenter = styled(Flex)``;
  const LikeComIconButton = styled(IconButton)``;
  const Likes = styled(Text)``;
  const Comments = styled(Text)``;

  return (
    <StyledGrid
      as="div"
      display="flex"
      flexDirection="row"
      overflowX="scroll"
      whiteSpace="nowrap"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <StyledBox
        key={id}
        ref={boxRef}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        overflowWrap="anywhere"
        width="100%"
        maxWidth={{ base: "none", md: "517px" }}
        display="grid"
        borderRadius="20px"
        padding="16px"
        marginLeft={{ base: "none", md: "16px" }}
        overflowX="hidden"
        marginBottom="10px"
        gridTemplateColumns="auto"
        gridTemplateRows="auto 1fr auto"
        gridTemplateAreas="'header' 'image' 'content' 'footer'"
      >
        <HeaderBox gridArea="header">
          <SectionHeader username={username} />
        </HeaderBox>
        <ImageBox gridArea="image">
          <ImageEmotion
            src={imageSrc}
            alt="Profile Picture"
            height="400px"
            width="100%"
            objectFit="cover"
            borderRadius="lg"
            marginBottom="16px"
          />
        </ImageBox>
        <ContentBox gridArea="content">
          <Content fontSize="1.1rem" marginBottom="10px" whiteSpace="pre-line">
            {content}
          </Content>
        </ContentBox>
        <IconFlex
          gridArea="footer"
          alignItems="center"
          justifyContent="flex-end"
        >
          <IconFlexcenter alignItems="center" marginRight="10px">
            <LikeComIconButton
              aria-label="Like"
              icon={<AiOutlineHeart size="20" color={liked ? "red" : "gray"} />}
              onClick={handleLike}
              backgroundColor="transparent"
              _focus={{ boxShadow: "none" }}
            />
            <Likes marginLeft={2}>{likes}</Likes>
          </IconFlexcenter>
          <IconFlexcenter alignItems="center" marginRight="10px">
            <LikeComIconButton
              aria-label="Comment"
              icon={<AiOutlineMessage size="20" color="gray" />}
              backgroundColor="transparent"
              _focus={{ boxShadow: "none" }}
            />
            <Comments marginLeft={2}>20</Comments>
          </IconFlexcenter>
        </IconFlex>
      </StyledBox>
    </StyledGrid>
  );
}
