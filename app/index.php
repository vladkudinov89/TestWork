<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TestWork</title>

    <link rel="stylesheet" href="libs/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.min.css">

</head>
<body>

<div class="container">
    <div class="header">
        <span>Фильтр</span>
        <div class="btn-group">

            <select id="select" name="select" size="1">
                <option value="all">Все</option>
                <option value="frontend">Front-end</option>
                <option value="backend">Back-end</option>
            </select>

        </div>

        <div class="btn btn-primary btn-lg" id="viewTasks">Показать</div>

    </div>
</div>


<div class="container">


    <table class="table table-striped table-hover table-bordered">
        <thead class="alert-info">
        <tr>
            <th>№</th>
            <th>Наименование</th>
            <th>Тип</th>
            <th>Дата</th>
            <th>Статус</th>
            <th></th>
        </tr>
        </thead>
        <tbody id="table">
        <!--<div id="content"> </div>-->
        </tbody>
    </table>


</div>


<!-- Modal -->
<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header alert-info">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;
                </button>
                <h4 class="modal-title" id="myModalLabel">Редактирование</h4>
            </div>
            <div class="modal-body">
                <div>
                    Какой-то текст1
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-success confirmEdit" data-dismiss="modal">Сохранить</button>

                <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Отмена</button>
            </div>
        </div>
    </div>
</div>
<!-- END Modal -->

<!-- Modal -->
<div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header alert-danger">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;
                </button>
                <h4 class="modal-title" id="myModalLabel">Удаление</h4>
            </div>
            <div class="modal-body">
                <div>
                    Хотите удалить запись?
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-danger confirmDelete" data-dismiss="modal">Подтвердить
                </button>

                <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Отмена</button>
            </div>
        </div>
    </div>
</div>
<!-- END Modal -->




<script src="js/libs.js"></script>
<script src="js/common.js"></script>
</body>
</html>