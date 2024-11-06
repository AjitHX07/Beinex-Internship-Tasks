
// input id's
const name = String(document.getElementById("name").value)
const maths = Number(document.getElementById("sub_math").value)
const science = Number(document.getElementById("sub_science").value)
const english = Number(document.getElementById("sub_eng").value)

// output span id's
const display_total = document.getElementById("total")
const display_avg = document.getElementById("avg")
const display_grade = document.getElementById("grade")
const display_name = document.getElementById("st_name")


function gradecalc() {

    const total = maths + science + english
    const avg = Math.floor(total / 3)

    // for grade
    if (avg >= 90) {
        display_grade.innerText = 'A+'
        display_grade.style.color = "#3fc13f"
    }
    else if (avg >= 80) {
        display_grade.innerText = 'A'
    }
    else if (avg >= 70) {
        display_grade.innerText = 'B'
    }
    else if (avg >= 60) {
        display_grade.innerText = 'C'
    }
    else if (avg >= 50) {
        display_grade.innerText = 'D'
        display_grade.style.color = "orange"

    }
    else {
        display_grade.innerText = 'F'
        display_grade.style.color = "red"
    }

    // display name
    display_name.innerText = name.toUpperCase()
    // display total mark
    display_total.innerText = total
    // display average
    display_avg.innerText = avg + ' %'

}

