
const linksSocialMidia = {
    github: 'ganimedes96',
    youtube: 'channel/UCJI7UOXL5UfAdBDuMXcunFg',
    facebook: 'hudson.blaack.9',
    linkedin: 'in/hudson-felix-577305215/'
    
}

function changeSocialMidiaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
        
    }
}
changeSocialMidiaLinks()

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMidia.github}`
    fetch(url)
        .then(response => response.json())
        .then(data =>{
         userImage.src = data.avatar_url   
         userName.textContent = data.name
         userLink.href = data.html_url
         bioInfo.textContent = data.bio   
         userLogin.textContent = data.login   
        })
}
getGithubProfileInfos()