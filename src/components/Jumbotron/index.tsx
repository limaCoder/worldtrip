import { Box, Flex, Text } from "@chakra-ui/react";

interface JumbotronProps {
  image: string;
  name: string;
}

export default function Jumbotron({ image, name }: JumbotronProps) {
  return (
    <Flex
      backgroundImage={`url(${image})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      w="100%"
      h="500px"
      direction="column-reverse"
      justifyContent={["center", "flex-start"]}
      alignItems={["center", "flex-start"]}
      pl="8"
      pb="8"
      position="relative"
    >
      <Box
        bg="rgba(0, 0, 0, 0.5)"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="1"
      />
      <Text zIndex="2" fontSize="48px" fontWeight="600">
        {name}
      </Text>
    </Flex>
  );
}
