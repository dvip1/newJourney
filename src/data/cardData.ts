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
            { id: 1, component: 'paragraph',isDropCap: true, text: 'Miso soup is a traditional Japanese soup that starts with a dashi stock and is flavored with miso paste. Dashi is an umami-rich stock made from dried seaweed and dried fish. Miso paste, meanwhile, is a paste made from soybeans, salt, and koji rice.            ' },
            {id: 2, component: 'text', text: 'The brothy soup usually contains tofu and green onions. It can also feature seaweed, mushrooms, daikon, and more. '}
            ,
            {id: 3, component: 'text', text: 'Miso soup is traditionally served with rice.            '}
        ]
    },
    {
        id: 2,
        title: "App Development",
        info: "I can build beautiful and scalable mobile apps using Flutter and Dart",
        img: "https://lh3.googleusercontent.com/aiJojq_gpPLqLhU0PZH6Dog-OjIMti_hiclF_6oqxucGuvywn_AEtu2Qrk2f4WxEhRWMjXkz8qXpTCGoj5TZ0DUCEZ5UIXnXTSIu_7ndg2dTNmQbdkCO=w960",
        date: '2021-09-01', tag: 'Technology',
        content: [
            { id: 1, component: 'paragraph',isDropCap: true, text: "Yaki udon noodles is one of my favorite weeknight meals to make because it's so fast and easy to make! The yaki udon noodle sauce is only 5 ingredients, and the udon noodles are ready to stir fry in under 5 minutes. Throw in any vegetables and protein you'd like because these stir fried udon noodles are super versatile and taste good with just about anything. Also they're ready in 20 minutes, start to finish!            " },
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
                id: 3, isDropCap: true
                , component: 'paragraph', text: "Hippari Udon which means, pulled udon, is a regional specialty from Yamagata prefecture in Tohoku Japan.  Nobody knows where the name actually came from, but some people think it came from the way they eat this dish which is by pulling the noodles from a pot in the center of a dining table for sharing.                "
            },
            {
                id:4, component: 'text', text: "The cooked noodles are pulled from a pot, and dipped into a individual dipping sauce with varieties of condiments which makes this dish unique.  The example of condiments are chopped scallions, natto (Japanese fermented soybeans), a can of sardine and a raw egg which are all staples in their pantry at home.  This is a dish created for the winter time in Yamagata to be able to make any time without going to a store. Also another important fact is that this dish was created for people to get connected and social with neighbors.  Gathering and pulling noodles from one pot together is a good way to social with neighbors in a cold snowy days in winter where people could get isolated.                "
            }
        ]

    },
    {
        id: 4,
        title: "UI/UX Design",
        info: "I can design beautiful and scalable UI/UX using Figma and Adobe XD",
        img: "https://lh3.googleusercontent.com/51moDkmVWptBFXRReuACKocS_fsOoYtfT-C78onEUKeRr7ky4l_ZsuZMK2AnE7-MPRbLzcKTAIFmNyyN7ACo0-eygmXaGeR0ItYtRcYNE8-_L8RHqkA=w960",
        date: '2021-09-01', tag: 'Technology',
        content: [
            {
                id: 3, isDropCap: true
                , component: 'paragraph', text: 'If you can, freeze the pre-cooked udon noodle packet ahead of time before cooking. If not, you can use them straight from the fridge as well. But after several experiments, I found that frozen udon noodles have a slightly better texture in this dish. More on this below:                ',

            },
            {
                id: 4, 
                component: 'text', text: "Drop your (frozen or unfrozen) udon noodles in rapidly boiling water. Once they’re in the boiling water, the water temperature will decrease and stop boiling because the udon noodles are cold. That’s okay and is a good thing because this prevents them from overcooking, and the water is just hot enough to separate the noodles. Udon noodle texture should be chewy yet soft. Stir the noodles gently until each noodle strand is separated and flexible. This should take 1 - 2 minutes.                "
            }
         
        ]

    }

]
