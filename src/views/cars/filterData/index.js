import React, { useContext } from "react"
import { Row, Col, Form, Input, Select, DatePicker, Button } from "antd"
import { Link } from "react-router-dom";
import { CarOptionContext } from "../../../views/context/getCarOption";
import ModalRegister from "../ModalRegister";
import TableCars from "../table";

const FilterData = () => {
    const { cars, car_brands, car_type, car_models } = useContext(CarOptionContext);
    // console.log("cars==>>>", cars);
    console.log("cars==>>>", cars);
    return (
        <div>
            <Row style={{ padding: 10 }}>
                <Col md={4}>
                    <h2 style={{ color: "#FF9E1B ", padding: 10 }}>Cars</h2>
                </Col>
                <Col md={16}>
                    <div className="formDriverBox">
                        <Form
                            layout="horizontal"
                            size="default"
                            initialValues={{
                                size: "default",
                            }}
                        >
                            <div className="searchBox">
                                <Form.Item style={{ margin: 0 }}>
                                    <Input placeholder="search" className="searchInput" />
                                </Form.Item>

                                <Form.Item style={{ margin: 0 }}>
                                    <Select className="selectInput">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item style={{ margin: 0 }}>
                                    <DatePicker className="dateInput" />
                                </Form.Item>
                                <a className="resetButton"
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); }}
                                // icon={<DownloadOutlined />} 
                                // size={size}
                                >
                                    Reset
                                </a>
                            </div>
                        </Form>
                    </div>
                    <div className="amountBox">
                        <h3 className="amountItem">Total Cars: <strong style={{ color: "#FF9E1B " }}>{!!cars && cars.length}</strong> </h3>
                        {/* <h3 className="amountItem">On Trips Drivers: <strong style={{ color: "#FF9E1B " }}>0</strong> </h3> */}
                        {/* <h3 className="amountItem">Cars Drivers: <strong style={{ color: "#FF9E1B " }}>0</strong> </h3> */}
                    </div>
                </Col>
                <Col md={4}>
                    <div className="registerBox">
                        {/* <Link to="/register/cars">
                            <Button type="primary"
                                // icon={<DownloadOutlined />} 
                                // size={size}
                                className="registerButton"
                            // onClick={() => setScreen("register")}
                            >
                                Register
                            </Button>
                        </Link> */}
                        <ModalRegister car_brands={car_brands} car_models={car_models} car_type={car_type} />
                    </div>
                </Col>
            </Row>
            <div>
                <TableCars cars={cars} />
            </div>
        </div>
    )
}

export default FilterData