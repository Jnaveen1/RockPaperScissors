import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import {Button, MainContianer, Image} from './styledComponents'

const ReactPopUp = () => (
  <MainContianer>
    <Popup modal trigger={<Button type="button">Rules</Button>}>
      {close => (
        <>
          <div>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
          <Button onClick={() => close()}>
            <RiCloseLine />
          </Button>
        </>
      )}
    </Popup>
  </MainContianer>
)
export default ReactPopUp
