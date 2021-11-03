import { promiseData } from './promise';

export const promiseAllCharacters = (id, onSuccess) => {
    promiseData(`https://rickandmortyapi.com/api/character?page=${id}`, onSuccess)
}

export const promiseSingleCharacter = (id, onSuccess) => {
    promiseData(`https://rickandmortyapi.com/api/character/${id}`, onSuccess)
}

