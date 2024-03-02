
// state = {}

const todoState = {
    tasks: [
        {
            id: '1',
            title: 'Learn React',
            isDone: false,
        },
        {
            id: '2',
            title: 'Learn Redux',
            isDone: false,
        }
    ]
}

// /reducer
const todoReducer = (state = todoState, action) => {
    switch (action.type) {
    
        default: return state
    }
}

export default todoReducer