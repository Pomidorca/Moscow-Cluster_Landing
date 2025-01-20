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
        title: 'Товары первой необходимости по льготным ценам',
        description: 'Мы обеспечиваем доступ пайщиков к качественным продуктам по справедливой цене. Снижение цены обеспечивается посредством совместной закупки продуктов + прямой работой с производителямии крупными оптовыми поставщиками, а также специальным налоговым режимом для потребительских Кооперативов.'
    },
    {
        id: 2,
        img: '/image/main/7.png',
        title: 'Создание доходных активов',
        description: 'Для пайщиков Кооператива мы создаём целевые программы с высоким уровнем доходности (в среднем, не менее 30-40%) и надёжности, чтобы они могли постоянно повышать свои доходы и качество жизни.'
    },
    {
        id: 3,
        img: '/image/main/8.png',
        title: 'Квартира или машина с существенной экономией',
        description: 'Пайщики Кооператива смогут объединять свои финансовые ресурсы для выдачи займов под строительство жилых объектов ради получения там недвижимости по выгодной цене, либо для покупки автомобиля без наценок и переплат.'
    },
    {
        id: 4,
        img: '/image/main/9.png',
        title: 'Статус совладельца Кооператива',
        description: 'Каждый участник Кооператива становится пайщиком, совладельцем потребительского кооператива. У нашего кооператива нет другого собственника, кроме самих пайщиков, нет никого, кто присвоил бы себе доход. Доход нашего кооператива идёт на развитие тех направлений деятельности, которые одобрят сами пайщики. Кооператив - это сообщество равных. Один пайщик - один голос.'
    }
]

const toggleList = [
    {
        id: 1,
        img: '/image/main/10.png',
        title: 'Экономия на налогообложении',
        description: 'Благодаря инструментам потребительской кооперации бизнес имеет возможность перевести свою деятельность из агрессивной внешней коммерческой среды в область не коммерческой деятельности и совершенно законно получить без срочный налоговый офшор 0% просто заменив традиционные договора купли-продажи на договора обмена паями в Кооперативе.',
    },
    {
        id: 2,
        img: '/image/main/11.png',
        title: 'Защита собственности',
        description: 'Использование Кооператива в качестве «хранителя активов» даёт беспрецедентный уровень гарантий неприкосновенности имущества.Т.к. на паевые взносы пайщиков не обращаются иски по долгам пайщиков – физических или юридических лиц, а также ИП. Перевод собственности в пай позволит защитить её от арестов и обременений. Это 100% защита активов от притязаний 3-х сторон (банки, приставы, бывшие партнёры). Любой предприниматель сможет вступить в Кооператив и в любое время выйти из него, ничего не потеряв, но сохранив в неприкосновенности все свои активы.'
    },
    {
        id: 3,
        img: '/image/main/12.png',
        title: 'Новые каналы сбыта для товаров и услуг',
        description: 'Если ваш бизнес является поставщиком качественных товаров или услуг, вы можете использовать Кооператив как один из каналов сбыта. Кооператив сам будет продвигать вашу продукцию среди своих пайщиков, число которых постоянно увеличивается.',
    },
    {
        id: 4,
        img: '/image/main/13.png',
        title: 'Привлечение инвестиций в проекты',
        description: 'Членство в кооперативе откроет вам доступ к его инвестиционным возможностям. Это позволит вам привлекать инвестиции для развития своих проектов или продуктов путём создания паевого фонда, тем самым обеспечивая необходимое финансирование и поддержку воплощения ваших идей в жизнь.',
    }
]

</script>