function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = "b2d392316cfa1a65t53d71a032b444co";
  let prompt = `User prompt: Write a poem about ${userPrompt.value}`;
  let context =
    "You are a poet who specialises in short poetry. Your task is to write a four line poem in basic HTML with each line separated with a <br /> and written in black without using the <em> element or <stong> element. Do not give the poem a title. Please sign the bottom of the poem with `- SheCodes AI` inside a <strong> element. Please follow the user prompt.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⌛ Our poet is diligently working on a poem for you about ${userPrompt.value} ⌛`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
