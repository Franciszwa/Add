const startBtn = document.getElementById("startBtn");
const logBox   = document.getElementById("log");
const userIdEl = document.getElementById("userId");

const MAX_LOGS = 50;
const TOTAL_LOGS = 50; // تعداد نهایی لاگ‌ها

/* ===== API ها (دست نخورده) ===== */
const APIS = [
  { uid: "4233040092", password: "C4FF06D2528B31F56A8FAC914B270A121D6A2F2D056B20CFCAD139F0B36815C5" },
  { uid: "4384308967", password: "01F406AB50552782C89351293415B4C0606A428680C9B83BDFF230CB4A2D9186" },
  { uid: "4384329237", password: "7784463160FD055FC1970CB935E2112C42BEE72A200FCCCC687D10F1056B59F0" },
  { uid: "4384377259", password: "9607435E411F7B970CB077BE463C87E3DC525B1CBA89793566B47191153A65F4" },
  { uid: "4384392249", password: "4EC4A0823A9B30C3150BFAF9DE211E7F8302803979F8422D71F7E0E1BAE93F40" },
  { uid: "4384395880", password: "E8D02C5CF3114B22ACC574E8797124B7134E856D2FD1AEC3E71E0C51C5A036A5" },
  { uid: "4384399086", password: "08812412AEAC4D0BA07C50AF9267E0C467928A3B48ABCB0BE2B6688FC73B224E" },
  { uid: "4384402589", password: "F2922A21C5766F215A38826AA119EE77D56B19DBB240E176448A8CBB8894D998" },
  { uid: "4384407325", password: "9330586147B884FE8799AE9C9DF029906DCFA1B263DDE3FA53D255CACD315214" },
  { uid: "4384412279", password: "D4BD0FD14C3F24D2BBBAB1C8B3CB06A95F6FE85F14301FC9E391FE3549548701" },
  { uid: "4372936720", password: "CFCC9BB2340546EF660E309F6B30F45E54C46731868C673446BCB6DA143DB30E" },
  { uid: "4384447036", password: "BE4EF10ADC31D1A13B07C0791DD38523BB22938EE386011B39A4EF45EBE3C2E0" },
  { uid: "4384450037", password: "146277F68F0B04E8C62A186F95B2D0107DD87F11A6598F604E37D75B9BDB838E" },
  { uid: "4384453909", password: "6727139BF5A3E5ECF4538849DC844ADC06EC5AA49754B55CB72228721E408D5D" },
  { uid: "4384457905", password: "A9710994426932FBE964F1FC3821BA1D8BB1BD9E3A7123D352A2ECB314ACB190" },
  { uid: "4384460604", password: "7E56299D3C6424ECBADF151B333EA9CE60C64855BEE2585DF164C437A3B4E215" },
  { uid: "4384462642", password: "12EF6F910CFA83C26B6D0A0BE1DD28D14E827B5D90081EEC5C20C67E74387303" },
  { uid: "4384465193", password: "0D2CA149053033A52FF4DB7CF60B36CACDBD4D311C9774B34D4DAE50C04A2E31" },
  { uid: "4384467692", password: "386C250AC8B9547A2427CE72E8D4E28C0B1BAE602561D56B00C550AF4E0C0046" },
  { uid: "4384482442", password: "78EAB483D9E8ECD94F8B38DA63CAC878B6E860B79E7B5AB402074807913EF5B0" },
];

const BASE_URL = "https://danger-add-friend.vercel.app/adding_friend";

/* ===== ساخت URL ===== */
function buildURL(api, friendId) {
  return `${BASE_URL}?uid=${encodeURIComponent(api.uid)}&password=${encodeURIComponent(api.password)}&friend_uid=${encodeURIComponent(friendId)}`;
}

/* ===== لاگ تایپی و محدود به MAX_LOGS ===== */
function typeLog(type, text) {
  const line = document.createElement("div");
  line.className = "log-line " + type;
  logBox.appendChild(line);

  // حذف لاگ‌های قدیمی
  while (logBox.children.length > MAX_LOGS) {
    logBox.removeChild(logBox.firstChild);
  }

  let i = 0;
  const speed = 9;

  const typer = setInterval(() => {
    if (i >= text.length) {
      clearInterval(typer);
      return;
    }
    line.textContent += text.charAt(i);
    i++;
    logBox.scrollTop = logBox.scrollHeight;
  }, speed);
}

/* ===== START BUTTON ===== */
startBtn.onclick = () => {
  const friendId = userIdEl.value.trim();
  if (!friendId) return;

  logBox.innerHTML = "";
  typeLog("info", `▶ START | SPAM REQUEST → ${friendId}`);

  // محاسبه تعداد تکرار لازم برای رسیدن به TOTAL_LOGS
  const repeatTimes = Math.ceil(TOTAL_LOGS / APIS.length);

  for (let r = 0; r < repeatTimes; r++) {
    APIS.forEach(api => {
      const url = buildURL(api, friendId);

      // fire & forget
      fetch(url, { mode: "no-cors" });

      // لاگ تایپی
      typeLog("success", "✔ REQUEST SENT");
    });
  }

  typeLog("info", "📡 ALL REQUESTS FIRED");
  typeLog("info", "TEL : @Franciszw");
};
