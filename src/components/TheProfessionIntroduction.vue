<template>
    <div>
        <h2 class="text-4xl font-medium text-PrimaryOrange3 max-md:text-2xl">Документы для вступления в Кооператив</h2>
        <div class="grid grid-cols-3 gap-6 mt-10 max-lg:grid-cols-1">
            <div class="bg-SecondaryDark px-5 py-7 rounded-2xl w-full" v-for="item in list1" :key="item.id">
                <div class="flex justify-between">
                    <img :src="item.image" alt="PDF" loading="lazy">
                    <a class="flex items-center gap-x-4" :href="item.path" download>0.2 MB <img src="/image/main/download.svg" alt=""></a>
                </div>
                <span class="text-xl text-PrimaryOrange3 font-semibold mt-10 block">{{ item.title }}</span>
            </div>
        </div>
      <div class="grid grid-cols-3 gap-6 mt-10 max-lg:grid-cols-1">
        <div class="bg-SecondaryDark px-5 py-7 rounded-2xl w-full" v-for="item in list3" :key="item.id">
          <div class="flex justify-between">
            <img :src="item.image" alt="PDF" loading="lazy">
            <a class="flex items-center gap-x-4" :href="item.path" download>0.2 MB <img src="/image/main/download.svg" alt=""></a>
          </div>
          <span class="text-xl text-PrimaryOrange3 font-semibold mt-10 block">{{ item.title }}</span>
        </div>
      </div>
        <div class="grid grid-cols-2 gap-6 mt-6 max-md:grid-cols-1">
            <div class="bg-SecondaryDark px-5 py-7 rounded-2xl w-full" v-for="item in list2" :key="item.id">
                <div class="flex justify-between">
                    <img :src="item.image" alt="PDF" loading="lazy">
                    <a class="flex items-center gap-x-4" :href="item.path" download> <img src="/image/main/download.svg"
                            alt=""></a>
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
        title: 'Договор МПК Пайщик',
        path: '/documents/dogovor.pdf'
    },
    {
        id: 2,
        image: '/image/main/22.svg',
        title: 'Положение об имуществе МПК МИР паевый фонд',
        path: '/documents/polozhenye_imyshestvo.pdf'
    },
    {
        id: 3,
        image: '/image/main/22.svg',
        title: 'Положение о членстве в МПК мир',
        path: '/documents/polozhenye-4lenstvo.pdf'
    }
]
const list2 = [
    {
        id: 1,
        image: '/image/main/22.svg',
        title: 'Положение о общем собрании МПК МИР',
        path: '/documents/polozhenie-o-sobranii.pdf'
    },
    {
        id: 2,
        image: '/image/main/22.svg',
        title: 'Положение о взносах МПК МИР',
        path: '/documents/polozhenye-o-vznosax.pdf'
    },
]
const list3 = [
  {
    id: 1,
    image: '/image/main/22.svg',
    title: 'Заявление о выходе из МПК МИР',
    path: '/documents/zayvlenei-na-vixod.pdf'
  },
  {
    id: 2,
    image: '/image/main/22.svg',
    title: 'Заявление о вступлении МПК МИР ЮЛ',
    path: '/documents/zayva-vstyplenie-UP.pdf'
  },
  {
    id: 3,
    image: '/image/main/22.svg',
    title: 'Заявление о вступлении МПК МИР ФЛ',
    path: '/documents/zayva-na-vstyplenie-FL.pdf'
  }
]
</script>