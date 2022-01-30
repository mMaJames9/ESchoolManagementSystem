import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function OneModule(props) {
    const history = useHistory()
    const id = props.match.params.id
    const [module, setModule] = useState({})
    const [module_name, setModule_name] = useState(module.module_name)
    const [coefficient, setCoefficient] = useState(module.coefficient)
    



    function updateModule() {
        toast.configure()
        axios.put(process.env.REACT_APP_API_URL + 'module/' + id, { module_name, coefficient })
        .then(response => {
            console.log(response.data);
            history.push('/module')
            toast.info('Module mis à jour avec succès')
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        function getModule() {
            axios.get(process.env.REACT_APP_API_URL + 'module/' + id)
            .then(response => {
                console.log(response.data);
                setModule(response.data)
            })
            .catch(err => console.log(err))
        };
        getModule();
    }, [id])
    
    return (
        <section id="basic-horizontal-layouts">
            <div class="row match-height">
            {module
                ?

        <div class="">
        <div class="card">
        <div class="card-header">
        <h4 class="card-title">Modifier un Module</h4>
        </div>
        <div class="card-content">
        <div class="card-body">
        <div class="form-body">
        <div class="row">
        <div class="col-md-4">
        <label>Nom du module</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="text" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setModule_name(e.target.value)} defaultValue={module.module_name}/>
        </div>
        <div class="col-md-4">
        <label>Coefficient</label>
        </div>
        <div class="col-md-8 form-group">
        <input type="number" min="1" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" onChange={(e) => setCoefficient(e.target.value)} defaultValue={module.coefficient}/>
        </div>
        <div class="col-sm-12 d-flex justify-content-end">
        <button type="submit" class="btn btn-primary me-1 mb-1" onClick={() => updateModule()}>Modifier</button>
        <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

                :
                <div class="alert alert-warning text-center">Module Introvouble</div>
            }
        </div>
    </section>
    )
    
}