import {
  pic1,
  pic2,
  chat3,
  chat4,
  chat5,
  chat6,
  chat7,
  chat8,
  chat9,
  chat10,
  chat11,
  code,
  code2,
} from "../assets/whatsapp";

export const chatsData = [
  {
    pp: pic1,
    contact: "shilpa sree",
    msg: "Awesome, thank you!",
    time: "1:15 pm",
    unreadMsgs: null,
    archived: true,
    sent: true,
  },
  {
    pp: pic2,
    contact: "Mon",
    msg: "Coding Spot is fire! 🔥",
    time: "12:15 pm",
    unreadMsgs: 2,
    archived: true,
  },
  {
    pp: chat3,
    contact: "Dad",
    msg: "Hey dad, need you asap!!",
    time: "11:04 am",
    unreadMsgs: null,
  },
  {
    pp: chat4,
    contact: "+00 123 4567890",
    msg: "Who are you???",
    time: "10:58 am",
    unreadMsgs: null,
  },
  {
    pp: chat5,
    contact: "free code camp",
    msg: "Help me with this bug!! 😭😭",
    time: "10:50 am",
    unreadMsgs: null,
  },
  {
    pp: chat6,
    contact: "Mom",
    msg: "Call me son, love you. ❤️",
    time: "10:35 am",
    unreadMsgs: 2,
  },
  {
    pp: chat7,
    contact: "Jim",
    msg: "hahhahhaha lol 😂😂😂",
    time: "10:18 am",
    unreadMsgs: null,
  },
  {
    pp: chat8,
    contact: "Sister",
    msg: "Meeting in 2 hours.",
    time: "10:02 am",
    unreadMsgs: null,
  },
  {
    pp: chat9,
    contact: "Megha",
    msg: "The test was sooo hard 😓",
    time: "9:47 am",
    unreadMsgs: 3,
  },
  {
    pp: chat10,
    contact: "Doctor 🏥",
    msg: "Hey doc, waitng for the results",
    time: "9:41 am",
    unreadMsgs: null,
  },
  {
    pp: chat11,
    contact: "Best Friend",
    msg: "Wanna hang out? 🍺🍻",
    time: "yesterday",
    unreadMsgs: 3,
  },
];

export const messageData = [
  {
    contact: "shilpa sree",
    messages: [
      {
        msg: "Hey! How's your coding project coming along? 💻",
        time: "10:00 am",
        sent: true,
      },
      {
        msg: "Hey! It's going pretty well, thanks for asking! I just finished debugging some issues. 😅",
        time: "10:05 am",
        sent: false,
      },
      {
        msg: "That's great to hear! What are you working on? Any cool features? 🚀",
        time: "10:10 am",
        sent: true,
      },
      {
        msg: "Yeah! I'm implementing a new authentication system using JWT. It's been challenging but exciting! 🔐",
        time: "10:15 am",
        sent: true,
      },
      {
        msg: "Nice! Authentication can be tricky, but once you get it working, it's so satisfying! 💪",
        time: "10:20 am",
        sent: false,
      },
      {
        msg: "Definitely! I'm also integrating some new APIs for data visualization. Can't wait to see the results! 📊",
        time: "10:25 am",
        sent: true,
      },
      {
        msg: "That sounds awesome! Data visualization can really enhance user experience. Which library are you using? 📈",
        time: "10:30 am",
        sent: false,
      },
      {
        msg: "I'm using D3.js for its flexibility and powerful features. It's a bit complex, but the results are worth it! 🌟",
        time: "10:35 am",
        sent: true,
      },
      {
        msg: "Cool! D3.js is a popular choice for data visualization. Have you encountered any challenges so far? 💡",
        time: "10:40 am",
        sent: false,
      },
      {
        msg: "Yeah, I've been struggling with responsive design. Making the visualizations look good on different screen sizes is tough! 📱",
        time: "10:45 am",
        sent: true,
      },
      {
        msg: "I can imagine! Responsive design is crucial for a seamless user experience. Have you tried using media queries? 🖥️",
        time: "10:50 am",
        sent: false,
      },

      {
        img: code,
        time: "11:11 am",
        sent: false,
      },
      {
        msg: "https://hotelzify.com/",
        isLink: true,
        time: "11:15 am",
        sent: true,
      },
      {
        img: code2,
        time: "11:22 am",
        sent: true,
      },
    ],
  },
  {
    contact: "Mon",
    messages: [
      { msg: "Hey, how are you?", time: "11:00 am", sent: true },
      {
        msg: "Hi! I'm good, thanks. How about you?",
        time: "11:05 am",
        sent: false,
      },
      {
        msg: "I'm doing great too! What have you been up to?",
        time: "11:10 am",
        sent: true,
      },
      {
        msg: "Just working on some projects. How about you?",
        time: "11:15 am",
        sent: true,
      },
      {
        msg: "Same here, trying to finish up some work.",
        time: "11:20 am",
        sent: false,
      },
      {
        msg: "That sounds busy! Do you have any plans for the weekend?",
        time: "11:25 am",
        sent: false,
      },
      {
        msg: "Not really, just relaxing at home. What about you?",
        time: "11:30 am",
        sent: true,
      },
      {
        msg: "I might go hiking if the weather is good.",
        time: "11:35 am",
        sent: true,
      },
      {
        msg: "That sounds like fun! Enjoy your hike.",
        time: "11:40 am",
        sent: false,
      },
      { msg: "Thanks! I will.", time: "11:45 am", sent: false },
      {
        msg: "Hey, remember to bring water and snacks!",
        time: "11:50 am",
        sent: true,
      },
      {
        msg: "Good point, I'll make sure to pack them.",
        time: "11:55 am",
        sent: true,
      },
      {
        msg: "Don't forget your sunscreen too!",
        time: "12:00 pm",
        sent: false,
      },
      {
        msg: "Thanks for the reminder!",
        time: "12:05 pm",
        sent: false,
      },
      {
        msg: "No problem, have a great hike!",
        time: "12:10 pm",
        sent: true,
      },
      {
        msg: "I will, talk to you later!",
        time: "12:15 pm",
        sent: true,
      },
      {
        msg: "Bye!",
        time: "12:20 pm",
        sent: true,
      },
      {
        msg: "See you!",
        time: "12:25 pm",
        sent: true,
      },
      {
        msg: "Hey, how are you?",
        time: "12:30 pm",
        sent: false,
      },
      {
        msg: "Hi! I'm good, thanks. How about you?",
        time: "12:35 pm",
        sent: false,
      },
      {
        msg: "I'm doing great too! What have you been up to?",
        time: "12:40 pm",
        sent: false,
      },
      {
        msg: "Just relaxing at home. What about you?",
        time: "12:45 pm",
        sent: true,
      },
      {
        msg: "Same here. Thinking of watching a movie later.",
        time: "12:50 pm",
        sent: true,
      },
      { msg: "Sounds like a plan! Which movie?", time: "12:55 pm", sent: true },
      {
        msg: "Not sure yet. Maybe something action-packed.",
        time: "1:00 pm",
        sent: false,
      },
      { msg: "Let me know what you decide!", time: "1:05 pm", sent: false },
    ],
  },
  {
    contact: "Dad",
    messages: [
      { msg: "Hey dad, need you asap!!", time: "11:04 am", sent: true },
      {
        msg: "Hey kiddo, what's up? Everything okay?",
        time: "11:06 am",
        sent: false,
      },
      {
        msg: "Yeah, everything's fine. I just needed some advice on a coding problem I'm stuck on. 😅",
        time: "11:10 am",
        sent: true,
      },
      {
        msg: "Ah, I see. What's the issue? Maybe I can help.",
        time: "11:12 am",
        sent: false,
      },
      {
        msg: "I'm trying to implement a sorting algorithm, but I keep getting errors. It's driving me crazy! 🤯",
        time: "11:15 am",
        sent: true,
      },
      {
        msg: "Sorting algorithms can be tricky. Which one are you trying to implement? 🤔",
        time: "11:20 am",
        sent: false,
      },
      {
        msg: "I'm attempting to code a quicksort algorithm. I understand the concept, but my implementation isn't working as expected. 😕",
        time: "11:25 am",
        sent: true,
      },
      {
        msg: "Hmm, quicksort is indeed a bit complex. Let's walk through your code together. Can you share your implementation?",
        time: "11:30 am",
        sent: false,
      },
      {
        msg: "Sure, I'll send you the code snippet. Thanks for helping me out, dad! You're the best! ❤️",
        time: "11:35 am",
        sent: true,
      },
      {
        msg: "Of course, kiddo. I'm always here to support you. Let's figure this out together. 💪",
        time: "11:40 am",
        sent: false,
      },
      {
        msg: "Thanks, dad. I'll send you the code now. 🚀",
        time: "11:45 am",
        sent: true,
      },
    ],
  },
  {
    contact: "+00 123 4567890",
    messages: [
      { msg: "Who are you???", time: "10:58 am", sent: true },
      {
        msg: "Hello there! I'm a developer looking to connect with fellow coding enthusiasts. How about you?",
        time: "11:00 am",
        sent: false,
      },
      {
        msg: "I'm just a curious individual exploring the world of coding. Do you have any cool projects or links to share?",
        time: "11:05 am",
        sent: true,
      },
      {
        msg: "Absolutely! I recently worked on a web development project using React.js. Here's the link to the GitHub repository: [GitHub Repository](https://github.com/example)",
        time: "11:10 am",
        sent: false,
      },
      {
        msg: "That sounds interesting! I'll check it out. Thanks for sharing! 😄",
        time: "11:15 am",
        sent: true,
      },
      {
        msg: "No problem at all! Feel free to reach out if you have any questions or need further assistance. Happy coding! 👨‍💻",
        time: "11:20 am",
        sent: false,
      },
    ],
  },
  {
    contact: "free code camp",
    messages: [
      {
        msg: "Hey! How can I help you with your bug? 😊",
        time: "10:50 am",
        sent: false,
      },
      {
        msg: "Hey! I'm stuck on this bug in my code, and I can't figure out what's wrong. 😭",
        time: "10:52 am",
        sent: true,
      },
      {
        msg: "Let's take a look at the code together. Can you share the relevant snippets or describe the issue in detail? 🤔",
        time: "10:55 am",
        sent: false,
      },
      {
        msg: "Sure! Let me send you the code snippets. 📄",
        time: "10:58 am",
        sent: true,
      },
      {
        msg: "Great! I'll review them and see if I can spot the problem. 👀",
        time: "11:00 am",
        sent: false,
      },
      {
        msg: "Thanks! I really appreciate your help. I'm under a lot of pressure to fix this bug quickly. 😅",
        time: "11:03 am",
        sent: true,
      },
    ],
  },
  {
    contact: "Mom",
    messages: [
      {
        msg: "Hey mom, just wanted to check in. How are you? ❤️",
        time: "10:35 am",
        sent: true,
      },
      {
        msg: "Hi dear! I'm doing well, thank you for asking. How about you?",
        time: "10:38 am",
        sent: false,
      },
      {
        msg: "I'm good too, mom. Just busy with work as usual. 😊",
        time: "10:40 am",
        sent: true,
      },
      {
        msg: "That's good to hear, son. Remember to take breaks and relax once in a while. Your health is important. ❤️",
        time: "10:45 am",
        sent: false,
      },
    ],
  },
  {
    contact: "Jim",
    messages: [
      {
        msg: "Hey Jim! What's up? 😄",
        time: "10:18 am",
        sent: true,
      },
      {
        msg: "Not much, just reading some funny memes online. 😂",
        time: "10:20 am",
        sent: false,
      },
      {
        msg: "Haha, sounds like fun! Send me some of the best ones! 😂👍",
        time: "10:22 am",
        sent: true,
      },
    ],
  },

  {
    contact: "Sister",
    messages: [
      {
        msg: "Hey sis! What's up? 🤗",
        time: "10:02 am",
        sent: true,
      },
      {
        msg: "Hey bro! Just getting ready for the meeting. You coming?",
        time: "10:05 am",
        sent: false,
      },
      {
        msg: "Yeah, I'll be there. Can't wait to catch up with everyone. 😊",
        time: "10:08 am",
        sent: true,
      },
    ],
  },
  {
    contact: "Megha",
    messages: [
      {
        msg: "Hey Megha! How was the test? 😓",
        time: "9:47 am",
        sent: true,
      },
      {
        msg: "Hey, it was so tough! I'm not sure if I did well. 😔",
        time: "9:50 am",
        sent: false,
      },
      {
        msg: "Don't worry, I'm sure you did your best. Let's grab some coffee later and talk about it. ☕",
        time: "9:55 am",
        sent: true,
      },
    ],
  },
  {
    contact: "Doctor 🏥",
    messages: [
      {
        msg: "Hey doc, I'm anxiously waiting for the results. Can you please give me an update? 🙏",
        time: "9:41 am",
        sent: true,
      },
      {
        msg: "Hello! Sure, let me check the status and get back to you shortly. Hang in there! 🩺",
        time: "9:45 am",
        sent: false,
      },
    ],
  },
  {
    contact: "Best Friend",
    messages: [
      {
        msg: "Hey buddy! Sure, I'm up for hanging out. When and where? 🎉",
        time: "yesterday",
        sent: true,
      },
      {
        msg: "Awesome! Let's meet at our favorite bar around 7 PM. Sound good? 🍻",
        time: "yesterday",
        sent: false,
      },
      {
        msg: "Sounds perfect! Can't wait to catch up. See you then! 🙌",
        time: "yesterday",
        sent: true,
      },
    ],
  },
];

export const messagesDataInvalid = [
  {
    msg: "Hey wassupp bro!",
    time: "10:58 am",
    sent: false,
  },
  {
    msg: "This WhatsApp clone is firee 🔥",
    time: "10:58 am",
    sent: true,
  },
  {
    msg: "Keep it up! 👍👍👍",
    time: "10:59 am",
    sent: true,
  },
  {
    msg: "Thanks a lot! 😀",
    time: "11:15 am",
    sent: false,
  },
  {
    msg: "Make sure to follow all my socials! 👌👌",
    time: "11:15 am",
    sent: false,
  },
  {
    msg: "I will! what's your Github?",
    time: "11:28 am",
    sent: true,
  },
  {
    msg: "AlejoG10",
    time: "11:36 am",
    sent: false,
  },
  {
    msg: "https://github.com/AlejoG10",
    isLink: true,
    time: "11:36 am",
    sent: false,
  },
  {
    msg: "And your YouTube channel?",
    time: "11:47 am",
    sent: true,
  },
  {
    msg: "Coding Spot",
    time: "11:55 am",
    sent: false,
  },
  {
    msg: "https://www.youtube.com/channel/UCLqXQLK6zKZg0trhanjAkkQ",
    isLink: true,
    time: "11:55 am",
    sent: false,
  },
  {
    img: pic2,
    time: "11:56 am",
    sent: false,
  },
  {
    msg: "Niceeee channel! 🔥💯",
    time: "12:35 pm",
    sent: true,
  },
  {
    msg: "I will see all of your videos 😉",
    time: "12:35 pm",
    sent: true,
  },
  {
    msg: "Awesome, thank for your support! 🙌",
    time: "1:15 pm",
    sent: false,
  },
];
