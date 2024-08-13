function showDuckStory() {
    const duckNumber = document.getElementById('duck-number').value;
    const resultDiv = document.getElementById('result');
    const duckImage = document.getElementById('duck-image');

    let duckStory;
    let duckImageSrc = '';

    if (duckNumber === "001") {
        duckStory = `
            <h2>Duck #001 - Quackers the Original</h2>
            <p><strong>Personality:</strong> Curious and Brave</p>
            <p>Duck #001, known as "Quackers the Original," is a bold and curious explorer. He’s the first of his kind, always leading the way with a fearless spirit and a love for adventure.</p>
            <p><strong>Background Story:</strong> Quackers hatched in a peaceful pond but was never content to stay put. Driven by curiosity, he set off on a daring journey to find a legendary waterfall deep in the forest. After braving wild terrains and countless challenges, Quackers discovered the hidden waterfall and returned as a hero.</p>
            <p>Now, Duck #001 represents the spirit of discovery. If you’ve found this duck, you’ve uncovered a piece of history—the very first adventurer who inspired all the others to explore the world.</p>
        `;
        duckImageSrc = 'https://i.ibb.co/fNDbgFQ/ezgif-2-c4aa67073c-removebg.png'; // Image for Duck #001
    } else {
        duckStory = "<h2>Unknown Duck</h2><p>We couldn't find a story for this number. Please check the number or contact support.</p>";
        duckImageSrc = 'https://i.ibb.co/KLV3bt2/ezgif-7-ddf5833608.jpg'; // Default image
    }

    resultDiv.innerHTML = duckStory;
    duckImage.src = duckImageSrc;
    duckImage.style.display = 'block'; // Make sure the image is visible
}