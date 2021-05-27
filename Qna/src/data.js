const questions = [
  {
    id: 1,
    title: 'What is React?',
    info:
    'React or ReactJS, as it is sometimes called, is a Javascript library created by Facebook for building interactive user interfaces for web apps and websites. It was created by Jordan Walke, a Facebook employee in 2011 to minimize the time and effort spent in creating user interfaces for web apps and websites. In 2013 the project was open-sourced and is now being maintained by Facebook and individual developers and companies from all over the world.',
  },
  {
    id: 2,
    title: 'When is React used?',
    info:
      'React was initially released by Facebook as a Javascript library for building user interfaces for the web. It has since advanced past that. In 2015, Facebook released React Native a cross-platform mobile framework which makes use of React to build user interfaces for Android and iOS.',
  },
  {
    id: 3,
    title: 'What language(s) is React made of?',
    info:
      'As I have repeatedly mentioned above, React is a Javascript library, and hence, it is made with Javascript. So to make use of it, you use Javascript primarily. Optionally, you can choose to use JSX or Javascript eXtension, an XML-Esque language, to build UI components. The JSX syntax would still be converted to its Javascript equivalent, but it is much easier to write.Due to React’s popularity, there are also bindings for almost every language that transpiles to JavaScript (TypeScript, Flow, ReasonML, ClojureScript, PureScript, etc.). There are also plentiful of documentation on how to integrate it with other languages for example, ReactJS.NET, which makes it easy to use in C# applications.',
  },
  {
    id: 4,
    title: 'Does React support gradual migration?',
    info:
      'React was designed in such a way as to make it easy to adapt gradually. You can make use of just a few of its features while leaving others out. Over time, you can include more React features to your codebase. Popular companies like Netlify have successfully migrated from other JavaScript libraries/frameworks to React, doing so incrementally.',
  },
  {
    id: 5,
    title: 'What is a React developer’s experience like?',
    info:
      'Overall, developing with React once you have all the necessary packages installed is easy. But you have to set up your development environment first which involves installing several packages and making configurations needed for smooth and hitch-free development. To develop React apps, you make use of JSX and Javascript. If you have been developing websites before now, you would have picked up Javascript. JSX, on the other hand, is specific to React and would require a little bit of time to learn it. Although it is optional, it makes writing React components easier. React also supports full use of HMR (Hot Module Reloading), allowing you to update your application on-the-fly, without the need to reload the page.',
  },
]
export default questions
