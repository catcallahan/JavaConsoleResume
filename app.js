let fullName = "catrina callahan"
let upperName = fullName.toUpperCase();
console.log(upperName)

console.log("Occupation: Corporate Development Manager")
console.log("Description: Mostly just really loud, but also can make really good pasta, so that's a plus.")
console.log("My interests include:")
let interests = ["*Cooking", "*Learning", "*Gardening"]
for(i = 0; i < interests.length; i++) {
    console.log(interests[i])
}
console.log("Job History:")
let positions = [(Job1 = {
    title: "- Corporate Developement Manager",
    companyName: "McWane Science Center",
    jobDescription: "I wrote a whole lot of fancy grants. Raised lots of money. Planned big events."
}), (job2 = {
    title: "- Fabricator",
    companyName: "Triebold Paleontology",
    jobDescription: "Made a lot of really cool dinosaur molds. tried not to die from OSHA violations."
}), (job3 = {
    title: "- Receptionist",
    companyName: "Dr.'s Office",
    jobDescription: "Answer phones. Answer more phones. Never stop answering phones."
})];

// I wrote this before seeing the 'additional requirments' saying it needed to be a function.
// This was easier and worked. Oh well.
// for(a = 0; a < positions.length; a++) {
//     console.log(positions[a].title)
//     console.log(positions[a].companyName)
//     console.log(positions[a].jobDescription)
// };

function displayPosition (a) {
    console.log(positions[a].title),
    console.log(positions[a].companyName),
    console.log(positions[a].jobDescription)
}
displayPosition(0)
displayPosition(1)
displayPosition(2)

console.log("My Skills:");

let mySkills = [ {
        skill: "+ Grant Writing",
        isCool: false}, 
        {skill: "+ Answering Phones",
        isCool: false}, 
        {skill: "+ Molding Dino Bones",
        isCool: true }, 
        {skill: "+ Digging up cool stuff",
        isCool: true}]


function displaySkills() {
    for(b = 0; b< mySkills.length; b++) {
        if (mySkills[b].isCool == true) {
            console.log ("BAM:" + (mySkills[b].skill));
        } else if (mySkills[b].isCool == false){
            console.log(mySkills[b].skill)
        }
    }
};

displaySkills(mySkills);



