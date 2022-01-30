import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import React from 'react'

import '../assets/css/bootstrap.css'
import '../assets/vendors/iconly/bold.css'
import '../assets/vendors/perfect-scrollbar/perfect-scrollbar.css'
import '../assets/vendors/bootstrap-icons/bootstrap-icons.css'
import '../assets/css/app.css'
import '../assets/vendors/iconly/bold.css'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ModuleItems from './ModuleItems'

export default function Module() {
    toast.configure()
    const [module_name, setModule_name] = useState('')
    const [coefficient, setCoefficient] = useState('')
    const [search, setSearch] = useState([])
    const [allModule, setAllModule] = useState([])
    
    function addModule() {
        toast.configure()
        // console.log(process.env.REACT_APP_API_URL);
        axios.post(process.env.REACT_APP_API_URL + 'module/', { module_name, coefficient })
            .then(response => {
                console.log(response.data);
                toast.success('Module créé avec succès !')
                getAll()
            })
            .catch(err => console.log(err))
    }

    function serch(value) {
        axios.get(process.env.REACT_APP_API_URL + 'module/search/' + value)
            .then(response => setSearch(response.data))
            .catch(err => console.log(err))
    }
    
    function getAll() {
        axios.get(process.env.REACT_APP_API_URL + 'module/')
        .then(response => setAllModule(response.data))
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getAll()
    }, [])
    
    return (
        
        <section id="basic-horizontal-layouts">
        <div class="row match-height">

        <div class="col-md-4 col-12">
        <div class="card">
        <div class="card-header">
        <h4 class="card-title">Ajouter un module</h4>
        </div>
        <div class="card-content">
        <div class="card-body">
        <form class="form form-horizontal">
        <div class="form-body">
        <div class="row">
        <div class="col-md-4">
        <label>Nom du module</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setModule_name(e.target.value)}/>
        </div>
        <div class="col-md-4">
        <label>Coefficient</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="number" min="1" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setCoefficient(e.target.value)}/>
        </div>
        <div class="col-sm-12 d-flex justify-content-end">
        <button type="submit" class="btn btn-primary me-1 mb-1" onClick={() => addModule()}>Submit</button>
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
        <h4 class="card-title pt-3">Liste des Modules</h4>
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
        <th>Nom du module</th>
        <th class='text-center'>Coefficient</th>
        <th></th>
        </tr>
        </thead>
        {
        search.length > 0 ?
        <tbody>
        {search.map(module => (
        <ModuleItems moduleList={module} key={module.id} serch={serch} />
        ))}
        </tbody>
        :
        <tbody>
        {allModule && allModule.map(module => (
        <ModuleItems moduleList={module} key={module.id} serch={getAll} />
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
