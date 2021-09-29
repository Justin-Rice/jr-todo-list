import React from 'react'
import "semantic-ui-css/semantic.css";
import { Segment, Header, Form, Select, Button, Input, Divider, Grid } from 'semantic-ui-react';


const EditTaskForm = ({list, index, closeEditTaskForm, editTask}) =>{

//console.log(list[index])

    const [newTask, setNewTask] = React.useState(list[index]);


  function changeNewTask(e, {name, value}){
    
    const newTaskClone ={...newTask};
    newTaskClone[name]= value;
    setNewTask(newTaskClone);
  }

  function changeTask(){
      editTask(index, newTask)
      closeEditTaskForm();

  }
    return(
      <React.Fragment>
        <Segment>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
          <Header as="h2">
            Edit Task
          </Header>
          <Form>
            <Form.Field
              control={Input}
              label='Task Name'
              placeholder='Enter task name...'
              value={newTask.name}
              onChange={changeNewTask}
              name='name'
            />
            <Form.Field
              control={Select}
              label='Task Difficulty'
              placeholder='Choose task difficulty...'
              options={[
                {text: 'Easy', value : 'smile outline'},
                {text: 'Moderate', value : 'meh outline'},
                {text: 'Hard', value : 'frown outline'},


              ]}
              value={newTask.difficulty}
              onChange={changeNewTask}
              name="difficulty"
            />
            <Form.Field
              control={Select}
              label='Task Color'
              placeholder='Choose task color...'
              options={[
                {text: 'Red', value : 'red'},
                {text: 'Yellow', value : 'yellow'},
                {text: 'Green', value : 'green'},


              ]}
              value={newTask.color}
              onChange={changeNewTask}
              name='color'
            />
            </Form>
            </Grid.Column>
              <Grid.Column textAlign="center" >
            <Button.Group fluid>
            <Button 
                type='button'
                color='green'
                onClick={changeTask}
                
              >
              Accept Changes
              </Button>
              <Button.Or/>
              <Button 
                color='red'
                onClick={closeEditTaskForm}
                type='button'
            
              >
                Cancel
              </Button>
            </Button.Group>
            </Grid.Column>
          </Grid>
          {/* <Divider vertical></Divider> */}
        </Segment>
      </React.Fragment>
    )
}
export default EditTaskForm;