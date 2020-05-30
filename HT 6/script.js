const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]


const studentList = findAverageMark();
const groupAveMark = findGroupAvrgMark(studentList);


console.log(studentList);
console.log(groupAveMark);



function findAverageMark() {

    let studArr = [];

    for (let {name, marks} of students) {

        let avrgMark = marks.reduce((acc, item) => acc + item);
        avrgMark /= marks.length;
            
        studArr.push({name, avrgMark});
    }
    
    return studArr;
}


function findGroupAvrgMark (studList) {

    let avrgMarkArr = [];
    let groupAvrgMark;

    for (let {name, avrgMark} of studList) {
        avrgMarkArr.push(avrgMark);

        groupAvrgMark = avrgMarkArr.reduce((acc, item) => acc + item);
        groupAvrgMark /= avrgMarkArr.length;
    }

    return groupAvrgMark;
}


