//  form initialization
//input page => users personal and profile information
const form = document.getElementById("ShareableResume") as HTMLFormElement;
const ResumePage = document.getElementById("Resume-Page") as HTMLElement;
const resumeName=document.getElementById("resumeName")as HTMLHeadingElement;
const resumePicture = document.getElementById("resumePicture")as HTMLImageElement;
const userMail = document.getElementById("userMail")as HTMLParagraphElement;
const userPhoneNumber = document.getElementById("userPhoneNumber")as HTMLParagraphElement;
const userBioLinks = document.getElementById("userBioLinks")as HTMLParagraphElement;
// users education 
const userDegree = document.getElementById("userDegree")as HTMLParagraphElement;
const userInstitute = document.getElementById("userInstitute")as HTMLParagraphElement;
const userResult = document.getElementById("userResult")as HTMLParagraphElement;
const addEducation = document.getElementById("addEducation") as HTMLButtonElement;
// users job and experiences 
const userJobExperience= document.getElementById("userJobExperience")as HTMLParagraphElement;
const addExperiences = document.getElementById("addExperiences") as HTMLButtonElement
// users skills ;
const userSkills = document.getElementById("userSkills")as HTMLParagraphElement;
const addSkills = document.getElementById("addSkills") as HTMLButtonElement;
// submittion
const submitForm = document.getElementById("generateForm") as HTMLButtonElement;
// form generating buttons and links 
const editResume = document.getElementById("editResume") as HTMLButtonElement;
const  backToHome= document.getElementById("backToHome") as HTMLButtonElement;
const shareResume = document.getElementById("shareResume") as HTMLButtonElement;
const downloadPdf = document.getElementById("downloadPdf") as HTMLButtonElement;
const information = document.getElementById("information")as HTMLDivElement;

/// getting values form input labels 
form.addEventListener("submit" ,async (event:Event)=> {
    event.preventDefault();

    const name = (document.getElementById("userName") as HTMLInputElement).value;
/// for picture 
// collecting picture
const photo = document.getElementById("photo") as HTMLInputElement;
const profilePhoto = photo.files? photo.files[0] : null
let photobase64 = "";
if(profilePhoto){
    photobase64=await fileToBase64(profilePhoto)

localStorage.setItem("photo" , photobase64)
resumePicture.src =photobase64;
}

    const email = (document.getElementById("userGmail") as HTMLInputElement).value;
    const Contact = (document.getElementById("PhoneNumber") as HTMLInputElement).value;
    const bioLinks = (document.getElementById("otherURL") as HTMLInputElement).value;
    const education = (document.getElementById("userEducation") as HTMLInputElement).value;
    const eduactionalInstitute = (document.getElementById("institute") as HTMLInputElement).value;
    const scores = (document.getElementById("GPA/GRADES") as HTMLInputElement).value;
    const experiences = (document.getElementById("addExperience") as HTMLInputElement).value;
    const skills = (document.getElementById("userSkills") as HTMLInputElement).value;
   
// for new form \ or new page we are using querryselector it will let us to the new page and for that 
/// we have to use the id next to container in the html page . the id shiuld be of div element

    document.querySelector("conatainer")?.classList.add("hidden");
    ResumePage.classList.remove("hidden")
// collecting data after initialization
resumeName.textContent = name ; 
userMail.textContent = `G-MAIL: ${email}`;
userPhoneNumber.textContent = `Phone Number:${Contact}`;
userBioLinks.textContent =  `Bio-Links:${bioLinks}`;
userDegree.textContent =  `Degree :${education} from ${eduactionalInstitute} with ${scores}`;
userJobExperience.textContent= `Job-Experience:${experiences}`;
userSkills.textContent =  `Skills:${skills}`;
})
function fileToBase64(file:File):Promise<string>{
    return new Promise((resolve,reject)=>{
   const reader = new FileReader();

   reader.onloadend = () => resolve(
    reader.result as string
   )
reader.onerror = reject;
reader.readAsDataURL(file);


    }
)
}