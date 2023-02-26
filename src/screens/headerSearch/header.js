import { Box, Button, Center, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";
import { BsSearch, BsMic } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMenu5Fill } from "react-icons/ri";

import { MdTravelExplore, MdFavorite, MdLogout } from "react-icons/md";

function Header() {
  const btnRef = React.useRef();

  return (
    <Box mt={2}>
      <HStack justifyContent={"space-between"} px={5}>
        <HStack
          px={3}
          alignItems={"center"}
          borderRadius={"full"}
          border={"1px solid lightgray"}
        >
          <BsSearch style={{ cursor: "pointer" }} color="lightgray" />
          <Input _focusVisible={false} w={"lg"} border={"none"} />
          <BsMic style={{ cursor: "pointer" }} color="lightgray" />
        </HStack>
        <HStack>
          <TbSend fontSize={20} style={{ marginRight: 10 }} />
          <IoMdNotificationsOutline fontSize={20} style={{ marginRight: 10 }} />
          {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <RiMenu5Fill fontSize={20} />
          </Button> */}
          <Box alignItems={"baseline"}>
            <HStack
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              style={{ cursor: "pointer" }}
            >
              <MdLogout />
              <Text fontSize={"sm"}>Log Out</Text>
            </HStack>
          </Box>      
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;
