import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>1.Hafta Ödevi</h1>
  <p>Obje Halinde Gruplandırmalar Console Kısmında</p>
`



let data = await fetch("./data.json")
.then(async res => res.json())

console.log(data[20])
let orangeRed = []
let deepPink = []
let aliceBlue = []
let orangeRedAssist = {}
let deepPinkAssist = {}
let aliceBlueAssist = {}
let orangeRedNames =[]
let aliceBlueNames =[]
let deepPinkNames= []
function groupList(){


for (let i = 0; i<data.length; i++){

  if (data[i].group == 'OrangeRed'){
    orangeRedNames.push(data[i].name)
    orangeRed.push(JSON.stringify(data[i]))

  }else if (data[i].group == 'DeepPink'){
    deepPinkNames.push(data[i].name)
    deepPink.push(JSON.stringify(data[i]))

  }else if (data[i].group == 'AliceBlue'){
    aliceBlueNames.push(data[i].name)
    aliceBlue.push(JSON.stringify(data[i]))
  }
}
console.log("Alice Blue Members : " + aliceBlue)
console.log("Orange Red Members : " + orangeRed)
console.log("Deep Pink Members : " + deepPink)


}

function getAssistant(){
 
    for (let i = 0; i<data.length; i++){

        if(data[i].group =='DeepPink' && data[i].assistant == true){
          deepPinkAssist = data[i]
        }else if (data[i].group =='AliceBlue' && data[i].assistant == true){
          aliceBlueAssist = data[i]
        }else if (data[i].group =='OrangeRed' && data[i].assistant == true){
          orangeRedAssist = data[i]
        }
        
    }
   
    console.log("Deep Pink Assistant : " + JSON.stringify(deepPinkAssist))
    console.log("Alice Blue Assistant : " + JSON.stringify(aliceBlueAssist))
    console.log("Orange Red Assistant : " + JSON.stringify(orangeRedAssist))
}

groupList()
getAssistant()

// DOM Section

document.querySelector(".alice-blue-members").innerHTML = aliceBlueMembers()
document.querySelector(".orange-red-assist").innerHTML = 'Assistant : ' + orangeRedAssist.name
document.querySelector(".deep-pink-members").innerHTML = deepPinkMembers()
document.querySelector(".alice-blue-assist").innerHTML = 'Assistant : ' + aliceBlueAssist.name
document.querySelector(".orange-red-members").innerHTML = orangeRedMembers()
document.querySelector(".deep-pink-assist").innerHTML = 'Assistant : ' + deepPinkAssist.name


function orangeRedMembers(){

  let arrr = []

  for (let i = 0; i<orangeRedNames.length; i++){

     arrr.push('<li>'+orangeRedNames[i]+'</li>')

  }

  return arrr.join("")
}


function aliceBlueMembers(){

  let arrr = []

  for (let i = 0; i<aliceBlueNames.length; i++){

     arrr.push('<li>'+aliceBlueNames[i]+'</li>')

  }

  return arrr.join("")

}

function deepPinkMembers(){

  let arrr = []

  for (let i = 0; i<deepPinkNames.length; i++){

     arrr.push('<li>'+deepPinkNames[i]+'</li>')

  }
  return arrr.join("")
}

