<?php

$result = array();
$result1 = array();

/*
 * $tasks = [
    [
        'id' => '4',
        'name' => 'Task 4',
        'type' => 'frontend',
        'date' => '1512403290',
        'status' => '0',
    ],
    [
        'id' => '5',
        'name' => 'Task 5',
        'type' => 'frontend',
        'date' => '1512403320',
        'status' => '0',
    ],
    [
        'id' => '6',
        'name' => 'Task 6',
        'type' => 'backend',
        'date' => '1512403350',
        'status' => '1',
    ],
    [
        'id' => '2',
        'name' => 'Task 2',
        'type' => 'frontend',
        'date' => '1512403200',
        'status' => '0',
    ],
    [
        'id' => '3',
        'name' => 'Task 3',
        'type' => 'frontend',
        'date' => '1512403230',
        'status' => '0',
    ],
    [
        'id' => '1',
        'name' => 'Task 1',
        'type' => 'backend',
        'date' => '1512403260',
        'status' => '1',
    ],
];*/

$tasks = [
    [
        'id' => '4',
        'name' => 'Task 4',
        'type' => 'frontend',
        'date' => '1512403290',
        'status' => '0',
    ],
    [
        'id' => '5',
        'name' => 'Task 5',
        'type' => 'frontend',
        'date' => '1512403320',
        'status' => '0',
    ],
    [
        'id' => '6',
        'name' => 'Task 6',
        'type' => 'backend',
        'date' => '1512403350',
        'status' => '1',
    ],
    [
        'id' => '2',
        'name' => 'Task 2',
        'type' => 'frontend',
        'date' => '1512403200',
        'status' => '0',
    ],
    [
        'id' => '3',
        'name' => 'Task 3',
        'type' => 'frontend',
        'date' => '1512403230',
        'status' => '0',
    ],
    [
        'id' => '1',
        'name' => 'Task 1',
        'type' => 'backend',
        'date' => '1512403260',
        'status' => '1',
    ],
];

/*$sel = $_POST['select'];*/

$sel = filter_input(INPUT_POST, 'select', FILTER_SANITIZE_STRING);
$user_id = filter_input(INPUT_POST, 'user_id', FILTER_SANITIZE_STRING);

$userDeleteData = filter_input(INPUT_POST, 'userDeleteData', FILTER_SANITIZE_STRING);

$conEditDate = filter_input(INPUT_POST, 'conEditDate', FILTER_SANITIZE_STRING);
$conEditName = filter_input(INPUT_POST, 'conEditName', FILTER_SANITIZE_STRING);
$conEditStatus = filter_input(INPUT_POST, 'conEditStatus', FILTER_SANITIZE_STRING);
$conSelect = filter_input(INPUT_POST, 'conSelect', FILTER_SANITIZE_STRING);
$userEditId = filter_input(INPUT_POST, 'userEditId', FILTER_SANITIZE_STRING);

$newArray = array(

    'id' => "$userEditId",
    'name' => "$conEditName",
    'type' => "$conSelect",
    'date' => "$conEditDate",
    'status' => "$conEditStatus"

);





if(isset($newArray)) {

    foreach ($tasks as $key => $task) {

        if ($task['id'] == $userEditId) {

            if(is_array($task)){

                array_splice($tasks[$key], 0, -1, $newArray);

                /*$keys = array('id','name','type','date','status');
                $values = array($task[0],$task[1],$task[2],$task[3],$task[4]);

                $c = array_combine($keys , $values);*/

                /*$task['id'][] = $task[0];
                $task['name'][] = $task[1];
                $task['type'][] = $task[2];
                $task['date'][] = $task[3];
                $task['status'][] = $task[4];*/

                $result['status'] = 200;

            }

            $result['change'] = $tasks;

        }//if

    }//foreach

}


if(isset($userDeleteData)) {


    foreach ($tasks as $task) {

        if ($task['id'] == $userDeleteData) {

            $task = array();

        }//if


            $result['delete'][] = $task;




    }//foreach



}



if(isset($sel)){


    if($sel === "all") {
        $result['array'] = $tasks;
    } else {
        foreach ($tasks as $task) {
            if ($task['type'] == $sel) {
                $result['array'][] = $task;
            }


        }
    }


}

if(isset($user_id)){

    foreach ($tasks as $task) {
        if ($task['id'] == $user_id) {
            $result['single'][] = $task;
        }


    }
}



echo json_encode($result);
exit();





/*$singleUser = array_filter($tasks , "4");
$result['single'] = $singleUser;*/


/*switch($_REQUEST['function'])
{
    case 'loadTasks':
        $result = [];
        if($_REQUEST['type'] == '' || $_REQUEST['type'] == 'all'){
            echo json_encode($tasks);
            die();
        }
        foreach($tasks as $task){
            if($task['type'] == $_REQUEST['type']){
                $result[] = $task;
            }
        }
        echo json_encode($result);
        break;
    case 'deleteTask':
        if(empty($_REQUEST['id'])){
            echo 0;
            die();
        }
        // code delete task
        echo 1;
        break;
    case 'editTask':
        if(empty($_REQUEST['id']) || empty($_REQUEST['type']) || empty($_REQUEST['name'])){
            echo 0;
            die();
        }
        // code edit task
        echo 1;
        break;
}*/
?>