document.getElementById('cards').addEventListener('click', function (e) {
    
    if (e.target.className.includes('heart-btn')) {
        const heart = document.getElementById('heart');
        const heartNumber = Number(heart.innerText) + 1;
        heart.innerText = heartNumber;
    }

    // else if(e.target.className.includes('heart-btn')){
    //     console.log("Heart");
    // }
})