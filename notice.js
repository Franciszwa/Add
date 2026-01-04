// ===== DISCLAIMER NOTICE =====
window.addEventListener("load", () => {
  // ایجاد هشدار
  const notice = document.createElement("div");
  notice.id = "site-notice";
  notice.style.position = "fixed";
  notice.style.inset = "0";
  notice.style.background = "rgba(0,0,0,0.8)";
  notice.style.display = "flex";
  notice.style.alignItems = "center";
  notice.style.justifyContent = "center";
  notice.style.zIndex = "9999";

  notice.innerHTML = `
    <div class="notice-box">
      Franciszw@ ⚠️ <b>هشدار مهم</b><br><br>
      اکانت‌هایی که برای <span class="warn">اسپم</span> استفاده می‌شوند،
      دارای <span class="danger">نام‌های نامناسب و فحش‌های زننده</span> هستند.<br><br>
      ما <b>هیچ مسئولیتی</b> در قبال نحوه استفاده شما نداریم.<br><br>
      <button id="acceptDisclaimer"> قبول دارم</button>
    </div>
  `;

  document.body.appendChild(notice);

  // سبک دکمه و هشدار
  const style = document.createElement("style");
  style.innerHTML = `
    .notice-box {
      background: #01080f;
      padding: 25px;
      border-radius: 12px;
      max-width: 400px;
      width: 90%;
      text-align: center;
      color: #00fff7;
      font-family: 'Orbitron', monospace;
      box-shadow: 0 0 25px #00fff7aa, inset 0 0 15px #00fff744;
      line-height: 1.6;
    }
    .notice-box b { color: #ff4444; }
    .notice-box .warn { color: #ffaa00; font-weight: 600; }
    .notice-box .danger { color: #ff4444; font-weight: 600; }
    #acceptDisclaimer {
      margin-top: 20px;
      padding: 12px 24px;
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, #00ff66, #00ccff);
      color: #000;
      font-weight: 700;
      cursor: pointer;
      font-size: 14px;
      pointer-events: auto;
      transition: all 0.3s ease;
    }
    #acceptDisclaimer:hover {
      box-shadow: 0 0 20px #00ff66, 0 0 40px #00ccff;
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(style);

  // نصب EventListener بعد از اضافه شدن دکمه
  const acceptBtn = notice.querySelector("#acceptDisclaimer");
  acceptBtn.addEventListener("click", () => {
    // ناپدید شدن با انیمیشن
    notice.style.transition = "opacity 0.4s ease";
    notice.style.opacity = "0";
    setTimeout(() => notice.remove(), 400);
  });
});