import image from './assets/22.png'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock, VideoBlock } from './classes/blocks'

export const view = [

  new TitleBlock('Сайт-визитка', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #6c757d, #000033)',
      color: '#fff',
      'text-align': 'center',
      padding: '1rem'
    }
  }),
  new TextBlock('Кратко о себе:', {
    styles: {
      padding: '1px',
      'font-weight': 'bold',
      'font-size': '120%',
      color: '#6c757d'
    }

  }),
  new ColumnsBlock(['3 курс ПИиКТ ИТМО',
    'Стажируюсь на BackEnd разработчика Java',
    'Параллельно изучаю JS и различные его фреймворки. (пока что ещё не прошёл путь самурая)',
    'НЕ дизайнер! Не осуждайте строго то, что вы видите. Хотя, почему вы это видите...'
  ], {
    styles: {
      padding: '1px',
      background: 'radial-gradient(#000033, #6c757d)',
      color: '#fff'
    }
  }),
  new TextBlock('Отличная картинка, жаль котика сжало:', {
    styles: {
      'font-weight': 'bold',
      'font-size': '120%',
      color: '#6c757d'
    }
  }),
  new ImageBlock(image, {
    styles: {
      display: 'flex',
      padding: '2rem',
      'justify-content': 'left'
    },
    imageStyles: {
      width: '500px',
      head: 'auto',
      border: '3px solid ##6c757d'
    },
    alt: 'Картинка.png'
  }),
  new TextBlock('Отличный видеоряд, который индентифицирует меня как личность:', {
    styles: {
      'font-weight': 'bold',
      'font-size': '120%',
      color: '#6c757d'
    }
  }),
  new VideoBlock('https://www.youtube.com/embed/Za81HJP51PM', '')
]
