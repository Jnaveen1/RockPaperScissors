import {Component} from 'react'
import GameOptions from '../GameOptions'
import SelectionView from '../SelectionView'
import ReactPopUp from '../ReactPopUp'
import {
  MainContainer,
  ScoreBox,
  SubBox,
  NameBox,
  ObjectName,
  Para,
  Heading,
  GameContainer,
  DeclareResult,
  SubBox2,
  Button,
  ResultText,
} from './styledComponents'

const status = {
  initial: 'INITIAL',
  won: 'WON',
  lost: 'LOST',
  draw: 'DRAW',
}

class Home extends Component {
  state = {
    choicesList: [],
    gameStatus: status.initial,
    score: 0,
    userChoice: '',
    computerChoice: '',
  }

  componentDidMount() {
    const {choicesList} = this.props
    this.setState({choicesList})
  }

  evaluate = () => {
    const {userChoice, computerChoice} = this.state
    if (userChoice === computerChoice) {
      this.setState({gameStatus: status.draw})
    } else if (userChoice === 'ROCK' && computerChoice === 'PAPER') {
      this.setState(prevState => ({
        gameStatus: status.lost,
        score: prevState.score - 1,
      }))
    } else if (userChoice === 'ROCK') {
      if (computerChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: status.won,
          score: prevState.score + 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (computerChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: status.won,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: status.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (computerChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: status.won,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: status.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  checkUserSelectedOption = id => {
    const {choicesList} = this.state
    this.setState({userChoice: id})
    console.log(id)
    const randomNum = Math.floor((Math.random() * 10) % 3)
    const randomchoice = choicesList[randomNum].id
    console.log(randomchoice)
    this.setState({computerChoice: randomchoice}, this.evaluate)
  }

  playAgain = () => {
    this.setState({gameStatus: status.initial})
  }

  reactPop = () => {
    console.log('hi')
    return <ReactPopUp />
  }

  renderInitialViem = () => {
    const {choicesList} = this.state
    return (
      <GameContainer>
        {choicesList.map(eachObject => (
          <GameOptions
            key={eachObject.id}
            eachObject={eachObject}
            checkUserSelectedOption={this.checkUserSelectedOption}
          />
        ))}
      </GameContainer>
    )
  }

  renderWonView = () => {
    const {userChoice, computerChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    const computerChoiceObjectLIST = choicesList.filter(
      choice => choice.id === computerChoice,
    )
    const computerChoiceObject = computerChoiceObjectLIST[0]
    console.log(userChoiceObject.imageUrl)
    return (
      <SubBox2>
        <GameContainer>
          <SelectionView
            imageUrl={userChoiceObject.imageUrl}
            alt="your choice"
            player="YOU"
          />
          <SelectionView
            imageUrl={computerChoiceObject.imageUrl}
            alt="opponent choice"
            player="OPPONENT"
          />
        </GameContainer>
        <DeclareResult>
          <ResultText>YOU WON</ResultText>
          <Button type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </Button>
        </DeclareResult>
      </SubBox2>
    )
  }

  renderLostView = () => {
    const {userChoice, computerChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    console.log(userChoiceObject.imageUrl)
    const computerChoiceObjectLIST = choicesList.filter(
      choice => choice.id === computerChoice,
    )
    const computerChoiceObject = computerChoiceObjectLIST[0]
    return (
      <SubBox2>
        <GameContainer>
          <SelectionView
            imageUrl={userChoiceObject.imageUrl}
            alt="your choice"
            player="YOU"
          />
          <SelectionView
            imageUrl={computerChoiceObject.imageUrl}
            alt="opponent choice"
            player="OPPONENT"
          />
        </GameContainer>
        <DeclareResult>
          <ResultText>YOU LOSE</ResultText>
          <Button type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </Button>
        </DeclareResult>
      </SubBox2>
    )
  }

  renderDrawView = () => {
    const {userChoice, computerChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    console.log(userChoiceObject.imageUrl)
    const computerChoiceObjectLIST = choicesList.filter(
      choice => choice.id === computerChoice,
    )
    const computerChoiceObject = computerChoiceObjectLIST[0]

    return (
      <SubBox2>
        <GameContainer>
          <SelectionView
            imageUrl={userChoiceObject.imageUrl}
            alt="your choice"
            player="YOU"
          />
          <SelectionView
            imageUrl={computerChoiceObject.imageUrl}
            alt="opponent choice"
            player="OPPONENT"
          />
        </GameContainer>
        <DeclareResult>
          <ResultText>IT IS DRAW</ResultText>
          <Button type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </Button>
        </DeclareResult>
      </SubBox2>
    )
  }

  renderGame = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case status.initial:
        return this.renderInitialViem()
      case status.won:
        return this.renderWonView()
      case status.lost:
        return this.renderLostView()
      case status.draw:
        return this.renderDrawView()
      default:
        return null
    }
  }

  render() {
    const {score, selectesChoices, choicesList} = this.state
    console.log(selectesChoices)
    console.log(choicesList)
    return (
      <MainContainer>
        <SubBox>
          <NameBox>
            <ObjectName>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </ObjectName>
          </NameBox>
          <ScoreBox>
            <Para>Score</Para>
            <Heading>{score}</Heading>
          </ScoreBox>
        </SubBox>
        {this.renderGame()}
        <ReactPopUp />
      </MainContainer>
    )
  }
}

export default Home
// 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
