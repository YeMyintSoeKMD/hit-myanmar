<template>
    <div class="container mx-auto px-8 2xl:px-40 pt-14">
        <!-- first section -->
        <div v-if="!quizComplete" class="px-40">
            <div class="flex items-center">
                <progress class="progress progress-success h-4 ms-5" :value="progress" max="100"></progress>
            </div>

            <div class="mt-40">
               <div class="w-8/12 mx-auto">
                <h1 class="mb-8 font-bold text-lg">{{currentQuestion.text}}</h1>
                <div class="flex flex-col gap-y-3">
                    <button :class="['border border-2 border-stone-300 border-b-4 rounded-xl py-3 px-3 flex items-center gap-x-3',selectedOption == index ? 'bg-stone-100 border-blue-400 text-blue-500' : '',showContinue ? 'cursor-auto':'hover:bg-stone-100']" v-for="(option,index) in currentQuestion.options" :key="index" @click="selectOption(index)">
                        <span :class="['border border-2 border-stone-300 px-2 rounded-md',selectedOption == index ? 'border-blue-400 font-semibold':'']">{{ index+1 }}</span>
                        <span :class="[selectedOption == index ? 'font-semibold' : '']">{{ option }}</span>
                    </button>
                </div>
               </div>
            </div>
        </div>

        <!-- second section -->
        <div v-if="quizComplete" class="mx-auto w-80 pt-24">
            <img src="/images/celebrate.gif" class="w-full mb-5" />
            <h1 class="text-green-600 font-bold text-3xl text-center">Committed!</h1>
            <p class="text-center mt-5 text-stone-800">Lorem ipsum dolor sit amet hee hee.</p>
        </div>
       
    </div>

    <div class="h-0.5 bg-stone-200 mt-64"></div>
    <div class="container mx-auto px-96 flex items-center justify-between mt-8">
        <div>
            <div class="flex items-center gap-x-2" :class="isCorrect !== null && isCorrect ? '' : 'hidden'">
                <h2 class="font-bold text-xl text-green-600">Nice Job!</h2>
            </div>

            <div class="flex items-center gap-x-2" :class="isCorrect !== null && !isCorrect ? '' : 'hidden'">
                <div>
                    <h2 class="font-bold text-xl text-red-600">Correct Solution:</h2>
                    <h2 class="text-red-400 text-sm font-semibold mt-1">{{ currentQuestion.correctAnswer }}</h2>
                </div>
            </div>
        </div>

        <div>
            <button v-if="!quizComplete" :class="['uppercase px-10 py-3 rounded-xl', selectedOption !== null ? 'bg-green-600 text-white' : 'bg-stone-300 text-stone-400', showContinue ? 'hidden' : '']" @click="checkAnswer">Check</button>
            <button v-if="quizComplete" class="uppercase px-10 py-3 rounded-xl bg-green-500 text-white">New Continue</button>
            <button v-else class="uppercase px-10 py-3 rounded-xl bg-green-500 text-white" :class="[showContinue ? (isCorrect ? 'bg-green-600' : 'bg-red-600') : 'hidden']" @click="nextQuestion">Continue</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const questions = ref([
    {
        text: 'What does HTML stand for?',
        options: ['Hyper Text Makeup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
        correctAnswer: 'Hyper Text Markup Language'
    },
    {
        text: 'Which HTML element is used for the largest heading?',
        options: ['<h1>', '<heading>', '<head>', '<h6>'],
        correctAnswer: '<h1>'
    }
]);

const currentQuestionIndex = ref(0);
const selectedOption = ref(null);
const isCorrect = ref(null);
const showContinue = ref(false);
const quizComplete = ref(false);
const answeredQuestions = ref(0);

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
const progress = computed(() => (answeredQuestions.value / questions.value.length) * 100);

function selectOption(index) {
    if (!showContinue.value) { // Prevent reselecting after checking the answer
        selectedOption.value = index;
        isCorrect.value = null;
    }
}

function checkAnswer() {
    if (selectedOption.value !== null) {
        isCorrect.value = currentQuestion.value.options[selectedOption.value] === currentQuestion.value.correctAnswer;
        showContinue.value = true;
        answeredQuestions.value++;
    }
}

function nextQuestion() {
    selectedOption.value = null;
    isCorrect.value = null;
    showContinue.value = false;

    if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
    } else {
        quizComplete.value = true;
    }
}
</script>

<style lang="scss" scoped>

</style>
