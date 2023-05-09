import { Box } from "@chakra-ui/react";
import Layout from "../component/Layout";
import Section from "../component/Section";

function HomePage() {
  return (
    <Box maxWidth="1150px" mx="auto">
      <Layout>
        <div>
          <li>
            <Section id="1" imageSrc="/dkanrjsk.jpg" />
          </li>
          <li>
            <Section id="2" imageSrc="/dkanrjsk.jpg" />
          </li>
          <li>
            <Section id="3" imageSrc="/dkanrjsk.jpg" />
          </li>
          <li>
            <Section id="4" imageSrc="/dkanrjsk.jpg" />
          </li>
          <li>
            <Section id="5" imageSrc="/dkanrjsk.jpg" />
          </li>
          <li>
            <Section id="6" imageSrc="/dkanrjsk.jpg" />
          </li>
          <li>
            <Section id="7" imageSrc="/dkanrjsk.jpg" />
          </li>
        </div>
      </Layout>
    </Box>
  );
}
export default function App() {
  return <HomePage />;
}
