import React from 'react'

import '../assets/css/bootstrap.css'
import '../assets/vendors/iconly/bold.css'
import '../assets/vendors/perfect-scrollbar/perfect-scrollbar.css'
import '../assets/vendors/bootstrap-icons/bootstrap-icons.css'
import '../assets/css/app.css'

export default function Header() {
return (

<div className="header-blue">

<div className="container hero">
<div className="row" style={{position:"absolute", top:"50%", transform:"translate(0, -50%)"}}>
<div className="col-12 col-lg-6 col-xl-6 offset-xl-2">
<h1>E-Keyce</h1>
<p>Bienvenu sur E-Keyce. Un sytème de gestion de la scolarité. Les modules disponibles sont: L'enregistrement des étudiants, L'enregistrement des professeurs et l'enregistrement des modules... Let's go ! </p>
</div>
<div
className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">

</div>
</div>
</div>


</div>

)
}