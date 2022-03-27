import React from 'react'
import styled from 'styled-components'
import { BeItem } from './BeItem'
import { HaveItem } from './HaveItem'
export const App = () => {
  const times = ['past', 'main', 'future']

  return (
    <View>
      <Title>Учу Инглиш</Title>
      <SubTitle>To Be</SubTitle>
      <Content>
        <Column>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => (
            <BeItem key={String(index)} time={times[getRandom(times)]} />
          ))}
        </Column>
        <Column>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => (
            <BeItem key={String(index)} time={times[getRandom(times)]} />
          ))}
        </Column>
      </Content>
      <SubTitle>To Have</SubTitle>
      <Content>
        <Column>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => (
            <HaveItem key={String(index)} time={times[getRandom(times)]} />
          ))}
        </Column>
        <Column>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => (
            <HaveItem key={String(index)} time={times[getRandom(times)]} />
          ))}
        </Column>
      </Content>
    </View>
  )

  function getRandom(arr) {
    return Math.floor(Math.random() * arr.length)
  }
}

const View = styled.div`
  padding: 100px 100px 200px;
`

const Title = styled.div`
  font-size: 14px;
`
const SubTitle = styled.div`
  font-size: 12px;
`
const Content = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-around;
`
const Column = styled.div`
  display: flex;
  flex-flow: column;
`
