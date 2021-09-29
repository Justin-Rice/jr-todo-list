import React from 'react';
import {List, Grid, Label, Button, Icon } from 'semantic-ui-react';

const Task = ({name, color, difficulty, openEditTaskForm, index, deleteTask}) =>{

    function editCurrentTask(){
        openEditTaskForm(index);
        console.log("pains")
        console.log(index)
    
    }

    function deleteCurrenTask(){
        deleteTask(index);
    }
    return(
        <React.Fragment>
            <List.Item>
                <Grid columns='3'>
                    <Grid.Column >
                        <Label size='big' color={color}>{name}</Label>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Icon
                        size='big'
                        name={difficulty}
                        //difficulty={difficulty}
                        />
                    </Grid.Column>
                    <Grid.Column  textAlign='right'>
                        <Button
                         icon='trash' 
                         color='red'
                         onClick={deleteCurrenTask}
                         >

                         </Button>
                        <Button 
                        icon='pencil'
                        color='orange'
                        onClick={editCurrentTask}
                         >

                         </Button>
                     </Grid.Column>
                </Grid>
           </List.Item>
        </React.Fragment>
    )
}
export default Task;