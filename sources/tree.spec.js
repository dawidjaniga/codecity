import { hasType, hasName, hasChildren, createDir, createFile } from './tree'
import intersection from 'ramda/src/intersection'

expect.extend({
    isComposedOf(origin, item) {
        const originKeys = Object.keys(origin)
        const itemKeys = Object.keys(item)

        return {
            pass: intersection(originKeys, itemKeys).length === itemKeys.length,
            message: () => `${originKeys} is not composed from ${itemKeys}`,
        };
    },
});

describe('Tree', () => {
    it('', () => {

    })
})

describe('hasChildren', () => {
    it('get children', () => {
        const state = {}
        const child = { name: 'example' }
        const item = hasChildren(state, [child])
        expect(item.getChildren()).toEqual([child])
    })

    it('add child', () => {
        const state = {}
        const child = { name: 'example' }
        const item = hasChildren(state)
        item.addChild(child)
        expect(item.getChildren()).toEqual([child])
    })

    it('remove child', () => {
        const state = {}
        const child = { name: 'example' }
        const child1 = { name: 'example1' }
        const item = hasChildren(state, [child, child1])
        item.removeChild(child1)
        expect(item.getChildren()).toEqual([child])
    })
})

describe('createDir', () => {
    it('is composed correctly', () => {
        const dir = createDir({ name: 'example' })

        expect(dir).isComposedOf(hasType({}))
        expect(dir).isComposedOf(hasName({}))
        expect(dir).isComposedOf(hasChildren({}))
    })
})

describe('createFile', () => {
    it('is composed correctly', () => {
        const file = createDir({ name: 'example' })

        expect(file).isComposedOf(hasType({}))
        expect(file).isComposedOf(hasName({}))

    })
})