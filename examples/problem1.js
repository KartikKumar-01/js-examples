let userRole = "editor";
let isAuthenticated = true;
let age = Number(20);

if(!isAuthenticated){
    console.log("Please log in");
}
else{
    console.log((userRole === "admin") ? "Welcome to Dashboard" : "Access Denied");
}