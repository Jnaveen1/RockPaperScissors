import {Image, GameOptionList, Heading, ButtonOption} from './styledComponents'

const SelectionView = props => {
  const {alt, imageUrl, player} = props
  return (
    <GameOptionList>
      <Heading>{player}</Heading>
      <ButtonOption>
        <Image src={imageUrl} alt={alt} />
      </ButtonOption>
    </GameOptionList>
  )
}

export default SelectionView
// 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
