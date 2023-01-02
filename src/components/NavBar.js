import React from 'react';

function Navbar() {
return (
    <><nav class="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div class="container"><a class="navbar-brand d-flex align-items-center" href="https://www.rupaya.io"><span class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <path d="M17 9V7C17 5.89543 16.1046 5 15 5H5C3.89543 5 3 5.89543 3 7V13C3 14.1046 3.89543 15 5 15H7M9 19H19C20.1046 19 21 18.1046 21 17V11C21 9.89543 20.1046 9 19 9H9C7.89543 9 7 9.89543 7 11V17C7 18.1046 7.89543 19 9 19ZM16 14C16 15.1046 15.1046 16 14 16C12.8954 16 12 15.1046 12 14C12 12.8954 12.8954 12 14 12C15.1046 12 16 12.8954 16 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg></span><span>Rupaya</span></a><button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-6"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div id="navcol-6" class="collapse navbar-collapse flex-grow-0 order-md-first">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link active" href="https://www.rupaya.io">Home</a></li>
                    <li class="nav-item"></li>
                </ul>
            </div>
            <div class="d-none d-md-block"><a class="btn btn-primary" role="button" href="https://bscscan.com/address/0xea3d4d95d4294e9f69b78df381ead248cc5d4f53">RUPX on BSC</a></div>
        </div>
    </nav><div class="alert alert-success" role="alert"><span><strong>Alert</strong> : We regret to inform you that we have lost control of the domain www.rupx.io. We request that you use www.rupaya.io as the primary domain for accessing our services moving forward.</span></div></>
);
}

export default Navbar;