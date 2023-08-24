<template>
    <!-- モーダル -->
    <dialog id="contactDialog">
        <div class="contactDialogInner js-contactDialogInner">
            <iframe id="contactDialogIframe" src="https://docs.google.com/forms/d/e/1FAIpQLSfxlrSsCUGl79m6VLtDI5Vq0_FpmrwZ9XzwKqoyLhZLE5cHlA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
            <button class="contactDialogClose js-contactDialogClose"><span></span>close</button>
        </div>
    </dialog>
</template>

<style scoped>
    #contactDialog{
        width: 95cqw;
        height: auto;
        max-height: 90vh;
        margin: auto;
        overflow: hidden;
    }

    #contactDialog::backdrop{
        background: rgba(0, 0, 0, 0.7);
    }

    #contactDialog .contactDialogInner{
        position: relative;
        width: 100%;
        height: 100%;
    }

    #contactDialog .contactDialogInner .contactDialogClose{
        position: absolute;
        inset: 0 0 auto auto;
        width: 6em;
        height: 6em;
        border: none;
        padding-top: 3em;
        font-size: 1cqw;
        font-family: var(--font-family-heading);
        letter-spacing: var(--letter-spacing-heading);
        background-color: var(--color-darkNavy);
        border-radius: 10%;
        cursor: pointer;
    }

    #contactDialog .contactDialogInner .contactDialogClose span,
    #contactDialog .contactDialogInner .contactDialogClose span::after{
        content: "";
        position: absolute;
        inset: 0;
        width: 2.5em;
        height: 1px;
        background-color: var(--color-white);
    }

    #contactDialog .contactDialogInner .contactDialogClose span {
        inset: 2em 1.7em auto auto;
        transform: rotate(45deg);
    }

    #contactDialog .contactDialogInner .contactDialogClose span::after {
        transform: rotate(-95deg);
    }

    #contactDialog #contactDialogIframe{
        width: 100%;
    }

    @media (width <= 960px) {
        #contactDialog{
            width: 100%;
        }
        #contactDialog .contactDialogInner .contactDialogClose{
            inset: 0 0 auto auto;
            width: 10vw;
            height: 10vw;
            padding-top: 8%;
        }
    
        #contactDialog .contactDialogInner .contactDialogClose span,
        #contactDialog .contactDialogInner .contactDialogClose span::after{
            width: 7vw;
        }
    
        #contactDialog .contactDialogInner .contactDialogClose span {
            inset: 43% 16% auto auto;
        }

        main .contactDialogOpen {
            width: 100%;
        }   
    }
</style>