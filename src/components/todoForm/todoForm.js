import React, { useState, useRef } from 'react';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import { Button, Grid, Form, Divider, Input } from 'semantic-ui-react'
import styled from "styled-components";

const ButtonCustomer = styled(Button)`
  background: ${props => props.primary ? "palevioletred" : "white"}!important;
    color: ${props => props.inputColor}!important;

  font-size: 1.5em;
  margin: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

ButtonCustomer.defaultProps = {
    inputColor: 'blue'
}

const ReversedButton = props => <Button {...props} children={props.content.split(' ')} />

function TodoForm(props) {
    // const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [valueSearch, setValueSearch] = useState('')
    const typingTimeoutRef = useRef(null)

    function handleSubmitAdd(e) {
        e.preventDefault()
        props.AddTodoAction(value)
        setValue('')
    }

    function handleSubmitSearch(e) {
        const valueTemp = e.target.value
        setValueSearch(valueTemp)

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            props.SearchTodoAction(valueTemp)
        }, 300);

    }

    return (
        <div>
            <Grid columns={2} style={{ marginTop: 10, marginBottom: 10 }}>
                <Grid.Column >
                    <Form onSubmit={handleSubmitAdd}>
                        <Form.Field>
                            <input type='text' placeholder='add to do' value={value} onChange={(e) => setValue(e.target.value)} />
                        </Form.Field>
                    </Form>
                </Grid.Column>
                <Grid.Column>
                    <ButtonCustomer primary as={ReversedButton} inputColor='white' icon='add' content='Add Todo' onClick={() => {
                        props.AddTodoAction(value)
                    }}></ButtonCustomer>
                </Grid.Column>
            </Grid>
            <Form onSubmit={handleSubmitSearch} style={{ margin: '10px 0px 10px 0px' }}>
                <Form.Field>
                    <Input icon='search' placeholder='Search...' value={valueSearch} onChange={handleSubmitSearch} />
                </Form.Field>
            </Form>
            <Divider />

        </div>
    );
}
const mapStateToProps = state => {
    return ({ todoList: state.todoList.todoList })
};
const mapDispatchToProps = dispatch => {
    return {
        AddTodoAction: (value) => dispatch(actions.todoListAction.AddTodoAction(value)),
        SearchTodoAction: (valueTemp) => dispatch(actions.todoListAction.SearchTodoAction(valueTemp)),

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);