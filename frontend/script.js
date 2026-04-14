
const API_URL = "https://openart-clone.onrender.com/generate";

async function generate() {
  const prompt = document.getElementById("prompt").value;
  const img = document.getElementById("result");
  const loading = document.getElementById("loading");
  const button = document.querySelector("button");

  if (!prompt) {
    alert("Please enter a prompt");
    return;
  }

  // UI state
  loading.style.display = "block";
  button.disabled = true;
  img.src = "";
  img.alt = "Generating image...";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    img.src = "data:image/png;base64," + data.image;
    img.alt = "Generated image";

  } catch (err) {
    alert("Generation failed. Try again.");
    console.error(err);

  } finally {
    loading.style.display = "none";
    button.disabled = false;
  }
}
