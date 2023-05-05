const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

    showAgeAndLangs: function (data) {
        const [ru, eng] = data.skills.languages;
        return `Мне ${data.age} и я владею языками: ${ru.toUpperCase()} ${eng.toUpperCase()}`;
    }
};


//=> 'Мне 29 и я владею языками: RU ENG'

//personalPlanPeter.showAgeAndLangs(personalPlanPeter);