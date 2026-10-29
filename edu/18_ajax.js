// BaseURL: https://picsum.photos
// Resource/Path: /v2/list
// Parameter:
//   - page: number
//   - limit: number
// 특이사항: 이미지는 1000개가 준비되어 있다.
// 예제: https://picsum.photos/v2/list?page=2&limit=100

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); //기존이벤트 취소

  const BaseURL = "https://picsum.photos"; //매번 주소를 적을수 없기때문의 한번 정의함
  const path = "/v2/list";

  //엑시오스 보내기
  //이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value; //form과 같이 같은걸 가리키고 있다. dom으로 가져오는 값은 모두 문자열이다.인풋박스에 가져올 갯수도 숫자가아니라 문자다.
  const limit = e.target.limit.value;
  const url = `${BaseURL}${path}?page=${page}&limit=${limit}`;
  try {
    const response = await axios.get(url); //html메서드 get을 씀
    // <div class="card">
    //   <div class="card-img"></div>
    //   <p class="card-text">8: 아아아아아</p>
    // </div>;
    //카드를 넣을 컨테이너 요소
    const cardContainer = document.querySelector(".card-container");
    cardContainer.textContent = ""; // 다하고 나면 리스트가 계속 남아 있을때 textContent내용을 삭제할때
    //같은 작업을 반복할때는 루프처리를한다.

    response.data.forEach((item, idx) => {
      //2. card-img 생성
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      cardImg.style.backgroundImage = `url('${item.download_url}')`;
      //3. card-text 생성
      const cardText = document.createElement("p");
      //4. card-container 생성한 요소를 담는다.
      cardText.classList.add("card-text");
      cardText.textContent = `${item.id}: ${item.author}`;

      //1. card 요소 생성
      const card = document.createElement("div"); //createElement() 태그명 적는다.
      card.classList.add("card"); //classList는 property라 그냥 class이름을 적으면 된다. class가 혹시 여러개면 하나만 넣으면 다른class를 덮어쓰기 할수 있음 그럴때는 classList.add('card')

      card.appendChild(cardImg);
      card.appendChild(cardText);

      //4.
      cardContainer.appendChild(card); //appendChild()자식 요소넣기
    }); //item에 한벨루씩 넣고 다음 데이터를 넣는다.
  } catch (error) {
    console.log(error);
  }

  //fetch는 실무에 잘 안씀
  //fetch는 보통 주소를 넣는데 주소가 여러개고 변경이 있다면 모두 수정해야함
  //작은 규모의 사이트라면 fetch를 쓰지만 큰규모는 잘쓰지 않음 -> 엑시오스를 씀(불러오는 cdn파일이 우리가 만든거 보다 위에 적어야한다 html에)
  // fetch("https://picsum.photos/v2/list?page=2&limit=100")
  // .then()
});
//submit버튼 누를때 번쩍이는 현상
//html value값을 (value="3") 지정하면 인풋박스에 숫자가 지정되는데
//그값이 우리가 인풋에 가지고 올 숫자를 적으면 자동으로 눈에 안 보이지만 지정되게 된다.
