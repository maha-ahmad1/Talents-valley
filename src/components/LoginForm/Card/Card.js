import { Container, Flex } from "./CardStyle";

export default function Card({ children }) {
  return (
    <Flex>
      <Container>{children}</Container>
    </Flex>
  );
}
