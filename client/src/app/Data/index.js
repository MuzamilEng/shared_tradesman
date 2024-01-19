import React from 'react'
import { Icon } from '@iconify/react';


export const login = [
    { 
        title: "Welcome to TradesMen! Please login.", url: "/login",
        form: [
            {label: "Email", name: "email", type: "text", placeholder: "Enter your email",
            rules : {
                required: 'Email is required',
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                }
            }
        },
            {label: "Password", name: "password", type: "password", placeholder: "Enter your password",
            rules : {
                required: 'Password is required',
                minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                }
            }
        },
        ]
    }
]
export const tradesmanProfile = [
  {
    title: "Customize your tradesmen profile",
    image: {
      name: "image",
      type: 'file',
    },
    form: [
      {
        label: "Username",
        type: "text",
        name: 'username',
        placeholder: "Enter your username",
        rules : {
          required: 'username is required',
          minLength: {
              value: 4,
              message: 'username must be at least 4 characters',
          }
      }
      },{
        label: "Email",
        type: "text",
        name: 'email',
        placeholder: "Enter your email",
        rules : {
          required: 'Email is required',
          pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email format',
          }
      }
      },{
        label: "Phone Number",
        type: "number",
        name: 'phoneNumber',
        placeholder: "Enter your number",
        rules : {
          required: 'phone number is required',
          pattern: {
              value: /^[0-9]+$/,
              message: 'Invalid phone number format',
          }
      }
  },
      ,{
        label: "Occupation",
        type: "text",
        name: 'occupation',
        placeholder: "Enter your occupation",
        rules : {
          required: 'Occupation is required',
          message: 'Occupation is required',
      }
      },
      {
        label: "Description",
        type: "textarea",
        name: 'description',
        placeholder: "Enter your description",
        rules : {
          required: 'Description is required',
          message: 'Description is required',

      }
      },
      // {
      //   label: "Hourly Rate",
      //   type: "number",
      //   name: 'hourlyRate',
      //   placeholder: "Enter your hourlyRate",
      //   rules : {
      //     rules : {
      //       required: 'Hourly Rate is required',
      //       message: 'Hourly Rate is required',
  
      //   }
      // }
      // },
      // {
      //   label: "Ratings",
      //   type: "number",
      //   name: 'ratings',
      //   placeholder: "Enter your ratings",
      //   rules : {
      //     rules : {
      //       required: 'Ratings is required',
      //       message: 'ratings is required',
      //   }
      // }
      // },
      {
        label: "Location",
        type: "text",
        name: 'location',
        placeholder: "Enter your location",
        rules : {
            required: 'Location is required',
            message: 'Location is required',
      }
    },
    ],
  }
]

export const signup = [
    { 
        title: "Welcome to TradesMen! Please Sign Up.", url: "/signup",
        form: [
            {label: "First Name", name: "firstName", type: "text", placeholder: "Enter your firstName",
            rules : {
                required: 'firstName is required',
                pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: 'Only alphabets are allowed',
                }
            }
        },
        {label: "Last Name", name: "lastName", type: "text", placeholder: "Enter your lastName",
        rules : {
            required: 'lastName is required',
            pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Only alphabets are allowed',
            }
        }
    },
            {label: "Email", name: "email", type: "text", placeholder: "Enter your email",
            rules : {
                required: 'Email is required',
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                }
            }
        },
            {label: "Password", name: "password", type: "password", placeholder: "Enter your password",
            rules : {
                required: 'Password is required',
                minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                }
            }
        },
        {label: "Phone Number", name: "phoneNumber", type: "number", placeholder: "Enter your phone number",
        rules : {
            required: 'phone number is required',
            pattern: {
                value: /^[0-9]+$/,
                message: 'Invalid phone number format',
            }
        }
    },
    {label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Enter your password",
    rules : {
        required: 'Password is required',
        minLength: {
            value: 8,
            message: 'Password does not match',
        }
    }
},
    ],
    category: [
      {
          label: "User", value: "user", name: "category", type: "radio",
          options: [ { label: "User", value: "user" }],
      },
      { label: "Tradesman", value: "tradesman", name: "category", type: "radio", 
        options: [ { label: "Tradesman", value: "tradesman" }],
      },
  ],
  
  }
]


export const otps = [
    {
        title: "OTP verification code",
        para: 'We have sent a 6 digit verification code to you provided phone number',
        type: "text",
    }
]


export const cards = [
    {
      id: 1,
      title: "AI Artists",
      desc: "Add talent to AI",
      img: "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      title: "Logo Design",
      desc: "Build yor brand",
      img: "https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      title: "WordPress",
      desc: "Customize your site",
      img: "https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      title: "Voice Over",
      desc: "Share your message",
      img: "https://images.pexels.com/photos/7608079/pexels-photo-7608079.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 5,
      title: "Video Explainer",
      desc: "Engage your audience",
      img: "https://images.pexels.com/photos/13388047/pexels-photo-13388047.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 6,
      title: "Social Media",
      desc: "Reach more customers",
      img: "https://images.pexels.com/photos/11378899/pexels-photo-11378899.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 7,
      title: "SEO",
      desc: "Unlock growth online",
      img: "https://images.pexels.com/photos/4820241/pexels-photo-4820241.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 8,
      title: "Illustration",
      desc: "Color you dreams",
      img: "https://images.pexels.com/photos/15032623/pexels-photo-15032623.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Web and Mobile Design",
      username: "Anna Bell",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Logo Design",
      username: "Morton Green",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Animated GIFs",
      username: "Emmett Potter",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Packaging Design",
      username: "Freddie Johnston",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Social Media Design",
      username: "Audrey Richards",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Illustration",
      username: "Dalton Hudson",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Book Design",
      username: "Hannah Dougherty",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cat: "Digital Marketing",
      username: "Ward Brewer",
    },
  ];
  
  export const gigs = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will create ai art character from your images and prompts",
      price: 59,
      star: 5,
      username: "Anna Bell",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will create ultra high quality character art with ai",
      price: 79,
      star: 5,
      username: "Lannie Coleman",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will creating unique ai generated artworks mid journey ai artist",
      price: 112,
      star: 5,
      username: "Carol Steve",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will create custom ai generated artwork using your photos",
      price: 99,
      star: 4,
      username: "Don Weber",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will recreate your dreams in high quality pictures",
      price: 59,
      star: 5,
      username: "Audrey Richards",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will create ai digital art illustration hyper realistic painting",
      price: 79,
      star: 4,
      username: "Walton Shepard ",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will generate images with your prompts using ai dalle",
      price: 89,
      star: 5,
      username: "Waverly Schaefer",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will create custom art using midjourney generator",
      price: 110,
      star: 4,
      username: "Wilton Hunt",
    },
  ];


export const start_selling  = [
  {
    title: "Learn what makes a successful profile",
    info: "Discover the do’s and don’ts to ensure you’re always on the right track.",
    icon: <Icon icon="fluent:learning-app-24-regular" />,
  },
  {
    title: "Create your seller profile",
    info: "Add your profile picture, description, and professional information.",
    icon: <Icon icon="gg:profile" />,
  },
  {
    title: "Publish your Gig",
    info: "Create a Gig of the service you’re offering and start selling instantly.",
    icon: <Icon icon="tabler:home-hand" />,
  },
]

export const navData = [
  {
    logo: "Trademan",
    lists: [
      {
        id: 1,
        url: "xyz",
        title: "Doctors",
      },
      {
        id: 2,
        url: "xyz",
        title: "Consult online",
      },
      {
        id: 3,
        url: "xyz",
        title: "Hospitals",
      },
      {
        id: 4,
        url: "xyz",
        title: "Lab Tests",
      },
      {
        id: 5,
        url: "xyz",
        title: "Surgeries",
      },
      {
        id: 6,
        url: "xyz",
        title: "Health Blog",
      },
      {
        id: 7,
        url: "xyz",
        title: "Patient Relief - 10%",
      },
    ],
  },
];
export const heroData = [
  {
    img: "/img/m5.png",
    title: "Book Appointement",
    info: "Book your appointment with a skilled tradesman effortlessly..",
    bgColor:"b2"
  },
  {
    img: "/img/m6.png",
    title: "Best Carpenter",
    info: "Here the best and skillfull carpenter",
    bgColor:"b3"
  },
];
export const labData = [
  {
    img: "xyz",
    title: "Carpenter",
  },
  {
    img: "xyz",
    title: "Blogs",
  },
  {
    img: "xyz",
    title: "palumber",
  },
  {
    img: "xyz",
    title: "agency",
  },
];
export const profileCard = [
  {
    img: "/img/man2.jpg",
    name: "Dr.Muhammad Saqib Ahmad",
    proffession: "Dentist",
    experience: "10 years experience",
  },
  {
    img: "/img/man2.jpg",
    name: "Dr. Sadaf Amin",
    proffession: "Dermatologist",
    experience: "50 years experience",
  },
  {
    img: "/img/man2.jpg",
    name: "Dr.Usman Javed",
    proffession: "Dentist",
    experience: "10 years experience",
  },
];
/*countrie code array */
export const countrieCode = {
  
  
  "countries": [
    {
      "code":"+92",
      "name":"Pakistan"
    },

    {
      "code": "+7 840",
      "name": "Abkhazia"
    },
    {
      "code": "+93",
      "name": "Afghanistan"
    },
    {
      "code": "+355",
      "name": "Albania"
    },
    {
      "code": "+213",
      "name": "Algeria"
    },
    {
      "code": "+1 684",
      "name": "American Samoa"
    },
    {
      "code": "+376",
      "name": "Andorra"
    },
    {
      "code": "+244",
      "name": "Angola"
    },
    {
      "code": "+1 264",
      "name": "Anguilla"
    },
    {
      "code": "+1 268",
      "name": "Antigua and Barbuda"
    },
    {
      "code": "+54",
      "name": "Argentina"
    },
    {
      "code": "+374",
      "name": "Armenia"
    },
    {
      "code": "+297",
      "name": "Aruba"
    },
    {
      "code": "+247",
      "name": "Ascension"
    },
    {
      "code": "+61",
      "name": "Australia"
    },
    {
      "code": "+672",
      "name": "Australian External Territories"
    },
    {
      "code": "+43",
      "name": "Austria"
    },
    {
      "code": "+994",
      "name": "Azerbaijan"
    },
    {
      "code": "+1 242",
      "name": "Bahamas"
    },
    {
      "code": "+973",
      "name": "Bahrain"
    },
    {
      "code": "+880",
      "name": "Bangladesh"
    },
    {
      "code": "+1 246",
      "name": "Barbados"
    },
    {
      "code": "+1 268",
      "name": "Barbuda"
    },
    {
      "code": "+375",
      "name": "Belarus"
    },
    {
      "code": "+32",
      "name": "Belgium"
    },
    {
      "code": "+501",
      "name": "Belize"
    },
    {
      "code": "+229",
      "name": "Benin"
    },
    {
      "code": "+1 441",
      "name": "Bermuda"
    },
    {
      "code": "+975",
      "name": "Bhutan"
    },
    {
      "code": "+591",
      "name": "Bolivia"
    },
    {
      "code": "+387",
      "name": "Bosnia and Herzegovina"
    },
    {
      "code": "+267",
      "name": "Botswana"
    },
    {
      "code": "+55",
      "name": "Brazil"
    },
    {
      "code": "+246",
      "name": "British Indian Ocean Territory"
    },
    {
      "code": "+1 284",
      "name": "British Virgin Islands"
    },
    {
      "code": "+673",
      "name": "Brunei"
    },
    {
      "code": "+359",
      "name": "Bulgaria"
    },
    {
      "code": "+226",
      "name": "Burkina Faso"
    },
    {
      "code": "+257",
      "name": "Burundi"
    },
    {
      "code": "+855",
      "name": "Cambodia"
    },
    {
      "code": "+237",
      "name": "Cameroon"
    },
    {
      "code": "+1",
      "name": "Canada"
    },
    {
      "code": "+238",
      "name": "Cape Verde"
    },
    {
      "code": "+ 345",
      "name": "Cayman Islands"
    },
    {
      "code": "+236",
      "name": "Central African Republic"
    },
    {
      "code": "+235",
      "name": "Chad"
    },
    {
      "code": "+56",
      "name": "Chile"
    },
    {
      "code": "+86",
      "name": "China"
    },
    {
      "code": "+61",
      "name": "Christmas Island"
    },
    {
      "code": "+61",
      "name": "Cocos-Keeling Islands"
    },
    {
      "code": "+57",
      "name": "Colombia"
    },
    {
      "code": "+269",
      "name": "Comoros"
    },
    {
      "code": "+242",
      "name": "Congo"
    },
    {
      "code": "+243",
      "name": "Congo, Dem. Rep. of (Zaire)"
    },
    {
      "code": "+682",
      "name": "Cook Islands"
    },
    {
      "code": "+506",
      "name": "Costa Rica"
    },
    {
      "code": "+385",
      "name": "Croatia"
    },
    {
      "code": "+53",
      "name": "Cuba"
    },
    {
      "code": "+599",
      "name": "Curacao"
    },
    {
      "code": "+537",
      "name": "Cyprus"
    },
    {
      "code": "+420",
      "name": "Czech Republic"
    },
    {
      "code": "+45",
      "name": "Denmark"
    },
    {
      "code": "+246",
      "name": "Diego Garcia"
    },
    {
      "code": "+253",
      "name": "Djibouti"
    },
    {
      "code": "+1 767",
      "name": "Dominica"
    },
    {
      "code": "+1 809",
      "name": "Dominican Republic"
    },
    {
      "code": "+670",
      "name": "East Timor"
    },
    {
      "code": "+56",
      "name": "Easter Island"
    },
    {
      "code": "+593",
      "name": "Ecuador"
    },
    {
      "code": "+20",
      "name": "Egypt"
    },
    {
      "code": "+503",
      "name": "El Salvador"
    },
    {
      "code": "+240",
      "name": "Equatorial Guinea"
    },
    {
      "code": "+291",
      "name": "Eritrea"
    },
    {
      "code": "+372",
      "name": "Estonia"
    },
    {
      "code": "+251",
      "name": "Ethiopia"
    },
    {
      "code": "+500",
      "name": "Falkland Islands"
    },
    {
      "code": "+298",
      "name": "Faroe Islands"
    },
    {
      "code": "+679",
      "name": "Fiji"
    },
    {
      "code": "+358",
      "name": "Finland"
    },
    {
      "code": "+33",
      "name": "France"
    },
    {
      "code": "+596",
      "name": "French Antilles"
    },
    {
      "code": "+594",
      "name": "French Guiana"
    },
    {
      "code": "+689",
      "name": "French Polynesia"
    },
    {
      "code": "+241",
      "name": "Gabon"
    },
    {
      "code": "+220",
      "name": "Gambia"
    },
    {
      "code": "+995",
      "name": "Georgia"
    },
    {
      "code": "+49",
      "name": "Germany"
    },
    {
      "code": "+233",
      "name": "Ghana"
    },
    {
      "code": "+350",
      "name": "Gibraltar"
    },
    {
      "code": "+30",
      "name": "Greece"
    },
    {
      "code": "+299",
      "name": "Greenland"
    },
    {
      "code": "+1 473",
      "name": "Grenada"
    },
    {
      "code": "+590",
      "name": "Guadeloupe"
    },
    {
      "code": "+1 671",
      "name": "Guam"
    },
    {
      "code": "+502",
      "name": "Guatemala"
    },
    {
      "code": "+224",
      "name": "Guinea"
    },
    {
      "code": "+245",
      "name": "Guinea-Bissau"
    },
    {
      "code": "+595",
      "name": "Guyana"
    },
    {
      "code": "+509",
      "name": "Haiti"
    },
    {
      "code": "+504",
      "name": "Honduras"
    },
    {
      "code": "+852",
      "name": "Hong Kong SAR China"
    },
    {
      "code": "+36",
      "name": "Hungary"
    },
    {
      "code": "+354",
      "name": "Iceland"
    },
    {
      "code": "+91",
      "name": "India"
    },
    {
      "code": "+62",
      "name": "Indonesia"
    },
    {
      "code": "+98",
      "name": "Iran"
    },
    {
      "code": "+964",
      "name": "Iraq"
    },
    {
      "code": "+353",
      "name": "Ireland"
    },
    {
      "code": "+972",
      "name": "Israel"
    },
    {
      "code": "+39",
      "name": "Italy"
    },
    {
      "code": "+225",
      "name": "Ivory Coast"
    },
    {
      "code": "+1 876",
      "name": "Jamaica"
    },
    {
      "code": "+81",
      "name": "Japan"
    },
    {
      "code": "+962",
      "name": "Jordan"
    },
    {
      "code": "+7 7",
      "name": "Kazakhstan"
    },
    {
      "code": "+254",
      "name": "Kenya"
    },
    {
      "code": "+686",
      "name": "Kiribati"
    },
    {
      "code": "+965",
      "name": "Kuwait"
    },
    {
      "code": "+996",
      "name": "Kyrgyzstan"
    },
    {
      "code": "+856",
      "name": "Laos"
    },
    {
      "code": "+371",
      "name": "Latvia"
    },
    {
      "code": "+961",
      "name": "Lebanon"
    },
    {
      "code": "+266",
      "name": "Lesotho"
    },
    {
      "code": "+231",
      "name": "Liberia"
    },
    {
      "code": "+218",
      "name": "Libya"
    },
    {
      "code": "+423",
      "name": "Liechtenstein"
    },
    {
      "code": "+370",
      "name": "Lithuania"
    },
    {
      "code": "+352",
      "name": "Luxembourg"
    },
    {
      "code": "+853",
      "name": "Macau SAR China"
    },
    {
      "code": "+389",
      "name": "Macedonia"
    },
    {
      "code": "+261",
      "name": "Madagascar"
    },
    {
      "code": "+265",
      "name": "Malawi"
    },
    {
      "code": "+60",
      "name": "Malaysia"
    },
    {
      "code": "+960",
      "name": "Maldives"
    },
    {
      "code": "+223",
      "name": "Mali"
    },
    {
      "code": "+356",
      "name": "Malta"
    },
    {
      "code": "+692",
      "name": "Marshall Islands"
    },
    {
      "code": "+596",
      "name": "Martinique"
    },
    {
      "code": "+222",
      "name": "Mauritania"
    },
    {
      "code": "+230",
      "name": "Mauritius"
    },
    {
      "code": "+262",
      "name": "Mayotte"
    },
    {
      "code": "+52",
      "name": "Mexico"
    },
    {
      "code": "+691",
      "name": "Micronesia"
    },
    {
      "code": "+1 808",
      "name": "Midway Island"
    },
    {
      "code": "+373",
      "name": "Moldova"
    },
    {
      "code": "+377",
      "name": "Monaco"
    },
    {
      "code": "+976",
      "name": "Mongolia"
    },
    {
      "code": "+382",
      "name": "Montenegro"
    },
    {
      "code": "+1664",
      "name": "Montserrat"
    },
    {
      "code": "+212",
      "name": "Morocco"
    },
    {
      "code": "+95",
      "name": "Myanmar"
    },
    {
      "code": "+264",
      "name": "Namibia"
    },
    {
      "code": "+674",
      "name": "Nauru"
    },
    {
      "code": "+977",
      "name": "Nepal"
    },
    {
      "code": "+31",
      "name": "Netherlands"
    },
    {
      "code": "+599",
      "name": "Netherlands Antilles"
    },
    {
      "code": "+1 869",
      "name": "Nevis"
    },
    {
      "code": "+687",
      "name": "New Caledonia"
    },
    {
      "code": "+64",
      "name": "New Zealand"
    },
    {
      "code": "+505",
      "name": "Nicaragua"
    },
    {
      "code": "+227",
      "name": "Niger"
    },
    {
      "code": "+234",
      "name": "Nigeria"
    },
    {
      "code": "+683",
      "name": "Niue"
    },
    {
      "code": "+672",
      "name": "Norfolk Island"
    },
    {
      "code": "+850",
      "name": "North Korea"
    },
    {
      "code": "+1 670",
      "name": "Northern Mariana Islands"
    },
    {
      "code": "+47",
      "name": "Norway"
    },
    {
      "code": "+968",
      "name": "Oman"
    },
    {
      "code": "+92",
      "name": "Pakistan"
    },
    {
      "code": "+680",
      "name": "Palau"
    },
    {
      "code": "+970",
      "name": "Palestinian Territory"
    },
    {
      "code": "+507",
      "name": "Panama"
    },
    {
      "code": "+675",
      "name": "Papua New Guinea"
    },
    {
      "code": "+595",
      "name": "Paraguay"
    },
    {
      "code": "+51",
      "name": "Peru"
    },
    {
      "code": "+63",
      "name": "Philippines"
    },
    {
      "code": "+48",
      "name": "Poland"
    },
    {
      "code": "+351",
      "name": "Portugal"
    },
    {
      "code": "+1 787",
      "name": "Puerto Rico"
    },
    {
      "code": "+974",
      "name": "Qatar"
    },
    {
      "code": "+262",
      "name": "Reunion"
    },
    {
      "code": "+40",
      "name": "Romania"
    },
    {
      "code": "+7",
      "name": "Russia"
    },
    {
      "code": "+250",
      "name": "Rwanda"
    },
    {
      "code": "+685",
      "name": "Samoa"
    },
    {
      "code": "+378",
      "name": "San Marino"
    },
    {
      "code": "+966",
      "name": "Saudi Arabia"
    },
    {
      "code": "+221",
      "name": "Senegal"
    },
    {
      "code": "+381",
      "name": "Serbia"
    },
    {
      "code": "+248",
      "name": "Seychelles"
    },
    {
      "code": "+232",
      "name": "Sierra Leone"
    },
    {
      "code": "+65",
      "name": "Singapore"
    },
    {
      "code": "+421",
      "name": "Slovakia"
    },
    {
      "code": "+386",
      "name": "Slovenia"
    },
    {
      "code": "+677",
      "name": "Solomon Islands"
    },
    {
      "code": "+27",
      "name": "South Africa"
    },
    {
      "code": "+500",
      "name": "South Georgia and the South Sandwich Islands"
    },
    {
      "code": "+82",
      "name": "South Korea"
    },
    {
      "code": "+34",
      "name": "Spain"
    },
    {
      "code": "+94",
      "name": "Sri Lanka"
    },
    {
      "code": "+249",
      "name": "Sudan"
    },
    {
      "code": "+597",
      "name": "Suriname"
    },
    {
      "code": "+268",
      "name": "Swaziland"
    },
    {
      "code": "+46",
      "name": "Sweden"
    },
    {
      "code": "+41",
      "name": "Switzerland"
    },
    {
      "code": "+963",
      "name": "Syria"
    },
    {
      "code": "+886",
      "name": "Taiwan"
    },
    {
      "code": "+992",
      "name": "Tajikistan"
    },
    {
      "code": "+255",
      "name": "Tanzania"
    },
    {
      "code": "+66",
      "name": "Thailand"
    },
    {
      "code": "+670",
      "name": "Timor Leste"
    },
    {
      "code": "+228",
      "name": "Togo"
    },
    {
      "code": "+690",
      "name": "Tokelau"
    },
    {
      "code": "+676",
      "name": "Tonga"
    },
    {
      "code": "+1 868",
      "name": "Trinidad and Tobago"
    },
    {
      "code": "+216",
      "name": "Tunisia"
    },
    {
      "code": "+90",
      "name": "Turkey"
    },
    {
      "code": "+993",
      "name": "Turkmenistan"
    },
    {
      "code": "+1 649",
      "name": "Turks and Caicos Islands"
    },
    {
      "code": "+688",
      "name": "Tuvalu"
    },
    {
      "code": "+1 340",
      "name": "U.S. Virgin Islands"
    },
    {
      "code": "+256",
      "name": "Uganda"
    },
    {
      "code": "+380",
      "name": "Ukraine"
    },
    {
      "code": "+971",
      "name": "United Arab Emirates"
    },
    {
      "code": "+44",
      "name": "United Kingdom"
    },
    {
      "code": "+1",
      "name": "United States"
    },
    {
      "code": "+598",
      "name": "Uruguay"
    },
    {
      "code": "+998",
      "name": "Uzbekistan"
    },
    {
      "code": "+678",
      "name": "Vanuatu"
    },
    {
      "code": "+58",
      "name": "Venezuela"
    },
    {
      "code": "+84",
      "name": "Vietnam"
    },
    {
      "code": "+1 808",
      "name": "Wake Island"
    },
    {
      "code": "+681",
      "name": "Wallis and Futuna"
    },
    {
      "code": "+967",
      "name": "Yemen"
    },
    {
      "code": "+260",
      "name": "Zambia"
    },
    {
      "code": "+255",
      "name": "Zanzibar"
    },
    {
      "code": "+263",
      "name": "Zimbabwe"
    }
  ]
}
/* time array */
const padZero = (num) => (num < 10 ? `0${num}` : num);

const generateTimeArray = () => {
  const times = [];
  for (let hours = 0; hours < 24; hours++) {
    for (let minutes = 0; minutes < 60; minutes += 15) {
      const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;
      times.push(formattedTime);
    }
  }
  return times;
};
export const timeArray = generateTimeArray();
console.log(timeArray)
export let cities =["occupation","username","minhourlyRate","maxhourlyRate"];
export const advancedSearch = [
  {
    label: "Occupation",
    name: "occupation",
    type: "select",
    placeholder: "Occupation",
    options: [
      {label: "Carpenter", value: "carpenter"},
      {label: "Software Engineer", value: "Software Engineer"},
      {label: "Designer", value: "Designer"},
      {label: "Developer", value: "Developer"},
      {label: "Manager", value: "Manager"},
      {label: "Accountant", value: "Accountant"},
      {label: "Lawyer", value: "Lawyer"}
    ]
  },
  {
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Enter Username",
  },
  {
    label: "Min Hourly Rate",
    name: "minhourlyRate",
    type: "number",
    placeholder: "Enter Min Hourly Rate",
  },
  {
    label: "Max Hourly Rate",
    name: "maxhourlyRate",
    type: "number",
    placeholder: "Enter Max Hourly Rate",
  }
]