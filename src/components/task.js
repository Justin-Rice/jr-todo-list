import React from 'react';
import {List, Grid, Label, Button } from 'semantic-ui-react';

const Task = ({name, color}) =>{
    return(
        <React.Fragment>
            <List.Item>
                <Grid columns='2'>
                    <Grid.Column width='10'>
                        <Label size='big' color={color}>{name}</Label>
                    </Grid.Column>
                    <Grid.Column width="6" textAlign='right'>
                        <Button icon='trash' color='red'></Button>
                         <Button icon='pencil' color='orange'></Button>
                     </Grid.Column>
                </Grid>
           </List.Item>
        </React.Fragment>
    )
}
export default Task;