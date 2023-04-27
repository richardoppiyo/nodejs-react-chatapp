/* eslint-disable react/prop-types */
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
 const chatProps = useMultiChatLogic(
    '5870afd2-c6ef-4dd3-83cd-373bbb9fc6ea',
    props.user.username,
    props.user.secret
    );

return(
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        chats... </div>
);
};

export default ChatsPage;