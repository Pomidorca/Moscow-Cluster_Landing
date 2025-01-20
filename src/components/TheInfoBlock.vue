<template>
    <div>
        <h2 class="text-4xl font-medium text-PrimaryOrange2 max-md:text-2xl">Наш «МИР» построен на следующих базовых
            принципах:</h2>
        <div class="grid grid-cols-2 gap-6 mt-10 max-md:grid-cols-1">
            <div class="px-5 py-8 bg-PrimaryOrange2 rounded-2xl flex flex-col gap-y-5 items-start" v-for="item in list"
                :key="item.id">
                <img :src="item.image" alt="Icons" loading="lazy">
                <span class="text-2xl text-Background font-medium leading-8">{{ item.title }}</span>
                <p class="text-2xl text-Background">{{ item.description }}</p>
            </div>
            <div class="px-5 py-8 bg-PrimaryOrange2 rounded-2xl flex flex-col gap-y-5 items-start">
                <img src="/image/main/17.svg" alt="Icons" loading="lazy">
                <span class="text-2xl text-Background font-medium leading-8">Забота об интересах пайщиков</span>
                <p class="text-2xl text-Background">Кооператив действует на основе одобренной его членами политики
                    в
                    целях решения тех задач, что стоят перед
                    пайщиками.</p>
                <p class="text-2xl text-Background">
                    Эти простые и справедливые принципы - залог того, что кооператив будет надёжной защитой и опорой для
                    пайщиков и их экономических интересов!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const list = [
    {
        id: 1,
        image: '/image/main/14.svg',
        title: 'Добровольное членство и открытый состав',
        description: 'Мы обеспечиваем доступ пайщиков к качественным продуктам по справедливой цене. Снижение цены обеспечивается посредством совместной закупки продуктов + прямой работой с производителями и крупными оптовыми поставщиками, а также специальным налоговым режимом для потребительских Кооперативов.'
    },
    {
        id: 2,
        image: '/image/main/15.svg',
        title: 'Демократический контроль',
        description: 'Кооператив — это демократические организация, контролируемая его членами, которые активно участвуютв разработке политики и принятии решений в кооперативе. Выборные представители, отчитываются перед другими членами кооператива. В кооперативе его члены имеют равное право голоса - «один член — один голос».'

    },
    {
        id: 3,
        image: '/image/main/16.svg',
        title: 'Участие членов в экономической деятельности',
        description: 'Капитал кооператива складывается из взносов его членов - паевой капитал. Паевой капитал - общая собственность кооператива. Распределение доходов или выгоды среди членов кооператива производятся пропорционально их участию в деятельности кооператива. Расходы кооператива производятся в соответствии с решениями на основе демократического контроля членов кооператива.'
    },
]
</script>