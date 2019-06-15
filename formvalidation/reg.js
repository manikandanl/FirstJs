function vali() {
    let firstname = document.forms["mani"]["StudentName"].value;
    let lastname = document.forms["mani"]["Address"].value;
    let email = document.forms["mani"]["Email"].value;
    let Gender = document.forms["mani"]["gender"].value;
    let pincode = document.forms["mani"]["Pincode"].value;
    if (firstname == "") {
        alert("please enter the name");
        // x.focus();
        return false;
    }
    // let data =
    axios.post('http://localhost:3000/student/adds', {
        studentName: firstname,
        address: lastname,
        email: email,
        gender: Gender,
        pincode: pincode,

    },
        {
            "content-type": "application/json",
        },
    )
        .then(function (response) {
            console.log('response>>>>>>>>>>>>>>', response.data)
            alert(response.data.studentName);
        })
        .catch(function (error) {
            console.error("I am in Error block")
        });



    // window.open(
    //     `file:///home/decoders/Desktop/Lcmani/Form%20validation/Reg.html?firstname=${firstname}&lastname=${lastname}&age=&address=&city=&state=&country=`,
    //     '_blank'
    // );
    return true;
}

function openNewFile() {
    window.open("./get.html")
}