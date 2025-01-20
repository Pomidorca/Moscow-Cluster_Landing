<template>
    <div>
        <slot class="text-4xl font-medium text-PrimaryOrange2"></slot>
        <div class="grid grid-cols-4 gap-6 mt-10 max-lg:grid-cols-1">
            <button class="px-5 py-8 bg-PrimaryOrange2 rounded-2xl w-full flex flex-col items-start"
                v-for="item in list" :ket="item.id">
                <img :src="item.image" alt="Icons" loading="lazy">
                <span class="mt-4 text-Background text-2xl font-medium">{{ item.title }}</span>
            </button>
        </div>
    </div>
</template>

<script setup>
const list = [
    {
        id: 1,
        image: '/image/main/18.svg',
        title: 'Устав'
    },
    {
        id: 2,
        image: '/image/main/19.svg',
        title: 'Свидетельство'
    },
    {
        id: 3,
        image: '/image/main/20.svg',
        title: 'ЕГРЮЛо создании'
    },
    {
        id: 4,
        image: '/image/main/21.svg',
        title: 'ЕГРЮЛ об учете'
    }
]
</script>