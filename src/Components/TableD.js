import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import fire from "../Constants/Firebase";
import * as routes from '../Constants/Routes';
import { Router, Route } from "react-router";
import NavBar from "./NavBar";


class TableD extends Component {

    constructor(props) {
        super(props);

        this.state = {

            data: [],
        };


    }

    componentDidMount() {

        const database = fire.firestore();
        const denunciasRef = database.collection("denuncias");
        var data = [];
        denunciasRef.get().then(snapshot => {
            snapshot.forEach(element => {
                var arrayDenuncia = [];
                var arrayDenuncia1 = {   
                    key: element.id, 
                    denuncia: element.data().denuncia,
                    anonimo: element.data().anonimo,
                    descripcion: element.data().descripcion,
                    afectados: element.data().afectados
                }
                const denuncianteRef = database.collection("users").doc(element.data().denunciante.id);
                denuncianteRef.get().then(snapshot => {
                    var arrayDenuncia2 = {
                        denunciante: snapshot.data().primerNombre,
                        contacto: snapshot.data().telefono,
                    }
                    arrayDenuncia = Object.assign(arrayDenuncia1, arrayDenuncia2)
                    data.push(arrayDenuncia)
                    console.log(data);
                    this.setState({
                        data: data
                    })
                }); 
            });
            
        });
    } 
    
    render() {

        const columns = [{
            title: 'Tipo de denuncia',
            dataIndex: 'denuncia',
        
        }, {
            title: 'anonimo',
            dataIndex: 'anonimo',
        }, {
            title: 'denunciante',
            dataIndex: 'denunciante',
        }, {
            title: 'descripcion',
            dataIndex: 'descripcion',
        }, {
            title: 'contacto',
            dataIndex: 'contacto',
        }, {
            title: 'afectados',
            dataIndex: 'afectados',
        }];
        
        
        return (

            

            <div>
               
               
                <Table columns={columns} dataSource={this.state.data} />
            </div>
        );
    }
}

export default TableD;
