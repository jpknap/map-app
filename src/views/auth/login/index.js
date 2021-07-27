import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'
import LoginForm from './_Login'

const handleAuthentication = () => {
  return null;
}



const Login = () => (
  <div>
  <Row className="m-0 justify-content-center">
    <Col lg="4" md="5" sm="7" xs="10" className="d-flex justify-content-center">
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col className="p-0">
                <Card className="rounded-0 mb-0 px-2">
                  <CardHeader className="justify-content-center text-center">
                    <CardTitle><img src={null} alt="logo" className="login-brand" /></CardTitle>
                  </CardHeader>
                  <LoginForm handleLogin={handleAuthentication} loading={false} error={null} />
                </Card>
              </Col>
            </Row>
          </Card>
    </Col>
  </Row>
  </div>
)

export default Login