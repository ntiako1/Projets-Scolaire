const txtAnim = document.querySelector('p');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 40,
})
.changeDelay(100)
.pauseFor(1000)
.typeString('Rappeur')
.pauseFor(1500)
.deleteChars('7')
.typeString('Chanteur')
.pauseFor(1500)
.deleteChars('8')
.typeString('Rap')
.pauseFor(1500)
.deleteChars('3')
.typeString('UK Drill')
.pauseFor(1500)
.deleteChars('8')
.typeString('Pop')
.pauseFor(1500)
.deleteChars('3')
.start()