const {test}=require("@playwright/test")
let testdatapath="./webPageObjects/webPageLocators/"
const fs=require("fs")

let id="id="
let name1="name="
let src="src="
let dataobj={}
let tagstocheck=["input","form","div"]

test('@Regression',async ({ page }) => {
    await page.goto("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-account%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&")
    let pagetitle=(await page.title()).toString().replace(/\s/g,"").replace(/[^a-zA-Z0-9]/g,'');
    for(let j=0;j<tagstocheck.length;j++){
    const links=await page.$$(tagstocheck[j])
    let filepath=testdatapath+pagetitle+"page.json"
    if(fs.existsSync(filepath)){
        let data=fs.readFileSync(filepath);
        dataobj=JSON.parse(data);
    }
    for(let i=0;i<links.length;i++){
        let element=links[i]
        let idvalue=await element.getAttribute("id")
        let namevalue=await element.getAttribute("name")
    
    if(idvalue!=null & namevalue!=null){
        dataobj[pagetitle+"_"+namevalue]=["#"+idvalue,"."+namevalue]
    }
    else if(idvalue!=null){
        dataobj[pagetitle+"_"+idvalue]="#"+idvalue   
    }
    else if(namevalue!=null){
        dataobj[pagetitle+"_"+namevalue]="."+namevalue   
    }
    }
    
    fs.writeFile(filepath,JSON.stringify(dataobj,null,1),err =>{
        if(err){
            console.log(err)
        }
        else{
            console.log("File Written Successfully !")
        }
    })
}
 }
)