import React, { Component } from "react";
import axios from "axios";
import "./AllTrainers.css";
export default class trainerDetailsDialog extends Component {

    render() {
        return (
            <div className="modal fade" id="modal-contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header justify-content-end border-bottom-0">
                        <button type="button" class="btn-edit-icon" data-dismiss="modal" aria-label="Close">
                            <i class="mdi mdi-pencil"></i>
                        </button>

                        <div class="dropdown">
                            <button class="btn-dots-icon" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="mdi mdi-dots-vertical"></i>
                            </button>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="javascript:void(0)">Action</a>
                                <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                                <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                            </div>
                        </div>

                        <button type="button" class="btn-close-icon" data-dismiss="modal" aria-label="Close">
                            <i class="mdi mdi-close"></i>
                        </button>
                    </div>

                    <div class="modal-body pt-0">
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <div class="profile-content-left px-4">
                                    <div class="card text-center px-0 border-0">
                                        <div class="card-img mx-auto">
                                            <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user image" />
                                        </div>

                                        <div class="card-body">
                                            <h4 class="py-2">Albrecht Straub</h4>
                                            <p>Albrecht.straub@gmail.com</p>
                                            <a class="btn btn-primary btn-pill btn-lg my-4" href="javascript:void(0)">Follow</a>
                                        </div>
                                        </div></div></div></div></div></div></div></div>
        );
    }
}