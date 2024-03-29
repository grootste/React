console.log('App.js is running!!')

//JSX Javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put you hands in the life of you computer ',
    
};

var template =(
<div> 
    <h1> {app.title} </h1> 
    <p> {app.subtitle}</p>
    <ol>
        <li> Items one </li>
        <li> Items two</li>
    </ol> 
</div>
);


var user = {
    name: 'Baibhav',
    age : 24,
    location : 'Madhyapur Thimi'
};

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div> 
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
         {(user.age && user.age >= 18) && <p> Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);



