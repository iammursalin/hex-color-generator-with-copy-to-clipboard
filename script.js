const body = document.querySelector('body')
const hexCode = document.querySelector('#hex')
const btn = document.querySelector('#btn')
const toast = document.querySelector('#toast')
const alertText = document.querySelector('#CopiedTextAlert')

colorsLength = ['A','B','C','D','E','F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

btn.addEventListener('click', () => {
    let hex = '#'

    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * colorsLength.length)
        hex += colorsLength[random]
        console.log(hex)
    }

    body.style.background = hex
    hexCode.innerText = hex
    
    console.log(hex);
})

hexCode.addEventListener('click', () => {

    // Copy To Clipboard (OLD Method)

    // let hiddenInputArea = document.createElement('input')
    // hiddenInputArea.classList.add('hiddenInputArea')
    // body.appendChild(hiddenInputArea).value = hexCode.innerText

    // hiddenInputArea.select()
    // hiddenInputArea.setSelectionRange(0, 999)

    // let copiedText = document.execCommand('copy')

    
    // Copy To Clipboard (NEW Method)

    navigator.clipboard.writeText(hexCode.innerText).then(() => {
        console.log(`${hexCode.innerText} Hex Code Copied to Clipboard`)
        showToast()
    })

    // Make a Toast

    let showToast = () => {
        toast.classList.add('showToast')
        alertText.innerText = `${hexCode.innerText} Copied to Clipboard`
        setTimeout(() => {
            toast.classList.remove('showToast')
        }, 1300);
    }
})