function validateForm(){
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let phone = document.getElementById('phone');
    let image = document.getElementById('image-url');


    if(name == ""){
        alert('Name is required');
        return false;
    }
    if(surname == ''){
        alert('Surname is required');
        return false;
    }
    if(phone == ''){
        alert('Phone is required');
        return false;
    }
    if(image == ''){
        alert('URL is required');
        return false;
    }

    return true;
}
// function to show data
function showData(){
    let contactList;
    if(localStorage.getItem('contactList') == null){
        contactList = [];
    }
    else{
        contactList = JSON.parse(localStorage.getItem('contactList'))
    }

    let html = '';

    contactList.forEach(function(element,index){
        html += '<tr>';
        html += '<td>' + element.name + "</td>";
        html += '<td>' + element.surname + "</td>";
        html += '<td>' + element.phone + "</td>";
        html += '<td>' + element.image + "</td>";
        html +=
         '<td><button onclick = "deleteData('+
         index +
        ')" class = "btn btn-danger">Delete</button><button onclick = "updateData('+
        index +
        ')" class = "btn btn-warning m-2">Edit</button></td>';
        html += '</tr>';
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}
//Loads all data
document.onload = showData();

function addData(){
    if(validateForm() == true){
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let phone = document.getElementById('phone').value;
        let image = document.getElementById('image-url').value;

        let contactList;
        if(localStorage.getItem('contactList') == null){
            contactList = [];
        }
        else{
            contactList = JSON.parse(localStorage.getItem('contactList'))
        }

        contactList.push({
            name:name,
            surname:surname,
            phone:phone,
            imgage:image
        })

        localStorage.setItem('contactList',JSON.stringify(contactList));
        showData();
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('image-url').value = '';

    }
}

// functions to delete data from local storage

function deleteData(index){
    let contactList;
    if(localStorage.getItem('contactList') == null){
        contactList = [];
    }
    else{
        contactList = JSON.parse(localStorage.getItem('contactList'))
    }

    contactList.splice(index,1);
    localStorage.setItem('contactList',JSON.stringify(contactList));
    showData();
}



// function to update local storage


function updateData(index){
    document.getElementById('Submit').style.display = 'none';
    document.getElementById('Update').style.display = 'block';

    let contactList;
    if(localStorage.getItem('contactList') == null){
        contactList = [];
    }
    else{
        contactList = JSON.parse(localStorage.getItem('contactList'))
    }

    document.getElementById('name').value = contactList[index].name;
    document.getElementById('surname').value = contactList[index].surname;
    document.getElementById('phone').value = contactList[index].phone;
    document.getElementById('image-url').value = contactList[index].image;


    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
            contactList[index].name = document.getElementById('name').value;
            contactList[index].surname = document.getElementById('surname').value;
            contactList[index].phone = document.getElementById('phone').value;
            contactList[index].image = document.getElementById('image-url').value;



            localStorage.setItem('contactList',JSON.stringify(contactList));

            showData();
            document.getElementById('name').value = '';
            document.getElementById('surname').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('image-url').value = '';


            document.getElementById('Submit').style.display = 'none';
            document.getElementById('Update').style.display = 'block';

        }
    }


}


function insertImage() {

    const inputElement = document.getElementById('image-url');
    const imageElement = document.getElementById('image');

    
    const imageUrl = inputElement.value;
    imageElement.src = imageUrl;
}

