<template>
  <div class="bg-Background">
    <header>
      <Header />
      <TheHeaderButton />
    </header>
    <main class="mt-10 mb-10">
      <router-view />
    </main>
    <footer>
      <Footer />
      <TheFooterAgreementPolicy />
    </footer>
  </div>
</template>

<script setup>
import Header from '@/components/TheHeader.vue'
import TheHeaderButton from '@/components/TheHeaderButton.vue';
import Footer from '@/components/TheFooter.vue';
import TheFooterAgreementPolicy from '@/components/TheFooterAgreementPolicy.vue';
</script>
