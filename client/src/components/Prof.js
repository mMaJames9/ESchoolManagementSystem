import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../assets/css/bootstrap.css'
import '../assets/vendors/iconly/bold.css'
import '../assets/vendors/perfect-scrollbar/perfect-scrollbar.css'
import '../assets/vendors/bootstrap-icons/bootstrap-icons.css'
import '../assets/css/app.css'
import '../assets/vendors/choices.js/choices.min.css'

import '../assets/vendors/iconly/bold.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProfItems from './ProfItems'

export default function Prof() {
    toast.configure()
    const [name, setName] = useState('')
    const [matricule, setMatricule] = useState('')
    const [date_inscription, setDate_inscription] = useState('')
    const [ModuleId, setModuleId] = useState('')
    const [search, setSearch] = useState([])
    const [allProf, setAllProf] = useState([])
    const [allModule, setAllModule] = useState([])

    function addProf() {
        axios.post(process.env.REACT_APP_API_URL + 'prof/', { name, matricule,date_inscription,ModuleId })
            .then(response => {
                console.log(response.data);
                getAll()
                toast.success('Professeur créé avec succès !')
            })
            .catch(err => console.log(err))
    }
    function getModule() {
        axios.get(process.env.REACT_APP_API_URL + 'module/')
            .then(response => {
                setAllModule(response.data)
            })
            .catch(err => console.log(err))
    }
    function serch(value) {
        axios.get(process.env.REACT_APP_API_URL + 'prof/search/' + value)
            .then(response => setSearch(response.data))
            .catch(err => console.log(err))
    }
    function getAll() {
        axios.get(process.env.REACT_APP_API_URL + 'prof/')
            .then(response => {
                setAllProf(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAll()
        getModule()
    }, [])
    return (
        <section id="basic-horizontal-layouts">
        <div class="row match-height">

        <div class="col-md-4 col-12">
        <div class="card">
        <div class="card-header">
        <h4 class="card-title">Ajouter un Professeur</h4>
        </div>
        <div class="card-content">
        <div class="card-body">
        {/* <form class="form form-horizontal"> */}
        <div class="form-body">
        <div class="row">
        
        <div class="col-md-4">
        <label>Nom du Professeur</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => setName(e.target.value)}/>
        </div>

        <div class="col-md-4">
        <label>Matricule</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="text" maxLength="8" class="form-control" id="exampleInputEmail1" onChange={(e) => setMatricule(e.target.value)}/>
        </div>

        <div class="col-md-4">
        <label>Date Arrivée</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" class="form-control" id="exampleInputEmail1" onChange={(e) => setDate_inscription(e.target.value)}/>
        </div>

        <div class="col-md-4">
        <label>Module</label>
        </div>
        <div class="col-md-8 form-group">
        <div class="form-group">
        <select class="form-select" onChange={(e) => setModuleId(e.target.value)}>
        <option defaultValue>Selectionner un module</option>
        {allModule && allModule.map(module => (
        <option key={module.id} value={module.id}>{module.module_name}</option>
        ))}
        </select>
        </div>
        </div>

        <div class="col-sm-12 d-flex justify-content-end">
        <button type="submit" class="btn btn-primary me-1 mb-1" onClick={() => addProf()}>Submit</button>
        <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
        </div>

        </div>
        </div>
        {/* </form> */}
        </div>
        </div>
        </div>
        </div>
        <div class="col-md-8 col-12">
        <div class="card">

        <div class="card-header">
        

        <div class='row'>
        <div class="col-md-8">
        <h4 class="card-title pt-3">Liste des Professeurs</h4>
        </div>
        <div class="col-md-4">
        <form class="d-flex" target='_self'>
            <input class="form-control mt-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={(e) => serch(e.target.value)}/>
        </form>

        </div>
        </div>

        
        </div>
        <div class="card-content">
        <div class="card-body pt-0">
        <div class="table-responsive">
        
        <table class="table table-lg" name="table">
        <thead>
        <tr class="table-primary">
        <th>Nom</th>
        <th class='text-center'>Matricule</th>
        <th class='text-center'>Date Arrivée</th>
        <th class='text-center'>Module</th>
        <th></th>
        </tr>
        </thead>
        {
        search.length > 0 ?
        <tbody>
        {search && search.map((prof,index) => (
            <ProfItems profList={prof} key={index} serch={serch} getAll={getAll} />
        ))}
        </tbody>
        :
        <tbody>
        {allProf && allProf.map((prof,index) => (
            <ProfItems profList={prof} key={index} serch={serch} getAll={getAll} />
        ))}
        </tbody>
        }
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    )
}
