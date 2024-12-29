const reviews=[
    {
      id:1,
      name:"Yamini Gautam",
      job:"Web Developer",
      img:"https://media.istockphoto.com/id/1158717512/photo/smiling-indian-young-business-woman-wear-blue-jeans-shirt-looking-at-camera-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TGj38rrHG7XZbbpQT7q1g3A2_7b-WQw1z91Xf4sYF1w=",
      text:"Feel free to adjust the values to suit your design needs. If you need further customization or have any other questions, I'm here to help! . By manipulating the DOM, you have infinite possibilities. "
},
{
  id:2,
  name:"Sami Rathon",
  job:"Graphic Designer",
  img:"https://media.istockphoto.com/id/1384332901/photo/handsome-young-adult.jpg?s=612x612&w=0&k=20&c=1xXfEWzYc3Z1cdPu5PS9UbAS6KoUJZcxtgXwHCtSgLs=",
  text:"Feel free to adjust the values to suit your design needs. If you need further customization or have any other questions, I'm here to help! .By manipulating the DOM, you have infinite possibilities. ",
},
{
  id:3,
  name:"Divya Oberio",
  job:"Marketing",
  img:"https://media.istockphoto.com/id/522138534/photo/i-engage-minds.jpg?s=612x612&w=0&k=20&c=u9RQJy3nJhHNh9FYzRHVfgyHDzMJOfeJzi2u4ToHlXQ=",
  text:"Feel free to adjust the values to suit your design needs. If you need further customization or have any other questions, I'm here to help! .By manipulating the DOM, you have infinite possibilities. "
},
{
  id:4,
  name:"Ravi Anthon",
  job:"SDE Intern",
  img:"https://media.istockphoto.com/id/1140521075/photo/tuning-the-intrument-little-boy-with-phoropter-having-testing-his-eyes-in-the-doctors-office.jpg?s=612x612&w=0&k=20&c=vVWaRrp43NcqW28tYAl9xgp98BaZsJiy5A1NIRwWUlA=",
  text:"Feel free to adjust the values to suit your design needs. If you need further customization or have any other questions, I'm here to help! .By manipulating the DOM, you have infinite possibilities. "
},
]

const img = document.getElementById("person");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  showPerson();
});

function showPerson(){
  const item = reviews[currentItem];
  img.src= item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}

nextBtn.addEventListener("click" ,function() {
  currentItem++;
  if(currentItem > reviews.length){
    currentItem =0;
  }
  showPerson();
});

prevBtn.addEventListener("click" ,function() {
  currentItem --;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
});