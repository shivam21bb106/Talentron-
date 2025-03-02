import React, { useState } from "react";
import { Tab, Tabs, Form, Button, Modal } from "react-bootstrap";
import FormButton from "../components/form_button";
import "../styles/global.css";
import Form2 from "../components/Form2";

// const stateDistricts = {
//   AndraPradesh: [
//     "Anantapur",
//     "Chittoor",
//     "East Godavari",
//     "Guntur",
//     "Kadapa",
//     "Krishna",
//     "Kurnool",
//     "Prakasam",
//     "Nellore",
//     "Srikakulam",
//     "Visakhapatnam",
//     "Vizianagaram",
//     "West Godavari",
//   ],
//   ArunachalPradesh: [
//     "Anjaw",
//     "Changlang",
//     "Dibang Valley",
//     "East Kameng",
//     "East Siang",
//     "Kra Daadi",
//     "Kurung Kumey",
//     "Lohit",
//     "Longding",
//     "Lower Dibang Valley",
//     "Lower Subansiri",
//     "Namsai",
//     "Papum Pare",
//     "Siang",
//     "Tawang",
//     "Tirap",
//     "Upper Siang",
//     "Upper Subansiri",
//     "West Kameng",
//     "West Siang",
//     "Itanagar",
//   ],
//   Assam: [
//     "Baksa",
//     "Barpeta",
//     "Biswanath",
//     "Bongaigaon",
//     "Cachar",
//     "Charaideo",
//     "Chirang",
//     "Darrang",
//     "Dhemaji",
//     "Dhubri",
//     "Dibrugarh",
//     "Goalpara",
//     "Golaghat",
//     "Hailakandi",
//     "Hojai",
//     "Jorhat",
//     "Kamrup Metropolitan",
//     "Kamrup (Rural)",
//     "Karbi Anglong",
//     "Karimganj",
//     "Kokrajhar",
//     "Lakhimpur",
//     "Majuli",
//     "Morigaon",
//     "Nagaon",
//     "Nalbari",
//     "Dima Hasao",
//     "Sivasagar",
//     "Sonitpur",
//     "South Salmara Mankachar",
//     "Tinsukia",
//     "Udalguri",
//     "West Karbi Anglong",
//   ],
//   Bihar: [
//     "Araria",
//     "Arwal",
//     "Aurangabad",
//     "Banka",
//     "Begusarai",
//     "Bhagalpur",
//     "Bhojpur",
//     "Buxar",
//     "Darbhanga",
//     "East Champaran",
//     "Gaya",
//     "Gopalganj",
//     "Jamui",
//     "Jehanabad",
//     "Kaimur",
//     "Katihar",
//     "Khagaria",
//     "Kishanganj",
//     "Lakhisarai",
//     "Madhepura",
//     "Madhubani",
//     "Munger",
//     "Muzaffarpur",
//     "Nalanda",
//     "Nawada",
//     "Patna",
//     "Purnia",
//     "Rohtas",
//     "Saharsa",
//     "Samastipur",
//     "Saran",
//     "Sheikhpura",
//     "Sheohar",
//     "Sitamarhi",
//     "Siwan",
//     "Supaul",
//     "Vaishali",
//     "West Champaran",
//   ],
//   Chhattisgarh: [
//     "Balod",
//     "Baloda Bazar",
//     "Balrampur",
//     "Bastar",
//     "Bemetara",
//     "Bijapur",
//     "Bilaspur",
//     "Dantewada",
//     "Dhamtari",
//     "Durg",
//     "Gariaband",
//     "Janjgir Champa",
//     "Jashpur",
//     "Kabirdham",
//     "Kanker",
//     "Kondagaon",
//     "Korba",
//     "Koriya",
//     "Mahasamund",
//     "Mungeli",
//     "Narayanpur",
//     "Raigarh",
//     "Raipur",
//     "Rajnandgaon",
//     "Sukma",
//     "Surajpur",
//     "Surguja",
//   ],
//   Goa: ["North Goa", "South Goa"],
//   Gujarat: [
//     "Ahmedabad",
//     "Amreli",
//     "Anand",
//     "Aravalli",
//     "Banaskantha",
//     "Bharuch",
//     "Bhavnagar",
//     "Botad",
//     "Chhota Udaipur",
//     "Dahod",
//     "Dang",
//     "Devbhoomi Dwarka",
//     "Gandhinagar",
//     "Gir Somnath",
//     "Jamnagar",
//     "Junagadh",
//     "Kheda",
//     "Kutch",
//     "Mahisagar",
//     "Mehsana",
//     "Morbi",
//     "Narmada",
//     "Navsari",
//     "Panchmahal",
//     "Patan",
//     "Porbandar",
//     "Rajkot",
//     "Sabarkantha",
//     "Surat",
//     "Surendranagar",
//     "Tapi",
//     "Vadodara",
//     "Valsad",
//   ],
//   Haryana: [
//     "Ambala",
//     "Bhiwani",
//     "Charkhi Dadri",
//     "Faridabad",
//     "Fatehabad",
//     "Gurugram",
//     "Hisar",
//     "Jhajjar",
//     "Jind",
//     "Kaithal",
//     "Karnal",
//     "Kurukshetra",
//     "Mahendragarh",
//     "Mewat",
//     "Palwal",
//     "Panchkula",
//     "Panipat",
//     "Rewari",
//     "Rohtak",
//     "Sirsa",
//     "Sonipat",
//     "Yamunanagar",
//   ],
//   HimachalPradesh: [
//     "Bilaspur",
//     "Chamba",
//     "Hamirpur",
//     "Kangra",
//     "Kinnaur",
//     "Kullu",
//     "Lahaul Spiti",
//     "Mandi",
//     "Shimla",
//     "Sirmaur",
//     "Solan",
//     "Una",
//   ],
//   JammuKashmir: [
//     "Anantnag",
//     "Bandipora",
//     "Baramulla",
//     "Budgam",
//     "Doda",
//     "Ganderbal",
//     "Jammu",
//     "Kargil",
//     "Kathua",
//     "Kishtwar",
//     "Kulgam",
//     "Kupwara",
//     "Leh",
//     "Poonch",
//     "Pulwama",
//     "Rajouri",
//     "Ramban",
//     "Reasi",
//     "Samba",
//     "Shopian",
//     "Srinagar",
//     "Udhampur",
//   ],
//   Jharkhand: [
//     "Bokaro",
//     "Chatra",
//     "Deoghar",
//     "Dhanbad",
//     "Dumka",
//     "East Singhbhum",
//     "Garhwa",
//     "Giridih",
//     "Godda",
//     "Gumla",
//     "Hazaribagh",
//     "Jamtara",
//     "Khunti",
//     "Koderma",
//     "Latehar",
//     "Lohardaga",
//     "Pakur",
//     "Palamu",
//     "Ramgarh",
//     "Ranchi",
//     "Sahebganj",
//     "Seraikela Kharsawan",
//     "Simdega",
//     "West Singhbhum",
//   ],
//   Karnataka: [
//     "Bagalkot",
//     "Bangalore Rural",
//     "Bangalore Urban",
//     "Belgaum",
//     "Bellary",
//     "Bidar",
//     "Vijayapura",
//     "Chamarajanagar",
//     "Chikkaballapur",
//     "Chikkamagaluru",
//     "Chitradurga",
//     "Dakshina Kannada",
//     "Davanagere",
//     "Dharwad",
//     "Gadag",
//     "Gulbarga",
//     "Hassan",
//     "Haveri",
//     "Kodagu",
//     "Kolar",
//     "Koppal",
//     "Mandya",
//     "Mysore",
//     "Raichur",
//     "Ramanagara",
//     "Shimoga",
//     "Tumkur",
//     "Udupi",
//     "Uttara Kannada",
//     "Yadgir",
//   ],
//   Kerala: [
//     "Alappuzha",
//     "Ernakulam",
//     "Idukki",
//     "Kannur",
//     "Kasaragod",
//     "Kollam",
//     "Kottayam",
//     "Kozhikode",
//     "Malappuram",
//     "Palakkad",
//     "Pathanamthitta",
//     "Thiruvananthapuram",
//     "Thrissur",
//     "Wayanad",
//   ],
//   MadhyaPradesh: [
//     "Agar Malwa",
//     "Alirajpur",
//     "Anuppur",
//     "Ashoknagar",
//     "Balaghat",
//     "Barwani",
//     "Betul",
//     "Bhind",
//     "Bhopal",
//     "Burhanpur",
//     "Chhatarpur",
//     "Chhindwara",
//     "Damoh",
//     "Datia",
//     "Dewas",
//     "Dhar",
//     "Dindori",
//     "Guna",
//     "Gwalior",
//     "Harda",
//     "Hoshangabad",
//     "Indore",
//     "Jabalpur",
//     "Jhabua",
//     "Katni",
//     "Khandwa",
//     "Khargone",
//     "Mandla",
//     "Mandsaur",
//     "Morena",
//     "Narsinghpur",
//     "Neemuch",
//     "Panna",
//     "Raisen",
//     "Rajgarh",
//     "Ratlam",
//     "Rewa",
//     "Sagar",
//     "Satna",
//     "Sehore",
//     "Seoni",
//     "Shahdol",
//     "Shajapur",
//     "Sheopur",
//     "Shivpuri",
//     "Sidhi",
//     "Singrauli",
//     "Tikamgarh",
//     "Ujjain",
//     "Umaria",
//     "Vidisha",
//   ],
//   Maharashtra: [
//     "Ahmednagar",
//     "Akola",
//     "Amravati",
//     "Aurangabad",
//     "Beed",
//     "Bhandara",
//     "Buldhana",
//     "Chandrapur",
//     "Dhule",
//     "Gadchiroli",
//     "Gondia",
//     "Hingoli",
//     "Jalgaon",
//     "Jalna",
//     "Kolhapur",
//     "Latur",
//     "Mumbai City",
//     "Mumbai Suburban",
//     "Nagpur",
//     "Nanded",
//     "Nandurbar",
//     "Nashik",
//     "Osmanabad",
//     "Palghar",
//     "Parbhani",
//     "Pune",
//     "Raigad",
//     "Ratnagiri",
//     "Sangli",
//     "Satara",
//     "Sindhudurg",
//     "Solapur",
//     "Thane",
//     "Wardha",
//     "Washim",
//     "Yavatmal",
//   ],
//   Manipur: [
//     "Bishnupur",
//     "Chandel",
//     "Churachandpur",
//     "Imphal East",
//     "Imphal West",
//     "Jiribam",
//     "Kakching",
//     "Kamjong",
//     "Kangpokpi",
//     "Noney",
//     "Pherzawl",
//     "Senapati",
//     "Tamenglong",
//     "Tengnoupal",
//     "Thoubal",
//     "Ukhrul",
//   ],
//   Meghalaya: [
//     "East Garo Hills",
//     "East Jaintia Hills",
//     "East Khasi Hills",
//     "North Garo Hills",
//     "Ri Bhoi",
//     "South Garo Hills",
//     "South West Garo Hills",
//     "South West Khasi Hills",
//     "West Garo Hills",
//     "West Jaintia Hills",
//     "West Khasi Hills",
//   ],
//   Mizoram: [
//     "Aizawl",
//     "Champhai",
//     "Kolasib",
//     "Lawngtlai",
//     "Lunglei",
//     "Mamit",
//     "Saiha",
//     "Serchhip",
//     "Aizawl",
//     "Champhai",
//     "Kolasib",
//     "Lawngtlai",
//     "Lunglei",
//     "Mamit",
//     "Saiha",
//     "Serchhip",
//   ],
//   Nagaland: [
//     "Dimapur",
//     "Kiphire",
//     "Kohima",
//     "Longleng",
//     "Mokokchung",
//     "Mon",
//     "Peren",
//     "Phek",
//     "Tuensang",
//     "Wokha",
//     "Zunheboto",
//   ],
//   Odisha: [
//     "Angul",
//     "Balangir",
//     "Balasore",
//     "Bargarh",
//     "Bhadrak",
//     "Boudh",
//     "Cuttack",
//     "Debagarh",
//     "Dhenkanal",
//     "Gajapati",
//     "Ganjam",
//     "Jagatsinghpur",
//     "Jajpur",
//     "Jharsuguda",
//     "Kalahandi",
//     "Kandhamal",
//     "Kendrapara",
//     "Kendujhar",
//     "Khordha",
//     "Koraput",
//     "Malkangiri",
//     "Mayurbhanj",
//     "Nabarangpur",
//     "Nayagarh",
//     "Nuapada",
//     "Puri",
//     "Rayagada",
//     "Sambalpur",
//     "Subarnapur",
//     "Sundergarh",
//   ],
//   Punjab: [
//     "Amritsar",
//     "Barnala",
//     "Bathinda",
//     "Faridkot",
//     "Fatehgarh Sahib",
//     "Fazilka",
//     "Firozpur",
//     "Gurdaspur",
//     "Hoshiarpur",
//     "Jalandhar",
//     "Kapurthala",
//     "Ludhiana",
//     "Mansa",
//     "Moga",
//     "Mohali",
//     "Muktsar",
//     "Pathankot",
//     "Patiala",
//     "Rupnagar",
//     "Sangrur",
//     "Shaheed Bhagat Singh Nagar",
//     "Tarn Taran",
//   ],
//   Rajasthan: [
//     "Ajmer",
//     "Alwar",
//     "Banswara",
//     "Baran",
//     "Barmer",
//     "Bharatpur",
//     "Bhilwara",
//     "Bikaner",
//     "Bundi",
//     "Chittorgarh",
//     "Churu",
//     "Dausa",
//     "Dholpur",
//     "Dungarpur",
//     "Ganganagar",
//     "Hanumangarh",
//     "Jaipur",
//     "Jaisalmer",
//     "Jalore",
//     "Jhalawar",
//     "Jhunjhunu",
//     "Jodhpur",
//     "Karauli",
//     "Kota",
//     "Nagaur",
//     "Pali",
//     "Pratapgarh",
//     "Rajsamand",
//     "Sawai Madhopur",
//     "Sikar",
//     "Sirohi",
//     "Tonk",
//     "Udaipur",
//   ],
//   Sikkim: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
//   TamilNadu: [
//     "Ariyalur",
//     "Chennai",
//     "Coimbatore",
//     "Cuddalore",
//     "Dharmapuri",
//     "Dindigul",
//     "Erode",
//     "Kanchipuram",
//     "Kanyakumari",
//     "Karur",
//     "Krishnagiri",
//     "Madurai",
//     "Nagapattinam",
//     "Namakkal",
//     "Nilgiris",
//     "Perambalur",
//     "Pudukkottai",
//     "Ramanathapuram",
//     "Salem",
//     "Sivaganga",
//     "Thanjavur",
//     "Theni",
//     "Thoothukudi",
//     "Tiruchirappalli",
//     "Tirunelveli",
//     "Tiruppur",
//     "Tiruvallur",
//     "Tiruvannamalai",
//     "Tiruvarur",
//     "Vellore",
//     "Viluppuram",
//     "Virudhunagar",
//   ],
//   Telangana: [
//     "Adilabad",
//     "Bhadradri Kothagudem",
//     "Hyderabad",
//     "Jagtial",
//     "Jangaon",
//     "Jayashankar",
//     "Jogulamba",
//     "Kamareddy",
//     "Karimnagar",
//     "Khammam",
//     "Komaram Bheem",
//     "Mahabubabad",
//     "Mahbubnagar",
//     "Mancherial",
//     "Medak",
//     "Medchal",
//     "Nagarkurnool",
//     "Nalgonda",
//     "Nirmal",
//     "Nizamabad",
//     "Peddapalli",
//     "Rajanna Sircilla",
//     "Ranga Reddy",
//     "Sangareddy",
//     "Siddipet",
//     "Suryapet",
//     "Vikarabad",
//     "Wanaparthy",
//     "Warangal Rural",
//     "Warangal Urban",
//     "Yadadri Bhuvanagiri",
//   ],
//   Tripura: [
//     "Dhalai",
//     "Gomati",
//     "Khowai",
//     "North Tripura",
//     "Sepahijala",
//     "South Tripura",
//     "Unakoti",
//     "West Tripura",
//   ],
//   UttarPradesh: [
//     "Agra",
//     "Aligarh",
//     "Allahabad",
//     "Ambedkar Nagar",
//     "Amethi",
//     "Amroha",
//     "Auraiya",
//     "Azamgarh",
//     "Baghpat",
//     "Bahraich",
//     "Ballia",
//     "Balrampur",
//     "Banda",
//     "Barabanki",
//     "Bareilly",
//     "Basti",
//     "Bhadohi",
//     "Bijnor",
//     "Budaun",
//     "Bulandshahr",
//     "Chandauli",
//     "Chitrakoot",
//     "Deoria",
//     "Etah",
//     "Etawah",
//     "Faizabad",
//     "Farrukhabad",
//     "Fatehpur",
//     "Firozabad",
//     "Gautam Buddha Nagar",
//     "Ghaziabad",
//     "Ghazipur",
//     "Gonda",
//     "Gorakhpur",
//     "Hamirpur",
//     "Hapur",
//     "Hardoi",
//     "Hathras",
//     "Jalaun",
//     "Jaunpur",
//     "Jhansi",
//     "Kannauj",
//     "Kanpur Dehat",
//     "Kanpur Nagar",
//     "Kasganj",
//     "Kaushambi",
//     "Kheri",
//     "Kushinagar",
//     "Lalitpur",
//     "Lucknow",
//     "Maharajganj",
//     "Mahoba",
//     "Mainpuri",
//     "Mathura",
//     "Mau",
//     "Meerut",
//     "Mirzapur",
//     "Moradabad",
//     "Muzaffarnagar",
//     "Pilibhit",
//     "Pratapgarh",
//     "Raebareli",
//     "Rampur",
//     "Saharanpur",
//     "Sambhal",
//     "Sant Kabir Nagar",
//     "Shahjahanpur",
//     "Shamli",
//     "Shravasti",
//     "Siddharthnagar",
//     "Sitapur",
//     "Sonbhadra",
//     "Sultanpur",
//     "Unnao",
//     "Varanasi",
//   ],
//   Uttarakhand: [
//     "Almora",
//     "Bageshwar",
//     "Chamoli",
//     "Champawat",
//     "Dehradun",
//     "Haridwar",
//     "Nainital",
//     "Pauri",
//     "Pithoragarh",
//     "Rudraprayag",
//     "Tehri",
//     "Udham Singh Nagar",
//     "Uttarkashi",
//   ],
//   WestBengal: [
//     "Alipurduar",
//     "Bankura",
//     "Birbhum",
//     "Cooch Behar",
//     "Dakshin Dinajpur",
//     "Darjeeling",
//     "Hooghly",
//     "Howrah",
//     "Jalpaiguri",
//     "Jhargram",
//     "Kalimpong",
//     "Kolkata",
//     "Malda",
//     "Murshidabad",
//     "Nadia",
//     "North 24 Parganas",
//     "Paschim Bardhaman",
//     "Paschim Medinipur",
//     "Purba Bardhaman",
//     "Purba Medinipur",
//     "Purulia",
//     "South 24 Parganas",
//     "Uttar Dinajpur",
//   ],
//   AndamanNicobar: ["Nicobar", "North Middle Andaman", "South Andaman"],
//   Chandigarh: ["Chandigarh"],
//   DadraHaveli: ["Dadra Nagar Haveli"],
//   DamanDiu: ["Daman", "Diu"],
//   Delhi: [
//     "Central Delhi",
//     "East Delhi",
//     "New Delhi",
//     "North Delhi",
//     "North East Delhi",
//     "North West Delhi",
//     "Shahdara",
//     "South Delhi",
//     "South East Delhi",
//     "South West Delhi",
//     "West Delhi"
//   ],
//   Lakshadweep: ["Lakshadweep"],
//   Pondicherry: ["Karaikal", "Mahe", "Puducherry", "Yanam"],
// };

// const selectExpertise = [
//   "Full Stack Development", "Frontend Development", "Backend Development", "Software Testing", "Data Engineering", "Test Automation", "Robotic Process Automation"

// ];



const ContactUs = () => {

  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);

  const toggleForm = (type) => {
    if (formType === type) {
      setShowForm(!showForm);
    } else {
      setShowForm(true);
      setFormType(type);
    }
  };


  const desktopGoogleMapsLink = "https://maps.app.goo.gl/cUxoWnS7FnDmsiuC6";
  const mobileGoogleMapsLink =
    "geo:13.061756007303863, 80.16377649544637?q=Lapis+Data+Analytics+Pvt.+Ltd.";

  // Check if the user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleMapClick = () => {
    const linkToOpen = isMobile ? mobileGoogleMapsLink : desktopGoogleMapsLink;
    window.open(linkToOpen, "_blank");
  };

  // form:

  // const [showTabs, setShowTabs] = useState(false);
  // const [activeKey, setActiveKey] = useState("jobseeker");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   contactNumber: "",
  //   jobLocation: "",
  //   city: "",
  //   email: "",
  //   noticePeriod: "",
  //   expectedSalary: "",
  //   resume: null,
  // });
  // const [trainerData, setTrainerData] = useState({
  //   fullName: "",
  //   contact: "",
  //   email: "",
  //   website: "",
  //   linkedIn: "",
  //   expertIn: "",
  // });
  // const [employerData, setEmployerData] = useState({
  //   companyName: "",
  //   email: "",
  //   contactNo: "",
  //   website: "",
  //   requirements: "",
  // });
  // const [errors, setErrors] = useState({});
  // const [trainerErrors, setTrainerErrors] = useState({});
  // const [employerErrors, setEmployerErrors] = useState({});

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleTrainerChange = (e) => {
  //   setTrainerData({ ...trainerData, [e.target.name]: e.target.value });
  // };

  // const handleEmployerChange = (e) => {
  //   setEmployerData({ ...employerData, [e.target.name]: e.target.value });
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file && file.size > 2 * 1024 * 1024) {
  //     setErrors({ ...errors, resume: "File size must be less than 2MB" });
  //   } else {
  //     setFormData({ ...formData, resume: file });
  //     setErrors({ ...errors, resume: "" });
  //   }
  // };
  // const handleExpertiseChange = (event) => {
  //   setSelectedExpertise(event.target.value);
  //   if (event.target.value) {
  //     setErrors((prevErrors) => ({ ...prevErrors, expertise: "" }));
  //   }
  // };

  // const validateForm = () => {
  //   let newErrors = {};
  //   Object.keys(formData).forEach((key) => {
  //     if (!formData[key]) {
  //       newErrors[key] = "This field is required";
  //     }
  //   });
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const validateTrainerForm = () => {
  //   let newErrors = {};
  //   ["fullName", "contact", "email", "linkedIn", "expertIn"].forEach((key) => {
  //     if (!trainerData[key]) {
  //       newErrors[key] = "This field is required";
  //     }
  //   });
  //   setTrainerErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleTrainerSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateTrainerForm()) {
  //     alert("Trainer form submitted successfully");
  //   }
  // };

  // const handleEmployerSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateEmployerForm()) {
  //     alert("Employer form submitted successfully");
  //   }
  // };

  // const validateEmployerForm = () => {
  //   let newErrors = {};
  //   ["companyName", "email", "contactNo", "website", "requirements"].forEach(
  //     (key) => {
  //       if (!employerData[key]) {
  //         newErrors[key] = "This field is required";
  //       }
  //     }
  //   );
  //   setEmployerErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  

  //   if (!selectedExpertise) {
  //     validationErrors.expertise = "Please select your expertise.";
  //   }
  //   if (validateForm()) {
  //     alert("Form submitted successfully");
  //   }

  // };

  // const [selectedState, setSelectedState] = useState("");
  // const [districts, setDistricts] = useState([]);

  // const handleStateChange = (event) => {
  //   const state = event.target.value;
  //   setSelectedState(state);
  //   setDistricts(stateDistricts[state] || []); // Set districts based on selected state
  // };

  // const [selectedExpertise, setSelectedExpertise] = useState("");
  
  return (
    <>
      <main>
        <FormButton />
        {/* title head - start */}
        <div className="contact-us-head-container">
          <div className="dark-background">
            <div className="top-banner">
              <i>
                <img
                  src="/images/phone.png"
                  className="call-us-img"
                />
              </i>
              <span className="banner-text-style">Call us</span>
            </div>
            <h1 className="section-heading">Join us!</h1>
            <h1 className="Below-section-heading blue-text">Our Talentron</h1>
            <p className="section-paragraph">
            Join Talentron and unlock opportunities to innovate, lead, grow, connect, excel, and make an impact.
            </p>
          </div>
        </div>

        {/* title head - End */}

        {/* Email Ids - start */}
        
        

        <div className="container text-center  my-5">
          {/* <div className="container text-center  my-5 tab-form-container">
            {showTabs && (
              <Tabs
                activeKey={activeKey}
                onSelect={(k) => setActiveKey(k)}
                className="mb-4  tab-button"
              >
                <Tab
                  eventKey="jobseeker"
                  tabClassName="form-tab"
                  title={
                    <>
                      <img
                        src="/images/trainer.png"
                        alt="jobseeker"
                        width="44"
                        height="44"
                      />{" "}
                      Jobseeker
                    </>
                  }
                >
                  <div className="d-flex justify-content-center">
                    <Form
                      className="p-3 "
                      style={{
                        width: "100%",
                        textAlign: "left",
                        boxShadow: "0px 10px 80px #0000001a",
                        borderRadius: "10px",
                      }}
                      onSubmit={handleSubmit}
                    >
                      <Form.Group className="mb-3">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Contact Number*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your contact number"
                          name="contactNumber"
                          onChange={handleChange}
                          isInvalid={!!errors.contactNumber}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Preferred Job Location*</Form.Label>
                        <Form.Select
                          name="state"
                          onChange={handleStateChange}
                          isInvalid={!!errors.state}
                        >
                          <option value="">Select State</option>
                          {Object.keys(stateDistricts).map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </Form.Select>

                        <Form.Select
                          name="district"
                          className="mt-2"
                          onChange={handleChange}
                          isInvalid={!!errors.district}
                        >
                          <option value="">Select District</option>
                          {districts.length > 0 &&
                            districts.map((district) => (
                              <option key={district} value={district}>
                                {district}
                              </option>
                            ))}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>City*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter city/Town/Village"
                          name="city"
                          onChange={handleChange}
                          isInvalid={!!errors.city}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Notice Period*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter notice period"
                          name="noticePeriod"
                          onChange={handleChange}
                          isInvalid={!!errors.noticePeriod}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Expected Salary*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter expected salary"
                          name="expectedSalary"
                          onChange={handleChange}
                          isInvalid={!!errors.expectedSalary}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Upload Resume*</Form.Label>
                        <div className="d-flex align-items-center">
                          <input
                            type="file"
                            id="resumeUpload"
                            className="d-none"
                            onChange={handleFileChange}
                          />
                          <Button
                            variant="primary"
                            onClick={() =>
                              document.getElementById("resumeUpload").click()
                            }
                          >
                            Choose File
                          </Button>
                          <span className="ms-2">
                            {formData.resume
                              ? formData.resume.name
                              : "No file chosen"}
                          </span>
                        </div>
                        <Form.Control.Feedback type="invalid">
                          {errors.resume}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Button type="submit" className="w-100 form-tab-submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Tab>
                <Tab
                  eventKey="trainer"
                  tabClassName="form-tab"
                  title={
                    <>
                      <img
                        src="/images/trainer.png"
                        alt="trainer"
                        width="44"
                        height="44"
                      />{" "}
                      Trainer
                    </>
                  }
                >
                  <div className="text-center mb-3">
                    <h5>
                      Ready to Join our team? Explore Exciting opportunities
                      with us
                    </h5>
                    <p>
                      Kindly complete the training partners form, and a
                      Talentron representative will get in touch with you
                      shortly.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Form
                      className="p-3"
                      style={{
                        width: "100%",
                        textAlign: "left",
                        boxShadow: "0px 10px 80px #0000001a",
                        borderRadius: "10px",
                      }}
                      onSubmit={handleTrainerSubmit}
                    >
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter full name"
                          name="fullName"
                          onChange={handleTrainerChange}
                          isInvalid={!!trainerErrors.fullName}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Contact*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter contact"
                          name="contact"
                          onChange={handleTrainerChange}
                          isInvalid={!!trainerErrors.contact}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          name="email"
                          onChange={handleTrainerChange}
                          isInvalid={!!trainerErrors.email}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Website (if Company)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Website"
                          name="website"
                          onChange={handleTrainerChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>LinkedIn*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter LinkedIn Profile"
                          name="linkedIn"
                          onChange={handleTrainerChange}
                          isInvalid={!!trainerErrors.linkedIn}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
  <Form.Label>Expert In*</Form.Label>
  <Form.Select
    name="expertise"
    value={selectedExpertise}
    onChange={handleExpertiseChange}
    isInvalid={!!errors.expertise}
  >
    <option value="">Select Expertise</option>
    {selectExpertise.map((expertise, index) => (
      <option key={index} value={expertise}>
        {expertise}
      </option>
    ))}
  </Form.Select>
  <Form.Control.Feedback type="invalid">{errors.expertise}</Form.Control.Feedback>
</Form.Group>
                      <Button type="submit" className="w-100 form-tab-submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Tab>
                <Tab
                  eventKey="employer"
                  tabClassName="form-tab"
                  title={
                    <>
                      <img
                        src="/images/employer.png"
                        alt="employer"
                        width="44"
                        height="44"
                      />{" "}
                      Employer
                    </>
                  }
                >
                  <div className="text-center mb-3">
                    <h5>Ready to Hire? Share Your Requirements with Us</h5>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Form
                      className="p-3"
                      style={{
                        width: "100%",
                        textAlign: "left",
                        boxShadow: "0px 10px 80px #0000001a",
                        borderRadius: "10px",
                      }}
                      onSubmit={handleEmployerSubmit}
                    >
                      <Form.Group className="mb-3">
                        <Form.Label>Company Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter company name"
                          name="companyName"
                          onChange={handleEmployerChange}
                          isInvalid={!!employerErrors.companyName}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          onChange={handleEmployerChange}
                          isInvalid={!!employerErrors.email}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Contact No*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter phone no"
                          name="contactNo"
                          onChange={handleEmployerChange}
                          isInvalid={!!employerErrors.contactNo}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Website*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter website URL"
                          name="website"
                          onChange={handleEmployerChange}
                          isInvalid={!!employerErrors.website}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>High-Level Requirements*</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Enter your requirements."
                          name="requirements"
                          onChange={handleEmployerChange}
                          isInvalid={!!employerErrors.requirements}
                          style={{ resize: "vertical" }}
                        />
                      </Form.Group>
                      <Button type="submit" className="w-100 form-tab-submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Tab>
              </Tabs>
            )}
          </div> */}


          <div className="row mt-4 justify-content-center">
            {/* Box 1 */}
            <div
              className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
              onClick={() => toggleForm('jobSeeker')}
            >
              <div className="Contact-Email-custom-card-1 d-flex flex-column">
                <div className="icon-circle-1">
                  <i>
                    <img
                      src="/images/mdi_head-lightbulb.png"
                      alt="Head-lightbulb"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle">Job Seekers</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="Contact-Email-text">Job@talentron.com</p>
                  <i className="arrow-icon">&#8594;</i>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div
              className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
              onClick={() => toggleForm('trainingRequest')}
            >
              <div className="Contact-Email-custom-card-2">
                <div className="icon-circle-2">
                  <i>
                    <img
                      src="/images/healthicons_i-training-class.png"
                      alt="training-class"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle">Training Request</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="Contact-Email-text">Training@talentron.com</p>
                  <i className="arrow-icon">&#8594;</i>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div
              className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
              onClick={() => toggleForm('trainingPartner')}
            >
              <div className="Contact-Email-custom-card-3">
                <div className="icon-circle-3">
                  <i>
                    <img
                      src="/images/game-icons_anvil-impact.png"
                      alt="anvil-impact"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle">Training Partner</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="Contact-Email-text">Partner@talentron.com</p>
                  <i className="arrow-icon">&#8594;</i>
                </div>
              </div>
            </div>
            {/* Box 4 */}
            <div
              className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
              onClick={() => toggleForm('hiringRequest')}
            >
              <div className="Contact-Email-custom-card-4">
                <div className="icon-circle-4">
                  <i>
                    <img
                      src="/images/vaadin_handshake.png"
                      alt="handshake"
                      className="mb-1"
                    />
                  </i>
                </div>
                <p className="Contact-Email-subtitle">Hiring Request</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="Contact-Email-text">hiring@talentron.com</p>
                  <i className="arrow-icon">&#8594;</i>
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Form2 */}
      <Modal show={showForm} onHide={() => setShowForm(false)} centered dialogClassName="custom-modal-width">

        <Modal.Body>
        <Form2 showForm={showForm} setShowForm={setShowForm} formType={formType} />
        </Modal.Body>
      </Modal>
        </div>

        {/* Email Ids - End */}
        {/* Our location - start */}

        <div className="container text-center my-5">
          <h2 className="headline">Our Location</h2>
          <p className="subtitle">Connecting Hub</p>
          <div
            className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
            onClick={handleMapClick}
            style={{ cursor: "pointer" }}
          >
            <iframe
              title="Lapis Data Analytics Pvt. Ltd."
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.592527519292!2d80.161201574843!3d13.061588787262114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526330665dc9e5%3A0x1ec90c82a0b8cbf8!2sLapis%20Data%20Analytics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740831768226!5m2!1sen!2sin" 
              width="100%"
              height="321px"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
            ></iframe>
          </div>
        </div>

        {/* Our location - end */}
      </main>
    </>
  );
};

export default ContactUs;
