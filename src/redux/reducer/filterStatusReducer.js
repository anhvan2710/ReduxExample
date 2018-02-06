const filterStatusReducer = (state = 'SHOW_ALl' , action) => {
    if (action.type === 'FILTER_SHOW_ALL') return 'SHOW_ALl';
    if (action.type === 'FILTER_MEMORIZED') return 'MEMORIZED';
    if (action.type === 'FILTER_NEED_PRACTICE') return 'NEED_PRACTICE';
    return state;
};

export default filterStatusReducer;