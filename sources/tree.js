export class Tree {

}

export const hasType = (state, type) => {
    state.type = type

    return {
        getType() {
            return state.type
        },
        setType(type) {
            state.type = type
        }
    }
}

export const hasName = (state, name) => {
    state.name = name

    return {
        getName() {
            return state.name
        },
        setName(name) {
            state.name = name
        }
    }
}

export const hasChildren = (state, children) => {
    state.children = new Set(children)

    return {
        addChild(child) {
            state.children.add(child)
        },

        removeChild(child) {
            state.children.delete(child)
        },

        getChildren() {
            return [...state.children.values()]
        },
    }
}

export const createDir = ({ name, children }) => {
    const state = {}

    return {
        ...hasType(state, 'dir'),
        ...hasName(state, name),
        ...hasChildren(state, children),
    }

}

export const createFile = ({ name }) => {
    const state = {
    }

    return {
        ...hasType(state, 'file'),
        ...hasName(state, name)
    }
}