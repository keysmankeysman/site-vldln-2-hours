import image from './assets/image.png'
import { Block } from './classes/blocks'

console.log(Block)

export const model = [
    new Block('title', 'Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: '#eee', 
            color: '#fff',
            'text-align': 'center'
        }  
    }),
    {
        type: 'image',
        value: image,
        options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            } 
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
    }
]