let nickNameElement = document.getElementById("nickname");
let messageElement = document.getElementById("message");
let amountElement = document.getElementById("amount");

let nickNameTitleElement = document.getElementById("nickname-title");
let messageTitleElement = document.getElementById("message-title");
let amountTitleElement = document.getElementById("amount-title");
let homeElement = document.getElementById("home");

const initEcpatInput = () => {
  let ecpayInput = {
    MerchantID: "",
    MerchantTradeNo: "",
    MerchantTradeDate: "",
    PaymentType: "aio",
    TotalAmount: 0,
    TradeDesc: "",
    ItemName: "緒莉亞的零食罐",
    ReturnURL: "",
    ChoosePayment: "ALL",
    CheckMacValue: "",
    EncryptType: 1,
    ClientBackURL: "",
  };
  return ecpayInput;
};

const submitBtn = () => {
  let ecpayInput = {};
  ecpayInput = initEcpatInput();
  let nickname = nickNameElement.value;
  let message = messageElement.value;
  let amount = amountElement.value;
  ecpayInput.TotalAmount = amount;
  ecpayInput.TradeDesc = message;
  initEcpatInput();
};

const fetchLocalJSon = async () => {
  try {
    const response = await fetch("../config.json");
    if (!response.ok) {
      throw new Error("呼叫檔案錯誤");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const jsonToFormData = (json) => {
  const newFormData = new FormData();
  let jsonKeyArray = Object.keys(json);
  for (const key of jsonKeyArray) {
    newFormData.append(key, json[key]);
  }
  return newFormData;
};

window.onload = async () => {
  let testData = await fetchLocalJSon();
  homeElement.style.backgroundImage = `url(${testData.background})`;
  nickNameTitleElement.textContent = testData.nicknameTitle;
  messageTitleElement.textContent = testData.messageTitle;
  amountTitleElement.textContent = testData.amountTitle;
};
