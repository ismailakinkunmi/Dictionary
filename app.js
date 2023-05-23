const inputWord = document.querySelector(".inputWord");
const btn = document.querySelector(".btn");
const details = document.querySelector(".details");

async function searchWord(word) {
  apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const response = await fetch(apiUrl + word);
  const [data] = await response.json();

  const html = `
  <div>
    <h3 class="word">${data.word}</h3>
    <h3 class="phonetic">${data.phonetic}</h3>    
    
    <div>
      ${data.meanings
        .map(
          (m) =>
            `<ol>${m.partOfSpeech}
             ${m.definitions
               .map((d) => `<li>${d.definition}</li>`)
               .join("")}</ol>`
        )
        .join("")}
    </div>

    </div>

  `;

  details.innerHTML = html;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const wordValue = inputWord.value;
  searchWord(wordValue);
});
