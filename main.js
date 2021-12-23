const getResult = () => {
    let Physics = document.getElementById('Physics').value;
    let Chemistry = document.getElementById('Chemistry').value;
    let Zoology = document.getElementById('Zoology').value;
    let Botany = document.getElementById('Botany').value;
    let topper = document.getElementById("Topper's Mark").value;

    if (document.getElementsByClassName('main').value == "") {
        alert("Please Enter Some Value");
    }
    
    let total = parseInt(Physics) + parseInt(Chemistry) + parseInt(Zoology) + parseInt(Botany);
    let percentage = (total * 100) / topper;
    percentage = Math.trunc(percentage)
    if (percentage > 50){
        document.getElementById('resultShow').innerHTML = "You're are qualified for General Category";
    }
    if (Math.trunc(percentage) < 50){
        document.getElementById('resultShow').innerHTML = "You're are not qualified for General Category";
    }
    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('total').innerHTML = total;

    if (total > 720) {
        document.getElementById('resultShow').innerHTML = "please enter value below 720";
        document.getElementById('percentage').innerHTML = "NA"
        document.getElementById('total').innerHTML = "NA"
    }

}