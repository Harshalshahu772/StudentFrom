import React, { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default class WhetherApi extends React.Component<any, any> {
  private apiUri1: string = "http://api.weatherapi.com/v1";
  private apiKey: string = "21a3d38f3a934507aeb153816230903";
  private dayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(props: any) {
    super(props);
    this.state = {
      temp_c: null,
      city: "",
      apiName: "",
      days: "",
      weatherData: null,
    };
  }

  getWheterData = async () => {
    var requestOptions = {
      method: "GET",
    };

    let whether = await fetch(
      `${this.apiUri1}/current.json?key=${this.apiKey}&q=Nagpur&aqi=no`,
      requestOptions
    );
    let whetherData = await whether.json();
    console.log(whether);

    this.setState({
      temp_c: whetherData.current.temp_c,
    });
  };

  componentDidMount = () => {
    //  this.getWheterData()
  };

  getWhetherDta = async () => {
    var requestOptions = {
      method: "GET",
    };

    let apiFullurl = `${this.apiUri1}/${this.state.apiName}.json?key=${this.apiKey}&q=${this.state.city}`;

    if (this.state.days != "") {
      apiFullurl += `&days=${this.state.days}`;
    }

    let weatherData = await fetch(apiFullurl, requestOptions);
    let weatherapiData = await weatherData.json();
    console.log(weatherapiData);
    this.setState({
      weatherData: weatherapiData,
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <h1>Whthwer Api Programing</h1>

        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <input
                type={"text"}
                value={this.state.city}
                placeholder={"enter the city name.."}
                onChange={(Event: any) =>
                  this.setState({ city: Event.target.value })
                }
              ></input>
            </Col>
            <Col>
              <select
                onChange={(event: any) =>
                  this.setState({ apiName: event?.target.value })
                }
              >
                <option>...select...</option>
                <option value={""}>current</option>
                <option value={"forecast"}>forecast</option>
              </select>
            </Col>
            <Col>
              {this.state.apiName.toLowerCase() === "forecast" && (
                <select
                  onChange={(event) => {
                    this.setState({ days: event.target.value });
                  }}
                >
                  <option>...select...</option>
                  {this.dayArray.map((day) => {
                    return <option value={day}>{day}</option>;
                  })}
                </select>
              )}
            </Col>

            <Col>
              <input
                type={"button"}
                value={"submit"}
                onClick={this.getWhetherDta}
              ></input>
            </Col>
          </Row>
          <Row className="mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Date</th>
                  <th>Max temp</th>
                  <th>Conditon</th>
                  <th>Image</th>
                </tr>
              </thead>
              {this.state.weatherData != null ? (
                <tbody>
                  {this.state.weatherData.forecast.forecastday.map(
                    (forecastObj: any) => {
                      return (
                        <tr>
                          <td>{this.state.weatherData.location.name}</td>
                          <td>{this.state.weatherData.location.country}</td>
                          <td>{forecastObj.date}</td>
                          <td>{forecastObj.day.maxtemp_c}</td>

                          <td>{forecastObj.day.condition.text}</td>
                          <td>
                            <img src={forecastObj.day.condition.icon} alt="" />
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              ) : (
                <tbody>
                  <tr>No records found</tr>
                </tbody>
              )}
            </Table>
          </Row>
        </Container>
      </>
    );
  }
}
