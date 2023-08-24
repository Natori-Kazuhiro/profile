<template>
    <p id="fixedCircle"></p>
</template>

<style scoped>
    #fixedCircle{
        position: fixed;
        inset: auto -15vw -10vw auto;
        width: 50vw;
        height: 50vw;
        border-radius: 50%;
        background:
            linear-gradient(0deg, rgba(255,121,0,1), rgba(195,69,69,0)),
            linear-gradient(162deg, rgba(255,255,255,1), rgba(255,0,255,0)),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 74 74' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        mix-blend-mode: difference;
        opacity: 0.7;
        transition: 0.5s;
    }
    #fixedCircle.isFiltered{
        opacity: 0.05;
        transition: 1s;
        filter: hue-rotate(180deg);
    }

    @media (width <= 960px) {
        #fixedCircle{
            width: 100vw;
            height: 100vw;
        }
    }
</style>