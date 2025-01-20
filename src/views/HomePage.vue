<template>
    <div>
        <TheMainSection />
        <div class="mx-10 max-md:mx-5">
            <TheMainAdditional class="mt-20 max-md:mt-10" />
            <TheMainChat class="mt-20 max-md:mt-10" />
        </div>
    </div>
</template>
<script setup>
import TheMainSection from '@/components/TheMainSection.vue';
import TheMainAdditional from '@/components/TheMainAdditional.vue';
import TheMainChat from '@/components/TheMainChat.vue';
</script>
