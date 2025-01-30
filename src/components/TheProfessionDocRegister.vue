<template>
    <div>
        <slot class="text-4xl font-medium text-PrimaryOrange2"></slot>
        <div class="grid grid-cols-3 gap-6 mt-10 max-lg:grid-cols-1">
            <a class="px-5 py-8 bg-PrimaryOrange2 rounded-2xl w-full flex flex-col items-start"
                v-for="item in list" :key="item.id" :href="item.path" download>
                <img :src="item.image" alt="Icons" loading="lazy">
                <span class="mt-4 text-Background text-2xl font-medium">{{ item.title }}</span>
            </a>
        </div>
    </div>
</template>

<script setup>
const list = [
    {
        id: 1,
        image: '/image/main/18.svg',
        title: 'Устав',
        path: '/documents/UchDokum_f913a815c0a84ee09e0fa092fac2acd4.pdf'
    },
    {
        id: 2,
        image: '/image/main/19.svg',
        title: 'Свидетельство',
        path: '/documents/SvidUchetUL_9aa4222e99724cda8e4b48a787d0a0f5.pdf'
    },
    {
        id: 3,
        image: '/image/main/20.svg',
        title: 'ЕГРЮЛо создании',
        path: '/documents/VypZapEGRUL_750078bc24e347528b52aec849869ae6.pdf'
    }
]
</script>