function valis() {
  
    axios({
        url: 'http://localhost:3000/student/view',
        method: 'get'
    })
        .then(function (response) {
            let rowdata ='';
            let datalenghth = response.data.length;
            for (let i = 0; i < datalenghth; i++) {
               rowdata +=`<tr>
               <td>${response.data[i].address}</td>
               <td>${response.data[i].email}</td>
               <td>${response.data[i].pincode}</td>
               <td>${response.data[i].gender}</td>
               <td>${response.data[i].studentName}</td>
               </tr><br/>`
            }

            document.getElementById('tableData').innerHTML=rowdata
        })
        .catch(function (error) {
            console.error("I am in Error block",error)
        });

    return true;
}
