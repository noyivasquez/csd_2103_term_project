function edit_info() {
    //hides existing info
    document.getElementById("fname").style.display = "none";
    document.getElementById("lname").style.display = "none";
    document.getElementById("phone_num").style.display = "none";
    document.getElementById("email_add").style.display = "none";
    document.getElementById("username").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("edit_button").style.display = "none";

    //replace current content with input types
    var change_fname = document.getElementById("change_fname");
    var change_lname = document.getElementById("change_lname");
    var change_pnum = document.getElementById("change_pnum");
    var change_eadd = document.getElementById("change_eadd");
    var change_uname = document.getElementById("change_uname");
    var change_pword = document.getElementById("change_pword");
    var save_btn = document.getElementById("save_button");

    var fname_inp = document.createElement("input");
    fname_inp.type = "text";
    fname_inp.id = "new_fname";
    change_fname.append(fname_inp);

    var lname_inp = document.createElement("input");
    lname_inp.type = "text";
    lname_inp.id = "new_lname";
    change_lname.append(lname_inp);

    var pnum_inp = document.createElement("input");
    pnum_inp.type = "tel";
    pnum_inp.id = "new_pnum";
    change_pnum.append(pnum_inp);

    var eadd_inp = document.createElement("input");
    eadd_inp.type = "email";
    eadd_inp.id = "new_eadd";
    change_eadd.append(eadd_inp);

    var uname_inp = document.createElement("input");
    uname_inp.type = "text";
    uname_inp.id = "new_uname";
    change_uname.append(uname_inp);

    var pword_inp = document.createElement("input");
    pword_inp.type = "password";
    pword_inp.id = "new_pword";
    change_pword.append(pword_inp);

    //adds new row for new password confirmation
    var table = document.getElementById("user_info");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var span = document.createElement("span");
    span.id = "confirm_pword";
    var confirm_pword = document.createElement("input");
    confirm_pword.type = "password";
    confirm_pword.id = "c_pword";

    td.append("Confirm Password: ");
    tr.append(td);
    span.append(confirm_pword)
    td2.append(span);
    tr.append(td2);
    tr.id = "extra";
    table.append(tr);

    //changes button and add a new function to save
    var save = document.createElement("button");
    save.type = "button";
    save.innerHTML = "Save";
    save_btn.append(save);
    save.onclick = save_info;

    function save_info() {

        var isValid = true;

        var new_fname = document.getElementById("new_fname");
        var new_lname = document.getElementById("new_lname");
        var new_pnum = document.getElementById("new_pnum");
        var new_eadd = document.getElementById("new_eadd");
        var new_uname = document.getElementById("new_uname");
        var new_pword = document.getElementById("new_pword");
        var c_pword = document.getElementById("c_pword");

        if (new_fname.value.length < 2) {
            isValid = false;
            change_fname.append("  First name must be at least 2 characters.");
        }

        if (new_lname.value.length < 2) {
            isValid = false;
            change_lname.append("  Last name must be at least 2 characters.");
        }

        if (new_pnum.value.length < 11) {
            isValid = false;
            change_pnum.append("  Please enter a valid phone number.");
        }

        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

        if (!pattern.test(new_eadd.value)) {
            isValid = false;
            change_eadd.append("  Please enter a valid email address.");
        }

        if (new_uname.value.length < 5) {
            isValid = false;
            change_uname.append("  Username must be at least 5 characters.");
        }

        if (new_pword.value.length < 8) {
            isValid = false;
            change_pword.append("  Password must be at least 8 characters.");
        }

        if (!(c_pword.value == new_pword.value)) {
            isValid = false;
            document.getElementById("confirm_pword").append("  Password should match the password above.");
        }
        if (isValid) {

            var changed_fname = document.getElementById("new_fname").value;
            document.getElementById("new_fname").style.display = "none";
            change_fname.style.display = "none";
            document.getElementById("fname").style.display = "block";
            document.getElementById("fname").innerHTML = changed_fname;

            var changed_lname = document.getElementById("new_lname").value;
            document.getElementById("new_lname").style.display = "none";
            change_lname.style.display = "none";
            document.getElementById("lname").style.display = "block";
            document.getElementById("lname").innerHTML = changed_lname;

            var changed_pnum = document.getElementById("new_pnum").value;
            document.getElementById("new_pnum").style.display = "none";
            change_pnum.style.display = "none";
            document.getElementById("phone_num").style.display = "block";
            document.getElementById("phone_num").innerHTML = changed_pnum;

            var changed_eadd = document.getElementById("new_eadd").value;
            document.getElementById("new_eadd").style.display = "none";
            change_eadd.style.display = "none";
            document.getElementById("email_add").style.display = "block";
            document.getElementById("email_add").innerHTML = changed_eadd;

            var changed_uname = document.getElementById("new_uname").value;
            document.getElementById("new_uname").style.display = "none";
            change_uname.style.display = "none";
            document.getElementById("username").style.display = "block";
            document.getElementById("username").innerHTML = changed_uname;

            var changed_pword = document.getElementById("new_pword").value.length;
            var star = "*";
            document.getElementById("new_pword").style.display = "none";
            change_pword.style.display = "none";
            document.getElementById("password").style.display = "block";
            document.getElementById("password").innerHTML = star.repeat(changed_pword);

            save_btn.style.display = "none";
            document.getElementById("extra").style.display = "none";

            document.getElementById("success").innerHTML = "Your information has been successfully saved.";

        }

    };

};