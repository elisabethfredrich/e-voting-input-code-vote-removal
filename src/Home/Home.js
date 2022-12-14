import {
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Grid,
  GridItem,
  Link,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import BackgroundImage from "../assets/folketinget-background-image.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          maxH={"100vh"}
          alt={"Login Image"}
          objectFit={"cover"}
          src={BackgroundImage}
        />
      </Flex>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading color={"#1C4E81"} fontSize={"xl"}>
            Velkommen til det digitale folketingsvalg.
          </Heading>

          <Text>
            For at stemme til folketingsvalget online, bedes du logge ind med de
            informationer, du har modtaget med posten.
          </Text>
          <Grid
            paddingTop={"3rem"}
            gap={"2rem"}
            color="var(--primary_blue)"
            fontWeight={"400"}
            templateColumns=" 1fr 1fr"
            templateRows={"1fr 1fr"}
          >
            <GridItem
              gridColumn={"1 / 3"}
              bg={"var(--secondary_blue)"}
              h="7rem"
              borderRadius={"5px"}
            >
              <Link
                padding={"1rem"}
                display="flex"
                _hover={{ color: "var(--secondary_darkblue)" }}
                height="5rem"
                onClick={() => navigate("/login")}
              >
                <Box
                  w="100%"
                  display={"flex"}
                  flexDirection="column"
                  alignItems={"center"}
                >
                  <span class="material-symbols-outlined blue">login</span>
                  <p>Log ind for at stemme</p>
                </Box>
              </Link>
            </GridItem>

            <GridItem
              gridColumn={"1 / 3"}
              bg={"var(--secondary_blue)"}
              h="7rem"
              borderRadius={"5px"}
            >
              <Link
                padding={"1rem"}
                display="flex"
                _hover={{ color: "var(--secondary_darkblue)" }}
                height="5rem"
                onClick={() => navigate("/bulletinboard")}
              >
                <Box
                  w="100%"
                  display={"flex"}
                  flexDirection="column"
                  alignItems={"center"}
                >
                  <span class="material-symbols-outlined blue">ballot</span>
                  <p>Tjek om din stemme er optalt korrekt</p>
                </Box>
              </Link>
            </GridItem>

            <GridItem
              bg={"var(--secondary_blue)"}
              h="7rem"
              borderRadius={"5px"}
            >
              <Link
                padding={"1rem"}
                display="flex"
                _hover={{ color: "var(--secondary_darkblue)" }}
                height="5rem"
                onClick={() => navigate("/kontakt")}
              >
                <Box
                  w="100%"
                  display={"flex"}
                  flexDirection="column"
                  alignItems={"center"}
                >
                  <span class="blue material-symbols-outlined">mail</span>
                  <p>Kontakt</p>
                </Box>
              </Link>
            </GridItem>

            <GridItem
              bg={"var(--secondary_blue)"}
              h="7rem"
              borderRadius={"5px"}
            >
              <Link
                padding={"1rem"}
                display="flex"
                _hover={{ color: "var(--secondary_darkblue)" }}
                height="5rem"
                onClick={() => navigate("/info")}
              >
                <Box
                  w="100%"
                  display={"flex"}
                  flexDirection="column"
                  alignItems={"center"}
                >
                  <span class="material-symbols-outlined blue">info</span>
                  <p>Info</p>
                </Box>
              </Link>
            </GridItem>
          </Grid>
        </Stack>
      </Flex>
    </Stack>
  );
}
