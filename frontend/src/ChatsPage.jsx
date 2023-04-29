/* eslint-disable react/prop-types */
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

// const ChatsPage = (props) => {
//  const chatProps = useMultiChatLogic(
//     '5870afd2-c6ef-4dd3-83cd-373bbb9fc6ea',
//     props.user.username,
//     props.user.secret
//     );

// return(
//     <div style={{height: '100vh'}}>
//         <MultiChatSocket {...chatProps} />
//         <MultiChatWindow {...chatProps} style={{height: '100%'}} />
//         chats... </div>
// );
// };

// export default ChatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId='5870afd2-c6ef-4dd3-83cd-373bbb9fc6ea'
        // {process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;