import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../assets/css/bootstrap.css'
import '../assets/vendors/iconly/bold.css'
import '../assets/vendors/perfect-scrollbar/perfect-scrollbar.css'
import '../assets/vendors/bootstrap-icons/bootstrap-icons.css'
import '../assets/css/app.css'
import '../assets/vendors/iconly/bold.css'

import '../assets/vendors/iconly/bold.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import StudentItems from './StudentItems'

export default function Student() {
    toast.configure()
    const [name, setName] = useState('')
    const [cin, setCin] = useState('')
    const [date_naissance, setDate_naissance] = useState('')
    const [filiere, setFiliere] = useState('')
    const [niveau, setNiveau] = useState('')
    const [ModuleId, setModuleId] = useState('')
    const [search, setSearch] = useState([])
    const [allStudent, setAllStudent] = useState([])
    const [allModule, setAllModule] = useState([])

    function addStudent() {
        axios.post(process.env.REACT_APP_API_URL + 'student/', { name, cin,date_naissance,filiere,niveau, ModuleId })
            .then(response => {
                console.log(response.data);
                getAll()
                toast.success('Etudiant créé avec succès !')
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
        axios.get(process.env.REACT_APP_API_URL + 'student/search/' + value)
            .then(response => setSearch(response.data))
            .catch(err => console.log(err))
    }
    function getAll() {
        axios.get(process.env.REACT_APP_API_URL + 'student/')
            .then(response => {
                setAllStudent(response.data)
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
        <h4 class="card-title">Ajouter un Etudiant</h4>
        </div>
        <div class="card-content">
        <div class="card-body">
        <form class="form form-horizontal" onSubmit={() => addStudent()}>
        <div class="form-body">
        <div class="row">

        <div class="col-md-4">
        <label>Nom</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="text" class="form-control" id="" aria-describedby="" onChange={(e) => setName(e.target.value)}/>
        </div>

        <div class="col-md-4">
        <label>Identité</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="text" maxLength="8" class="form-control" id="" aria-describedby="" onChange={(e) => setCin(e.target.value)}/>
        </div>

        <div class="col-md-4">
        <label>Date de Naissance</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="date" class="form-control" id="" aria-describedby="" onChange={(e) => setDate_naissance(e.target.value)}/>
        </div>

        <div class="col-md-4">
        <label>Filière</label>
        </div>
        <div class="col-md-8 form-group">
        <div class="form-group">
        <select class="form-select" onChange={(e) => setFiliere(e.target.value)}>
        <option defaultValue>Selectionner une filière</option>
        <option value="Intellligence Artificielle">Intellligence Artificielle</option>
        <option value="Big Data">Big Data</option>
        <option value="Blockchain">Blockchain</option>
        <option value="Administration des SI">Administration des SI</option>
        <option value="Management des projets ITs">Management des projets ITs</option>
        <option value="Développement Web">Développement Web</option>
        </select>
        </div>
        </div>

        <div class="col-md-4">
        <label>Niveau</label>
        </div>
        <div class="col-md-8 form-group">
        <div class="form-group">
        <select class="form-select" onChange={(e) => setNiveau(e.target.value)}>
        <option defaultValue>Selectionner un niveau</option>
        <option value="B1">Bachelor I</option>
        <option value="B2">Bachelor II</option>
        <option value="B3">Bachelor III</option>
        <option value="M1">Master I</option>
        <option value="M2">Master II</option>
        </select>
        </div>
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
        <button type="submit" class="btn btn-primary me-1 mb-1">Submit</button>
        <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        <div class="col-md-8 col-12">
        <div class="card">

        <div class="card-header">


        <div class='row'>
        <div class="col-md-8">
        <h4 class="card-title pt-3">Liste des Etudiants</h4>
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
        <th class='text-center'>Identité</th>
        <th class='text-center'>Date Naissance</th>
        <th class='text-center'>Filière</th>
        <th class='text-center'>Niveau</th>
        <th></th>
        </tr>
        </thead>
        {
        search.length > 0 ?
        <tbody>
        {search.map((std,index) => (
        <StudentItems studentList={std} key={index} serch={serch} />
        ))}
        </tbody>
        :
        <tbody>
        {allStudent && allStudent.map((std,index) => (
        <StudentItems studentList={std} key={index} getAll={getAll} />
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
