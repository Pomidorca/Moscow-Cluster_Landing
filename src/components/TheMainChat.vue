<template>
    <div class="flex flex-col min-h-screen max-md:min-h-[70vh]">
        <div class="bg-PrimaryOrange3 py-6 px-[50px] rounded-t-3xl">
            <h3 class="text-white text-2xl font-medium max-md:text-xl">Часто задаваемые вопросы</h3>
        </div>
        <div
            class="bg-[#D9C7A7] p-8 flex-grow overflow-y-auto max-h-[calc(90vh_-_20rem)] max-md:max-h-[calc(70vh_-_20rem)]">
            <div class="chat-messages">
                <div class="mb-6" v-for="message in messages" :key="message.id">
                    <div :class="{ 'justify-start': message.sender === 'bot', 'justify-end': message.sender === 'user' }"
                        class="flex items-end gap-x-2.5 w-full">
                        <img class="max-md:hidden" v-if="message.sender === 'bot'" src="/image/main/Profile1.svg"
                            alt="Profile" loading="lazy">
                        <div :class="{ 'bg-PrimaryOrange3 text-white': message.sender === 'bot', 'bg-white': message.sender === 'user' }"
                            class="w-[45%] p-4 rounded-2xl max-md:w-full">
                            <div class="flex justify-between items-center">
                                <span
                                    :class="{ 'text-white font-bold': message.sender === 'bot', 'font-bold': message.sender === 'user' }">
                                    {{ message.sender === 'bot' ? 'Помощник' : 'Вы' }}
                                </span>
                                <p class="flex items-center gap-x-1 font-medium"
                                    :class="{ 'text-white': message.sender === 'bot' }">
                                    {{ message.time }} <img src="/image/main/Interface.svg" alt="logo" loading="lazy">
                                </p>
                            </div>
                            <p :class="{ 'text-white': message.sender === 'bot' }">{{ message.text }}</p>
                        </div>
                        <img class="max-md:hidden" v-if="message.sender === 'user'" src="/image/main/Profile.png"
                            alt="Profile">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#D9C7A7] p-8 rounded-b-3xl border-gray-200">
            <div class="flex gap-x-5 max-md:flex-col max-md:gap-y-5">
                <button @click="sendMessage('Как я могу стать пайщиком?')"
                    class="text-center py-4 bg-white rounded-2xl w-full text-PrimaryDark text-lg leading-6 max-md:py-1 max-md:text-base max-md:rounded-xl">
                    Как я могу стать пайщиком?
                </button>
                <button @click="sendMessage('Какие взносы мне нужно вносить в Кооператив?')"
                    class="text-center py-4 bg-white rounded-2xl w-full text-PrimaryDark text-lg leading-6 max-md:py-1 max-md:text-base max-md:rounded-xl">
                    Какие взносы мне нужно вносить в Кооператив?
                </button>
            </div>
            <div class="flex flex-col gap-y-5 mt-5">
                <button @click="sendMessage('Может ли человек, не являющийся гражданином РФ стать пайщиком ПК?')"
                    class="text-center py-4 bg-white rounded-2xl w-full text-PrimaryDark text-lg leading-6 max-md:py-1 max-md:text-base max-md:rounded-xl">
                    Может ли человек, не являющийся гражданином РФ стать пайщиком ПК?
                </button>
                <button
                    @click="sendMessage('Нужно ли физическому лицу оплачивать НДФЛ=13% и подавать декларацию на получение дохода при получении возврата паевого взноса из ПК?')"
                    class="text-center py-4 bg-white rounded-2xl w-full text-PrimaryDark text-lg leading-6 max-md:rounded-xl max-md:hidden"
                    max-md:py-1 max-md:text-base>
                    Нужно ли физическому лицу оплачивать НДФЛ=13% и подавать декларацию на получение дохода при
                    получении
                    возврата паевого взноса из ПК?
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);

const sendMessage = (text) => {
    messages.value.push({
        id: messages.value.length + 1,
        sender: 'user',
        time: getCurrentTime(),
        text,
    });

    respondToMessage(text);
};


const respondToMessage = (userMessage) => {
    let botResponse = "Я не понимаю ваш запрос.";
    const lowerCaseUserMessage = userMessage.toLowerCase();

    if (lowerCaseUserMessage.includes("могу")) {
        botResponse = "Чтобы стать пайщиком, надо написать заявление на вступление в пайщики с указанием обязательных по Закону данных, а также оплатить вступительный и минимальный паевой взнос.";
    } else if (lowerCaseUserMessage.includes("какие взносы")) {
        botResponse = "Вам необходимо внести следующие взносы...";
    } else if (lowerCaseUserMessage.includes("пайщиком пк")) {
        botResponse = "Да, гражданином РФ быть не обязательно...";
    } else if (lowerCaseUserMessage.includes("ндфл")) {
        botResponse = "Нет, оплачивать НДФЛ не нужно...";
    }

    setTimeout(() => {
        messages.value.push({
            id: messages.value.length + 1,
            sender: 'bot',
            time: getCurrentTime(),
            text: botResponse,
        });
    }, 1000);
};

const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

</script>
