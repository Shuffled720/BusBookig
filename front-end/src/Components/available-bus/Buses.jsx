import styled from "styled-components";
import { useState, useEffect } from "react";
import { OneBus } from "./one-bus/OneBus";
import "../LandingPage/searchBuses.css"
import { Form } from "../LandingPage/Form";

import { useLocation } from "react-router-dom";



function Buses() {


    const [All_bus, setAll_bus] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:2233/bus/all");
            const data = await res.json();
            // console.log(data);
            setAll_bus(data.item);
        }
        fetchData();
    }, [])
    console.log(All_bus);

    // const All_bus = [{
    //     "_id": "618b660ca17ac455f40e10ef",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 1)",
    //     "pick_up_time": "2",
    //     "duration": "3.30",
    //     "drop_time": "5.30",
    //     "rating": 1,
    //     "price": 425,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "durgapur",
    //     "drop_address": "howrah",
    //     "passengers": [],
    //     "travel_name": "JGD Travels Pvt Ltd.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618b6662a17ac455f40e10f1",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time": "2.30",
    //     "duration": "3.30",
    //     "drop_time": "6.00",
    //     "rating": 1.9,
    //     "price": 525,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "durgapur",
    //     "drop_address": "howrah",
    //     "passengers": [],
    //     "travel_name": "JGD Travels Pvt Ltd.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618b67c223e97c3fcee6f2b6",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time": "2.30",
    //     "duration": "3.30",
    //     "drop_time": "6.00",
    //     "rating": 1.9,
    //     "price": 525,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "durgapur",
    //     "drop_address": "howrah",
    //     "passengers": [],
    //     "sleeper": true,
    //     "ac": false,
    //     "nonac": false,
    //     "travel_name": "Hans Travels (I) Pvt Ltd.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618b683d23e97c3fcee6f2b8",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time": "5.30",
    //     "duration": "40.00",
    //     "drop_time": "9.25",
    //     "rating": 2.2,
    //     "price": 2600,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "mumbai",
    //     "drop_address": "new delhi",
    //     "passengers": [],
    //     "sleeper": false,
    //     "ac": true,
    //     "nonac": false,
    //     "travel_name": "Hans Travels (I) Pvt Ltd.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618b691d23e97c3fcee6f2ba",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time": "16.30",
    //     "duration": "44.00",
    //     "drop_time": "12.25",
    //     "rating": 2.7,
    //     "price": 3000,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "mumbai",
    //     "drop_address": "new delhi",
    //     "passengers": [],
    //     "sleeper": false,
    //     "ac": true,
    //     "nonac": false,
    //     "travel_name": "Hans Travels (I) Pvt Ltd.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618b69e223e97c3fcee6f2bc",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time": 17.00,
    //     "duration": 21.00,
    //     "drop_time": 13.30,
    //     "rating": 3.9,
    //     "price": 1524,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "bangalore",
    //     "drop_address": "mumbai",
    //     "passengers": [],
    //     "sleeper": false,
    //     "ac": false,
    //     "nonac": true,
    //     "travel_name": "Primo National travels.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618b6a2423e97c3fcee6f2be",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time":14.10,
    //     "duration": 21.00,
    //     "drop_time": 11.30,
    //     "rating": 3.9,
    //     "price": 1524,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "bangalore",
    //     "drop_address": "mumbai",
    //     "passengers": [],
    //     "sleeper": true,
    //     "ac": false,
    //     "nonac": false,
    //     "travel_name": "Fexi Ticket National travels.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618bca61b4d9551885665441",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time": 14.10,
    //     "duration": 21.00,
    //     "drop_time": 11.30,
    //     "rating": 3.9,
    //     "price": 1524,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "bangalore",
    //     "drop_address": "mumbai",
    //     "passengers": [],
    //     "sleeper": true,
    //     "ac": false,
    //     "nonac": false,
    //     "travel_name": "Fexi Ticket National travels.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618d192d3ddf348b056907cf",
    //     "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time": 14.1,
    //     "duration": 21,
    //     "drop_time": 11.3,
    //     "rating": 3.9,
    //     "price": 1524,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "bangalore",
    //     "drop_address": "mumbai",
    //     "passengers": [],
    //     "sleeper": true,
    //     "ac": false,
    //     "nonac": false,
    //     "travel_name": "Fexi Ticket National travels.",
    //     "__v": 0
    // },
    // {
    //     "_id": "618d192d3ddf348b056907cf",
    //     "bus_name": "Pavan Benz A/C Sleeper(2 + 2)",
    //     "pick_up_time": 18.1,
    //     "duration": 21,
    //     "drop_time": 24.3,
    //     "rating": 3.9,
    //     "price": 15240,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "bangalore",
    //     "drop_address": "mumbai",
    //     "passengers": [],
    //     "seater": true,
    //     "sleeper": false,
    //     "ac": false,
    //     "nonac": false,
    //     "travel_name": "Fexi Ticket National travels.",
    //     "wifi": false,
    //     "waterbottle": true,
    //     "charging_point": false,
    //     "Blankets": true,
    //     "Movie": false,
    //     "toilet": true,
    //     "__v": 0
    // },
    // {
    //     "_id": "618d192d3ddf348b056907cf",
    //     "bus_name": "Pavan Paapu RED A/C Sleeper(2 + 2)",
    //     "pick_up_time": 5,
    //     "duration": 21,
    //     "drop_time": 18.3,
    //     "rating": 3.9,
    //     "price": 152400,
    //     "seats_available": 34,
    //     "seat_type": "single",
    //     "pickup_address": "bangalore",
    //     "drop_address": "mumbai",
    //     "passengers": [],
    //     "seater": true,
    //     "sleeper": false,
    //     "ac": false,
    //     "nonac": false,
    //     "travel_name": "Fexi Ticket National travels.",
    //     "wifi": true,
    //     "waterbottle": false,
    //     "charging_point": true,
    //     "Blankets": false,
    //     "Movie": true,
    //     "toilet": false,
    //     "__v": 0
    // }
    // ]

    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const from = query.get("from");
    const to = query.get("to");
    var BUS_JS = All_bus.filter((item) => (
        from === item.pickup_address || to === item.drop_address
    ))
    console.log(BUS_JS);

    const [buses, setBuses] = useState(BUS_JS)
    console.log(buses);

    var original = BUS_JS;



    const [colour, setColour] = useState("red");



    const determineColour = (bus) => {
        if (bus.currentOccupancy / bus.totalSeats > 0.9) {
            return "red";
        } else if (bus.currentOccupancy / bus.totalSeats > 0.6 && bus.currentOccupancy / bus.totalSeats < 0.9) {
            return "yellow";
        } else {
            return "green";
        }
    }

    const Container = styled.div`
        width: 100%;
        margin-top:6.5%;
        padding: 100px;
        // height: 1000px;
        display: grid;
        // grid-template-columns: 25% 70%;
        // border: 1px solid black;
        // grid-gap: 3%;
    `
    const Filter_container = styled.div`
        width: 100%;
        border: 1px solid black;
        // height: 1000px;
    `
    const Available_bus_container = styled.div`
        // border: 1px solid black;
        width: 100%;
        /* height: auto; */
        display: grid;
        grid-gap: 20px;
        flex-wrap: wrap;
        margin-top: 20px;
        top: 0;
    `
    const Sort_div = styled.div`
        width: 100%;
        height: 50px;
        border: 1px solid black;
        display: grid;
        grid-template-columns: 18% 10% 10% 10% 10% ;
        grid-gap: 10px;
        `
    if (BUS_JS.length === 0) {
        return (

            <>
                <div className="assam">
                    <div>
                        <img className="oops_img" src="https://www.redbus.in/images/no_bus.png" alt="" /></div>
                    <div className="oops">
                        <h3>Oops! No buses found.</h3>
                        <p>No routes available</p>
                    </div>

                </div>



            </>
        )

    }
    else {
        return (

            <Container >

                {/* <Filter_container>
                    <div className="poora">
                        <div className="poora1">
                            <div>
                                <div className="head">FILTERS</div>
                                <br />
                                <div className="bdy"><img className="imgs" src="https://www.freeiconspng.com/uploads/school-bus-icon-12.png" alt="" /> Live Tracking </div>
                                <br />
                                <div className="bdy"><img className="imgs" src="https://img.favpng.com/24/16/9/computer-icons-price-tag-png-favpng-7AEYXd10DhTqmZfN87Tb9CsR9.jpg" alt="" /> Red Deals</div>
                                <hr />
                                <div className="bdy"> <img className="imgs" src="https://as2.ftcdn.net/v2/jpg/02/18/43/79/500_F_218437966_oUGkb1oXx2UbAh98zT79TVHDVmhX0Pwf.jpg" alt="" /> Reshedulable</div>
                                <br />
                            </div>
                            <br />

                            <div className="inp">
                                <div className="head">DEPARTURE TIME</div>
                                <div className="bdy" onClick={Before6AM} >
                                    {Before6am ? (
                                        <div style={{ color: "red" }}>
                                            <input type="checkbox" className="inp1" /> <img className="imgs" src="https://freepngimg.com/download/alarm/22921-5-morning-alarm-image.png" alt="" /> <div >  Before 6am</div>
                                        </div>) : (<div>
                                            <input type="checkbox" className="inp1" /> <img className="imgs" src="https://freepngimg.com/download/alarm/22921-5-morning-alarm-image.png" alt="" /> <div id="abb">  Before 6am</div>
                                        </div>)}

                                </div> <br />
                                <div className="bdy" onClick={After6Am_Before12PM}>
                                    {
                                        Before12pm ? (<div style={{ color: "red" }}> <input type="checkbox" className="inp1" /><img className="imgs" src="https://th.bing.com/th/id/R.7753f50f02196a8547d206dc00a485fd?rik=kDj3UsII659w8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_183081.png&ehk=PgJb3%2f9xAwPor0E4QcelZk76VKx%2bAJYgz%2bzePpOi5og%3d&risl=&pid=ImgRaw&r=0" alt="" /> <div>6am to 12pm</div></div>)
                                            : (<div><input type="checkbox" className="inp1" /><img className="imgs" src="https://th.bing.com/th/id/R.7753f50f02196a8547d206dc00a485fd?rik=kDj3UsII659w8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_183081.png&ehk=PgJb3%2f9xAwPor0E4QcelZk76VKx%2bAJYgz%2bzePpOi5og%3d&risl=&pid=ImgRaw&r=0" alt="" /> <div>6am to 12pm</div></div>)
                                    }

                                </div > <br />
                                <div className="bdy" onClick={After12pm_Before6PM}>
                                    {Before6pm ? (<div style={{ color: "red" }}> <input type="checkbox" className="inp1" /><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_168368.png" alt="" /> <div>12pm to 6pm</div></div>)
                                        : (<div> <input type="checkbox" className="inp1" /><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_168368.png" alt="" /> <div>12pm to 6pm</div></div>)}

                                </div ><br />
                                <div className="bdy" onClick={After6PM_Before12Am}>
                                    {Before12am ? (<div style={{ color: "red" }}><input type="checkbox" className="inp1" /><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_447445.png" alt="" /> <div>After 6pm</div></div>)
                                        : (<div><input type="checkbox" className="inp1" /><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_447445.png" alt="" /> <div>After 6pm</div></div>)}
                                </div>
                            </div>
                            <br />


                            <div className="inp">
                                <div className="head">BUS TYPES</div>
                                <div className="bdy" onClick={Seater}>
                                    <input type="checkbox" className="inp1" /><div>SEATER</div>
                                </div><br />
                                <div className="bdy" onClick={Sleeper}>
                                    <input type="checkbox" className="inp1" /><div>SLEEPER</div>
                                </div><br />
                                <div className="bdy" onClick={AC}>
                                    <input type="checkbox" className="inp1" /><div>AC</div>
                                </div><br />
                                <div className="bdy" onClick={NonAc}>
                                    <input type="checkbox" className="inp1" /><div>NON AC</div>
                                </div>
                            </div>

                            <br />

                            <div className="inp">
                                <div className="head">ARRIVAL TIME</div>
                                <div className="bdy" onClick={Before6AMAT} >
                                    {Before6am ? (
                                        <div style={{ color: "red" }}>
                                            <input type="checkbox" className="inp1" /> <img className="imgs" src="https://freepngimg.com/download/alarm/22921-5-morning-alarm-image.png" alt="" /> <div >  Before 6am</div>
                                        </div>) : (<div>
                                            <input type="checkbox" className="inp1" /> <img className="imgs" src="https://freepngimg.com/download/alarm/22921-5-morning-alarm-image.png" alt="" /> <div id="abb">  Before 6am</div>
                                        </div>)}

                                </div> <br />
                                <div className="bdy" onClick={After6Am_Before12PMAT}>
                                    {
                                        Before12pm ? (<div style={{ color: "red" }}> <input type="checkbox" className="inp1" /><img className="imgs" src="https://th.bing.com/th/id/R.7753f50f02196a8547d206dc00a485fd?rik=kDj3UsII659w8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_183081.png&ehk=PgJb3%2f9xAwPor0E4QcelZk76VKx%2bAJYgz%2bzePpOi5og%3d&risl=&pid=ImgRaw&r=0" alt="" /> <div>6am to 12pm</div></div>)
                                            : (<div><input type="checkbox" className="inp1" /><img className="imgs" src="https://th.bing.com/th/id/R.7753f50f02196a8547d206dc00a485fd?rik=kDj3UsII659w8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_183081.png&ehk=PgJb3%2f9xAwPor0E4QcelZk76VKx%2bAJYgz%2bzePpOi5og%3d&risl=&pid=ImgRaw&r=0" alt="" /> <div>6am to 12pm</div></div>)
                                    }

                                </div > <br />
                                <div className="bdy" onClick={After12pm_Before6PMAT}>
                                    {Before6pm ? (<div style={{ color: "red" }}> <input type="checkbox" className="inp1" /><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_168368.png" alt="" /> <div>12pm to 6pm</div></div>)
                                        : (<div> <input type="checkbox" className="inp1" /><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_168368.png" alt="" /> <div>12pm to 6pm</div></div>)}

                                </div ><br />
                                <div className="bdy" onClick={After6PM_Before12AmAT}>
                                    {Before12am ? (<div style={{ color: "red" }}><input type="checkbox" className="inp1" /><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_447445.png" alt="" /> <div>After 6pm</div></div>)
                                        : (<div><input type="checkbox" className="inp1" /><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_447445.png" alt="" /> <div>After 6pm</div></div>)}
                                </div>
                            </div>
                            <br />

                            <div className="inp">
                                <div className="head">DROPPING POINT</div>
                                <div className="bdy">
                                    <input type="text" placeholder="DROPPING POINT" /><br />
                                </div>
                            </div>
                            <br />

                            <div className="inp">
                                <div className="head">OPERATOR</div>
                                <div className="bdy">
                                    <input type="text" placeholder="OPERATOR" /><br />
                                </div>
                            </div>
                            <br />
                            <div className="inp">
                                <div className="head">AMENITIES</div>

                                <div className="bdy" onClick={WIFI} >
                                    {Wifi ? (<div style={{ color: "red" }}> <img className="imgs" src="https://static.vecteezy.com/system/resources/previews/000/441/701/original/wifi-vector-icon.jpg" alt="" />   WIFI</div>) :
                                        (<div> <img className="imgs" src="https://static.vecteezy.com/system/resources/previews/000/441/701/original/wifi-vector-icon.jpg" alt="" />   WIFI</div>)}

                                </div><br />
                                <div className="bdy" onClick={WATER}>
                                    {Bottle ? (<div style={{ color: "red" }}><img className="imgs" src="https://maxcdn.icons8.com/Share/icon/Food/bottle_of_water1600.png" alt="" />   Water Bottle</div>) :
                                        (<div><img className="imgs" src="https://maxcdn.icons8.com/Share/icon/Food/bottle_of_water1600.png" alt="" />   Water Bottle</div>)}
                                </div><br />
                                <div className="bdy" onClick={BLANKET}>
                                    <div><img className="imgs" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/blanket-7-582299.png" alt="" />   Blankets</div>
                                </div><br />
                                <div className="bdy" onClick={CHARGER}>
                                    {Charger ? (<div style={{ color: "red" }}><img className="imgs" src="https://th.bing.com/th/id/OIP.gfFdPhqu7WhbcXlx2LaCzQHaHa?pid=ImgDet&rs=1" alt="" />   Charging Point</div>) :
                                        (<div><img className="imgs" src="https://th.bing.com/th/id/OIP.gfFdPhqu7WhbcXlx2LaCzQHaHa?pid=ImgDet&rs=1" alt="" />   Charging Point</div>)}
                                </div><br />
                                <div className="bdy" onClick={MOVIE}>
                                    {Movie ? (<div style={{ color: "red" }}><img className="imgs" src="https://th.bing.com/th/id/OIP.FX2D4IYJXj70rMJhiIy7hQHaHa?pid=ImgDet&rs=1" alt="" /> Movie</div>) :
                                        (<div><img className="imgs" src="https://th.bing.com/th/id/OIP.FX2D4IYJXj70rMJhiIy7hQHaHa?pid=ImgDet&rs=1" alt="" /> Movie</div>)}
                                </div><br />
                                <div className="bdy">
                                    <div><img className="imgs" src="https://cdn4.iconfinder.com/data/icons/track/154/bus-512.png" alt="" /> Track My Bus</div>
                                </div><br />
                                <div className="bdy">
                                    <div> <img className="imgs" src="https://image.flaticon.com/icons/png/512/124/124992.png" alt="" />   Emergrncy Contact Number</div>
                                </div><br />
                                <div className="bdy" onClick={TOILET}>
                                    {Toilet ? (<div style={{ color: "red" }}> <img className="imgs" src="https://img.favpng.com/18/5/15/public-toilet-icon-png-favpng-JBDLZqNXHRjuC2gDzkVZhAMU0.jpg" alt="" />    Toilet</div>) :
                                        (<div> <img className="imgs" src="https://img.favpng.com/18/5/15/public-toilet-icon-png-favpng-JBDLZqNXHRjuC2gDzkVZhAMU0.jpg" alt="" />    Toilet</div>)}
                                </div>
                            </div>



                        </div>
                    </div>
                </Filter_container> */}


                <Available_bus_container>

                    <Sort_div>
                        <div>{BUS_JS.length} Bus found</div>
                        <div style={{ fontWeight: "bold" }}>Sort by :</div>
                        <div>Departure</div>
                        <div>Destination</div>
                        <div>Seat Availability</div>

                    </Sort_div>
                    <div style={{ margin: "5px", display: "grid", gridGap: "5px", width: "100%", top: "0" }}>
                        {
                            BUS_JS.map((e) => (
                                <>
                                    {setColour(determineColour(e))}
                                    {/* {colour} */}
                                    <OneBus key={e._id} data={e}></OneBus>
                                </>
                            ))
                        }
                    </div>

                </Available_bus_container>


            </Container>
        )
    }
}

export { Buses };