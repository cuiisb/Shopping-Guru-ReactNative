import React, { useReducer, useCallback } from 'react'
import {ScrollView, Text,View,TextInput, KeyboardAvoidingView, StyleSheet, Button} from 'react-native'
import colors from '../components/constants/colors'
import { useDispatch } from 'react-redux'
import * as authActions from '../actions/auth'

const FormInputUpdate = 'FormInputUpdate'
const formReducer = (state, action ) => {
    if (action.type === FormInputUpdate){
        const updatedValues = {
            ...state.inputValues, 
            [action.input]: action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let updatedFormIsValid = true 
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValiditied: updatedValidities,
            inputValues: updatedValues
        }
    }
    return state
}


const AuthScreen = props => {
    const dispatch = useDispatch()

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
           email: false,
           password: false
        },
        formIsValid: false
    })


    const signUpHandler = () =>{
        dispatch(authActions.signup(formState.inputValues.email, formState.inputValues.password))
    }

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FormInputUpdate,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    }, [dispatchFormState])
    return (
        <View style = {styles.screen}>
        <ScrollView style = {styles.container}>
            <View>
                <Text>Email</Text>
            </View>
            <TextInput
            id = "email"
            label =" E-mail"
            keyboardType = "email-address"
            required
            email
            autoCapitalize = "none"
            errorText = "Please enter a valid email address "
            onInputChange= {inputChangeHandler}
            initialValue = ""
            />
            <View>
                <Text>Password</Text>
            </View>
             <TextInput
            id = "password"
            label =" Password"
            keyboardType = "default"
            required
            email
            autoCapitalize = "none"
            errorText = "Please enter a valid password "
            onInputChange= {inputChangeHandler}
            initialValue = ""
            />
            <Button  title = "Login" color ='gold' onPress = {signUpHandler}/>
            <Button title ="Switch to Sign Up" color = 'gold' onPress ={()=> {}}/>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    },
    container: {
        width: '85%',
        maxWidth: 400,
        height: 50,
        maxHeight: 400,
        
    }
})

export default AuthScreen