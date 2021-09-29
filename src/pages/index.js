import React from 'react'
import 'semantic-ui-css/semantic.css';
import { Header, Container, Button, Grid, List} from 'semantic-ui-react';
import Task from '../components/task';
import NewTaskForm from '../components/NewTaskForm';
import EditTaskForm from '../components/EditTaskForm';


const  HomePage = () =>{
  const initialNewTask = {
    name:'',
    color:'',
    difficulty: '',
  };

  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState(initialNewTask);

  const [list, setList] = React.useState([]);

  function openNewTask(){
    setNewTaskOpen(true)  
}
  function closeNewTask(){
    setNewTaskOpen(false)  
  }
  function showTaskOpen(){
    console.log(newTaskOpen);
  }

  function addNewTask(){
    const listClone = [...list];
    listClone.push(newTask);
    setNewTask(initialNewTask);
    setList(listClone);
    closeNewTask();
  }

  //loop through list itmes or something
  // const taskList = [];
  // list.forEach((task, index) =>{
  //   taskList.push(
  //   <Task 
  //     key={`${task.name}-${index}`} 
  //     name={task.name} 
  //     color={task.color}
  //   />
  //   );
  //   console.log(taskList);

  // });
  
  // function editTaskForm(index){
  //   console.log('edit', index)
  //   const newList = list.map((task, i)=>{
  //     if(i !== index) return task;
  //     return {
  //       name: `Edit ${task.name}`,
  //       color : task.color,
  //     }

  //   })
  //   setList(newList);
  // }
  

  const [showEdit, setShowEdit] = React.useState(-1);
  //i have no idea why this must be -1 but it will not work with 0 :/

  function openEditTaskForm(index){
    setShowEdit(index);
  
  }
  function closeEditTaskForm(){
    setShowEdit(-1);
  
  }
  
  function editTask(index, changedTask) {
    console.log("edit ", index);
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      return {
        name: changedTask.name,
        color: changedTask.color,
        difficulty: changedTask.difficulty,
      };
    });

    setList(newList);
    
  }

  function deleteTask(index){
    const newList = list.filter((task, i)=> i !== index).map(filteredTask =>{

      return filteredTask;
    })
    
    setList(newList);
    
  }

  // function deleteCheck(index){
  //  console.log('help')

  // }
  

  const taskList = list.map((task,index) => {
    return(
      <Task 
      key={`${task.name}-${index}`} 
      name={task.name} 
      color={task.color}
      difficulty={task.difficulty}
      openEditTaskForm={openEditTaskForm}
      deleteTask={deleteTask}
      index={index}
    />  
    )
  })

 //const newArray = taskList.filter(task => task.index === task.index);



  return (
    <React.Fragment>
      <Container>
        <Grid columns='3'>
          <Grid.Column width='4'>
            <Button 
            icon='bars'
            onClick={showTaskOpen}

            ></Button>
          </Grid.Column>
          <Grid.Column width='8'>
            <Header textAlign="center" as='h1'>Todo List</Header>
          </Grid.Column>
          <Grid.Column textAlign='right' width='4'>
            <Button 
            icon='plus' 
            color='green'
            onClick={openNewTask}
            ></Button>
          </Grid.Column>
        </Grid>
        {newTaskOpen ? 
        (
          <NewTaskForm 
          closeNewTask= {closeNewTask}
          newTask= {newTask}
          setNewTask= {setNewTask}
          addNewTask={addNewTask}
          />
        ) : null
        
        }
        {showEdit > -1 ?(
        <EditTaskForm
        index={showEdit}
        editTask={editTask}
        list={list}
        closeEditTaskForm={closeEditTaskForm}
        />
        ): null
        }
        
        <List>
            {taskList}
            
        </List>
      </Container>
    </React.Fragment>
  )
}
export default HomePage;