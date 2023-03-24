function editRow(id, name, className, school){

console.log(name,className,school,id);
window.location.href =`/ECSubject?name=${name}&id=${id}&class=${className}&school=${school}`;

}

$(document).ready(function () {
    // Code to be executed when the document is ready
    // For example, you can use jQuery to manipulate the DOM or add event listeners to elements
    $.ajax({
        url: "/subjects/getAllSubjects",
        type: "GET",
        contentType: "application/json",
        success: function (response) {
            console.log(response);
            let str = '';
            let count = 1;
            for (let item of response.allSubjects) {
                str += `<tr>
                <td>${count}</td>
                <td>${item.name}</td>
                <td>${item.class}</td>
                <td>${item.school}</td>
                <td><button><span class="glyphicon glyphicon-edit" onclick="editRow('${item._id}','${item.name}','${item.class}','${item.school}')"></span></button>
                <span><button><span class="glyphicon glyphicon-trash"></span></button></span><span><button><span class="glyphicon glyphicon-eye-open"></span></button></span></td>
              </tr>`;

                count++;
            }
            $('#tableData').append(str);
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
});
