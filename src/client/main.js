// import "https://bootswatch.com/5/lux/bootstrap.min.css";
// import "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css";
// import "https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css";

// <link rel="stylesheet" href="https://bootswatch.com/5/lux/bootstrap.min.css" />
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />

document.querySelector("#app").innerHTML = `
<div class="row mt-5">
    <div class="col-md-6 m-auto">
        <div class="card card-body text-center">
            <h1><i class="devicon-nodejs-plain" style="font-size: 8rem"></i></h1>
            <p>Create an account or login</p>
            <a href="/users/register" class="btn btn-primary btn-block mb-2">Register</a>
            <a href="/users/login" class="btn btn-secondary btn-block">Login</a>
        </div>
    </div>
</div>`;
