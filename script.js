let sentiment = 20;

function showPage(pageId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function updateSentiment(change, type) {
    sentiment += change;
    if (sentiment > 100) sentiment = 100;
    if (sentiment < 0) sentiment = 0;

    const fill = document.getElementById('sentiment-fill');
    fill.style.width = sentiment + "%";

    // Dynamic Color Logic
    if (sentiment > 70) fill.style.background = "#27ae60";
    else if (sentiment > 40) fill.style.background = "#f1c40f";
    else fill.style.background = "#e74c3c";

    if (type === 'correct') {
        setTimeout(() => {
            document.getElementById('final-status').innerText = "Final Sentiment: " + sentiment + "%";
            document.getElementById('cert-box').style.display = "block";
            showPage('page-results');
        }, 1000);
    }
}