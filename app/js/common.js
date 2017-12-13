$(function () {

    $(document).ready(function () {

        let ajaxUrl = "http://localhost:81/TestWork/app/data.php";

        $("#viewTasks").click(function () {

            let select = $("#select option:selected").val();


            $.post(ajaxUrl, {'select': select}, function (response) {

                let people = JSON.parse(response);

                $("#table").empty();

                let a = [];

                for (var key in people.array) {

                    a.push(people.array[key]);
                    //console.log(key, ':', people.array[key]);
                }

                a.forEach((elem, index) => {

                    $("#table").append(`


 
            <tr>
                <td class="userDeleteData" data-userdelete="${elem.id}">${index}</td>
                <td class="namePeople">${elem.name}</td>
                <td class="">${elem.type}</td>
                <td class="">${elem.date}</td>
                <td class="">${elem.status}</td>
                <td>
                <span class="edit" data-edit="${elem.id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> 
                <span class="delete" data-delete="${elem.id}"><i class="fa fa-times" aria-hidden="true"></i></span>
                </td>
            </tr>
            
`);

                });

            });

        });
        /*viewTasks*/

        $('body').on('click', '.edit', function () {

            let user_id = $(this).data("edit");

            //console.log(b);

            let data = new FormData();
            data.append('user_id', user_id);

            $.ajax(
                {
                    type: 'post',
                    url: ajaxUrl,
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (answ) {

                        //console.log(answ);
                        let responseJSON = JSON.parse(answ);
                        //console.log(responseJSON['single']);

                        $("#edit .modal-body").empty();

                        responseJSON['single'].forEach(function (elem, index) {
                            //console.log(elem.date);

                            $("#edit .modal-body").append(`
                                
                                <ul class="edit-body">
                                    <li>
                                        <span>ID:</span>
                                        <input disabled class="editID" value="${elem.id}"/>
                                    </li>
                                    <li>
                                        <span>Дата:</span>
                                        <input class="editDate" value="${elem.date}"/>
                                    </li>
                                    <li>
                                        <span>Тип:</span>
                                        <select id="selectSingle" name="selectSingle" size="1">
                                            <option value="frontend">${elem.type}</option>
                                            <option value="frontend">Front-end</option>
                                            <option value="backend">Back-end</option>
                                        </select>
                                        
                                    </li>
                                    <li>
                                        <span>Наименование:</span>
                                        <input class="editName" value="${elem.name}"/>
                                    </li>
                                    <li>
                                        <span>Статус:</span>
                                        <input class="editStatus" value="${elem.status}"/>
                                    </li>
                                </ul>
                            `);

                        });

                        $('#edit').modal('show');


                    }//success
                }
            );


        });
        /*edit*/


        $('body').on('click', '.confirmEdit', function () {

            let conEditDate = $('.editDate').val();
            let conEditName = $('.editName').val();
            let conEditStatus = $('.editStatus').val();
            let conSelect = $("#selectSingle option:selected").val();

            let userEditId = $('.editID').val();

            //console.log(userEditId);

            let data = new FormData();
            data.append('conEditDate', conEditDate);
            data.append('conEditName', conEditName);
            data.append('conEditStatus', conEditStatus);
            data.append('conSelect', conSelect);
            data.append('userEditId', userEditId);

            $.ajax({
                type: 'post',
                url: ajaxUrl,
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                success: function (answ) {

                    //console.log(typeof answ);

                    let responseJSON = JSON.parse(answ);

                    //console.log(responseJSON['change']);

                    $("#table").empty();

                   /* let b = [];

                    for (var key in responseJSON.change) {

                        b.push(responseJSON.change[key]);
                        console.log(key, ':', responseJSON.change[key]);
                    }*/

                    responseJSON['change'].forEach(function (elem, index) {
                        console.log(elem);

                        if (typeof(elem) == "undefined"){
                             elem.name = elem[1];
                        }



                            $("#table").append(`


 
            <tr>
                <td>${index}</td>
                <td class="namePeople">${elem.name}</td>
                <td class="">${elem.type}</td>
                <td class="">${elem.date}</td>
                <td class="">${elem.status}</td>
                <td>
                <span class="edit" data-edit="${elem.id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> 
                <span class="delete"><i class="fa fa-times" aria-hidden="true"></i></span>
                </td>
            </tr>
            
`);


                    });

                }
            })
            /*ajax*/


        });
        /*confirmEdit*/


        $('body').on('click', '.delete', function () {

            let userDeleteData = $(this).data("delete");
            console.log(userDeleteData);

            $('#delete').modal('show');

            $('body').on('click', '.confirmDelete', function () {

                let data = new FormData();
                data.append('userDeleteData', userDeleteData);


                $.ajax({
                    type: 'post',
                    url: ajaxUrl,
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (answ) {

                        console.log(answ);

                        let responseJSON = JSON.parse(answ);
                        $("#table").empty();

                        console.log(responseJSON['delete']);

                        responseJSON['delete'].forEach(function (elem, index) {

                            if (typeof(elem.name) == "undefined"){
                                return;
                            } else {



                            //console.log(elem.date);


                            $("#table").append(`


 
            <tr>
                <td>${index}</td>
                <td class="namePeople">${elem.name}</td>
                <td class="">${elem.type}</td>
                <td class="">${elem.date}</td>
                <td class="">${elem.status}</td>
                <td>
                <span class="edit" data-edit="${elem.id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> 
                <span class="delete"><i class="fa fa-times" aria-hidden="true"></i></span>
                </td>
            </tr>
            
`);

                            }
                        });

                    }
                });


            });
            /*confirmDelete*/


            /*let conEditDate = $('.editDate').val();
             let conEditName = $('.editName').val();
             let conEditStatus = $('.editStatus').val();
             let conSelect = $("#selectSingle option:selected").val();

             let userEditId = $('.editID').val();

             //console.log(userEditId);

             let data = new FormData();
             data.append('conEditDate', conEditDate);
             data.append('conEditName', conEditName);
             data.append('conEditStatus', conEditStatus);
             data.append('conSelect', conSelect);
             data.append('userEditId', userEditId);

             $.ajax({
             type: 'post',
             url: ajaxUrl,
             data: data,
             cache: false,
             contentType: false,
             processData: false,
             success: function (answ) {

             console.log(answ);

             let responseJSON = JSON.parse(answ);

             $("#table").empty();

             responseJSON['change'].forEach(function (elem,index) {
             //console.log(elem.date);

             $("#table").append(`



             <tr>
             <td>${index}</td>
             <td class="namePeople">${elem.name}</td>
             <td class="">${elem.type}</td>
             <td class="">${elem.date}</td>
             <td class="">${elem.status}</td>
             <td>
             <span class="edit" data-edit="${elem.id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
             <span class="delete"><i class="fa fa-times" aria-hidden="true"></i></span>
             </td>
             </tr>

             `);

             });

             }
             })/!*ajax*!/*/


        });
        /*delete*/


    });


});
