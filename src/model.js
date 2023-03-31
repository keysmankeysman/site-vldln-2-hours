import image from './assets/image.png'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: '#eee', 
            color: '#fff',
            'text-align': 'center'
        }  
    }),
    new ImageBlock(image, {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            } 
        }
    ),
    new TextBlock('here we go with some text'),
    new ColumnsBlock([
            '111111111', 
            '222222222',
            '333333333',
            '444444444'
        ]
    )
]