export function toggleIsAdding() {
    return {type: 'IS_ADDING'};
}

export function addWord(en, vn){
    return { type: 'ADD_WORD',en, vn}
}

export function memorized(id){
    return { type: 'MEMORIZED',id}
}

export function show(id){
    return { type: 'IS_SHOW',id}
}

export function showAll() {
    return {type: 'FILTER_SHOW_ALL'};
}

export function showMemorized() {
    return {type: 'FILTER_MEMORIZED'};
}

export function showNeedPractice() {
    return {type: 'FILTER_NEED_PRACTICE'};
}

