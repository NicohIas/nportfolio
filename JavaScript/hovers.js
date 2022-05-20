var NLetter = document.getElementsByClassName('N-Letter');
for (var i = 0; i < NLetter.length; i++) {
    NLetter[i].addEventListener('mouseover', function (event) { // on mouseover
        console.warn('N-Letter has been hovered.'); // warn that the element has been hovered
    })
}

var NicolasN = document.getElementsByClassName('N-Nicolas');
for (var i = 0; i < NicolasN.length; i++) {
    NicolasN[i].addEventListener('mouseover', function (event) { // on mouseover
        console.warn('Nicolas-N has been hovered.'); // warn that the element has been hovered
    })
}

var NicolasN2 = document.getElementsByClassName('N2-Letter');
for (var i = 0; i < NicolasN2.length; i++) {
    NicolasN2[i].addEventListener('mouseover', function (event) {// on mouseover
        console.warn('N2-Letter has been hovered.'); // warn that the element has been hovered
    })
}

var NTrophy = document.getElementsByClassName('N-Nicolas');
for (var i = 0; i < NTrophy.length; i++) {
    NTrophy[i].addEventListener('mouseover', function (event) {// on mouseover
        document.getElementById("N-Trophy").style.opacity = 100; // Show the N-Trophy
    })
}