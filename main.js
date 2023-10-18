let code = document.getElementById("code");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let nid = document.getElementById("nid");
let job = document.getElementById("job");
let jobdate = document.getElementById("jobdate");
let hub = document.getElementById("hub");
let salary = document.getElementById("salary");
let insurance = document.getElementById("insurance");
let saveEmp = document.getElementById("saveEmp");
let tbody = document.getElementById("tbody");
let datapro;
let table = document.getElementById("emptable");
let addempbtn = document.getElementById("addempbtn");
let mood = "create";
let tmp;



if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product)
} else {
    datapro = [];
}

saveEmp.onclick = function () {
    let newpro = {
        code: code.value,
        name: name.value,
        phone: phone.value,
        address: address.value,
        nid: nid.value,
        job: job.value,
        jobdate: jobdate.value,
        hub: hub.value,
        salary: salary.value,
        insurance: insurance.value,

    }
    if (mood === "create") {
        datapro.push(newpro)

        localStorage.setItem('product', JSON.stringify(datapro))



    } else {
        datapro[tmp] = newpro;
        mood = "create";
        saveEmp.innerHTML = "إضافة"
        showdata()
    }
    document.getElementById("added").style.display = "none"
    document.getElementById("firstbody").style.display = "block"
    showdata()
}

function showdata() {

    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        table += ` 
        <tr>
            
            <td><button onclick="deleteData(${i})" id="delete">حذف</button></td>
            <td><button onclick="updateData(${i})" id="update">تعديل</button></td>
            <td>${datapro[i].insurance}</td>
            <td>${datapro[i].salary}</td>
            <td>${datapro[i].hub}</td>
            <td>${datapro[i].jobdate}</td>
            <td>${datapro[i].job}</td>
            <td>${datapro[i].nid}</td>
            <td>${datapro[i].address}</td >
            <td>${datapro[i].phone}</td>
            <td>${datapro[i].name}</td>
            <td>${datapro[i].code}</td>
        </tr > 
        `
        console.log("sasasasasa")
    }

    document.getElementById('tbody').innerHTML = table;

}
function added() {
    document.getElementById("added").style.display = "block"
    document.getElementById("firstbody").style.display = "none"

}

function deleteData(i) {
    datapro.splice(i, 1);
    localStorage.product = JSON.stringify(datapro);
    showdata()
}

function updateData(i) {
    added()
    code.value = datapro[i].code;
    name.value = datapro[i].name;
    phone.value = datapro[i].phone;
    address.value = datapro[i].address;
    nid.value = datapro[i].nid;
    job.value = datapro[i].job;
    jobdate.value = datapro[i].jobdate;
    hub.value = datapro[i].hub;
    salary.value = datapro[i].salary;
    insurance.value = datapro[i].insurance;
    saveEmp.innerHTML = "حفظ التعديل";
    mood = "update";
    tmp = i;
}

showdata() 
