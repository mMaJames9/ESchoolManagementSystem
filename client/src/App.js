import React, {useState} from 'react'
import 'bootstrap';

import './assets/css/bootstrap.css'
import './assets/css/font.css'
import './assets/css/app.css'
import './assets/css/bootstrap-icons.css'

import Header from './components/Header'
import Module from './components/Module'
import Prof from './components/Prof'
import Student from './components/Student'
import OneModule from './components/OneModule'
import OneProf from './components/OneProf'
import OneStudent from './components/OneStudent'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


function App() {

  let url="#"

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  
  return (
    
    <div class="App">
    <BrowserRouter>
    
    <div id="sidebar" class={isActive ? "active" : null}>
        <div class="sidebar-wrapper active">
            <div class="sidebar-header">
                <div class="d-flex justify-content-between">
                    <div class="logo">
                        <a href={url}>
                            <h2 class="h2">E-Keyce</h2>
                        </a>
                    </div>
                    
                    <div class="toggler">
                        <a href={url} class="sidebar-hide d-xl-none d-block" onClick={() => handleToggle()}>
                            <i class="bi bi-x bi-middle"></i>
                        </a>
                    </div>
                
            </div>
        </div>
        
        <div class="sidebar-menu">
            <ul class="menu">
                <li class="sidebar-title">Menu</li>
                
                <li class={ window.location.href.indexOf('student') > -1 ? 'sidebar-item active' : 'sidebar-item' } onClick="document.location.reload(true)">
                    <Link class="sidebar-link" role="presentation" to="student">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
                            <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z"/>
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z"/>
                        </svg>
                        <span>Etudiants</span>
                    </Link>
                </li>
                <li class={ window.location.href.indexOf('prof') > -1 ? 'sidebar-item active' : 'sidebar-item' } onClick="document.location.reload(true)">
                    <Link class="sidebar-link" role="presentation" to="prof">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-video" viewBox="0 0 16 16">
                            <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
                        </svg>
                        <span>Professeurs</span>
                    </Link>
                </li>
                <li class={ window.location.href.indexOf('module') > -1 ? 'sidebar-item active' : 'sidebar-item' } onClick="document.location.reload(true)">
                    <Link class="sidebar-link" role="presentation" to="module">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                            <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                        </svg>
                        <span>Modules</span>
                    </Link>
                </li>
            </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
</div>

<div id="main">
    <header class="mb-3">
        <a href={url} class="burger-btn d-block d-xl-none" onClick={() => handleToggle()}>
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>
    
    <div class="page-heading">
    </div>

    <div class="page-content">
        <section class="row">
            <div class="col-12">
                <div class="row">
            
                    <Switch>
                        <Route exact path='/' component={Header} />
                        <Route exact path='/student' component={Student} />
                        <Route exact path='/student:id' component={OneStudent} />
                        <Route exact path='/prof' component={Prof} />
                        <Route exact path='/prof:id' component={OneProf} />
                        <Route exact path='/module' component={Module} />
                        <Route exact path='/module:id' component={OneModule} />
                    </Switch>
                    
                </div>
            </div>
        </section>
    </div>
</div>
</BrowserRouter>
</div>
  );
}

export default App;
