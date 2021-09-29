import React from 'react'
import { Segment, Header, Form, Select, Button, Input, Divider, Grid } from 'semantic-ui-react';


const NewTaskForm = ({closeNewTask, newTask, setNewTask, addNewTask}) =>{


  function changeNewTask(e, {value, name}){
    
    const newTaskClone ={...newTask};
    newTaskClone[name]= value;
    setNewTask(newTaskClone);


  }
    return(
      <React.Fragment>
        <Segment>
        <Grid columns={1} relaxed='very' stackable>
          <Grid.Column>
          <Header as="h2">
            New Task
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
              <Divider section></Divider>
            <Button.Group fluid vertical size='huge'>
            <Button 
                type='button'
                color='green'
                onClick={addNewTask}
              >
              Add Task
              </Button>
              <Button 
                color='red'
                onClick={closeNewTask}
                type='button'
            
              >
                Cancel
              </Button>
            </Button.Group>
            </Grid.Column>
          </Grid>
        </Segment>
      </React.Fragment>
    )
}
export default NewTaskForm;