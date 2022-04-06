var score = 0;
var drk = document.querySelector('[type=checkbox]');
var ht = document.getElementById('html');
var tbl = document.querySelector('table');
var stg = document.getElementById('stg');
drk.addEventListener('click', function () {
    if (ht.classList.contains('dark')) {
        ht.classList.remove('dark');
        tbl.classList.remove(dk)
    } else {
        ht.classList.add('dark')
        tbl.classList.add(dk)
    }
})

$("input").keypress(function (event) {
    if (event.keyCode === 13) {
        $("button").click();
    }
});

$("button").click(function () {
    var val = $('#state').val()
    if (stateList.includes(val) && !statesGuessedCorrectly.includes(val)) {
        score++
        statesGuessedCorrectly.push(val);
        $('#state').val("");
        var row = tbl.insertRow(score)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        cell1.innerHTML = score;
        cell2.innerHTML = val;
        stg.innerHTML = `States Guessed: ${statesGuessedCorrectly.length}`
    }
});

