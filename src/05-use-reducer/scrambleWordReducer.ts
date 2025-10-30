
export interface ScrambleWordsState {
  currentWord: string
  errorCounter: number
  guess: string
  isGameOver: boolean
  maxAllowErrors: number
  maxSkips: number
  points: number
  scrambledWord: string
  skipCounter: number
  words: string[]
  totalWords: number
}

export type ScrambleWordAction =
  | { type: 'SET_GUESS', payload: string }
  | { type: 'CHECK_ANSWER' }
  | { type: 'PLAY_AGAIN', payload: ScrambleWordsState }
  | { type: 'SKIP_WORD' }




const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};


export const getInitialState = (): ScrambleWordsState => {

  const shuffledWords = shuffleArray([ ...GAME_WORDS ])

  return {
    currentWord: '',
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord( shuffledWords[ 0 ] ),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: shuffledWords.length,
  }
}

export const scrambleWordsReducer = ( state: ScrambleWordsState, action: ScrambleWordAction ): ScrambleWordsState => {

  switch ( action.type ) {

    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase()
      }

    case 'CHECK_ANSWER':
      if ( state.currentWord === state.guess ) {
        const newWords = state.words.slice( 1 )
        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: '',
          currentWord: newWords[ 0 ],
          scrambledWord: scrambleWord( newWords[ 0 ] )
        }
      }

      return {
        ...state,
        guess: '',
        errorCounter: state.errorCounter + 1,
        isGameOver: ( state.errorCounter + 1 ) >= state.maxAllowErrors,
      }
    case 'PLAY_AGAIN':
      return action.payload

    case 'SKIP_WORD':
      if ( state.skipCounter + 1 <= state.maxSkips ) {
        const newWords = state.words.slice( 1 )
        return {
          ...state,
          skipCounter: state.skipCounter + 1,
          words: newWords,
          currentWord: newWords[ 0 ],
          scrambledWord: scrambleWord( newWords[ 0 ] ),
          guess: '',
        }
      }

      return {
        ...state
      }



    default:
      return state

  }

}
