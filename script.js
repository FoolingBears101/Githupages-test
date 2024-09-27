// Function to show the duck's story based on the entered or scanned number
function showDuckStory(duckNumber, hexId = null) {
    const resultDiv = document.getElementById('result');
    const locationInputContainer = document.getElementById('location-input-container');
    const duckImage = document.getElementById('duck-image');

    let duckStory;
    let duckImageSrc = '';

    // Check if the duck number is valid
    if (duckNumber === "001") {
        duckStory = `
            <h2>Duck #001 - Quackers the Original</h2>
            <p><strong>Personality:</strong> Curious and Brave</p>
            <p>Duck #001, known as "Quackers the Original," is a bold and curious explorer. He’s the first of his kind, always leading the way with a fearless spirit and a love for adventure.</p>
            <p><strong>Background Story:</strong> Quackers hatched in a peaceful pond but was never content to stay put. Driven by curiosity, he set off on a daring journey to find a legendary waterfall deep in the forest. After braving wild terrains and countless challenges, Quackers discovered the hidden waterfall and returned as a hero.</p>
        `;
        duckImageSrc = 'https://i.ibb.co/fNDbgFQ/ezgif-2-c4aa67073c-removebg.png'; // Image for Duck #001
    } else if (duckNumber === "022") {
        duckStory = `
            <h2>Duck #022 - Quack Satoshi</h2>
            <p><strong>Personality:</strong> Tech-Savvy and Financially Astute</p>
            <p>Quack Satoshi is a brilliant software engineer by day and a sharp trader by night. He balances writing flawless code with navigating the stock market and cryptocurrency world.</p>
            <p><strong>Background Story:</strong> With his iconic beard and sharp wit, Quack Satoshi is known for his deep knowledge of tech and his knack for predicting market trends. A true symbol of intellect and innovation, he’s a legendary figure among ducks and humans alike.</p>
        `;
        duckImageSrc = 'https://i.ibb.co/2hbNmvF/ezgif-1-42693c7433-removebg-preview.png'; // Image for Duck #022
    } else {
        duckStory = "<h2>Unknown Duck</h2><p>We couldn't find a story for this number. Please check the number or contact support.</p>";
        duckImageSrc = 'https://i.ibb.co/KLV3bt2/ezgif-7-ddf5833608.jpg'; // Default image
    }

    // Display the story and image
    resultDiv.innerHTML = duckStory;
    duckImage.src = duckImageSrc;
    duckImage.style.display = 'block';

    // Enable or disable location input based on whether the hex ID is present
    if (hexId) {
        locationInputContainer.style.display = 'block'; // Show the location input
        resultDiv.innerHTML += `<p><strong>Location ID:</strong> ${hexId} (Track the journey of this duck!)</p>`;
    } else {
        locationInputContainer.style.display = 'none'; // Hide the location input
    }
}

// QR Code Scanner Setup
function onScanSuccess(decodedText, decodedResult) {
    // Extract the hex ID and duck number from the scanned URL
    const url = decodedText;
    const urlPattern = /didyoufindtheduck\.fr\/([A-Fa-f0-9]{8})\/(\d+)/;
    const match = url.match(urlPattern);

    if (match) {
        const hexId = match[1]; // Extract the hex ID
        const duckNumber = match[2]; // Extract the duck number

        // Update the input fields with the extracted values
        document.getElementById('duck-number').value = duckNumber;
        document.getElementById('qr-reader-results').innerText = `Hex ID: ${hexId} | Duck Number: ${duckNumber}`;

        // Display the duck story and allow location input
        showDuckStory(duckNumber, hexId);
    } else {
        document.getElementById('qr-reader-results').innerText = 'Invalid QR Code format.';
    }
}

function onScanFailure(error) {
    // Handle scan failure, ignore in this case
    console.log(`QR code scan failed: ${error}`);
}

// Initialize the QR code scanner
let html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

// Function to handle manual duck number entry
function handleManualDuckEntry() {
    const duckNumber = document.getElementById('duck-number').value;
    showDuckStory(duckNumber); // Call without hexId to disable location input
}
