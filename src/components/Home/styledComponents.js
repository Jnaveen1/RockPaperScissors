import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;

  width: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
`

export const SubBox = styled.div`
  backgrouund-color: transparent;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  min-height: fit-content;

  min-width: 80%;
  border-radius: 5px;
  margin-top: 50px;
`
export const ObjectName = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Bree Serif';

  font-weight: 200;
`
export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ScoreBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  padding: 5px;
  padding-left: 50px;
  padding-right: 50px;
`
export const Para = styled.p`
  font-size: 30px;
  font-family: 'Roboto';
  line-height: 6px;
`

export const Heading = styled.p`
  font-size: 50px;
  line-height: 10px;
  font-family: 'Roboto';
`
export const GameContainer = styled.ul`
  display: flex;
  flex-direction: row;
  jsutify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
export const Image = styled.img`
  height: 100px;
  width: 100px;
`
export const DeclareResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SubBox2 = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  align-items: center;
`
export const Button = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  padding: 10px;
  font-size: 20px;
  font-family: 'Roboto';
  cursor: pointer;
  border-radius: 6px;
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`
