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
      to: "js",
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
];
const container = document.getElementById("container")
data.forEach(item => {
  const div = document.createElement('div')
  div.classList.add('sec')
  div.id = item.quest
  const wrapper = document.createElement('div')
  const quest = document.createElement('div')
  quest.innerHTML = item.quest
  quest.classList.add('quest')
  wrapper.appendChild(quest)
  const answers = document.createElement('div')
  item.ans.forEach(item => {
      const answer = document.createElement('div')
      answer.classList.add('answer')
      const link = document.createElement('a')
      link.href = `#${item.to}`
      link.innerHTML = item.text
      answer.appendChild(link)
      answers.appendChild(answer)
  })
  wrapper.appendChild(answers)
  div.appendChild(wrapper)
  container.appendChild(div)
})
