document.getElementById('cards').addEventListener('click', function (e) {

    // Extra
    const heart = document.getElementById('heart');
    let count = Number(heart.innerText);

    const parentDiv = e.target.closest('div');
    const heartBtn1 = parentDiv.querySelector('.heart-btn');
    const heartBtn2 = parentDiv.querySelector('.heart-btn-fill');

    if (e.target.classList.contains('heart-btn')) {
        count += 1;
        heart.innerText = count;

        heartBtn1.classList.add('hidden');
        heartBtn2.classList.remove('hidden');
    }

    else if (e.target.classList.contains('heart-btn-fill')) {
        count -= 1;
        heart.innerText = count;

        heartBtn1.classList.remove('hidden');
        heartBtn2.classList.add('hidden');
    }

    // Heart Functionality
    // if (e.target.className.includes('heart-btn')) {
    //     const heart = document.getElementById('heart');
    //     let heartNumber = Number(heart.innerText) + 1;
    //     heart.innerText = heartNumber;

    //     // Extra
    //     const heartDiv = e.target.closest('div');
    //     const heartBtn1 = heartDiv.querySelector(".heart-btn");
    //     const heartBtn2 = heartDiv.querySelector(".heart-btn-fill");

    //     heartBtn1.classList.add('hidden');
    //     heartBtn2.classList.remove('hidden');

    //     return;
    // }

    // Call Functionality and Add/Clear Hsitory
    if (e.target.className.includes('call-btn')) {
        const coin = document.getElementById('coin');
        const coinNumber = Number(coin.innerText);

        if (coinNumber < 20) {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে ২০ কয়েন লাগবে ।");
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
        // navigator.clipboard.writeText(serviceNum).then(() => {
        //     alert(`Copied: ${serviceNum}`);
        // });

        const textArea = document.createElement("textarea");
        textArea.value = serviceNum;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert(`Copied: ${serviceNum}`);
    }
})