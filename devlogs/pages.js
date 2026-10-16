class Page{
    filename;
    buttonLabel;
    version;
    indicator;
    bclass;
    constructor(fname, label, version, bclass){
        this.filename = fname;
        this.buttonLabel = label;
        this.version = version;
        const v = localStorage.getItem(fname);
        if(v == null){
            this.indicator = 1;
        }else if(v < this.version){
            this.indicator = 2;
        }else{
            this.indicator = 0;
        }
        this.bclass = bclass;
        // console.log(this.indicator);
    }
};
const pages = [
    new Page("000_intro","Intro",0),
    new Page("dynamic/000_checklist","Checklist",0,"dynamic"),
    new Page("001_plan","Plan",0),
    new Page("002_drone_parts","Drone Parts",0),
    new Page("003_drone_simulator_2d_math","Drone Simulator 2d Math",0),
    new Page("004_drone_simulator_2d_simulation","Drone Simulator 2d Simulation",0),
    new Page("005_drone_simulator_3d_setup","Drone Simulator 3d Setup",0),
    //new Page("offtopic/000_simplex_noise","Simplex Noise",0,"offtopic"),
    //new Page("005_drone_simulator_3d","Drone Simulator 3D",0),
]