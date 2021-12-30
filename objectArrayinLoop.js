const testobj = {
    naam: 'Erdinc',
    achternaam: 'Kaya',
    leeftijd: 35,
    land: 'Nederland',
    plaats: 'Amsterdam',
    hobby: 'voetbal',
    job: 'manager'
};
// {
//     naam: 'Berkay',
//     achternaam: 'Kaya',
//     leeftijd: 16,
//     land: 'Nederland',
//     plaats: 'Amsterdam',
//     hobby: 'voetbal',
//     job: 'student'
// }
// ];

for (const key in testobj) {
    console.log(`${key}: ${testobj[key]}`);
}
