document.getElementById('cards').addEventListener('click', function (e) {

    if (e.target.className.includes('heart-btn')) {
        const heart = document.getElementById('heart');
        let heartNumber = Number(heart.innerText) + 1;
        heart.innerText = heartNumber;
    }

    else if (e.target.className.includes('call-btn')) {
        const coin = document.getElementById('coin');
        const coinNumber = Number(coin.innerText);

        const serviceName = e.target.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = e.target.parentNode.parentNode.children[2].children[0].innerText;
        

        if (coinNumber <= 0) {
            alert('You can not call right now')
            return;
        }

        alert(`📞 Calling to ${serviceName} ${serviceNumber}...`)
        let coinCount = coinNumber - 20;
        coin.innerText = coinCount;
    }
})