import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { shuffle } from 'lodash'

const init_words = [
  'car',
  'friend',
  'house',
  'husband',
  'wife',
  'kid',
  'answer',
  'question',
  'problem',
  'thing',
  'right',
  'illusion',
  'enemy',
  'asset',
  'fault',
  'ticket',
  'fun',
  'milk',
  'food',
  'mercy',
  'money',
  'power',
  'work',
  'freedom',
  'time',
  'strength',
  'glory',
  'success',
  'news',
  'shame',
  'courage',
  'pity'
]

const middle_word = ['', 'lot of', ' ', 'enough', '', '']

const initData = [
  {
    name: ['I', 'We', 'You', 'They'],
    rightAnswer: {
      past: 'had',
      main: 'have',
      future: 'will have'
    }
  },
  {
    name: ['He', 'She', 'It'],
    rightAnswer: {
      past: 'had',
      main: 'has',
      future: 'will have'
    }
  }
]

const selectData = ['had', 'have', 'has', 'will have']

const title = {
  past: 'Прошедшее',
  main: 'Настоящее',
  future: 'Будующее'
}

export const HaveItem = ({ time }) => {
  const [sectionValue, setSectionValue] = useState('')

  const [rndSection] = useState(initData[getRandom(initData)])
  const [rndName] = useState(rndSection?.name[getRandom(rndSection?.name)])
  const [endWord] = useState(init_words[getRandom(init_words)])
  const [isError, setError] = useState(false)

  return (
    <View>
      <ItemTitle>{title[time]}</ItemTitle>
      <ItemContent isError={isError} isChanged={sectionValue !== ''}>
        {rndName} {renderSelect(shuffle(selectData))} {getRandom([true, false]) ? 'a' : ''} {endWord}
        {!getRandom([true, false]) ? 's' : ''}
      </ItemContent>
    </View>
  )

  function handleChange(event) {
    setError(rndSection?.rightAnswer[time] !== event.target.value)
    setSectionValue(event.target.value)
  }

  function renderSelect(data) {
    const options = ['', ...data]
    return (
      <Select onChange={handleChange} value={sectionValue}>
        {data?.length > 0 &&
          options.map((option, index) => (
            <option key={String(index)} value={option}>
              {option}
            </option>
          ))}
      </Select>
    )
  }

  function getRandom(arr) {
    return Math.floor(Math.random() * arr.length)
  }
}

const View = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:first-child) {
    margin-top: 10px;
  }
`
const ItemTitle = styled.div`
  font-size: 22px;
  font-style: italic;
  color: darkgrey;
`
const ItemContent = styled.div`
  font-size: 24px;

  ${({ isError, isChanged }) =>
    isChanged &&
    (isError
      ? css`
          color: red;
        `
      : css`
          color: green;
        `)}
`

const Select = styled.select`
  font-size: 14px;
`
