<template>
    <div>
        <h2 class="text-PrimaryOrange2 text-4xl font-bold max-md:text-2xl">Преимущества Кооператива</h2>
        <div class="mt-16 max-md:mt-4">
            <div class="max-lg:flex">
                <button @click="toggle = true"
                    class="px-[71px] py-6 bg-PrimaryOrange2 rounded-t-[24px] text-Background text-2xl leading-6 max-md:px-3 max-md:text-base max-md:py-3">Для
                    физических лиц</button>
                <button @click="toggle = false"
                    class="px-[71px] py-6 bg-[#D9C7A7] rounded-t-3xl text-PrimaryOrange2 text-2xl leading-6 max-md:px-3 max-md:text-base max-md:py-3">Для
                    юридических лиц</button>
            </div>
            <div v-if="toggle"
                class="bg-PrimaryOrange2 px-10 py-[70px] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl flex flex-col gap-y-14 max-md:px-5">
                <div class="flex max-lg:flex-col items-center gap-x-6" v-for="item in list" :key="item.id">
                    <img class="max-md:h-60" :src="item.img" alt="Image" loading="lazy">
                    <div class="max-lg:text-center">
                        <h3 class="text-3xl font-medium text-white leading-10 max-md:text-2xl max-lg:mt-5">{{ item.title
                            }}</h3>
                        <p class="mt-5 text-white text-2xl leading-8 max-md:text-lg">{{ item.description }}</p>
                    </div>
                </div>
            </div>
            <div v-else
                class="bg-[#D9C7A7] px-10 py-[70px] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl flex flex-col gap-y-14 max-md:px-5">
                <div class="flex max-lg:flex-col items-center gap-x-6" v-for="item in toggleList" :key="item.id">
                    <img class="max-md:h-60" :src="item.img" alt="Image" loading="lazy">
                    <div class="max-lg:text-center">
                        <h3 class="text-3xl font-medium text-PrimaryOrange3 leading-10 max-md:text-2xl max-lg:mt-5">{{
                            item.title }}</h3>
                        <p class="mt-5 text-PrimaryOrange2 text-2xl leading-8 max-md:text-lg">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const toggle = ref(true)
const list = [
    {
        id: 1,
        img: '/image/main/6.png',
        title: 'Товары и услуги на выгодных условиях',
        description: 'Мы обеспечиваем доступ пайщиков к качественным продуктам по специальным ценам, посредством совместной закупки у производителей и крупных оптовых поставщиков, а также организации собственных производств.'
    },
    {
        id: 2,
        img: '/image/main/7.png',
        title: 'Участие в целевых программах',
        description: 'Для повышения качества жизни пайщиков и их семей а общих собраниях пайщиков Кооператива мы выбираем для реализации целевые программы, полезные и понятные каждому.'
    },
    {
        id: 3,
        img: '/image/main/8.png',
        title: 'Совместное хозяйство',
        description: 'Для решения своих насущных задач, пайщики Кооператива могут объединять свои ресурсы и навыки, например, строительство жилых объектов в складчину, совместная покупка автомобилей, станков и оборудования,  создание производства коллективной формы собственности, организация совместного досуга.'
    },
    {
        id: 4,
        img: '/image/main/9.png',
        title: 'Равноправное совладение',
        description: 'Каждый пайщик Кооператива – совладелец имущества и производственных мощностей кооператива. У кооператива нет других собственников, кроме пайщиков, нет никого, вроде учредителя в ООО, кто присвоил бы себе доход от деятельности пайщиков. Доход от работы кооператива, распределяется среди пайщков пропорционально их участию в работе кооператива. Кооператив - это сообщество равных, все решения принимаются по принципу “один пайщик - один голос”.'
    }
]

const toggleList = [
    {
        id: 1,
        img: '/image/main/10.png',
        title: 'Оптимизация налогообложения',
        description: 'Благодаря инструментам потребительской кооперации бизнес имеет возможность совершенно законно снизить налогооблагаемую базу до 0%. ',
    },
    {
        id: 2,
        img: '/image/main/11.png',
        title: 'Защита собственности',
        description: 'Перевод собственности в пай Кооператива даёт 100% защиту активов от притязаний 3-х сторон (банки, приставы, бывшие партнёры): ст. 22 ФЗ 3085-1 «На вступительные и паевые взносы не могут обращаться взыскания по личным долгам и обязательствам пайщиков». Выйти из кооператива можно в любой момент, сохранив в неприкосновенности все свои активы.'
    },
    {
        id: 3,
        img: '/image/main/12.png',
        title: 'Новая лояльная аудитория для сбыта товаров и услуг',
        description: 'Если ваш бизнес является поставщиком качественных товаров или услуг, вы можете использовать Кооператив как один из каналов сбыта. Кооператив сам будет продвигать вашу продукцию среди своих пайщиков, число которых постоянно увеличивается.',
    },
    {
        id: 4,
        img: '/image/main/13.png',
        title: 'Развитие и масштабирование вашего дела вместе с кооперативом',
        description: 'Членство в кооперативе откроет вам доступ к использованию нашей материально-технической базы, патентов, и пр., а также даст возможность получать необходимое оборудование и ресурсы для развития.',
    }
]

</script>