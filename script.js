const linksSocialMedia = { 
  github: "Mateuss18", 
  youtube: "MisterMateus18", 
  facebook: "mateus.antonio.10888",
  instagram: "mateuss_18", 
  twitter: "Mateuss189"
}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
