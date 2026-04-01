
const Name = document.getElementById("name");
const age = document.getElementById("age");
const city = document.getElementById("city");
const hobby = document.getElementById("hobby");
const btn_clear = document.getElementById("clear");
const btn_send = document.getElementById("send");


btn_clear.addEventListener("click", () => {
    Name.value = "";
    age.value = "";
    city.value = "";
    hobby.value = "";

    Name.style.color = "black";
    age.style.color = "black";
    city.style.color = "black";
    hobby.style.color = "black";
});

btn_send.addEventListener("click", () => {
    if (checkDate()){
        alert("Данные успешно отправлены!")
    }
});

function checkDate(){
    let allow = true;
    if (!Name.value.trim()) {
        Name.value = "Введите значение!";
        Name.style.color = "red";
        allow = false;
    }
    if (!age.value.trim()) {
        age.value = "Введите значение!";
        age.style.color = "red";
        allow = false;
    } else if (isNaN(age.value) || age.value <= 0) {
        age.value = "Введите корректный возраст!";
        age.style.color = "red";
        allow = false;
    }
    if (!city.value.trim()) {
        city.value = "Введите значение!";
        city.style.color = "red";
        allow = false;
    }
    if (!hobby.value.trim()) {
        hobby.value = "Введите значение!";
        hobby.style.color = "red";
        allow = false;
    }
    return allow;
}