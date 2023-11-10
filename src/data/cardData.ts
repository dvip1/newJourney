export type CardType = {
    id: number
    title: string
    info: string
    img: string
    date: string
    tag: string
    content: {
        id: number
        component: 'text' | 'code' | 'image' | 'paragraph'
        text?: string
        code?: string
        image?: string
        paragraph?: string
        isDropCap?: boolean

    }[]
}
export let CardData: CardType[] = [
    {
        id: 1,
        title: "Web Development",
        info: "I can build beautiful and scalable web apps using React and NodeJS",
        img: "https://lh3.googleusercontent.com/IfqcD9hZWV1tohxFc8gyiP9kVjz0Igg1trtKkYD3qxvEziIxbnD2b8mCpmJqC015XWD14Pvwy-0vRUSJltvEa9tcY8TnWpO0zYJaR1IPjJlRrWpo3Q=w960",
        date: '2021-09-01', tag: 'Technology',
        content: [
            { id: 1, component: 'text', text: 'React is an amazing library for building user interfaces.' },
        ]
    },
    {
        id: 2,
        title: "App Development",
        info: "I can build beautiful and scalable mobile apps using Flutter and Dart",
        img: "https://lh3.googleusercontent.com/aiJojq_gpPLqLhU0PZH6Dog-OjIMti_hiclF_6oqxucGuvywn_AEtu2Qrk2f4WxEhRWMjXkz8qXpTCGoj5TZ0DUCEZ5UIXnXTSIu_7ndg2dTNmQbdkCO=w960",
        date: '2021-09-01', tag: 'Technology',
        content: [
            { id: 1, component: 'text', text: 'React is an amazing library for building user interfaces.' },
        ]

    },
    {
        id: 3,
        title: "UI/UX Design",
        info: "I can design beautiful and scalable UI/UX using Figma and Adobe XD",
        img: "https://lh3.googleusercontent.com/mLGakWFjdX3zGBIhCUWqzjlj3gUXOY8hOed_ISzomlpNmjKWUiqCFyNGGAZFneVaK30v4GUpjn7lyIsI2Z7KPvMKrYkumzBr2nwbVe3BQKRkpam3sA=w960",
        date: '2021-09-01', tag: 'Technology',
        content: [
            {
                id: 3
                , component: 'code', text: 'function helloWorld(){return "Hello World",}',

            }
        ]

    },
    {
        id: 4,
        title: "UI/UX Design",
        info: "I can design beautiful and scalable UI/UX using Figma and Adobe XD",
        img: "https://lh3.googleusercontent.com/mLGakWFjdX3zGBIhCUWqzjlj3gUXOY8hOed_ISzomlpNmjKWUiqCFyNGGAZFneVaK30v4GUpjn7lyIsI2Z7KPvMKrYkumzBr2nwbVe3BQKRkpam3sA=w960",
        date: '2021-09-01', tag: 'Technology',
        content: [
            {
                id: 3
                , component: 'code', text: 'function helloWorld(){return "Hello World",}',

            }
        ]

    }

]
