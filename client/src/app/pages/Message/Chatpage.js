import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { useGlobalContext } from "../../UserContext/UserContext";
import SideDrawer from "../../Component/miscellaneous/SideDrawer";
import MyChats from "../../Component/Chats/MyChats";
import Chatbox from "../../Component/Chats/Chatbox";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = useGlobalContext();

  return (
    <div style={{ width: "100%" }}>
       <SideDrawer />
      {/* {user && <SideDrawer />} */}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
