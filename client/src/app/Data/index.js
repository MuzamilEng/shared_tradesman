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