import {
  Box,
  Center,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdTravelExplore, MdFavorite, MdLogout } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { CURRENT_USER } from "../../../constants/preferenceKey";

function Profile() {
  const data = [
    {
      text: "HOME",
      icon: AiFillHome,
    },
    {
      text: "Attendance",
      icon: ImProfile,
    },

    {
      text: "Direct",
      icon: TbSend,
    },
    {
      text: "Settings",
      icon: AiFillSetting,
    },
  ];
  const ProfileData = [
    {
      text: "PRESENT",
      subText: "58.9k",
    },
    {
      text: "ABSENT",
      subText: "600",
    },
    {
      text: "MORNING HALF",
      subText: "786",
    },
    {
      text: "EVENING HALF",
      subText: "786",
    },
  ];

  const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER))
    ? JSON.parse(localStorage.getItem(CURRENT_USER))
    : {};

  console.log(currentUser);
  return (
    <Box flex={1} h={"100vh"}>
      <VStack>
        <Box width={"100%"} py={2} bgColor={"gray.100"} flex={1}>
          <Center pt={3}>
            <HStack>
              <BsInstagram />
              <div>Instagram</div>
            </HStack>
          </Center>
        </Box>

        <Box
          width={"100%"}
          py={3}
          borderBottom={"1px solid lightgray"}
          flex={1}
        >
          <Center>
            <VStack>
              <CgProfile color="#3b0334" fontSize={70} />
              <Text fontSize={"sm"}>
                {currentUser && currentUser.userData.name}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Status: {currentUser.userData.status}
              </Text>
              <HStack pt={3}>
                {ProfileData.map((item) => {
                  return (
                    <VStack>
                      <Text px={2} fontWeight={"bold"} fontSize={10}>
                        {item.subText}
                      </Text>
                      <Text fontSize={7} color={"gray.500"}>
                        {item.text}
                      </Text>
                    </VStack>
                  );
                })}
              </HStack>
            </VStack>
          </Center>
        </Box>

        <Box width={"100%"} pb={"10"} flex={1}>
          <Tabs variant="unstyled">
            <TabList>
              <VStack>
                {data.map((item) => {
                  return (
                    <Tab
                      borderLeft={" 3px solid white"}
                      width={"40"}
                      fontSize={"sm"}
                      _selected={{
                        fontWeight: "bold",
                        color: "#3b0334",
                        borderLeft: " 3px solid #3b0334",
                      }}
                    >
                      <item.icon />
                      <Text ml={2}>{item.text}</Text>
                    </Tab>
                  );
                })}
                {currentUser.Roles.role == "CLIENT" ? null : (
                  <Tab
                    borderLeft={" 3px solid white"}
                    width={"40"}
                    fontSize={"sm"}
                    _selected={{
                      fontWeight: "bold",
                      color: "#3b0334",
                      borderLeft: " 3px solid #3b0334",
                    }}
                  >
                    {/* <item.icon /> */}
                    <Text ml={2}>{"User Management"}</Text>
                  </Tab>
                )}
              </VStack>
            </TabList>
            {/* <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels> */}
          </Tabs>
        </Box>
      </VStack>
    </Box>
  );
}

export default Profile;
