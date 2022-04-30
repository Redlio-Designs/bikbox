import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './UnlockWin.css'

export default function UnlockWin(props) {
  return (
   <>
    <Form>
  <Form.Group className="emailinput" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter your company email" class="fz-16 fw-500 color-grey form-control" />
  </Form.Group>
  <Button type="submit" class="fz-16 fw-600 text-white">
   {props.button}
  </Button>
</Form>
   </>
  )
}
