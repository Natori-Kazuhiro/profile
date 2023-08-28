<template>
  <default-layout>
    <ContactDialog />
    <FixedCircle />
    <main>
      <div class="fade-in-element" v-scroll-reveal>
        <FV />
      </div>
      <div class="fade-in-element" v-scroll-reveal>
        <Skills />
      </div>
      <div class="fade-in-element" v-scroll-reveal>
        <Projects />
      </div>
      <div class="fade-in-element" v-scroll-reveal>
        <CTA />
      </div>
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

import VueScrollReveal from 'vue-scroll-reveal';

export default {
  components: {
    FixedCircle,
    ContactDialog,
    FV,
    Skills,
    Projects,
    CTA
  },
  directives: {
    ScrollReveal: VueScrollReveal(),
  },
};
</script>

<script setup>
definePageMeta({
  layout: 'default-layout',
});
</script>