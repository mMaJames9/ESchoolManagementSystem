import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function OneStudent(props) {
const history = useHistory()
const id = props.match.params.id
const [student, setStudent] = useState({})
const [name, setName] = useState(student.name)
const [filiere, setFiliere] = useState(student.filiere)
const [niveau, setNiveau] = useState(student.niveau)
const [ModuleId, setModuleId] = useState(student.ModuleId)
const [allModule, setAllModule] = useState([])

function getModule() {
axios.get(process.env.REACT_APP_API_URL + 'module/')
.then(response => {
setAllModule(response.data)
})
.catch(err => console.log(err))
}
useEffect(() => {
getModule()
}, [])

function updateStudent() {
toast.configure()
axios.put(process.env.REACT_APP_API_URL + 'student/' + id, { name, filiere, niveau, ModuleId })
.then(response => {
console.log(response.data);
history.push('/student')
toast.info('Etudiant mis à jour avec succès')
})
.catch(err => console.log(err))
}

useEffect(() => {
function getModule() {
axios.get(process.env.REACT_APP_API_URL + 'student/' + id)
.then(response => {
console.log(response.data);
setStudent(response.data)
})
.catch(err => console.log(err))
};
getModule();
}, [id])

return (
<section id="basic-horizontal-layouts">
<div class="row match-height">
{student
?
<div class="">
<div class="card">
<div class="card-header">
<h4 class="card-title">Modifier un Etudiant</h4>
</div>
<div class="card-content">
<div class="card-body">
{/* <form class="form form-horizontal"> */}
<div class="form-body">
<div class="row">
<div class="col-md-4">
<label>Nom</label>
</div>
<div class="col-md-8 form-group">
<input type="text" class="form-control" id="" aria-describedby="" onChange={(e) => setName(e.target.value)} defaultValue={student.name}/>
</div>

<div class="col-md-4">
<label>Filière</label>
</div>
<div class="col-md-8 form-group">
<div class="form-group">
<select class="form-select" onChange={(e) => setFiliere(e.target.value)}>
<option defaultValue={student.filiere}>Selectionner une filière</option>
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
<option defaultValue={student.niveau}>Selectionner un niveau</option>
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
<option defaultValue={student.ModuleId}>Selectionner un module</option>
{allModule && allModule.map(module => (
<option key={module.id} value={module.id}>{module.module_name}</option>
))}
</select>
</div>
</div>

<div class="col-sm-12 d-flex justify-content-end">
<button type="submit" class="btn btn-primary me-1 mb-1" onClick={() => updateStudent()}>Modifier</button>
<button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
</div>
</div>
</div>
{/* </form> */}
</div>
</div>
</div>
</div>
:
<div className="alert alert-warning text-center">Etudiant Introvouble</div>
}
</div>
</section>
)

}