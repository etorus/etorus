export const NUMBER_OF_EXERCISES = 17

export const getExerciseListKey = () => {
    let list = []

    for(let i = 0;i < NUMBER_OF_EXERCISES; i++) {
        list.push(`exercise_list_number_${i}`)
    }

    return list
}

export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export const getListAndChunk = () =>
    chunk(getExerciseListKey(), 3)
