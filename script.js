document.getElementById('cards').addEventListener('click', function (e) {

    // Heart Functionality
    if (e.target.className.includes('heart-btn')) {
        const heart = document.getElementById('heart');
        let heartNumber = Number(heart.innerText) + 1;
        heart.innerText = heartNumber;
        return;
    }

    // Call Functionality and Add/Clear Hsitory
    if (e.target.className.includes('call-btn')) {
        const coin = document.getElementById('coin');
        const coinNumber = Number(coin.innerText);

        if (coinNumber <= 0) {
            alert('You can not call right now')
            return;
        }

        const serviceName = e.target.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = e.target.parentNode.parentNode.children[2].children[0].innerText;
        let date = new Date().toLocaleTimeString()
        // console.log(date)

        alert(`📞 Calling to ${serviceName} ${serviceNumber}...`);
        let coinCount = coinNumber - 20;
        coin.innerText = coinCount;

        const historyEl = document.getElementById('history');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex items-center justify-between p-3 bg-gray-300/20 rounded-xl my-4">
            <div>
                <p>${serviceName}</p>
                <p>${serviceNumber}</p>
            </div>
            <div>
                <p>${date}</p>
            </div>
        </div>`
        historyEl.append(div)

        document.getElementById('clear-btn').addEventListener('click', function () {
            div.innerHTML = ""
        })

        return;
    }

    // Copy Functionality
    if (e.target.className.includes('copy-btn')) {
        const copy = document.getElementById('copy-text');
        const copyNumber = Number(copy.innerText) + 1
        copy.innerText = copyNumber;

        const serviceNum = e.target.parentNode.parentNode.children[2].children[0].innerText;
        navigator.clipboard.writeText(serviceNum).then(() => {
            alert(`Copied: ${serviceNum}`);
        });
    }
})