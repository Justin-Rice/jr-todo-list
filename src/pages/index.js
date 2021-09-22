import React from 'react'
import 'semantic-ui-css/semantic.css';
import { Header, Container, Button, Grid, Segment,Form, Select, List, Label } from 'semantic-ui-react';
import Task from '../components/task';
import NewTaskForm from '../components/NewTaskForm';


const  HomePage = ({closeNewTask}) =>{
  const initialNewTask = {
    name:'',
    color:'',
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
  function showNewTaskOpen(){
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
  function editTask(index){
    console.log('edit', index)
    const newList = list.map((task, i)=>{
      if(i !== index) return task;
      return {
        name: `Edit ${task.name}`,
        color : task.color,
      }

    })
    setList(newList);
  }

  const taskList = list.map((task,index) => {
    return(
      <Task 
      key={`${task.name}-${index}`} 
      name={task.name} 
      color={task.color}
      editTask={editTask}
      index={index}
    />  
    )
  })

  function deletTask(){
    //Array.filter
  }
  


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
        
        <List>
            {taskList}
            
        </List>
      </Container>
    </React.Fragment>
  )
}
export default HomePage;