<template>
    <div class="bg-[#D9C7A7] px-20 py-3 max-xl:px-6 max-lg:hidden">
        <ul
            class="flex items-center justify-center gap-x-10 text-xl text-SecondaryOrange max-xl:text-lg max-xl:gap-x-5">
            <div v-for="item in list" :key="item.id">
                <router-link :to="item.path">{{ item.title }}</router-link>
            </div>
        </ul>
    </div>
</template>

<script setup>
import { useLinkStore } from '@/store/index';

const store = useLinkStore();
const list = store.links
</script>