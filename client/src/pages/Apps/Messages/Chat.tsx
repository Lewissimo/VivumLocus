import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Message, { messageType } from './Message';
const Chat = () => {
  return (
    <div className='ChatBox'>
        <div className='Chat'>
            <Message type={messageType.incoming} text='asdadasa'/>
            <Message type={messageType.incoming} text='asda34t32loremdsafasdfasfasdfasdfasfasfdsafsad sdf sadf asdf nsadof nasodf oasdjf oiasdjf ioasfdjfiosafoisa fioasdjf asdiojf soaidjf asoi jasdoi fjsadojasoifjasdiosjoisjofijsaoif  asdoiaadasijdioajiofjsiofjasdoifjasoijfoisajdfoisjadfoijasofijsaiofjaosidjfoaisjfoisjfioasjiosadjfiojasoifjsaoifjasoifjasiofjiosdjofiajfoisajfoijsaosjfiojoijt2343g234g4g34g3g34dasa'/>
            <Message type={messageType.outgoing} text='asd34sdadasa'/>
            <Message type={messageType.outgoing} text='asdsdfsaadasa'/>
            <Message type={messageType.incoming} text='asdadsadfasasa'/>
            <Message type={messageType.incoming} text='asdasdafasfasa'/>
        </div>
        <div className='TextBox'>
            <textarea></textarea>
            <div className='SendMessageButton'><ArrowForwardIosIcon /></div>
        </div>
    </div>
  )
}

export default Chat