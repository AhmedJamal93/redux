export const addNew = (newBook) => {
    return {
        type: 'ADD',
        payload: newBook
    }
}

export const deleteBook = (id) => {
    return {
        type: 'DELETE',
        payload:id
    }
}

export const updateBook = (id, book) => {
    return {
        type: 'UPDATE',
        payload:id,
        details:book
    }
}

export const addOpenWindow = () => {
    return {
        type: 'OPEN'
    }
}

export const addCloseWindow = () => {
    return {
        type: 'CLOSE'
    }
}

export const updateOpenWindow = () => {
    return {
        type: 'OPEN_UPDATE'
    }
}

export const updateCloseWindow = () => {
    return {
        type: 'CLOSE_UPDATE'
    }
}
