<template>
    <div class="mx-auto">
        <div class="flex justify-between items-center bg-PrimaryOrange px-10 py-8 w-full max-md:py-4">
            <div>
                <router-link class="text-Background text-4xl font-bold max-md:text-2xl" to="/">Logo</router-link>
            </div>
            <div class="flex items-center gap-x-6 bg-Background pl-6 pr-2 py-2 rounded-[48px] ml-40 max-lg:hidden">
                <div class="flex items-center gap-x-6">
                    <button class="flex items-center gap-x-2"><img class="w-6" src="/image/header/telegram.svg"
                            alt="Telegram">Telegram</button>
                    <button class="flex items-center gap-x-2"><img class="w-6" src="/image/header/whatsApp.svg"
                            alt="Whatsapp">Whatsapp</button>
                </div>
                <button><img src="/image/header/Button_sync.svg" alt="Reset"></button>
            </div>
            <div class="flex gap-x-6">
                <a class="px-6 py-3 rounded-lg bg-Background text-PrimaryOrange text-lg leading-6 max-md:px-3 max-md:py-2 max-md:text-base" href="https://mpkmir.ru/my/auth/login">Войти</a>
                <button @click="modalWindow = !modalWindow" class="lg:hidden"><img
                        :src="modalWindow ? '/image/header/close.svg' : '/image/header/Burger.svg'" class="max-lg:block"
                        alt="Burger"></button>
                <a class="px-6 py-3 rounded-lg border border-Background text-Background text-lg leading-6 hover:bg-Background hover:duration-300 hover:text-PrimaryOrange max-lg:hidden" href="https://mpkmir.ru/my/auth/register">Регистрация</a>
            </div>
        </div>
        <div v-if="modalWindow" class="absolute right-0 bg-PrimaryOrange rounded-b-xl">
            <div class="flex flex-col items-start gap-y-3 px-4 py-3">
                <ul class="text-Background text-xl" v-for="item in list" :key="item.id">
                    <button @click="modalWindow = false">
                        <router-link :to="item.path">{{ item.title }}</router-link>
                    </button>
                </ul>
                <a
                    class="w-full px-6 py-3 rounded-lg border border-Background text-Background text-lg leading-6 hover:bg-Background hover:duration-300 hover:text-PrimaryOrange active:bg-white" href="https://mpkmir.ru/my/auth/register">Регистрация</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLinkStore } from '@/store';

const store = useLinkStore();
const list = store.links
const modalWindow = ref(false);
const router = useRouter();

</script>
