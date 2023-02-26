import {
  Box,
  Center,
  Text,
  Image,
  Heading,
  Select,
  HStack,
  VStack,
  Card,
  Button,
} from "@chakra-ui/react";
import React from "react";
import tesImage from "../../../assets/TESARK_Logo_3x-removebg-preview.png";
import {
  BarChartExample,
  barChartMultiple,
} from "../../../components/AttendanceChart";

function Home() {
  const [formData, setFormData] = React.useState({});
  console.log(formData);
  return (
    <Box style={{ display: "flex", justifyContent: "center" }} height={"full"}>
      {/* <Center>
        <Card px={3} py={10} bgColor={"gray.300"} height={"fit-content"}>
          <VStack
            justifyContent={"space-between"}
            // alignItems={"center"}
            // alignContent={"center"}
            width={"2xl"}
            alignItems="center"
          >
            <Heading color={"#3b0334"}>Attendance</Heading>
            <label style={{ color: "#3b0334" }}>Status</label>
            <Select
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              variant={"filled"}
              width={"md"}
              defaultValue={"present"}
            >
              <option value="absent">ABSENT</option>
              <option value="present">PRESENT</option>
              <option value="morninghalf">MORNING HALF</option>
              <option value="eveninghalf">EVENING HALF</option>
            </Select>
            <label style={{ color: "#3b0334" }}>Working From</label>
            <Select
              variant={"filled"}
              _selected={{ textColor: "#3b0334" }}
              mb={"32"}
              width={"md"}
              defaultValue={"office"}
            >
              <option value="home">HOME</option>
              <option value="office">OFFICE</option>
              <option value="leave">LEAVE</option>
            </Select>
            <Box pt={10}>
              <Button
                _hover={{ bgColor: "white", color: "#3b0334" }}
                bgColor={"#3b0334"}
                color="white"
              >
                Submit
              </Button>
            </Box>
          </VStack>
        </Card>
      </Center> */}
      <BarChartExample data={barChartMultiple} />
    </Box>
  );
}

export default Home;
