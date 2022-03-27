import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { shuffle } from 'lodash'

const init_words = [
	'here',
	'away',
	'near',
	'at home',
	'at school',
	'on leave',
	'polite',
	'kind',
	'there',
	'back',
	'far',
	'at work',
	'in Paris',
	'on duty',
	'rude',
	'cruel',
	'short',
	'fat',
	'old',
	'poor',
	'silly',
	'ill',
	'sad',
	'lazy',
	'tall',
	'slim',
	'young',
	'rich',
	'cleaver',
	'healthy',
	'merry',
	'wise'
]

const middle_word = ['very', 'too', 'rather', 'somewhat', 'a bit', 'quite']

const initData = [
	{
		name: ['I'],
		rightAnswer: {
			past: 'was',
			main: 'am',
			future: 'will be'
		}
	},
	{
		name: ['He', 'She', 'It'],
		rightAnswer: {
			past: 'was',
			main: 'is',
			future: 'will be'
		}
	},
	{
		name: ['We', 'You', 'They'],
		rightAnswer: {
			past: 'were',
			main: 'are',
			future: 'will be'
		}
	}
]

const selectData = ['was','is','will be','am','are','were']

// const selectData = {
// 	past: ['was', 'were'],
// 	main: ['am', 'is', 'are'],
// 	future: ['will be']
// }

const title = {
	past: 'Прошедшее',
	main: 'Настоящее',
	future: 'Будующее'
}

export const BeItem = ({ time }) => {
	const [sectionValue, setSectionValue] = useState('')

	const [rndSection] = useState(initData[getRandom(initData)])
	const [rndName] = useState(rndSection?.name[getRandom(rndSection?.name)])
	const [middleWord] = useState(middle_word[getRandom(middle_word)])
	const [endWord] = useState(init_words[getRandom(init_words)])
	const [isError, setError] = useState(false)


	return (
		<View>
			<ItemTitle>{title[time]}</ItemTitle>
			<ItemContent isError={isError} isChanged={sectionValue !== ""}>
				{rndName}{' '}{renderSelect(shuffle(selectData))}{' '}{middleWord}{' '}
				{endWord}
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
	
	&:not(:first-child){
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