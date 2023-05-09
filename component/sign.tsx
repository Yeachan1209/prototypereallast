import { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  HStack,
  theme,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import Link from "next/link";
import router from "next/router";
import styled from "@emotion/styled";

const Sign = styled(Flex)``;
const Signcenter = styled(Box)``;
const SignBox = styled(Box)``;
const IconBox = styled(Box)``;
const HomeIcon = styled(Box)``;
const Title = styled(Text)``;
const LoginSignBox = styled(Box)``;
const SignNameEmailPass = styled(Input)`
  margin-bottom: 8px;
  width: 100%;
  max-width: 366px;
  background-color: #e5e5e5 !important;
  border-radius: 16px;
  &:focus {
    outline: none;
    box-shadow: outline;
  }
  &::placeholder {
    color: gray.500;
  }
`;

const SignLoginButton = styled(Button)`
  width: 100%;
  max-width: 366px;
  background-color: #38b2ac !important;
  color: white;
  border-radius: lg;
  &:hover {
    background-color: #319795 !important;
  }
`;

const ErrorMessage = styled(Text)`
  color: ${theme.colors.red[500]};
  font-size: sm;
  margin-bottom: 8px;
`;

const GoogleLogin = styled(Button)`
  margin-top: 8px;
  width: 366px;
  color: black;
  border-radius: lg;
  background-color: #e5e5e5 !important;

  &:hover {
    background-color: #d1d1d1 !important;
  }
`;

const LoginSignupButton = styled(HStack)`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Notaccount = styled(Text)``;

const LoginorSignup = styled.a`
  font-weight: bold;
  color: #38b2ac;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const handleSignup = () => {};

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = () => {
    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
    } else if (!emailRegex.test(email)) {
      setError("올바른 이메일 형식이 아닙니다.");
    } else if (!passwordRegex.test(password)) {
      setError(
        "비밀번호는 최소 8자 이상, 숫자와 문자, 특수문자가 모두 포함되어야 합니다."
      );
    } else {
      router.push("/HomePage");
    }
  };

  return (
    <Sign
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Signcenter
        display={{ base: "block", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ md: "flex-start" }}
      >
        <SignBox
          marginLeft={{ base: "auto", md: 0 }}
          marginTop={{ md: 0 }}
          maxWidth={{ base: "100%", md: 0 }}
          display={{ base: "block", md: "flex" }}
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent={{ md: "center" }}
        >
          <IconBox
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="3.5rem"
          >
            <HomeIcon
              as={FiHome}
              width="160px"
              height="160px"
              color="#38b2ac"
              marginTop="30px"
            />

            <Title
              fontWeight="bold"
              width="220px"
              textAlign="left"
              marginTop="10px"
            >
              동네이야기부터 중고거래까지 가까운 이웃과 함께해요
            </Title>
          </IconBox>
          <LoginSignBox
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", md: "flex-start" }}
            padding="8px"
            width={{ base: "100%", md: "auto" }}
            borderRadius={{ base: "none", md: "md" }}
            marginTop="15px"
          >
            {isSignup && (
              <SignNameEmailPass
                placeholder="이름"
                value={name}
                onChange={handleNameChange}
                _placeholder={{ color: "gray.500" }}
              />
            )}
            <SignNameEmailPass
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
              _placeholder={{ color: "gray.500" }}
            />
            <SignNameEmailPass
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              _placeholder={{ color: "gray.500" }}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {isSignup ? (
              <SignLoginButton onClick={handleSignup}>회원가입</SignLoginButton>
            ) : (
              <SignLoginButton onClick={handleSubmit}>로그인</SignLoginButton>
            )}
            <Link href="../../HomePage">
              <GoogleLogin leftIcon={<FaGoogle />}>
                Google 계정으로 로그인
              </GoogleLogin>
            </Link>
            <LoginSignupButton>
              <Notaccount fontWeight="bold">계정이 없으신가요?</Notaccount>
              <Link href="/" passHref>
                <LoginorSignup onClick={() => setIsSignup(!isSignup)}>
                  {isSignup ? "로그인" : "회원가입"}
                </LoginorSignup>
              </Link>
            </LoginSignupButton>
          </LoginSignBox>
        </SignBox>
      </Signcenter>
    </Sign>
  );
}
