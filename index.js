let userData;
function submitData(userName, userEmail)
{
    let uObj = makeUser(userName, userEmail)
    //console.log('uObj', uObj)
    return fetch('http://localhost:3000/users', configObj(uObj)).then(resp => resp.json()).then(info => addToPage(info)).catch(error => addErrorToPage(error)) 
}

function makeUser(uName, uEmail)
{
    return userData = 
    {
        name: `${uName}`,
        email: `${uEmail}`
    }
}

function configObj(user)
{   
    return {
    method: 'POST',
    headers:
    {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(user)
    }
}

function addToPage(userInfo)
{
    let h1 = document.createElement('h1')
    //let line = document.createTextNode(`${userInfo.name}, ${userInfo.email}`)
    let line = document.createTextNode(`${userInfo.id}`)
    h1.appendChild(line)
    document.body.appendChild(h1)
}
function addErrorToPage(error)
{
    let h1 = document.createElement('h1')
    let line = document.createTextNode(error)
    h1.appendChild(line)
    document.body.appendChild(h1)
}
// function createForm()
// {
//     let form = document.createElement('form')
//     form.setAttribute('id', 'userInfoCollector')
//     form.setAttribute('method', 'post')
//     form.setAttribute("action", "");
  
//     let uN = document.createElement("input");
//     uN.setAttribute("type", "text");
//     uN.setAttribute("name", "Name");
//     uN.setAttribute("placeholder", "Name");
  
//     let eMail = document.createElement("input");
//     eMail.setAttribute("type", "text");
//     eMail.setAttribute("name", "E-Mail");
//     eMail.setAttribute("placeholder", "E-Mail");

//     let s = document.createElement("input");
//     s.setAttribute("type", "submit");
//     s.setAttribute("value", "Let's Go");

//     form.appendChild(uN)
//     form.appendChild(document.createElement('br'))
//     form.appendChild(eMail)
//     form.appendChild(document.createElement('br'))
//     form.appendChild(s)

//     document.body.appendChild(form)

//     form.addEventListener('submit', e => {
//         e.preventDefault();
//         //console.log('i was clicked')
//         //console.log(e.target)
//         let userInformation =
//         {
//             userNameInfo: e.target[0].value,
//             userEmailInfo: e.target[1].value
//         }
//         //console.log(userInformation);
//         submitData(userInformation.userNameInfo, userInformation.userEmailInfo)
//         form.reset()
//     })
// }

// document.addEventListener('DOMContentLoaded', createForm())