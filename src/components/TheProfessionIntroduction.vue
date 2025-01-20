<template>
    <div>
        <h2 class="text-4xl font-medium text-PrimaryOrange3 max-md:text-2xl">Документы для вступления в Кооператив</h2>
        <div class="grid grid-cols-3 gap-6 mt-10 max-lg:grid-cols-1">
            <div class="bg-SecondaryDark px-5 py-7 rounded-2xl w-full" v-for="item in list1" :key="item.id">
                <div class="flex justify-between">
                    <img :src="item.image" alt="PDF" loading="lazy">
                    <span class="flex items-center gap-x-4">0.2 MB <img src="/image/main/download.svg" alt=""></span>
                </div>
                <span class="text-xl text-PrimaryOrange3 font-semibold mt-10 block">{{ item.title }}</span>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-6 mt-6 max-md:grid-cols-1">
            <div class="bg-SecondaryDark px-5 py-7 rounded-2xl w-full" v-for="item in list2" :key="item.id">
                <div class="flex justify-between">
                    <img :src="item.image" alt="PDF" loading="lazy">
                    <button class="flex items-center gap-x-4">0.2 MB <img src="/image/main/download.svg"
                            alt=""></button>
                </div>
                <span class="text-xl text-PrimaryOrange3 font-semibold mt-10 block">{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const list1 = [
    {
        id: 1,
        image: '/image/main/22.svg',
        title: 'Порядок вступления',
    },
    {
        id: 2,
        image: '/image/main/22.svg',
        title: 'Порядок вступления',
    },
    {
        id: 3,
        image: '/image/main/22.svg',
        title: 'Порядок вступления',
    }
]
const list2 = [
    {
        id: 1,
        image: '/image/main/22.svg',
        title: 'Порядок вступления',
    },
    {
        id: 2,
        image: '/image/main/22.svg',
        title: 'Порядок вступления',
    },
]
</script>