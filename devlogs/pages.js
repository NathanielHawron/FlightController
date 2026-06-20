class Page{
    filename;
    buttonLabel;
    constructor(fname, label){
        this.filename = fname;
        this.buttonLabel = label;
    }
};
const pages = [
    new Page("000_intro","Intro"),
    new Page("001_plan","Plan"),
]