//initializing stock and cart quantity values
var bella_stock = 10;
var nadine_stock = 10;
var roni_stock = 10;
var aubrey_stock = 10;
var ellie_stock = 10;
var yanna_stock = 10;
var hiro_stock = 10;
var connor_stock = 10;
var blake_stock = 10;
var pete_stock = 10;
var andre_stock = 10;
var arthur_stock = 10;
var elsa_stock = 10;
var tyler_stock = 10;
var tori_stock = 10;
var jake_stock = 10;
var charlotte_stock = 10;
var alex_stock = 10;
var quant = 0;
var bella_quant = 0;
var nadine_quant = 0;
var roni_quant = 0;
var aubrey_quant = 0;
var ellie_quant = 0;
var yanna_quant = 0;
var hiro_quant = 0;
var connor_quant = 0;
var blake_quant = 0;
var pete_quant = 0;
var andre_quant = 0;
var arthur_quant = 0;
var elsa_quant = 0;
var tyler_quant = 0;
var tori_quant = 0;
var jake_quant = 0;
var charlotte_quant = 0;
var alex_quant = 0;


function addBella() {
    if($("#bella_size").val() == "" || $("#bella_color").val() == "") {
        document.getElementById("bella_stock").style.fontSize = "0.7em";
        document.getElementById("bella_stock").innerHTML = "Please select size and color.";
    }
    else {
        var abella_stock = bella_stock-1;
        if (abella_stock<0) {
            abella_stock = 0;
            bella_quant = bella_quant;
            quant = quant;
        }
        else {
            bella_quant = bella_quant + 1;
            quant = quant + 1;
        }
        bella_stock = abella_stock;
        document.getElementById("bella_stock").style.fontSize = "1em";
        document.getElementById("bella_stock").innerHTML = bella_stock;
        document.getElementById("quant").innerHTML = quant;
    }
    
}

function returnBella() {
    var rbella_stock = bella_stock+1;
    bella_stock = rbella_stock;
    if (bella_stock > 10) {
        bella_stock = 10;
    }
    bella_quant = bella_quant - 1;
    if (bella_quant<0) {
        bella_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("bella_stock").innerHTML = bella_stock;
}

function addNadine() {
    if($("#nadine_size").val() == "" || $("#nadine_color").val() == "") {
        document.getElementById("nadine_stock").style.fontSize = "0.7em";
        document.getElementById("nadine_stock").innerHTML = "Please select size and color.";
    }
    else {
        var anadine_stock = nadine_stock-1;
        if (anadine_stock<0) {
            anadine_stock = 0;
            nadine_quant = nadine_quant;
            quant = quant;
        }
        else {
            nadine_quant = nadine_quant + 1;
            quant = quant + 1;
        }
        nadine_stock = anadine_stock;
        document.getElementById("nadine_stock").style.fontSize = "1em";
        document.getElementById("nadine_stock").innerHTML = nadine_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnNadine() {
    var rnadine_stock = nadine_stock+1;
    nadine_stock = rnadine_stock;
    if (nadine_stock > 10) {
        nadine_stock = 10;
    }
    nadine_quant = nadine_quant - 1;
    if (nadine_quant<0) {
        nadine_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("nadine_stock").innerHTML = nadine_stock;
}

function addRoni() {
    if($("#roni_size").val() == "" || $("#roni_color").val() == "") {
        document.getElementById("roni_stock").style.fontSize = "0.7em";
        document.getElementById("roni_stock").innerHTML = "Please select size and color.";
    }
    else {
        var aroni_stock = roni_stock-1;
        if (aroni_stock<0) {
            aroni_stock = 0;
            roni_quant = roni_quant;
            quant = quant;
        }
        else {
            roni_quant = roni_quant + 1;
            quant = quant + 1;
        }
        roni_stock = aroni_stock;
        document.getElementById("roni_stock").style.fontSize = "1em";
        document.getElementById("roni_stock").innerHTML = roni_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnRoni() {
    var rroni_stock = roni_stock+1;
    roni_stock = rroni_stock;
    if (roni_stock > 10) {
        roni_stock = 10;
    }
    roni_quant = roni_quant - 1;
    if (roni_quant<0) {
        roni_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("roni_stock").innerHTML = roni_stock;
}

function addAubrey() {
    if($("#aubrey_size").val() == "" || $("#aubrey_color").val() == "") {
        document.getElementById("aubrey_stock").style.fontSize = "0.7em";
        document.getElementById("aubrey_stock").innerHTML = "Please select size and color.";
    }
    else {
        var aaubrey_stock = aubrey_stock-1;
        if (aaubrey_stock<0) {
            aaubrey_stock = 0;
            aubrey_quant = aubrey_quant;
            quant = quant;
        }
        else {
            aubrey_quant = aubrey_quant + 1;
            quant = quant + 1;
        }
        aubrey_stock = aaubrey_stock;
        document.getElementById("aubrey_stock").style.fontSize = "1em";
        document.getElementById("aubrey_stock").innerHTML = aubrey_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnAubrey() {
    var raubrey_stock = aubrey_stock+1;
    aubrey_stock = raubrey_stock;
    if (aubrey_stock > 10) {
        aubrey_stock = 10;
    }
    aubrey_quant = aubrey_quant - 1;
    if (aubrey_quant<0) {
        aubrey_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("aubrey_stock").innerHTML = aubrey_stock;
}

function addEllie() {
    if($("#ellie_size").val() == "" || $("#ellie_color").val() == "") {
        document.getElementById("ellie_stock").style.fontSize = "0.7em";
        document.getElementById("ellie_stock").innerHTML = "Please select size and color.";
    }
    else {
        var aellie_stock = ellie_stock-1;
        if (aellie_stock<0) {
            aellie_stock = 0;
            ellie_quant = ellie_quant;
            quant = quant;
        }
        else {
            ellie_quant = ellie_quant + 1;
            quant = quant + 1;
        }
        ellie_stock = aellie_stock;
        document.getElementById("ellie_stock").style.fontSize = "1em";
        document.getElementById("ellie_stock").innerHTML = ellie_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnEllie() {
    var rellie_stock = ellie_stock+1;
    ellie_stock = rellie_stock;
    if (ellie_stock > 10) {
        ellie_stock = 10;
    }
    ellie_quant = ellie_quant - 1;
    if (ellie_quant<0) {
        ellie_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("ellie_stock").innerHTML = ellie_stock;
}

function addYanna() {
    if($("#yanna_size").val() == "" || $("#yanna_color").val() == "") {
        document.getElementById("yanna_stock").style.fontSize = "0.7em";
        document.getElementById("yanna_stock").innerHTML = "Please select size and color.";
    }
    else {
        var ayanna_stock = yanna_stock-1;
        if (ayanna_stock<0) {
            ayanna_stock = 0;
            yanna_quant = yanna_quant;
            quant = quant;
        }
        else {
            yanna_quant = yanna_quant + 1;
            quant = quant + 1;
        }
        yanna_stock = ayanna_stock;
        document.getElementById("yanna_stock").style.fontSize = "1em";
        document.getElementById("yanna_stock").innerHTML = yanna_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnYanna() {
    var ryanna_stock = yanna_stock+1;
    yanna_stock = ryanna_stock;
    if (yanna_stock > 10) {
        yanna_stock = 10;
    }
    yanna_quant = yanna_quant - 1;
    if (yanna_quant<0) {
        yanna_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("yanna_stock").innerHTML = yanna_stock;
}

function addHiro() {
    if($("#hiro_size").val() == "" || $("#hiro_color").val() == "") {
        document.getElementById("hiro_stock").style.fontSize = "0.7em";
        document.getElementById("hiro_stock").innerHTML = "Please select size and color.";
    }
    else {
        var ahiro_stock = hiro_stock-1;
        if (ahiro_stock<0) {
            ahiro_stock = 0;
            hiro_quant = hiro_quant;
            quant = quant;
        }
        else {
            hiro_quant = hiro_quant + 1;
            quant = quant + 1;
        }
        hiro_stock = ahiro_stock;
        document.getElementById("hiro_stock").style.fontSize = "1em";
        document.getElementById("hiro_stock").innerHTML = hiro_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnHiro() {
    var rhiro_stock = hiro_stock+1;
    hiro_stock = rhiro_stock;
    if (hiro_stock > 10) {
        hiro_stock = 10;
    }
    hiro_quant = hiro_quant - 1;
    if (hiro_quant<0) {
        hiro_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("hiro_stock").innerHTML = hiro_stock;
}

function addConnor() {
    if($("#connor_size").val() == "" || $("#connor_color").val() == "") {
        document.getElementById("connor_stock").style.fontSize = "0.7em";
        document.getElementById("connor_stock").innerHTML = "Please select size and color.";
    }
    else {
        var aconnor_stock = connor_stock-1;
        if (aconnor_stock<0) {
            aconnor_stock = 0;
            connor_quant = connor_quant;
            quant = quant;
        }
        else {
            connor_quant = connor_quant + 1;
            quant = quant + 1;
        }
        connor_stock = aconnor_stock;
        document.getElementById("connor_stock").style.fontSize = "1em";
        document.getElementById("connor_stock").innerHTML = connor_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnConnor() {
    var rconnor_stock = connor_stock+1;
    connor_stock = rconnor_stock;
    if (connor_stock > 10) {
        connor_stock = 10;
    }
    connor_quant = connor_quant - 1;
    if (connor_quant<0) {
        connor_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("connor_stock").innerHTML = connor_stock;
}

function addBlake() {
    if($("#blake_size").val() == "" || $("#blake_color").val() == "") {
        document.getElementById("blake_stock").style.fontSize = "0.7em";
        document.getElementById("blake_stock").innerHTML = "Please select size and color.";
    }
    else {
        var ablake_stock = blake_stock-1;
        if (ablake_stock<0) {
            ablake_stock = 0;
            blake_quant = blake_quant;
            quant = quant;
        }
        else {
            blake_quant = blake_quant + 1;
            quant = quant + 1;
        }
        blake_stock = ablake_stock;
        document.getElementById("blake_stock").style.fontSize = "1em";
        document.getElementById("blake_stock").innerHTML = blake_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnBlake() {
    var rblake_stock = blake_stock+1;
    blake_stock = rblake_stock;
    if (blake_stock > 10) {
        blake_stock = 10;
    }
    blake_quant = blake_quant - 1;
    if (blake_quant<0) {
        blake_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("blake_stock").innerHTML = blake_stock;
}

function addPete() {
    if($("#pete_size").val() == "" || $("#pete_color").val() == "") {
        document.getElementById("pete_stock").style.fontSize = "0.7em";
        document.getElementById("pete_stock").innerHTML = "Please select size and color.";
    }
    else {
        var apete_stock = pete_stock-1;
        if (apete_stock<0) {
            apete_stock = 0;
            pete_quant = pete_quant;
            quant = quant;
        }
        else {
            pete_quant = pete_quant + 1;
            quant = quant + 1;
        }
        pete_stock = apete_stock;
        document.getElementById("pete_stock").style.fontSize = "1em";
        document.getElementById("pete_stock").innerHTML = pete_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnPete() {
    var rpete_stock = pete_stock+1;
    pete_stock = rpete_stock;
    if (pete_stock > 10) {
        pete_stock = 10;
    }
    pete_quant = pete_quant - 1;
    if (pete_quant<0) {
        pete_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("pete_stock").innerHTML = pete_stock;
}

function addAndre() {
    if($("#andre_size").val() == "" || $("#andre_color").val() == "") {
        document.getElementById("andre_stock").style.fontSize = "0.7em";
        document.getElementById("andre_stock").innerHTML = "Please select size and color.";
    }
    else {
        var aandre_stock = andre_stock-1;
        if (aandre_stock<0) {
            aandre_stock = 0;
            andre_quant = andre_quant;
            quant = quant;
        }
        else {
            andre_quant = andre_quant + 1;
            quant = quant + 1;
        }
        andre_stock = aandre_stock;
        document.getElementById("andre_stock").style.fontSize = "1em";
        document.getElementById("andre_stock").innerHTML = andre_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnAndre() {
    var randre_stock = andre_stock+1;
    andre_stock = randre_stock;
    if (andre_stock > 10) {
        andre_stock = 10;
    }
    andre_quant = andre_quant - 1;
    if (andre_quant<0) {
        andre_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("andre_stock").innerHTML = andre_stock;
}

function addArthur() {
    if($("#arthur_size").val() == "" || $("#arthur_color").val() == "") {
        document.getElementById("arthur_stock").style.fontSize = "0.7em";
        document.getElementById("arthur_stock").innerHTML = "Please select size and color.";
    }
    else {
        var aarthur_stock = arthur_stock-1;
        if (aarthur_stock<0) {
            aarthur_stock = 0;
            arthur_quant = arthur_quant;
            quant = quant;
        }
        else {
            arthur_quant = arthur_quant + 1;
            quant = quant + 1;
        }
        arthur_stock = aarthur_stock;
        document.getElementById("arthur_stock").style.fontSize = "1em";
        document.getElementById("arthur_stock").innerHTML = arthur_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnArthur() {
    var rarthur_stock = arthur_stock+1;
    arthur_stock = rarthur_stock;
    if (arthur_stock > 10) {
        arthur_stock = 10;
    }
    arthur_quant = arthur_quant - 1;
    if (arthur_quant<0) {
        arthur_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("arthur_stock").innerHTML = arthur_stock;
}

function addElsa() {
    if($("#elsa_color").val() == "") {
        document.getElementById("elsa_stock").style.fontSize = "0.7em";
        document.getElementById("elsa_stock").innerHTML = "Please select a color.";
    }
    else {
        var aelsa_stock = elsa_stock-1;
        if (aelsa_stock<0) {
            aelsa_stock = 0;
            elsa_quant = elsa_quant;
            quant = quant;
        }
        else {
            elsa_quant = elsa_quant + 1;
            quant = quant + 1;
        }
        elsa_stock = aelsa_stock;
        document.getElementById("elsa_stock").style.fontSize = "1em";
        document.getElementById("elsa_stock").innerHTML = elsa_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnElsa() {
    var relsa_stock = elsa_stock+1;
    elsa_stock = relsa_stock;
    if (elsa_stock > 10) {
        elsa_stock = 10;
    }
    elsa_quant = elsa_quant - 1;
    if (elsa_quant<0) {
        elsa_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("elsa_stock").innerHTML = elsa_stock;
}

function addTyler() {
    if($("#tyler_color").val() == "") {
        document.getElementById("tyler_stock").style.fontSize = "0.7em";
        document.getElementById("tyler_stock").innerHTML = "Please select a color.";
    }
    else {
        var atyler_stock = tyler_stock-1;
        if (atyler_stock<0) {
            atyler_stock = 0;
            tyler_quant = tyler_quant;
            quant = quant;
        }
        else {
            tyler_quant = tyler_quant + 1;
            quant = quant + 1;
        }
        tyler_stock = atyler_stock;
        document.getElementById("tyler_stock").style.fontSize = "1em";
        document.getElementById("tyler_stock").innerHTML = tyler_stock;
        document.getElementById("quant").innerHTML = quant;
    }
}

function returnTyler() {
    var rtyler_stock = tyler_stock+1;
    tyler_stock = rtyler_stock;
    if (tyler_stock > 10) {
        tyler_stock = 10;
    }
    tyler_quant = tyler_quant - 1;
    if (tyler_quant<0) {
        tyler_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("tyler_stock").innerHTML = tyler_stock;
}

function addTori() {
    if($("#tori_size").val() == "" || $("#tori_color").val() == "") {
        document.getElementById("tori_stock").style.fontSize = "0.7em";
        document.getElementById("tori_stock").innerHTML = "Please select size and color.";
    }
    else {
        var atori_stock = tori_stock-1;
        if (atori_stock<0) {
            atori_stock = 0;
            tori_quant = tori_quant;
            quant = quant;
        }
        else {
            tori_quant = tori_quant + 1;
            quant = quant + 1;
        }
        tori_stock = atori_stock;
        document.getElementById("tori_stock").style.fontSize = "1em";
        document.getElementById("tori_stock").innerHTML = tori_stock;
        document.getElementById("quant").innerHTML = quant;
    }
    
}

function returnTori() {
    var rtori_stock = tori_stock+1;
    tori_stock = rtori_stock;
    if (tori_stock > 10) {
        tori_stock = 10;
    }
    tori_quant = tori_quant - 1;
    if (tori_quant<0) {
        tori_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("tori_stock").innerHTML = tori_stock;
}

function addJake() {
    if($("#jake_size").val() == "" || $("#jake_color").val() == "") {
        document.getElementById("jake_stock").style.fontSize = "0.7em";
        document.getElementById("jake_stock").innerHTML = "Please select size and color.";
    }
    else {
        var ajake_stock = jake_stock-1;
        if (ajake_stock<0) {
            ajake_stock = 0;
            jake_quant = jake_quant;
            quant = quant;
        }
        else {
            jake_quant = jake_quant + 1;
            quant = quant + 1;
        }
        jake_stock = ajake_stock;
        document.getElementById("jake_stock").style.fontSize = "1em";
        document.getElementById("jake_stock").innerHTML = jake_stock;
        document.getElementById("quant").innerHTML = quant;
    }
    
}

function returnJake() {
    var rjake_stock = jake_stock+1;
    jake_stock = rjake_stock;
    if (jake_stock > 10) {
        jake_stock = 10;
    }
    jake_quant = jake_quant - 1;
    if (jake_quant<0) {
        jake_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("jake_stock").innerHTML = jake_stock;
}

function addCharlotte() {
    if($("#charlotte_size").val() == "" || $("#charlotte_color").val() == "") {
        document.getElementById("charlotte_stock").style.fontSize = "0.7em";
        document.getElementById("charlotte_stock").innerHTML = "Please select size and color.";
    }
    else {
        var acharlotte_stock = charlotte_stock-1;
        if (acharlotte_stock<0) {
            acharlotte_stock = 0;
            charlotte_quant = charlotte_quant;
            quant = quant;
        }
        else {
            charlotte_quant = charlotte_quant + 1;
            quant = quant + 1;
        }
        charlotte_stock = acharlotte_stock;
        document.getElementById("charlotte_stock").style.fontSize = "1em";
        document.getElementById("charlotte_stock").innerHTML = charlotte_stock;
        document.getElementById("quant").innerHTML = quant;
    }
    
}

function returnCharlotte() {
    var rcharlotte_stock = charlotte_stock+1;
    charlotte_stock = rcharlotte_stock;
    if (charlotte_stock > 10) {
        charlotte_stock = 10;
    }
    charlotte_quant = charlotte_quant - 1;
    if (charlotte_quant<0) {
        charlotte_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("charlotte_stock").innerHTML = charlotte_stock;
}

function addAlex() {
    if($("#alex_size").val() == "") {
        document.getElementById("alex_stock").style.fontSize = "0.7em";
        document.getElementById("alex_stock").innerHTML = "Please select a size.";
    }
    else {
        var aalex_stock = alex_stock-1;
        if (aalex_stock<0) {
            aalex_stock = 0;
            alex_quant = alex_quant;
            quant = quant;
        }
        else {
            alex_quant = alex_quant + 1;
            quant = quant + 1;
        }
        alex_stock = aalex_stock;
        document.getElementById("alex_stock").style.fontSize = "1em";
        document.getElementById("alex_stock").innerHTML = alex_stock;
        document.getElementById("quant").innerHTML = quant;
    }
    
}

function returnAlex() {
    var ralex_stock = alex_stock+1;
    alex_stock = ralex_stock;
    if (alex_stock > 10) {
        alex_stock = 10;
    }
    alex_quant = alex_quant - 1;
    if (alex_quant<0) {
        alex_quant = 0;
        quant = quant;
    }
    else{
        quant = quant - 1;
    }
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("alex_stock").innerHTML = alex_stock;
}