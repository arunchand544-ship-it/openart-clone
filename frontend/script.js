
const API_URL = "https://YOUR-BACKEND-URL.onrender.com/generate";

async function generate() {
  const prompt = document.getElementById("prompt").value;

  if (!prompt) {
    alert("Please enter a prompt");
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  document.getElementById("result").src =
    "data:image/png;base64," + data.image;
}
