<template>
  <default-layout>
    <ContactDialog />
    <FixedCircle />
    <main>
        <FV />
        <Skills />
        <Projects />
        <CTA />
    </main>
  </default-layout>
</template>

<script>
import FixedCircle from '@/components/FixedCircle.vue';
import ContactDialog from '@/components/ContactDialog.vue';
import FV from '@/components/FV.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import CTA from '@/components/CTA.vue';

// JavaScript ファイルのインポート
// import contactDialog from '@/assets/js/contactDialog.js'; 


export default {
  components: {
    FixedCircle,
    ContactDialog,
    FV,
    Skills,
    Projects,
    CTA
  },
  mounted() {
    // インポートした JavaScript ファイルの関数を実行
    myScript.myFunction();
  }
};
</script>

<script setup>
definePageMeta({
  layout: 'default-layout',
});
</script>