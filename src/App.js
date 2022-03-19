import React, { useState } from 'react'
import styled from 'styled-components'
import { Item } from './Item'
export const App = () => {
  const times = ['past', 'main', 'future']


  return (
    <View>
      <Title>Учу Инглиш</Title>
      <SubTitle>To Be</SubTitle>
      <Content>
          <Column>

          {Array.from({length: 10}, (_, i) => i + 1).map((_,index)=><Item key={String(index)} time={times[getRandom(times)]} />)}
          </Column>
          <Column>

          {Array.from({length: 10}, (_, i) => i + 1).map((_,index)=><Item key={String(index)} time={times[getRandom(times)]} />)}
          </Column>
      </Content>
    </View>
  )

  function getRandom(arr) {
    const random = Math.floor(Math.random() * arr.length)

    return random
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
