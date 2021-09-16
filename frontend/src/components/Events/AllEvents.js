import axios from "axios";
import React, { Component } from "react";
import "../StylesA/Events.css";
// export default function AllEvents(){

//     const [events, setEvents] = useState([]);

//     useEffect(()=>{
//         function getEvents(){
//             axios.get("http://localhost:5000/event/allevents")
//             .then((res)=>{

//                 setEvents(res.data);
//             }).catch((err)=>{
//                 alert(err.message);
//             })
//         }
//         getEvents();
//     }, [])

//     const onDelete=(id)=>{
//         axios.delete(`/delete/${id}`).then((res)=>{
//             alert("Event Deleted Successfully");
//             this.getEvents();
//         })
//     }
let lastScrollY = 0;
let ticking = false;

export default class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollTop: 0 };
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.retrieveEvents();
  }

  retrieveEvents() {
    axios.get("http://localhost:5000/event/allevents").then((res) => {
      if (res.data.success) {
        this.setState({
          events: res.data.allEvents,
        });
      } else {
        console.log("error retrieving from database");
      }
    });
  }

  onDelete = (id) => {
    axios
      .delete(`http://localhost:5000/event/deleteEvent/${id}`)
      .then((res) => {
        alert("Event Delete Success");
        this.retrieveEvents();
      });
  };
  // onScroll = () => {
  //     const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
  //     const scrollTop = this.myRef.current.scrollTop
  //     console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
  //     this.setState({
  //       scrollTop: scrollTop
  //     })
  //   }
  filterData(events, searchKey) {
    const result = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchKey) ||
        event.tagline.toLowerCase().includes(searchKey)
    );
    this.setState({ events: result });
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/event/allevents").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.allEvents, searchKey);
      }
    });
  };
  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
    ];
    //   const {
    //     scrollTop
    //   } = this.state

    return (
      <div style={bgEvT}>
        <br />
        <div class="container">
          <div className="col-lg-9 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Event by title/tagline"
              name="searchQuery"
              onChange={this.handleSearchArea}
              style={{
                width: "300px",
                height: "50px",
                background: "transparent",
                border: "2px solid grey",
                borderRadius: "20px",
                marginLeft: "990px",
                marginTop: "-10px",
                fontSize: "12px",
                color: "white",
              }}
            ></input>
          </div>
          <br />
          <div class="row">
            {/* <!-- Start col --> */}
            {this.state.events.map((row) => (
              <div class="col-lg-6" style={{ background: "transparent" }}>
                <div
                  class="card m-b-30"
                  style={{
                    background: "transparent",
                    boxShadow: "7px 7px 60px rgba(192, 192, 192, 0.493)",
                    borderRadius: "50px",
                  }}
                >
                  <div class="card-body py-5">
                    <div class="row">
                      <div class="col-lg-3 text-center">
                        <img
                          src={row.crslimg}
                          class="img-fluid mb-3"
                          alt="user"
                        />
                      </div>
                      <div class="col-lg-9">
                        <h4 style={{ color: "white" }}>{row.title}</h4>
                        <p style={{ color: "#ffa700", fontSize: "11px" }}>
                          <i>#{row.tagline}</i>
                        </p>
                        <hr style={{ color: "white" }} />
                        <div class="button-list mt-4 mb-3">
                          <a href={`/employee/update/${row._id}`}>
                            <button
                              type="button"
                              class="btn btn-primary-rgba"
                              style={{
                                background: "green",
                                fontSize: "12px",
                                color: "white",
                              }}
                            >
                              <i class="far fa-edit"></i>Update
                            </button>
                          </a>
                          &nbsp;{" "}
                          <a
                            style={{ color: "black" }}
                            href="#"
                            onClick={() => this.onDelete(row._id)}
                          >
                            <button
                              type="button"
                              class="btn btn-success-rgba"
                              style={{
                                background: "red",
                                fontSize: "12px",
                                color: "white",
                              }}
                            >
                              <i class="far fa-trash-alt"></i>Delete
                            </button>
                          </a>
                        </div>
                        <div class="table-responsive">
                          <table class="table table-borderless mb-0">
                            <tbody>
                              <tr>
                                <th
                                  scope="row"
                                  class="p-1"
                                  style={{ color: "#ffa700", fontSize: "12px" }}
                                >
                                  Event Date
                                </th>
                                <td
                                  class="p-1"
                                  style={{ color: "#C0C0C0", fontSize: "12px" }}
                                >
                                  {row.date.substring(0, 10)}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  class="p-1"
                                  style={{ color: "#ffa700", fontSize: "12px" }}
                                >
                                  Additional Details
                                </th>
                                <td
                                  class="p-1"
                                  style={{ color: "#C0C0C0", fontSize: "12px" }}
                                >
                                  {row.details}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  class="p-1"
                                  style={{ color: "#ffa700", fontSize: "12px" }}
                                >
                                  {" "}
                                  Can Join
                                </th>
                                <td
                                  class="p-1"
                                  style={{ color: "#C0C0C0", fontSize: "12px" }}
                                >
                                  {row.members}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  class="p-1"
                                  style={{ color: "#ffa700", fontSize: "12px" }}
                                >
                                  Description
                                </th>
                                <td
                                  class="p-1"
                                  style={{ color: "#C0C0C0", fontSize: "12px" }}
                                >
                                  {row.description}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

const bgEvT = {
  background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631690037/young-sportive-woman-doing-exercises-with-jumping-rope-white_1_wmvxik.jpg"})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "1",
};
