class Student{
    constructor(rono,sname,mkeng,mkmath,mksce)
    {
        this.rono=rono;
        this.sname=sname;
        this.mkeng=mkeng;
        this.mkmath=mkmath;
        this.mksce=mksce;

    }
    calculateTotmarks(){
        return this.mkeng+this.mkmath+this.mksce;
    }
    calculatepercentage(){
        const totalmarks=this.calculateTotmarks();
        const numberofsubject=3;
        return (totalmarks/(numberofsubject*100))*100;
    }
    display(){
        const totalmarks=this.calculateTotmarks();
        const pecentage=this.calculatepercentage();
        console.log(`RollNo:${this.rono} StudName:${this.sname} MarksInEng:${this.mkeng} MarksInMaths:${this.mkmath} MarksInScience:${this.mksce} Totalmark:${totalmarks} Percentage:${pecentage}`);
 
    }
}

const stu=new Student(102,"Joseph",81,99,55);
stu.display();

