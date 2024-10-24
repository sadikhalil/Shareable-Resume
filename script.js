var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//  form initialization
//input page => users personal and profile information
var form = document.getElementById("ShareableResume");
var ResumePage = document.getElementById("Resume-Page");
var resumeName = document.getElementById("resumeName");
var resumePicture = document.getElementById("resumePicture");
var userMail = document.getElementById("userMail");
var userPhoneNumber = document.getElementById("userPhoneNumber");
var userBioLinks = document.getElementById("userBioLinks");
// users education 
var userDegree = document.getElementById("userDegree");
var userInstitute = document.getElementById("userInstitute");
var userResult = document.getElementById("userResult");
var addEducation = document.getElementById("addEducation");
// users job and experiences 
var userJobExperience = document.getElementById("userJobExperience");
var addExperiences = document.getElementById("addExperiences");
// users skills ;
var userSkills = document.getElementById("userSkills");
var addSkills = document.getElementById("addSkills");
// submittion
var submitForm = document.getElementById("generateForm");
// form generating buttons and links 
var editResume = document.getElementById("editResume");
var backToHome = document.getElementById("backToHome");
var shareResume = document.getElementById("shareResume");
var downloadPdf = document.getElementById("downloadPdf");
var information = document.getElementById("information");
/// getting values form input labels 
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, photo, profilePhoto, photobase64, email, Contact, bioLinks, education, eduactionalInstitute, scores, experiences, skills;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name = document.getElementById("userName").value;
                photo = document.getElementById("photo");
                profilePhoto = photo.files ? photo.files[0] : null;
                photobase64 = "";
                if (!profilePhoto) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(profilePhoto)];
            case 1:
                photobase64 = _b.sent();
                localStorage.setItem("photo", photobase64);
                resumePicture.src = photobase64;
                _b.label = 2;
            case 2:
                email = document.getElementById("userGmail").value;
                Contact = document.getElementById("PhoneNumber").value;
                bioLinks = document.getElementById("otherURL").value;
                education = document.getElementById("userEducation").value;
                eduactionalInstitute = document.getElementById("institute").value;
                scores = document.getElementById("GPA/GRADES").value;
                experiences = document.getElementById("addExperience").value;
                skills = document.getElementById("userSkills").value;
                // for new form \ or new page we are using querryselector it will let us to the new page and for that 
                /// we have to use the id next to container in the html page . the id shiuld be of div element
                (_a = document.querySelector("conatainer")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                ResumePage.classList.remove("hidden");
                // collecting data after initialization
                resumeName.textContent = name;
                userMail.textContent = "G-MAIL: ".concat(email);
                userPhoneNumber.textContent = "Phone Number:".concat(Contact);
                userBioLinks.textContent = "Bio-Links:".concat(bioLinks);
                userDegree.textContent = "Degree :".concat(education, " from ").concat(eduactionalInstitute, " with ").concat(scores);
                userJobExperience.textContent = "Job-Experience:".concat(experiences);
                userSkills.textContent = "Skills:".concat(skills);
                return [2 /*return*/];
        }
    });
}); });
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
