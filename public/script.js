document.getElementById("checkBtn").addEventListener("click", async () => {
  const resultEl = document.getElementById("result");
  resultEl.innerText = "⏳ Checking backend...";

  try {
    const res = await fetch("https://ak-backend-nepu.onrender.com/api/health");
    if (!res.ok) throw new Error("Backend error");
    const data = await res.json();
    resultEl.innerText = "✅ Backend is working: " + data.status;
  } catch (error) {
    resultEl.innerText = "❌ Cannot reach backend";
  }
});
