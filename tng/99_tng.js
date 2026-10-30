const nextBt = document.querySelector("#next_bt");
const resetBt = document.querySelector("#reset_bt");
const cardContainer = document.querySelector(".card-container");

const BaseURL = "https://picsum.photos";
const path = "/v2/list";

let page = 1; //0으로 해도됨
const limit = 3;

nextBt.addEventListener("click", async (e) => {
  const url = `${BaseURL}${path}?page=${page}&limit=${limit}`;
  page++;
  try {
    const response = await axios.get(url);

    response.data.forEach((item) => {
      // 이미지 생성
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      cardImg.style.backgroundImage = `url('${item.download_url}')`;

      // 텍스트 생성
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = `${item.id}: ${item.author}`;

      // 카드 생성
      const card = document.createElement("div");
      card.classList.add("card");

      card.appendChild(cardImg);
      card.appendChild(cardText);

      // 화면에 카드 추가
      cardContainer.appendChild(card);
    });

    // 요청이 성공하면 다음 페이지로 이동
  } catch (error) {
    console.error(error);
  }
});
resetBt.addEventListener("click", async (e) => {
  try {
    cardContainer.textContent = "";
    page = 1;
  } catch (error) {
    console.error(error);
  }
});
