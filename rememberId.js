// ===== SAVE LAST ENTERED ID =====
window.addEventListener("load", () => {
  const userIdEl = document.getElementById("userId");

  // اگر LocalStorage قبلا مقداری داشت، پرش کن
  const savedId = localStorage.getItem("lastUserId");
  if (savedId) {
    userIdEl.value = savedId;
  }

  // هر بار که کاربر چیزی تایپ کرد، ذخیره کن
  userIdEl.addEventListener("input", () => {
    localStorage.setItem("lastUserId", userIdEl.value.trim());
  });
});