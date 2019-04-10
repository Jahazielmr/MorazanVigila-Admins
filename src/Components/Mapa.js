import React, { Component } from 'react';
import * as routes from '../Constants/Routes';
import { Router, Route } from "react-router";
import NavBar from "./NavBar";
import loadGoogleMapsAPI from 'load-google-maps-api';
import fire from "../Constants/Firebase";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";


const MAP_STYLES = {
    height: '450px',
    width: '100%'
}

const OPTIONS = {
    center: {
        lat: 14.1,
        lng: -87.2167
    },
    zoom: 16
}

const API_CONFIG = {
    key: 'AIzaSyDXRZ7SxW1SdyXxajHTnNb2pwPXz7WFqo8',
    language: 'es'
}

const db = fire.firestore();

const projectRef = db.collection("denuncias");


class Mapa extends Component {

    constructor(props) {
        super(props);

        this.state = {

            latitude: 0,
            longitude: 0,
            data: [],
            map: null,

        };

        this.loadMap = this.loadMap.bind(this);
    }

    loadMap() {



    }


    componentWillUpdate() {
        const allScripts = document.getElementsByTagName('script');

        [].filter.call(
            allScripts,
            (scpt) => scpt.src.indexOf('key=AIzaSyDXRZ7SxW1SdyXxajHTnNb2pwPXz7WFqo8') >= 0
        )[0].remove();

        window.google = {};
    }

    componentDidMount() {


        const database = fire.firestore();
        const denunciasRef = database.collection("denuncias");
        var data = [];
        var longitud;
        var latitud;
        var tipoD;


        denunciasRef.get().then(snapshot => {
            var map;
            loadGoogleMapsAPI(API_CONFIG).then(googleMaps => {
                map = new googleMaps.Map(this.refs.map, OPTIONS)

            });
            snapshot.forEach(element => {
                console.log("HOLA" + element.data().denuncia)

                latitud = element.data().position[0].latitude
                longitud = element.data().position[0].longitude
                tipoD = element.data().denuncia;

                loadGoogleMapsAPI(API_CONFIG).then(googleMaps => {
                    var lat = latitud;
                    var lng = longitud;

                    var myLatLng = { lat, lng };
                    
                    var marker = new googleMaps.Marker({
                        position: new googleMaps.LatLng(latitud, longitud),
                        map: map,
                        title: tipoD
                    });


                });

            });



        }).catch(err => {
            console.log('Error al cargar el mapa', err);
        });
    }



    render() {


        return (

            <div>

                <div ref="map" style={MAP_STYLES}></div>

               
                    









            </div>

        );

    }

}

export default Mapa;