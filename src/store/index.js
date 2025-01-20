import { defineStore } from "pinia";

export const useLinkStore = defineStore('links', {
    state: () => ({
        links: [
            {
                id: 1,
                title: 'О кооперативе',
                path: 'InfoPage'
            },
            {
                id: 2,
                title: 'Стать пайщиком',
                path: 'GetProfessionPage'
            },
            {
                id: 3,
                title: 'Целевые программы',
                path: 'TargetProgramPage'
            },
            {
                id: 4,
                title: 'Кооперативные участки',
                path: 'CooperativeAreaPage'
            },
            // {
            //     id: 5,
            //     title: 'Предложить проект',
            //     path: 'OfferProjectPage'
            // },
            {
                id: 6,
                title: 'Контакты',
                path: 'ContactsPage'
            },
        ]
    })
})