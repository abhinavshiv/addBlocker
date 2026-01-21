// Safety check (extra protection)
if (!location.hostname.includes("youtube.com")) {
  console.log("Stoic Ad Blocker disabled on YouTube");


const stoicQuotes = [
  "Waste no more time arguing what a good man should be. Be one. — Marcus Aurelius",
  "You have power over your mind, not outside events. — Marcus Aurelius",
  "He who fears death will never do anything worth of a man. — Seneca",
  "If it is not right, do not do it. — Marcus Aurelius",
  "First say to yourself what you would be; and then do what you have to do. — Epictetus"
];

function getRandomQuote() {
  return stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)];
}

const adSelectors = [
  '[id*="ad"]',
  '[class*="ad"]',
  '[class*="ads"]',
  '[class*="advert"]',
  'iframe[src*="ads"]'
];

function replaceAdsWithQuotes() {
  document.querySelectorAll(adSelectors.join(',')).forEach(ad => {
    if (ad.dataset.stoicReplaced) return;

    ad.dataset.stoicReplaced = "true";
    ad.innerHTML = `
      <div style="
        padding: 12px;
        background: #f4f4f4;
        border-left: 4px solid #444;
        font-style: italic;
        font-size: 14px;
        color: #333;
      ">
        ${getRandomQuote()}
      </div>
    `;
  });
}

// Initial run
replaceAdsWithQuotes();

// Handle dynamically loaded ads
const observer = new MutationObserver(replaceAdsWithQuotes);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
}