import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Main() {
    return (
        <div>
            <Link to='/login'>
                <Button>Log in </Button>
            </Link>
            <Link to='/signup'>
                <Button className="secondary">Sign up</Button>
            </Link>
        </div>
    )
}
