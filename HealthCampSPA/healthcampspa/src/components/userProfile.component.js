var UserProfile = (function() {
    var firstName = "";
    var lastName = "";
    var gender = "";
    var age = "";
    var notes = "";
    var photo = "";
    var height = "";
    var weight = "";
    var bodytemperature = "";
    var pulserate = "";
    var bp = "";
    var medications = "";

    var getfirstName = function() {
        return localStorage.getItem('firstName');
    };
    var setfirstName = function(name) {
        firstName = name;
        localStorage.setItem('firstName', name);
    };
    var getlastName = function() {
        return localStorage.getItem('lastName');
    };
    var setlastName = function(name) {
        lastName = name;
        localStorage.setItem('lastName', name);
    };
    var getgender= function() {
        return localStorage.getItem('gender');
    };
    var setgender = function(name) {
        gender = name;
        localStorage.setItem('gender', name);
    };
    var getage = function() {
        return localStorage.getItem('age');
    };
    var setage = function(name) {
        age = name;
        localStorage.setItem('age', name);
    };
    var getnotes = function() {
        return localStorage.getItem('notes');
    };
    var setnotes = function(name) {
        notes = name;
        localStorage.setItem('notes', name);
    };
    var getphoto = function() {
        return localStorage.getItem('photo');
    };
    var setphoto = function(name) {
        photo = name;
        localStorage.setItem('photo', name);
    };
    var getheight = function() {
        return localStorage.getItem('height');
    };
    var setheight = function(name) {
        height = name;
        localStorage.setItem('height', name);
    };
    var getweight = function() {
        return localStorage.getItem('weight');
    };
    var setweight = function(name) {
        weight = name;
        localStorage.setItem('weight', name);
    };
    var getbodytemperature = function() {
        return localStorage.getItem('bodytemperature');
    };
    var setbodytemperature = function(name) {
        bodytemperature = name;
        localStorage.setItem('bodytemperature', name);
    };
    var getpulserate = function() {
        return localStorage.getItem('pulserate');
    };
    var setpulserate = function(name) {
        pulserate = name;
        localStorage.setItem('pulserate', name);
    };
    var getbp = function() {
        return localStorage.getItem('bp');
    };
    var setbp = function(name) {
        bp = name;
        localStorage.setItem('bp', name);
    };
    var getmedications = function() {
        return localStorage.getItem('medications');
    };
    var setmedications = function(name) {
        medications = name;
        localStorage.setItem('medications', name);
    };

    return {
        getfirstName: getfirstName,
        setfirstName: setfirstName,
        getlastName: getlastName,
        setlastName: setlastName,
        getgender: getgender,
        setgender: setgender,
        getage: getage,
        setage: setage,
        getnotes: getnotes,
        setnotes: setnotes,
        getphoto: getphoto,
        setphoto: setphoto,
        getheight: getheight,
        setheight: setheight,
        getweight: getheight,
        setweight: setheight,
        getbodytemperature: getheight,
        setbodytemperature: setheight,
        getpulserate: getheight,
        setpulserate: setheight,
        getbp: getheight,
        setbp: setheight,
        getmedications: getheight,
        setmedications: setheight,
    }

})();

export default UserProfile;