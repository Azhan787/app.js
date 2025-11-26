// Set today's date as max
document.getElementById("date").max = new Date().toISOString().split("T")[0];

function calculateAge() {

    let input = document.getElementById("date").value;

    if (!input) {
        document.getElementById("result").innerHTML = "Please select a date!";
        return;
    }

    let birthDate = new Date(input);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    }

    document.getElementById("result").innerHTML =
        `Your age is <b>${y3}</b> years, <b>${m3}</b> months and <b>${d3}</b> days.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}