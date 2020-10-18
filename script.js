const data = [
  {
    quest: "Tại sao bạn lựa chọn ngành công nghệ thông tin ?",
    ans: [
      {
        text: "Thích nó",
        to: "Có 1 ý tưởng tuyệt vời trong đầu ?",
      },
      {
        text: "Muốn cải thiện bản thân",
        to: "Có 1 ý tưởng tuyệt vời trong đầu ?",
      },
      {
        text: "Để có 1 công việc kiếm tiền $$$",
        to: "Bạn muốn làm việc trên nền tảng nào ?",
      },
      {
        text: "Có ý tưởng khởi nghiệp công nghệ",
        to: "Bạn muốn làm trên nền tảng nào ?",
      },
    ],
  },
  {
    quest: "Có 1 ý tưởng tuyệt vời trong đầu ?",
    ans: [
      {
        text: "Không, tôi chỉ muốn bắt đầu học lập trình",
        to: "Bạn muốn chọn con đường nào ?",
      },
      {
        text: "Có",
        to: "Bạn muốn làm trên nền tảng nào ?",
      },
    ],
  },
  {
    quest: "Bạn muốn chọn con đường nào ?",
    ans: [
      {
        text: "Con đường dễ dàng",
        to: "Python",
      },
      {
        text:
          "Con đường khó nhất nhưng sẽ phát triển được các ngôn ngữ khác trong tương lai",
        to: "C++",
      },
    ],
  },
  {
    quest: "Bạn muốn làm trên nền tảng nào ?",
    ans: [
      {
        text: "Web",
        to: "Bạn có muốn làm web cung cấp trạng thái hiện tại(Như twitter) ?",
      },
      {
        text: "Mobile",
        to: "Hệ điều hành nào ?",
      },
      {
        text: "Doanh nghiệp",
        to: "C#",
      },
      {
        text: "3D/Gaming",
        to: "C++",
      },
    ],
  },
  {
    quest: "Hệ điều hành nào ?",
    ans: [
      {
        text: "Ios",
        to: "Objective-C",
      },
      {
        text: "Android",
        to: "Java",
      },
    ],
  },
  {
    quest: "Bạn có muốn làm web cung cấp trạng thái hiện tại(Như twitter) ?",
    ans: [
      {
        text: "Có",
        to: "Javascript",
      },
      {
        text: "Không",
        to:
          "Bạn có muốn thử dự án có nhiều tiềm năng nhưng con chậm phát triển ?",
      },
    ],
  },
  {
    quest:
      "Bạn có muốn thử dự án có nhiều tiềm năng nhưng con chậm phát triển ?",
    ans: [
      {
        text: "Có",
        to: "Javascript",
      },
      {
        text: "Không",
        to: "Đồ chơi yêu thích của bạn là gì ?",
      },
    ],
  },
  {
    quest: "Đồ chơi yêu thích của bạn là gì ?",
    ans: [
      {
        text: "Lego",
        to: "Python",
      },
      {
        text: "Đất nặn",
        to: "Ruby",
      },
      {
        text: "Tôi có 1 món đồ chơi cũ nhưng tôi thích nó",
        to: "Php",
      },
    ],
  },
  {
    quest: "Bạn muốn làm việc trên nền tảng nào ?",
    ans: [
      {
        text: "Các công ty công nghệ lớn",
        to: "Chọn 1 trong 4 công ty sau:",
      },
      {
        text: "web",
        to: "Chọn 1 trong 2 :",
      },
      {
        text: "Doanh nghiệp",
        to: "C#",
      },
      {
        text: "Gì cũng được, tôi chỉ quan tâm việc có tiền",
        to: "Java",
      },
    ],
  },
  {
    quest: "Tại sao bạn lựa chọn ngành công nghệ thông tin ?",
    ans: [
      {
        text: "Thích nó",
        to: "Có 1 ý tưởng tuyệt vời trong đầu ?",
      },
      {
        text: "Muốn cải thiện bản thân",
        to: "Có 1 ý tưởng tuyệt vời trong đầu ?",
      },
      {
        text: "Để có 1 công việc kiếm tiền $$$",
        to: "Bạn muốn làm trên nền tảng nào ?",
      },
      {
        text: "Có ý tưởng khởi nghiệp công nghệ",
        to: "Bạn muốn làm trên nền tảng nào ?",
      },
    ],
  },
  {
    quest: "Chọn 1 trong 4 công ty sau:",
    ans: [
      {
        text: "Microsoft",
        to: "C#",
      },
      {
        text: "Apple",
        to: "Objective-C",
      },
      {
        text: "Facebook",
        to: "Python",
      },
      {
        text: "Google",
        to: "Python",
      },
    ],
  },
  {
    quest: "Chọn 1 trong 2 :",
    ans: [
      {
        text: "front-end(Giao diện trang web)",
        to: "Javascript",
      },
      {
        text: "back-end(Bộ não vận hành trang web)",
        to: "Bạn muốn làm việc cho ?",
      },
    ],
  },
  {
    quest: "Bạn muốn làm việc cho ?",
    ans: [
      {
        text: "Công ty lớn(Vd như microsoft)",
        to: "C#",
      },
      {
        text: "Công ty khởi nghiệp",
        to:
          "Bạn có muốn thử dự án có nhiều tiềm năng nhưng con chậm phát triển ?",
      },
    ],
  },
  {
    quest: "Java",
    ans: [
      {
        text: `<div class="ended">Java <br> <span>Lập trình ứng dụng android, lập trình nhúng,lập trình trong thương mại điệnn tử(các ngân hàng đầu tư lớn, các giao dịch tài chính,..)</span> <br><a style="color: red" href="https://nghiephunter.github.io/hackathon/#portfolio">Tìm hiểu thêm</a></div>`, // them span de de style
      },
    ],
  },
  {
    quest: "Javascript",
    ans: [
      {
        text: `<div class="ended">Javascript <br> <span>Lập trình website, các ứng dụng cho web,..</span> <br><a style="color: red" href="https://nghiephunter.github.io/hackathon/#portfolio">Tìm hiểu thêm</a></div>`,
      },
    ],
  },
  {
    quest: "Python",
    ans: [
      {
        text: `<div class="ended">Python <br> <span>Lập trình ứng dụng khoa học, vật lý, vi sinh ; phát triển game ; lập trình web ; machine learning/AI</span> <br><a style="color: red" href="https://nghiephunter.github.io/hackathon/#portfolio">Tìm hiểu thêm</a></div>`,
      },
    ],
  },
  {
    quest: "Php",
    ans: [
      {
        text: `<div class="ended">Php  <br> <span>Lập trình web, viết từng dụng</span> <br><a style="color: red" href="https://nghiephunter.github.io/hackathon/#portfolio">Tìm hiểu thêm</a></div>`,
      },
    ],
  },
  {
    quest: "Objective-C",
    ans: [
      {
        text: `<div class="ended">Objective-C  <br> <span>Lập trình viết các ứng dụng cho MacOS,IOS</span> <br><a style="color: red" href="https://nghiephunter.github.io/hackathon/#portfolio">Tìm hiểu thêm</a></div> `,
      },
    ],
  },
  {
    quest: "Ruby",
    ans: [
      {
        text: `<div class="ended">Ruby  <br> <span>Lập trình ứng dụng, games, phát triển website</span> <br><a style="color: red" href="https://nghiephunter.github.io/hackathon/#portfolio">Tìm hiểu thêm</a></div>`,
      },
    ],
  },
  {
    quest: "C++",
    ans: [
      {
        text: `<div class="ended">C++  <br> <span>Lập trình games, GUI, quản trị cơ sở dữ liệu…</span> <br><a style="color: red" href="https://nghiephunter.github.io/hackathon/#portfolio">Tìm hiểu thêm</a></div>`,
      },
    ],
  },
  {
    quest: "C#",
    ans: [
      {
        text: `<div class="ended">C# <br> <span>Phát triển unity games, lập trình ASP .NET, lập trình tạo nên các phần mềm đa nền tảng</span> <br><a style="color: red" href="https://nghiephunter.github.io/hackathon/#portfolio">Tìm hiểu thêm</a></div> `,
      },
    ],
  },
];
const container = document.getElementById("container");
data.forEach((item) => {
  //khoi tao section
  const div = document.createElement("div");
  div.classList.add("sec");
  div.id = item.quest;
  //khoi tao bo cau hoi cau tra loi
  const wrapper = document.createElement("div");
  const quest = document.createElement("div");
  item.ans.length === 1
    ? (quest.innerHTML = item.ans[0].text)
    : (quest.innerHTML = item.quest);
  quest.classList.add("quest");
  wrapper.appendChild(quest);
  //khoi tao cau tra loi
  const answers = document.createElement("div");
  item.ans.length !== 1 &&
    item.ans.forEach((item) => {
      const img = document.createElement("img");
      const randomId = Math.floor(Math.random() * 5);
      img.src = `./rock/tt${randomId + 1}-removebg-preview.png`;
      img.width = 100;
      img.height = 100;
      img.style.cursor = `url('cursor.png'), auto`;
      const answer = document.createElement("div");
      answer.classList.add("answer");
      const link = document.createElement("a");
      link.href = `#${item.to}`;
      const ans = document.createElement("h6");
      ans.innerHTML = item.text;
      link.appendChild(ans);
      link.appendChild(img);
      answer.appendChild(link);
      answers.appendChild(answer);
    });
  wrapper.appendChild(answers);
  div.appendChild(wrapper);
  container.appendChild(div);
});
