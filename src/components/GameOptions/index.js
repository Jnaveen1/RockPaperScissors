import {Image, GameOptionList, ButtonOption} from './styledComponents'

const GameOptions = props => {
  const {key, eachObject, checkUserSelectedOption} = props
  const {id, imageUrl} = eachObject
  const onClickOption = () => {
    checkUserSelectedOption(id)
  }
  console.log(key)
  return (
    <GameOptionList>
      <ButtonOption
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickOption}
      >
        <Image src={imageUrl} alt={id} />
      </ButtonOption>
    </GameOptionList>
  )
}

export default GameOptions
