import React from 'react';
import { Button, Segment, Label, Icon } from 'semantic-ui-react'

function Semantic() {
    return (
        <div >
            <Button primary>Primary</Button>
            <Button secondary onClick={() => alert("aaaaaaaaaaaaaa")}>Secondary</Button>
            <Button animated onClick={() => console.log('click')}>
                <Button.Content visible>Next111</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
            <Button as='div' labelPosition='right'>
                <Button icon color='black'>
                    <Icon name='heart' color='blue' />
                    Like
                </Button>
                <Label as='a' basic pointing='below'>
                    2,048
                </Label>
            </Button>
            <Button
                basic
                color='blue'
                content='Fork'
                icon='fork'
                label={{
                    as: 'a',
                    basic: true,
                    color: 'blue',
                    pointing: 'left',
                    content: '2,048',
                }}
            />
            <Segment inverted>
                <Button basic inverted color='purple'>
                    Purple
            </Button>
            </Segment>
            <Button.Group>
                <Button>un</Button>
                <Button.Or text='ou' />
                <Button positive>deux</Button>
            </Button.Group>
            <Button color='white'>Black</Button>
            <Icon loading name='users' />
        </div>
    );
}

export default Semantic;