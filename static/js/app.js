var dict = $("#obj").data("name");

if (dict) {

    for (var a = 0; a < dict[0].length; a++) {

        $("#file_name").append(`<option value=` + dict[0][a] + `>` + dict[0][a] + `</option>`)

    }

}

if (document.getElementById("pic_graph")) {
    document.getElementById("pic_graph").style.display = "none"
}

$("#password_form").submit(function() {

    if (document.getElementById("pass").value == "3333") {

        document.getElementById("pass").classList.remove("is-invalid")

        $("#invalid-feedback").remove();
        document.getElementById("password_form").style.display = "none"

        document.getElementById("pic_graph").style.display = "block";
    } else {

        document.getElementById("pass").classList.add("is-invalid")

        $('#form_field').append(`<div class="invalid-feedback">
        Password is Incorrect.
        </div>`)

    }
})
$("#obj").change(function() {

    var value = parseInt($(this).val());

    $("#file_name").html("")

    for (var i = 0; i < dict[value].length; i++) {

        $("#file_name").append(`<option value=` + dict[value][i] + `>` + dict[value][i] + `</option>`)

    }
})


var vector = $("#vector").data("name");

if (vector) {

    for (var i = 0; i < vector.length; i++) {
        $("#vector").append(`<option value=` + i + `>` + vector[i] + `</option>`)
    }

}

$("#form4").submit(function() {

    if (document.getElementById("pass").value == "33!33") {

        document.getElementById("pass").classList.remove("is-invalid")

        $("#invalid-feedback").remove();

        document.getElementById("form4").action = "/Admin";
    } else {

        document.getElementById("pass").classList.add("is-invalid")

        $('#form_field').append(`<div class="invalid-feedback">
        Password is Incorrect.
        </div>`)

    }
})
$('.carousel').carousel({
  interval: 2000
})