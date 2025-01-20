<template>
    <div class="mx-10 max-md:mx-5">
        <TheProfessionManagement />
        <TheProfessionDocRegister class="mt-20 max-md:mt-10">
            <template #default>
                <h2 class="text-4xl font-medium text-PrimaryOrange2 max-md:text-2xl">Документы о регистрации и
                    постановке на учёт</h2>
            </template>
        </TheProfessionDocRegister>
        <TheProfessionIntroduction class="mt-20 max-md:mt-10" />
        <TheProfessionDocRegister class="mt-20 max-md:mt-10">
            <template #default>
                <h2 class="text-4xl font-medium text-PrimaryOrange2">Путь участника кооператива</h2>
            </template>
        </TheProfessionDocRegister>
        <div class="mt-20 max-md:mt-10 max-md:hidden">
            <img class=" w-full bg-auto bg-center" src="/image/main/Frame.png" alt="Section" loading="lazy">
        </div>
    </div>
</template>

<script setup>
import TheProfessionManagement from '@/components/TheProfessionManagement.vue';
import TheProfessionDocRegister from '@/components/TheProfessionDocRegister.vue';
import TheProfessionIntroduction from '@/components/TheProfessionIntroduction.vue';
</script>