export const SignUp = 'SignUp'

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBjXxrmXR0apDq3FtszfBARNa-SNW5GCmU',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken : true
            })
        }
        )
            if (!response.ok){
                throw new Error ('something is wrong')
            }
            const resData = await response.json()
            console.log(resData)
        dispatch ({
            type: SignUp
        })
    }
}