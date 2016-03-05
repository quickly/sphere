import {field, connect, migrate, Document} from './sphere'

connect('qml-es6', 'Sample ES6 integration for QML')

export class SampleDocument extends Document {
    @field('string') title
    @field('string') body

    constructor(title, body) {
        super()
        this.title = title
        this.body = body
    }
}

migrate('1', () => {
    SampleDocument.createTable()
})

new SampleDocument('Hello', 'World').save()
new SampleDocument('Booo', 'Hooo').save()

SampleDocument.find('title = ?', ['Hello'])