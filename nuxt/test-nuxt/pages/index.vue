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

export default {
  components: {
    FixedCircle,
    ContactDialog,
    FV,
    Skills,
    Projects,
    CTA
  },
};
</script>

<script setup>
definePageMeta({
  layout: 'default-layout',
});
</script>