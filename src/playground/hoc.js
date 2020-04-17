// Higher Order Componenet (HOC) - A component (HOC) that renders another componenet
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Login to view</p>}
        </div>
    )
}
//requireAuthentication

const AdminInfo = withAdminWarning(Info);



const AuthInfo = requireAuthentication(Info) 
//ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="these are the details" />,document.getElementById('app'))