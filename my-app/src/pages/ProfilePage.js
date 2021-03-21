import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import havish from "../images/havish.jpeg";
import styles from "../css/ProfilePage.css";
import { useHistory } from "react-router-dom";
import axios from '../../node_modules/axios';

const ProfilePage = () => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [classes, setClasses] = useState([]);
    const [clubs, setClubs] = useState([]);
    const [interests, setInterests] = useState([]);
    const [showAddClass, setShowAddClass] = useState(false);
    const [showAddClub, setShowAddClub] = useState(false);
    const [showAddInterest, setShowAddInterest] = useState(false);
    const [newClass, setNewClass] = useState("");
    const [newClub, setNewClub] = useState("");
    const [newInterest, setNewInterest] = useState("");

    function element(ele) {
        return (
            <div>{ele}</div>
        );
    }

    function handleSettingsClick() {
        history.push('/settings')
    }

    function handleClassClick() {
        if (showAddClass) {
            setShowAddClass(false);
        }
        else {
            setShowAddClass(true);
        }
    }

    function handleClubClick() {
        if (showAddClub) {
            setShowAddClub(false);
        }
        else {
            setShowAddClub(true);
        }
    }

    function handleInterestClick() {
        if (showAddInterest) {
            setShowAddInterest(false);
        }
        else {
            setShowAddInterest(true);
        }
    }

    function handleAddClassClick() {
        axios.get('http://localhost:5000/setclasses?names='.concat(newClass))
            .then(response => {
                console.log(response.data)
            })
            .catch(e => console.log(e))

        setClasses(arr => {
            arr.push(newClass);
            return arr;

        })
    }

    function handleAddClubClick() {
      axios.get('http://localhost:5000/setclubs?names='.concat(newClub))
          .then(response => {
              console.log(response.data)
          })
          .catch(e => console.log(e))

        setClubs(arr => {
            arr.push(newClub);
            return arr;
        })

    }

    function handleAddInterestClick() {
      axios.get('http://localhost:5000/setinterests?names='.concat(newInterest))
          .then(response => {
              console.log(response.data)
          })
          .catch(e => console.log(e))

        setInterests(arr => {
            arr.push(newInterest);
            return arr;
        })
    }
    return (
        <div>
            <Navbar />
            <div class="is-flex is-flex-direction-row">
                <div>
                    <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mr-4" style={{ width: "32vh", marginLeft: "6vw", marginTop: "8vh" }}>
                        <img src={havish} alt="havish" className="image" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} />
                        <div style={{ position: "absolute", color: "white" }}>{show ? "Click to change" : ""}</div>
                        <h2 class="mt-6" style={{ position: "relative" }}>Havish Malladi</h2>
                        <div class="button mt-4 has-text-white" onClick={() => handleSettingsClick()} style={{ width: "100%", backgroundColor: "#2FBC6A", position: "relative", fontWeight: "bold" }}>Account Settings</div>
                    </div>
                </div>
                <div class="column is-one-fourth mt-6" style={{ textAlign: "center" }}>
                    <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <div class="box" style={{ height: "35vh", width: "80%", fontWeight: "bold" }}>
                            <h5>Your classes</h5>
                            <div>
                                {classes.length !== 0 ? classes.map(ele => (
                                    <div className="mt-2">
                                        {element(ele)}
                                    </div>
                                )) : <div />}
                            </div>
                        </div>
                        <div class="button mt-6 has-text-white" onClick={() => handleClassClick()} style={{ width: "120px", fontWeight: "bold", backgroundColor: "#2FBC6A" }}>{showAddClass ? "Exit" : "Add Class"}</div>
                        <div>
                            {showAddClass ?
                                <div class="level">
                                    <div class="level-left mr-2">
                                        <input
                                            type="text"
                                            value={newClass}
                                            placeholder="New Class"
                                            style={{ marginTop: "20px" }}
                                            onChange={(e) => setNewClass(e.target.value)}
                                        />
                                    </div>
                                    <div class="level-right">
                                        <div class="button" onClick={() => handleAddClassClick()} style={{ marginTop: "20px", height: "30px" }}>
                                            Add
                                        </div>
                                    </div>
                                </div>
                                :
                                <div style={{ marginTop: "20px" }} />}
                        </div>
                    </div>
                </div>
                <div class="column is-one-fourth mt-6" style={{ textAlign: "center" }}>
                    <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <div class="box" style={{ height: "35vh", width: "80%", fontWeight: "bold" }}>
                            <h5>Your clubs</h5>
                            <div>
                                {clubs.length !== 0 ? clubs.map(ele => (
                                    <div className="mt-2">
                                        {element(
                                            ele
                                        )}
                                    </div>
                                )) : <div />}
                            </div>
                        </div>
                        <div class="button mt-6 has-text-white" onClick={() => handleClubClick()} style={{ width: "120px", fontWeight: "bold", backgroundColor: "#2FBC6A" }}>{showAddClub ? "Exit" : "Add Club"}</div>
                        <div>
                            {showAddClub ?
                                <div class="level">
                                    <div class="level-left mr-2">
                                        <input
                                            type="text"
                                            value={newClub}
                                            placeholder="New Club"
                                            style={{ marginTop: "20px" }}
                                            onChange={(e) => setNewClub(e.target.value)}
                                        />
                                    </div>
                                    <div class="level-right">
                                        <div class="button" onClick={() => handleAddClubClick()} style={{ marginTop: "20px", height: "30px" }}>
                                            Add
                                        </div>
                                    </div>
                                </div>
                                :
                                <div style={{ marginTop: "20px" }} />}
                        </div>
                    </div>
                </div>
                <div class="column is-one-fourth mt-6" style={{ textAlign: "center" }}>
                    <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <div class="box" style={{ height: "35vh", width: "80%", fontWeight: "bold" }}>
                            <h5>Your Interests</h5>
                            <div>
                                {interests.length !== 0 ? interests.map(ele => (
                                    <div className="mt-2">
                                        {element(
                                            ele
                                        )}
                                    </div>
                                )) : <div />}
                            </div>
                        </div>
                        <div class="button mt-6 has-text-white" onClick={() => handleInterestClick()} style={{ width: "120px", fontWeight: "bold", backgroundColor: "#2FBC6A" }}>{showAddInterest ? "Exit" : "Add Interest"}</div>
                        <div>
                            {showAddInterest ?
                                <div class="level">
                                    <div class="level-left mr-2">
                                        <input
                                            type="text"
                                            value={newInterest}
                                            placeholder="New Interest"
                                            style={{ marginTop: "20px" }}
                                            onChange={(e) => setNewInterest(e.target.value)}
                                        />
                                    </div>
                                    <div class="level-right">
                                        <div class="button" onClick={() => handleAddInterestClick()} style={{ marginTop: "20px", height: "30px" }}>
                                            Add
                                        </div>
                                    </div>
                                </div>
                                :
                                <div style={{ marginTop: "20px" }} />}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfilePage;
