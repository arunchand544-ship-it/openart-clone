
async function generate() {
  console.log("Generate clicked");

  const prompt = document.getElementById("prompt").value;
  console.log("Prompt:", prompt);

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  console.log("Response status:", res.status);

  const data = await res.json();
  console.log("Response data:", data);

  document.getElementById("result").src =
    "data:image/png;base64," + data.image;
}
