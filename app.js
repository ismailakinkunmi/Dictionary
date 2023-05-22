const inputWord = document.querySelector(".inputWord");
const btn = document.querySelector(".btn");
const details = document.querySelector(".details");

async function searchWord(word) {
  apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const response = await fetch(apiUrl + word);
  const [data] = await response.json();
  console.log(data);

  const html = `<h3 class="word">${data.word} </h3>
  <h3 class="word">${data.phonetic} </h3>
 

  <p class="partOfSpeech">${data.meanings[0].partOfSpeech}</p>  
  <ol>
    ${data.meanings[0].definitions
      .map((x) => `<li> ${x.definition}</li>`)
      .join("")} 
  </ol> 
  <p class='synonyms'><span>synonyms</span> ${data.meanings[0].synonyms}</p>
  <p class="partOfSpeech">${data.meanings[1].partOfSpeech}</p>  
  <ol>
  ${data.meanings[1].definitions
    .map((x) => `<li> ${x.definition}</li>`)
    .join("")} 
</ol> 
<p class="partOfSpeech">${data.meanings[2].partOfSpeech}</p>  
  <ol>
  ${data.meanings[2].definitions
    .map((x) => `<li> ${x.definition}</li>`)
    .join("")} 
</ol> 
`;

  details.innerHTML = html;
  inputWord.value = "";
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const wordValue = inputWord.value;
  searchWord(wordValue);
});
