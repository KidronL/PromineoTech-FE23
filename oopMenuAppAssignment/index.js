 //My menu app will be about super-human "subjects".

 //Declaring variables

 const subjects = [];
 

 
 //Creating the classes for the data that will be input and stored

 //Class for subjects to fill the teams.
 class Subject {
    constructor(subject,category) {
        this.subject = subject;
        this.category = category;
    }

    //Code to add a subject
    addSubject(subject) {
        return subjects.push[subject];
     }

     //code to remove a subject
     removeSubject(arr,subject) {
        let ind = arr.indexOf(subject);
        return arr.splice(ind, 1);
     }

     listSubjects (arr) {
        for(let i = 0; i < arr.length; i++) {
            return arr[i];
        }
     }
 }
 
 //Class for the menu

 class Menu {
    constructor() {
        this.subjects = [];
        this.selectedSubject = null;
    }

    async start() {
        let selection = this.showMainMenuOptions();
        prompt(selection);
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createSubject();
                    break;
                case '2':
                    this.deleteSubject();
                    break;
                case '3':
                    this.displaySubjects();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`What would you like to do?
        0) Leave
        1) Add Subject
        2) Remove Subject
        3) List Subjects
        `);
    }

    createSubject() {
        let subject = prompt('Enter name for new subject: ');
        let category = prompt('Is this subject been identified as a hero, villain, or neutral: ')

        this.subjects.push(new Subject(subject,category))

    }

    deleteSubject() {
        let index = prompt('What is the index number of the subject you would like to delete: ')
        if (index > -1 && index < this.selectedSubject.subjects.length) {
            this.subjects.splice(index,1);
        }
    }

    displaySubjects() {
        let output = '';
            for (let i = 0; i < this.subjects.length; i++) {
                output += i + ')' + this.subjects[i].subject + '\n';
            }
            alert(output);
    }

    
    
 }

 const menu = new Menu();

 menu.start();