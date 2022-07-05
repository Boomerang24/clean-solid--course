(() => {

    // No aplicando el principio de responsabilidad unica

    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    //? Version larga
    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor(name: string, gender: Gender, birthdate: Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    const newPerson = new Person('Alex', 'M', new Date('1995-01-24'));
    console.log({newPerson});


})();
