const imageZone = document.getElementById('image_zone')
imageZone.addEventListener('change', resizePinnedImage, false)
function resizePinnedImage(e) {
    const file = e
        .target
        .files[0]
    if (!file.type.match('image.*')) {
        return
    }
    scrapingText(file)
}
function resetOutputText(){
    document.getElementById('outputText').value = "画像から文字を抽出中";
}
function scrapingText(file) {
    resetOutputText();
    imageToCanvas(file)
        .then(function (canvas) {
            Tesseract
                .recognize(canvas, // Canvasを認識
                        'jpn' // 日本語を指定 英語はeng
                )
                // テキストの出力
                .then(({data: {
                        text
                    }}) => {
                    const out = document.getElementById('outputText')
                    out.value = text
                })
        })
        .catch(function (error) {
            console.error(error)
        })
    }

function imageToCanvas(imageFile) {
    return new Promise(function (resolve, reject) {
        readImage(imageFile)
            .then(function (src) {
                loadImage(src)
                    .then(function (image) {
                        const canvas = document.getElementById("canvas")
                        const ctx = canvas.getContext('2d')
                        // スケール2倍にしてcanvasへ描画
                        const scale = 2
                        canvas.width = image.width * scale
                        canvas.height = image.height * scale
                        ctx.drawImage(
                            image,
                            (image.width - (canvas.width / scale)) / 2,
                            (image.height - (canvas.height / scale)) / 2,
                            canvas.width / scale,
                            canvas.height / scale,
                            0,
                            0,
                            canvas.width,
                            canvas.height
                        )
                        resolve(canvas)
                    })
                    .catch(function (error) {
                        reject(error)
                    })
                })
            .catch(function (error) {
                reject(error)
            })
        })
}

function readImage(image) {
    return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        reader.onload = function () {
            resolve(reader.result)
        }
        reader.onerror = function (e) {
            reject(e)
        }
        reader.readAsDataURL(image)
    })
}
function loadImage(src) {
    return new Promise(function (resolve, reject) {
        const img = new Image()
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function (e) {
            reject(e)
        }
        img.src = src
    })
}
