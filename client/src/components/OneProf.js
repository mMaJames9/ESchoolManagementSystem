import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function OneProf(props) {
const history = useHistory()
const id = props.match.params.id
const [prof, setProf] = useState({})
const [name, setName] = useState(prof.name)
const [ModuleId, setModuleId] = useState(prof.ModuleId)
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


function updateProf() {
toast.configure()
axios.put(process.env.REACT_APP_API_URL + 'prof/' + id, { name, ModuleId })
.then(response => {
console.log(response.data);
history.push('/prof')
toast.info('Professeur mis à jour avec succès')
})
.catch(err => console.log(err))
}

useEffect(() => {
function getModule() {
axios.get(process.env.REACT_APP_API_URL + 'prof/' + id)
.then(response => {
console.log(response.data);
setProf(response.data)
})
.catch(err => console.log(err))
};
getModule();
}, [id])

return (
<section id="basic-horizontal-layouts">
<div className="row match-height">
{prof
?

<div className="">
<div className="card">
<div className="card-header">
<h4 className="card-title">Modifier un Professeur</h4>
</div>
<div className="card-content">
<div className="card-body">
{/* <form className="form form-horizontal"> */}
<div className="form-body">
<div className="row">

<div className="col-md-4">
<label>Nom</label>
</div>
<div className="col-md-8 form-group">
<input type="text" className="form-control" required id="" aria-describedby="" onChange={(e) => setName(e.target.value)} defaultValue={prof.name}/>
</div>

<div className="col-md-4">
<label>Module</label>
</div>
<div className="col-md-8 form-group">
<div className="form-group">
<select className="form-select" onChange={(e) => setModuleId(e.target.value)}>
<option defaultValue={prof.ModuleId}>Selectionner un module</option>
{allModule && allModule.map(module => (
<option key={module.id} value={module.id}>{module.module_name}</option>
))}
</select>
</div>
</div>

<div className="col-sm-12 d-flex justify-content-end">
<button type="submit" className="btn btn-primary me-1 mb-1" onClick={() => updateProf()}>Modifier</button>
<button type="reset" className="btn btn-light-secondary me-1 mb-1">Reset</button>
</div>
</div>
</div>
{/* </form> */}
</div>
</div>
</div>
</div>
:
<div className="alert alert-warning text-center">Professeur Introvouble</div>
}
</div>
</section>
)

}