import logo from "../../../Images/logo.avif";
import mercedes from "../../../Images/Mercedes.png";
import vw from "../../../Images/vwB7.png";
import audi from "../../../Images/audi.png";
import vwPassat from "../../../Images/vwPassat.png";
import mercedes2 from "../../../Images/mercedes2.png";
import call from "../../../Images/call.png";
import list from "../../../Images/list.png";

export const stateConst = {
  images: {
    logo: logo,
    mercedes: mercedes,
  },
  paramsRentCar: [
    "mark",
    "model",
    "year",
    "doors",
    "A/S",
    "transmission",
    "fuel",
  ],
  rentCar: [
    {
      image: mercedes,
      mark: "Mercedes",
      model: "A-class",
      year: 2014,
      doors: "4/5",
      as: "yes",
      transmission: "Automatic",
      fuel: "Patrol A-95",
      rentPerDay: "45$",
    },
    {
      image: vw,
      mark: "VW",
      model: "Jetta",
      year: 2014,
      doors: "4/5",
      as: "yes",
      transmission: "Automatic",
      fuel: "Patrol A-95",
      rentPerDay: "35$",
    },
    {
      image: audi,
      mark: "Audi",
      model: "A - 6",
      year: 2014,
      doors: "4/5",
      as: "yes",
      transmission: "Automatic",
      fuel: "Patrol A-95",
      rentPerDay: "40$",
    },
    {
      image: vwPassat,
      mark: "VW",
      model: "Passat",
      year: 2014,
      doors: "4/5",
      as: "yes",
      transmission: "Automatic",
      fuel: "Patrol A-95",
      rentPerDay: "37$",
    },
    {
      image: mercedes2,
      mark: "Mercedes",
      model: "CLS",
      year: 2014,
      doors: "4/5",
      as: "yes",
      transmission: "Automatic",
      fuel: "Patrol A-95",
      rentPerDay: "65$",
    },
  ],
  scrollLinks: [
    {
      to: "home",
      text: "Home",
    },
    {
      to: "about",
      text: "About",
    },
    {
      to: "vehicle-models",
      text: "Vehicle Models",
    },
    {
      to: "testimonials",
      text: "Testimonials",
    },
    {
      to: "our-team",
      text: "Our Team",
    },
    {
      to: "contact",
      text: "Contact",
    },
  ],
  contact: {
    carRental: {
      imgTell: call,
      imgEmail: list,
      text: "We afters a big range of vehicles for all yor driving needs . We have the perfect car to meed tour needs",
      tel: "+38-093-090-41-62",
      email: "cherkashenserhii@gmail.com",
    },
    company: {
      city: "New York",
      careers: "Careers",
      mobile: "Mobile",
      blog: "Blog",
      howWeWorks: "How we works",
    },
    workingHours: {
      monFri: "Mon - Fri : 9.00 - 21.00",
      sat: "Sat : 9.00 - 15.00",
      sun: "Sun : closed",
    },
    subscribe: {
      text: "Subscribe your Email address for latest news & updates",
    },
  },
};
//   mark: "mark",
//   model: "model",
//   year: "year",
//   doors: "doors",
//   as: "A/S",
//   transmission: "transmission",
//   fuel: "fuel",
// },
