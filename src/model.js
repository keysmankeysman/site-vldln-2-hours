import image from './assets/image.png'

export const model = [
    {
        type: 'title',
        value: 'Конструктор сайтов на чистом JavaScript',
        options: {
            tag: 'h2',
            styles: `background: #eee; color: #fff`
        }
    },
    {
        type: 'text',
        value: 'here we go with some text'
    },
    {
        type: 'columns',
        value: [
            '111111111', 
            '222222222',
            '333333333',
            '444444444'
        ]
    },
    {
        type: 'image',
        value: image
    }
]