const quizzesInfo = [
    { name: "Geography", icon: "bi-globe", description: "Test your knowledge of world geography." },
    { name: "Math", icon: "bi-calculator", description: "Challenge your math skills with various problems." },
    { name: "Physics", icon: "bi-lightning-charge", description: "Explore the laws of nature and physics concepts." },
    { name: "History", icon: "bi-hourglass-split", description: "Dive into historical events and timelines." },
    { name: "Programming", icon: "bi-code-slash", description: "Questions about programming languages and concepts." },
    { name: "Literature", icon: "bi-book", description: "Test your knowledge of classic and modern literature." },
    { name: "Sports", icon: "bi-bicycle", description: "From athletes to records, test your sports knowledge." },
    { name: "Music", icon: "bi-music-note-beamed", description: "Questions on music genres, artists, and theory." },
    { name: "Movies", icon: "bi-film", description: "Trivia about films, directors, and cinema history." },
    { name: "Tech", icon: "bi-cpu", description: "Latest and classic technology questions." },
    { name: "Art", icon: "bi-palette-fill", description: "Explore the fascinating world of creativity and expression through the ages."},
    { name: "Biology", icon: "bi-fingerprint", description: "Dive into the science of life and living organisms"}
  ];

  const quizzes = {
    geography: [
      { question: "What is the capital city of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
      { question: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arctic"], answer: "Sahara" },
      { question: "Which river flows through Baghdad?", options: ["Euphrates", "Tigris", "Nile", "Jordan"], answer: "Tigris" },
      { question: "Mount Everest lies on the border of which two countries?", options: ["Nepal and India", "India and China", "Nepal and China", "Bhutan and China"], answer: "Nepal and China" },
      { question: "Which country has the most natural lakes?", options: ["Canada", "Brazil", "USA", "Russia"], answer: "Canada" },
      { question: "The Great Barrier Reef is located in which country?", options: ["Philippines", "Australia", "Indonesia", "Fiji"], answer: "Australia" },
      { question: "Which US state has the longest coastline?", options: ["Florida", "California", "Alaska", "Texas"], answer: "Alaska" },
      { question: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru", "San Marino"], answer: "Vatican City" },
      { question: "Which continent has the most countries?", options: ["Asia", "Europe", "Africa", "South America"], answer: "Africa" },
      { question: "Which city is known as the 'City of Canals'?", options: ["Amsterdam", "Bangkok", "Venice", "Bruges"], answer: "Venice" },
      { question: "What is the longest river in the world?", options: ["Amazon", "Yangtze", "Nile", "Mississippi"], answer: "Nile" },
      { question: "Which country has the most volcanoes?", options: ["Japan", "Indonesia", "Iceland", "USA"], answer: "Indonesia" },
      { question: "Which ocean is the deepest?", options: ["Atlantic", "Pacific", "Indian", "Southern"], answer: "Pacific" },
      { question: "Which African country has the highest population?", options: ["Egypt", "Ethiopia", "South Africa", "Nigeria"], answer: "Nigeria" },
      { question: "Which country shares the longest border with the USA?", options: ["Canada", "Mexico", "Russia", "Cuba"], answer: "Canada" },
      { question: "What is the capital of Argentina?", options: ["Buenos Aires", "Rosario", "Cordoba", "La Plata"], answer: "Buenos Aires" },
      { question: "Which country does the Rhine River not flow through?", options: ["Germany", "France", "Italy", "Switzerland"], answer: "Italy" },
      { question: "What is the highest mountain in Africa?", options: ["Kilimanjaro", "Elgon", "Kenya", "Meru"], answer: "Kilimanjaro" },
      { question: "Which European city has the most bridges?", options: ["Venice", "Amsterdam", "Hamburg", "Stockholm"], answer: "Hamburg" },
      { question: "Which country has the most islands?", options: ["Sweden", "Philippines", "Indonesia", "Norway"], answer: "Sweden" },
      { question: "Which US state is the Grand Canyon located in?", options: ["Utah", "Nevada", "Arizona", "New Mexico"], answer: "Arizona" },
      { question: "What is the capital of South Korea?", options: ["Busan", "Seoul", "Incheon", "Daegu"], answer: "Seoul" },
      { question: "Which country has the most time zones?", options: ["USA", "France", "Russia", "China"], answer: "France" },
      { question: "Which continent is the driest?", options: ["Australia", "Africa", "Asia", "Antarctica"], answer: "Antarctica" },
      { question: "Which city hosted the 2000 Summer Olympics?", options: ["Athens", "Sydney", "Tokyo", "Beijing"], answer: "Sydney" },
      { question: "What is the capital of Kenya?", options: ["Kigali", "Nairobi", "Mombasa", "Addis Ababa"], answer: "Nairobi" },
      { question: "Which country is known as the Land of the Rising Sun?", options: ["South Korea", "China", "Japan", "Thailand"], answer: "Japan" },
      { question: "Which is the flattest continent?", options: ["Africa", "Australia", "Europe", "Asia"], answer: "Australia" },
      { question: "Which sea separates Europe and Africa?", options: ["Black Sea", "Red Sea", "Caspian Sea", "Mediterranean Sea"], answer: "Mediterranean Sea" },
      { question: "Which African country was formerly known as Abyssinia?", options: ["Ethiopia", "Egypt", "Sudan", "Morocco"], answer: "Ethiopia" },
  ],
    math : [
      { question: "Solve for x: 3x + 7 = 22", options: ["5", "6", "7", "8"], answer: "5" },
      { question: "What is the area of a circle with radius 4 cm?", options: ["16π cm²", "8π cm²", "4π cm²", "12π cm²"], answer: "16π cm²" },
      { question: "Simplify: (3² × 4) ÷ 6", options: ["4", "6", "8", "12"], answer: "6" },
      { question: "If a rectangle has a length of 12 cm and a width of 5 cm, what is its perimeter?", options: ["60 cm", "34 cm", "24 cm", "17 cm"], answer: "34 cm" },
      { question: "Solve for y: 2y - 5 = 15", options: ["5", "10", "15", "20"], answer: "10" },
      { question: "What is 40% of 80?", options: ["24", "30", "32", "36"], answer: "32" },
      { question: "If x = 3 and y = 5, what is the value of 2x² + 3y?", options: ["18", "27", "33", "36"], answer: "33" },
      { question: "Solve: √64 + √9", options: ["11", "8", "73", "15"], answer: "11" },
      { question: "The sum of two consecutive integers is 35. What are the integers?", options: ["16 and 19", "17 and 18", "18 and 17", "19 and 16"], answer: "17 and 18" },
      { question: "Simplify: 5(3x - 2) - 4(2x + 1)", options: ["7x - 14", "7x - 4", "15x - 10 - 8x - 4", "7x - 11"], answer: "7x - 14" },
      { question: "A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. What is the probability of drawing a blue marble?", options: ["3/10", "1/2", "2/5", "1/5"], answer: "3/10" },
      { question: "Find the value of x if 3^x = 27", options: ["3", "9", "4", "3/2"], answer: "3" },
      { question: "What is the value of log₁₀(100)?", options: ["10", "100", "2", "1"], answer: "2" },
      { question: "If a triangle has angles measuring 30° and 60°, what is the measure of the third angle?", options: ["30°", "60°", "90°", "120°"], answer: "90°" },
      { question: "Solve the inequality: 2x - 5 > 7", options: ["x > 6", "x > 5", "x < 6", "x < -1"], answer: "x > 6" },
      { question: "What is the greatest common factor (GCF) of 24 and 36?", options: ["6", "12", "18", "24"], answer: "12" },
      { question: "If f(x) = 2x² - 3x + 1, what is f(2)?", options: ["3", "5", "7", "9"], answer: "5" },
      { question: "Simplify: (2/3) × (9/4)", options: ["6/7", "3/2", "18/12", "6/12"], answer: "3/2" },
      { question: "A car travels 150 miles in 3 hours. What is its average speed?", options: ["45 mph", "50 mph", "60 mph", "75 mph"], answer: "50 mph" },
      { question: "What is the slope of the line passing through points (2,5) and (4,9)?", options: ["2", "4", "1/2", "3/2"], answer: "2" },
      { question: "Solve the system of equations: x + y = 5 and x - y = 3", options: ["x = 4, y = 1", "x = 1, y = 4", "x = 2, y = 3", "x = 3, y = 2"], answer: "x = 4, y = 1" },
      { question: "What is the volume of a cube with side length 5 cm?", options: ["25 cm³", "75 cm³", "125 cm³", "150 cm³"], answer: "125 cm³" },
      { question: "If 8 workers can complete a job in 6 days, how many days would it take 12 workers to complete the same job?", options: ["9 days", "8 days", "6 days", "4 days"], answer: "4 days" },
      { question: "What is the value of 5! (5 factorial)?", options: ["25", "60", "120", "24"], answer: "120" },
      { question: "If cos(θ) = 0.6, what is sin(θ)?", options: ["0.6", "0.8", "0.36", "0.64"], answer: "0.8" },
      { question: "Expand: (x + 3)²", options: ["x² + 6x + 3", "x² + 6x + 9", "x² + 3x + 9", "x² + 9"], answer: "x² + 6x + 9" },
      { question: "What is the midpoint of the line segment with endpoints (3,7) and (9,1)?", options: ["(6,4)", "(6,8)", "(12,8)", "(3,4)"], answer: "(6,4)" },
      { question: "If a regular polygon has interior angles of 135°, how many sides does it have?", options: ["6", "8", "10", "12"], answer: "8" },
      { question: "Simplify: √50 + √18", options: ["5√2 + 3√2", "8√2", "68", "2√17"], answer: "8√2" },
      { question: "A box contains 3 red balls and 5 green balls. If two balls are drawn without replacement, what is the probability that both are green?", options: ["5/8", "25/56", "5/28", "5/14"], answer: "25/56" }
  ],
     physics : [
      { question: "What is Newton's First Law of Motion?", options: ["F = ma", "For every action, there is an equal and opposite reaction", "An object at rest stays at rest unless acted upon by an external force", "Energy cannot be created or destroyed"], answer: "An object at rest stays at rest unless acted upon by an external force" },
      { question: "What is the SI unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], answer: "Ampere" },
      { question: "What is the speed of light in vacuum?", options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], answer: "3 × 10⁸ m/s" },
      { question: "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?", options: ["Charles's Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"], answer: "Boyle's Law" },
      { question: "What is the formula for kinetic energy?", options: ["KE = mgh", "KE = 1/2mv²", "KE = Fd", "KE = mv"], answer: "KE = 1/2mv²" },
      { question: "What particle has the same mass as an electron but positive charge?", options: ["Proton", "Neutron", "Positron", "Neutrino"], answer: "Positron" },
      { question: "Which type of electromagnetic radiation has the shortest wavelength?", options: ["Ultraviolet", "X-rays", "Gamma rays", "Infrared"], answer: "Gamma rays" },
      { question: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Watt", "Ohm"], answer: "Ohm" },
      { question: "What is the acceleration due to gravity on Earth's surface (approximate value)?", options: ["5.6 m/s²", "7.8 m/s²", "9.8 m/s²", "11.2 m/s²"], answer: "9.8 m/s²" },
      { question: "Which scientist proposed the theory of general relativity?", options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"], answer: "Albert Einstein" },
      { question: "What is the formula for calculating work done?", options: ["W = mg", "W = Fd", "W = 1/2mv²", "W = P/t"], answer: "W = Fd" },
      { question: "What is the principle that states that energy cannot be created or destroyed?", options: ["Newton's First Law", "Law of Conservation of Energy", "Law of Conservation of Momentum", "Second Law of Thermodynamics"], answer: "Law of Conservation of Energy" },
      { question: "Which phenomenon explains why the sky appears blue?", options: ["Reflection", "Refraction", "Diffraction", "Rayleigh scattering"], answer: "Rayleigh scattering" },
      { question: "What is the unit of power?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Watt" },
      { question: "What is the relationship between frequency (f) and wavelength (λ) of a wave?", options: ["f = λ/v", "f × λ = v", "f = v × λ", "f/λ = v"], answer: "f × λ = v" },
      { question: "Which of these is NOT a fundamental force of nature?", options: ["Gravity", "Electromagnetic force", "Friction", "Strong nuclear force"], answer: "Friction" },
      { question: "What is Ohm's Law?", options: ["V = IR", "P = VI", "F = ma", "E = mc²"], answer: "V = IR" },
      { question: "What is the unit of capacitance?", options: ["Henry", "Weber", "Farad", "Tesla"], answer: "Farad" },
      { question: "Which particle is responsible for the electromagnetic force?", options: ["Photon", "Gluon", "W boson", "Z boson"], answer: "Photon" },
      { question: "What happens to the resistance of a typical conductor as temperature increases?", options: ["Decreases", "Increases", "Remains constant", "Becomes zero"], answer: "Increases" },
      { question: "What is the Doppler effect?", options: ["Change in frequency due to relative motion", "Diffraction of light through a prism", "Reflection of light from a smooth surface", "Refraction of light through different media"], answer: "Change in frequency due to relative motion" },
      { question: "Which lens type is used to correct nearsightedness?", options: ["Convex lens", "Concave lens", "Bifocal lens", "Trifocal lens"], answer: "Concave lens" },
      { question: "What is the SI unit of pressure?", options: ["Newton", "Pascal", "Joule", "Bar"], answer: "Pascal" },
      { question: "What is the formula for calculating density?", options: ["d = m/V", "d = F/A", "d = v/t", "d = E/m"], answer: "d = m/V" },
      { question: "What is the total mechanical energy in an ideal system?", options: ["Kinetic energy only", "Potential energy only", "Sum of kinetic and potential energy", "Product of kinetic and potential energy"], answer: "Sum of kinetic and potential energy" },
      { question: "What is the principle of superposition related to?", options: ["Thermodynamics", "Wave interference", "Nuclear physics", "Fluid dynamics"], answer: "Wave interference" },
      { question: "What is the SI unit of magnetic flux?", options: ["Tesla", "Weber", "Henry", "Gauss"], answer: "Weber" },
      { question: "What is the net charge of a neutron?", options: ["+1", "-1", "0", "+2"], answer: "0" },
      { question: "Which of these is an example of a vector quantity?", options: ["Temperature", "Mass", "Time", "Velocity"], answer: "Velocity" },
      { question: "What does the second law of thermodynamics state about entropy?", options: ["It always decreases", "It always increases", "It remains constant", "It oscillates"], answer: "It always increases" }
  ],       
     history : [
      { question: "In which year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: "1914" },
      { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"], answer: "George Washington" },
      { question: "The ancient city of Rome was founded on which river?", options: ["Tiber", "Po", "Rhine", "Danube"], answer: "Tiber" },
      { question: "Which civilization built the Machu Picchu complex in Peru?", options: ["Maya", "Aztec", "Olmec", "Inca"], answer: "Inca" },
      { question: "Who wrote 'The Communist Manifesto'?", options: ["Vladimir Lenin", "Joseph Stalin", "Karl Marx and Friedrich Engels", "Leon Trotsky"], answer: "Karl Marx and Friedrich Engels" },
      { question: "The French Revolution began in which year?", options: ["1776", "1789", "1798", "1804"], answer: "1789" },
      { question: "Which country was the first to complete an industrial revolution?", options: ["United States", "France", "Germany", "Great Britain"], answer: "Great Britain" },
      { question: "Who was the leader of the Soviet Union during most of World War II?", options: ["Vladimir Lenin", "Leon Trotsky", "Joseph Stalin", "Nikita Khrushchev"], answer: "Joseph Stalin" },
      { question: "The Renaissance period began in which European country?", options: ["England", "France", "Italy", "Spain"], answer: "Italy" },
      { question: "Which ancient wonder was located in Alexandria, Egypt?", options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse (Pharos)", "Temple of Artemis"], answer: "Lighthouse (Pharos)" },
      { question: "The Ottoman Empire fell after which war?", options: ["Crimean War", "World War I", "Russo-Turkish War", "Balkan Wars"], answer: "World War I" },
      { question: "Who discovered the sea route to India from Europe?", options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "Marco Polo"], answer: "Vasco da Gama" },
      { question: "The Great Wall of China was primarily built during which dynasty?", options: ["Han", "Tang", "Ming", "Song"], answer: "Ming" },
      { question: "Which treaty ended World War I?", options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Westphalia", "Treaty of Tordesillas"], answer: "Treaty of Versailles" },
      { question: "Who was the first female Prime Minister of the United Kingdom?", options: ["Queen Elizabeth II", "Margaret Thatcher", "Theresa May", "Queen Victoria"], answer: "Margaret Thatcher" },
      { question: "The Declaration of Independence was adopted by the Continental Congress in which year?", options: ["1774", "1776", "1781", "1783"], answer: "1776" },
      { question: "Which civilization is credited with building the Great Pyramid of Giza?", options: ["Mesopotamian", "Egyptian", "Greek", "Roman"], answer: "Egyptian" },
      { question: "The Cold War was primarily between which two powers?", options: ["USA and China", "USA and USSR", "USSR and Japan", "UK and Germany"], answer: "USA and USSR" },
      { question: "In which year did the Berlin Wall fall?", options: ["1985", "1987", "1989", "1991"], answer: "1989" },
      { question: "Who was the first Emperor of China?", options: ["Kublai Khan", "Sun Yat-sen", "Qin Shi Huang", "Mao Zedong"], answer: "Qin Shi Huang" },
      { question: "The Battle of Hastings took place in which year?", options: ["1066", "1076", "1166", "1266"], answer: "1066" },
      { question: "Which European power controlled much of India before its independence?", options: ["France", "Portugal", "Netherlands", "Great Britain"], answer: "Great Britain" },
      { question: "Who was the Egyptian queen who allied with Mark Antony of Rome?", options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Nefertari"], answer: "Cleopatra" },
      { question: "The Magna Carta was signed during the reign of which English king?", options: ["Henry VIII", "Richard the Lionheart", "John", "William the Conqueror"], answer: "John" },
      { question: "Which civilization developed the first known system of writing called cuneiform?", options: ["Egyptian", "Sumerian", "Chinese", "Indus Valley"], answer: "Sumerian" },
      { question: "Who led the Protestant Reformation by posting the 95 Theses?", options: ["John Calvin", "Martin Luther", "Henry VIII", "Ulrich Zwingli"], answer: "Martin Luther" },
      { question: "The Russian Revolution occurred in which year?", options: ["1905", "1917", "1921", "1927"], answer: "1917" },
      { question: "Which country gifted the Statue of Liberty to the United States?", options: ["England", "France", "Spain", "Italy"], answer: "France" },
      { question: "The Cultural Revolution occurred in which country?", options: ["Soviet Union", "Japan", "China", "Vietnam"], answer: "China" },
      { question: "Who was the leader of India's independence movement against British rule?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"], answer: "Mahatma Gandhi" }
  ],
     programming : [
      { question: "Which of the following is NOT a programming language?", options: ["Java", "HTML", "Python", "Ruby"], answer: "HTML" },
      { question: "What does API stand for?", options: ["Application Programming Interface", "Automated Program Integration", "Application Process Integration", "Advanced Programming Interface"], answer: "Application Programming Interface" },
      { question: "Which data structure operates on a Last-In-First-Out (LIFO) principle?", options: ["Queue", "Stack", "Tree", "Linked List"], answer: "Stack" },
      { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "System Query Language"], answer: "Structured Query Language" },
      { question: "Which of these is not a JavaScript framework/library?", options: ["React", "Angular", "Django", "Vue"], answer: "Django" },
      { question: "What symbol is used for single-line comments in JavaScript?", options: ["//", "/**/", "#", "<!---->"], answer: "//" },
      { question: "Which operator is used for strict equality comparison in JavaScript?", options: ["==", "===", "=", "!="], answer: "===" },
      { question: "Which of the following is a valid way to declare a variable in JavaScript?", options: ["int x = 5;", "variable x = 5;", "let x = 5;", "x := 5;"], answer: "let x = 5;" },
      { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Custom Style Sheets"], answer: "Cascading Style Sheets" },
      { question: "Which programming paradigm treats computation as the evaluation of mathematical functions?", options: ["Object-Oriented Programming", "Functional Programming", "Procedural Programming", "Event-Driven Programming"], answer: "Functional Programming" },
      { question: "What is the correct syntax for a for loop in Python?", options: ["for i = 0 to 10", "for (i = 0; i < 10; i++)", "for i in range(10):", "for each i in 10:"], answer: "for i in range(10):" },
      { question: "Which of these is NOT a type of join in SQL?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "MIDDLE JOIN"], answer: "MIDDLE JOIN" },
      { question: "What is the output of 2 + 2 == 4 in Python?", options: ["4", "True", "False", "Error"], answer: "True" },
      { question: "Which of the following is used for version control?", options: ["Docker", "Jenkins", "Git", "Kubernetes"], answer: "Git" },
      { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to the current function", "Refers to the current object", "Creates a new instance", "Defines a new variable"], answer: "Refers to the current object" },
      { question: "Which Python library is commonly used for data analysis and manipulation?", options: ["NumPy", "Pygame", "Django", "Flask"], answer: "NumPy" },
      { question: "What does the acronym JSON stand for?", options: ["JavaScript Open Notation", "JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Ordered Notation"], answer: "JavaScript Object Notation" },
      { question: "Which of these is NOT a valid HTTP request method?", options: ["GET", "POST", "DELETE", "FETCH"], answer: "FETCH" },
      { question: "What does DOM stand for in web development?", options: ["Document Object Model", "Data Object Model", "Document Order Model", "Digital Object Model"], answer: "Document Object Model" },
      { question: "Which sorting algorithm has an average time complexity of O(n log n)?", options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"], answer: "Quick Sort" },
      { question: "In Object-Oriented Programming, what is encapsulation?", options: ["The ability for a class to inherit from multiple parent classes", "The concept of bundling data and methods that operate on that data", "The ability of different objects to respond differently to the same message", "The process of hiding implementation details"], answer: "The process of hiding implementation details" },
      { question: "Which symbol is used to access properties of an object in JavaScript?", options: ["->", ".", "::", "=>"], answer: "." },
      { question: "What is the correct way to define a function in JavaScript?", options: ["function myFunction() {}", "def myFunction():", "function:myFunction() {}", "void myFunction() {}"], answer: "function myFunction() {}" },
      { question: "Which of these is not a database management system?", options: ["MySQL", "MongoDB", "PostgreSQL", "Apache"], answer: "Apache" },
      { question: "What is the purpose of a constructor in Object-Oriented Programming?", options: ["To destroy objects when they are no longer needed", "To initialize objects when they are created", "To define class variables", "To handle errors in a class"], answer: "To initialize objects when they are created" },
      { question: "What does the '&&' operator do in most programming languages?", options: ["Logical OR", "Logical AND", "Logical NOT", "Bitwise AND"], answer: "Logical AND" },
      { question: "Which of these is not related to frontend development?", options: ["CSS", "HTML", "JavaScript", "Node.js"], answer: "Node.js" },
      { question: "What does API stand for in programming?", options: ["Application Programming Interface", "Automated Program Interface", "Application Process Integration", "Advanced Programming Interface"], answer: "Application Programming Interface" },
      { question: "Which data structure would be most efficient for implementing a dictionary?", options: ["Array", "Linked List", "Hash Table", "Queue"], answer: "Hash Table" },
      { question: "What is the primary purpose of a compiler?", options: ["To translate high-level code to machine code", "To check for syntax errors only", "To execute the code", "To optimize algorithms"], answer: "To translate high-level code to machine code" }
  ],
     literature : [
      { question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Virginia Woolf"], answer: "Jane Austen" },
      { question: "Which Shakespeare play features the character Hamlet?", options: ["Macbeth", "Romeo and Juliet", "Hamlet", "King Lear"], answer: "Hamlet" },
      { question: "Who is the author of 'One Hundred Years of Solitude'?", options: ["Jorge Luis Borges", "Gabriel García Márquez", "Isabel Allende", "Julio Cortázar"], answer: "Gabriel García Márquez" },
      { question: "In which novel would you find the character Atticus Finch?", options: ["The Great Gatsby", "To Kill a Mockingbird", "The Catcher in the Rye", "Of Mice and Men"], answer: "To Kill a Mockingbird" },
      { question: "What is the name of the protagonist in 'The Catcher in the Rye'?", options: ["Holden Caulfield", "Jay Gatsby", "Scout Finch", "Huckleberry Finn"], answer: "Holden Caulfield" },
      { question: "Which of these is NOT written by Charles Dickens?", options: ["Great Expectations", "Oliver Twist", "Wuthering Heights", "A Tale of Two Cities"], answer: "Wuthering Heights" },
      { question: "Who wrote 'War and Peace'?", options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"], answer: "Leo Tolstoy" },
      { question: "In George Orwell's '1984', what is the name of the totalitarian regime?", options: ["The Party", "Big Brother", "Oceania", "The Ministry"], answer: "The Party" },
      { question: "Which novel begins with the line 'Call me Ishmael'?", options: ["The Old Man and the Sea", "Moby-Dick", "The Adventures of Huckleberry Finn", "Treasure Island"], answer: "Moby-Dick" },
      { question: "Who wrote 'The Divine Comedy'?", options: ["Dante Alighieri", "Giovanni Boccaccio", "Francesco Petrarch", "Niccolò Machiavelli"], answer: "Dante Alighieri" },
      { question: "Which literary movement was characterized by its emphasis on emotion and individualism?", options: ["Realism", "Modernism", "Romanticism", "Naturalism"], answer: "Romanticism" },
      { question: "Who is the author of the Harry Potter series?", options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Philip Pullman"], answer: "J.K. Rowling" },
      { question: "Which novel features the character Jay Gatsby?", options: ["The Great Gatsby", "The Sun Also Rises", "This Side of Paradise", "Tender Is the Night"], answer: "The Great Gatsby" },
      { question: "Who wrote 'Things Fall Apart'?", options: ["Chinua Achebe", "Wole Soyinka", "Ngũgĩ wa Thiong'o", "Ben Okri"], answer: "Chinua Achebe" },
      { question: "What is the setting of 'The Lord of the Rings'?", options: ["Narnia", "Middle-earth", "Westeros", "Earthsea"], answer: "Middle-earth" },
      { question: "Which novel features a character named Elizabeth Bennet?", options: ["Sense and Sensibility", "Pride and Prejudice", "Emma", "Persuasion"], answer: "Pride and Prejudice" },
      { question: "Who wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Sophocles", "Euripides"], answer: "Homer" },
      { question: "In which century did William Shakespeare live?", options: ["15th-16th", "16th-17th", "17th-18th", "18th-19th"], answer: "16th-17th" },
      { question: "Which of the following is NOT one of the March sisters in 'Little Women'?", options: ["Jo", "Beth", "Amy", "Catherine"], answer: "Catherine" },
      { question: "Who wrote 'The Picture of Dorian Gray'?", options: ["Oscar Wilde", "Edgar Allan Poe", "H.G. Wells", "Arthur Conan Doyle"], answer: "Oscar Wilde" },
      { question: "Which novel begins with the line 'It was the best of times, it was the worst of times'?", options: ["Great Expectations", "A Tale of Two Cities", "Oliver Twist", "David Copperfield"], answer: "A Tale of Two Cities" },
      { question: "Who is the author of 'The Scarlet Letter'?", options: ["Herman Melville", "Nathaniel Hawthorne", "Mark Twain", "Edgar Allan Poe"], answer: "Nathaniel Hawthorne" },
      { question: "Which poet wrote 'The Waste Land'?", options: ["W.B. Yeats", "T.S. Eliot", "Ezra Pound", "Wallace Stevens"], answer: "T.S. Eliot" },
      { question: "What is the name of the plantation in 'Gone with the Wind'?", options: ["Twelve Oaks", "Tara", "Fontaine", "Belle Reve"], answer: "Tara" },
      { question: "Who wrote the dystopian novel 'Brave New World'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut"], answer: "Aldous Huxley" },
      { question: "In Kafka's 'The Metamorphosis', what does Gregor Samsa transform into?", options: ["A butterfly", "A giant insect", "A rodent", "A bird"], answer: "A giant insect" },
      { question: "Who wrote 'Don Quixote'?", options: ["Miguel de Cervantes", "Jorge Luis Borges", "Pablo Neruda", "Federico García Lorca"], answer: "Miguel de Cervantes" },
      { question: "Which ancient Greek playwright wrote 'Oedipus Rex'?", options: ["Euripides", "Aeschylus", "Sophocles", "Aristophanes"], answer: "Sophocles" },
      { question: "Which of the following is a play by Arthur Miller?", options: ["A Streetcar Named Desire", "Death of a Salesman", "Long Day's Journey into Night", "Who's Afraid of Virginia Woolf?"], answer: "Death of a Salesman" },
      { question: "Who created the detective Sherlock Holmes?", options: ["Agatha Christie", "Edgar Allan Poe", "Arthur Conan Doyle", "Dorothy L. Sayers"], answer: "Arthur Conan Doyle" }
  ],
     sports : [
      { question: "Which country won the FIFA World Cup in 2022?", options: ["Brazil", "France", "Argentina", "Germany"], answer: "Argentina" },
      { question: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Football"], answer: "Basketball" },
      { question: "How many players are there in a standard football/soccer team on the field?", options: ["9", "10", "11", "12"], answer: "11" },
      { question: "Which Grand Slam tennis tournament is played on clay courts?", options: ["Wimbledon", "US Open", "Australian Open", "French Open"], answer: "French Open" },
      { question: "Who holds the record for the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"], answer: "Michael Phelps" },
      { question: "In which sport would you use a puck?", options: ["Ice Hockey", "Field Hockey", "Lacrosse", "Curling"], answer: "Ice Hockey" },
      { question: "What is the distance of a marathon in kilometers?", options: ["38.6 km", "42.2 km", "45.2 km", "50 km"], answer: "42.2 km" },
      { question: "Which country is famous for inventing sumo wrestling?", options: ["China", "Korea", "Mongolia", "Japan"], answer: "Japan" },
      { question: "In which sport might you execute a 'hole in one'?", options: ["Bowling", "Pool", "Golf", "Archery"], answer: "Golf" },
      { question: "How many points is a touchdown worth in American football?", options: ["3 points", "6 points", "7 points", "2 points"], answer: "6 points" },
      { question: "Which of these is NOT a swimming stroke used in the Olympics?", options: ["Butterfly", "Freestyle", "Dolphin", "Breaststroke"], answer: "Dolphin" },
      { question: "In which Olympic sport would you perform a Tsukahara?", options: ["Diving", "Gymnastics", "Figure Skating", "Synchronized Swimming"], answer: "Gymnastics" },
      { question: "What is the national sport of Canada?", options: ["Ice Hockey", "Lacrosse", "Basketball", "Curling"], answer: "Lacrosse" },
      { question: "How many NBA championships did Michael Jordan win with the Chicago Bulls?", options: ["4", "5", "6", "7"], answer: "6" },
      { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: "Brazil" },
      { question: "In which sport would you perform a 'takedown'?", options: ["Judo", "Wrestling", "Boxing", "Fencing"], answer: "Wrestling" },
      { question: "What color is the bullseye on a standard dartboard?", options: ["Black", "White", "Green", "Red"], answer: "Red" },
      { question: "How many players are on each side in a volleyball game?", options: ["5", "6", "7", "8"], answer: "6" },
      { question: "Which sport uses the largest playing field by area?", options: ["Soccer/Football", "Cricket", "Polo", "Golf"], answer: "Polo" },
      { question: "In baseball, how many strikes constitute a strikeout?", options: ["2", "3", "4", "5"], answer: "3" },
      { question: "Which of these sports is NOT part of a triathlon?", options: ["Swimming", "Cycling", "Running", "Rowing"], answer: "Rowing" },
      { question: "What is the diameter of a standard basketball hoop in inches?", options: ["16 inches", "18 inches", "20 inches", "22 inches"], answer: "18 inches" },
      { question: "In which year were the first modern Olympic Games held?", options: ["1886", "1896", "1906", "1916"], answer: "1896" },
      { question: "Which tennis player has won the most Grand Slam singles titles?", options: ["Roger Federer", "Rafael Nadal", "Serena Williams", "Novak Djokovic"], answer: "Novak Djokovic" },
      { question: "What is the maximum number of clubs allowed in a golf bag during a round?", options: ["12", "14", "16", "18"], answer: "14" },
      { question: "Which country invented table tennis (ping pong)?", options: ["China", "Japan", "England", "USA"], answer: "England" },
      { question: "In cricket, what is the term for when a bowler dismisses a batsman with three consecutive deliveries?", options: ["Triple Play", "Hat-trick", "Strike Out", "Perfect Over"], answer: "Hat-trick" },
      { question: "Which athlete is known as 'The Greatest' in boxing?", options: ["Mike Tyson", "Floyd Mayweather", "Muhammad Ali", "Manny Pacquiao"], answer: "Muhammad Ali" },
      { question: "What sport is played on the largest ice surface?", options: ["Ice Hockey", "Figure Skating", "Curling", "Bandy"], answer: "Bandy" },
      { question: "How many rings are there on the Olympic flag?", options: ["4", "5", "6", "7"], answer: "5" }
  ],   
    
     music : [
      { question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Timberlake"], answer: "Michael Jackson" },
      { question: "Which band performed the album 'Dark Side of the Moon'?", options: ["Led Zeppelin", "The Rolling Stones", "Pink Floyd", "The Beatles"], answer: "Pink Floyd" },
      { question: "What instrument does Yo-Yo Ma play?", options: ["Violin", "Piano", "Cello", "Flute"], answer: "Cello" },
      { question: "Which of these is NOT one of the Beatles?", options: ["John Lennon", "Paul McCartney", "Ringo Starr", "Mick Jagger"], answer: "Mick Jagger" },
      { question: "What genre of music did Louis Armstrong help develop?", options: ["Rock", "Jazz", "Classical", "Blues"], answer: "Jazz" },
      { question: "Which female artist released the album '21' in 2011?", options: ["Taylor Swift", "Beyoncé", "Adele", "Lady Gaga"], answer: "Adele" },
      { question: "What is the highest female vocal range?", options: ["Alto", "Soprano", "Contralto", "Mezzo-soprano"], answer: "Soprano" },
      { question: "Which rock band was fronted by Freddie Mercury?", options: ["Led Zeppelin", "Queen", "The Who", "Rolling Stones"], answer: "Queen" },
      { question: "Which composer wrote 'The Four Seasons'?", options: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Antonio Vivaldi"], answer: "Antonio Vivaldi" },
      { question: "Which of these instruments is NOT in a standard string quartet?", options: ["Violin", "Viola", "Cello", "Double Bass"], answer: "Double Bass" },
      { question: "Who composed the opera 'The Magic Flute'?", options: ["Giuseppe Verdi", "Wolfgang Amadeus Mozart", "Richard Wagner", "George Frideric Handel"], answer: "Wolfgang Amadeus Mozart" },
      { question: "Which artist had a hit with 'Billie Jean'?", options: ["Prince", "Michael Jackson", "George Michael", "Lionel Richie"], answer: "Michael Jackson" },
      { question: "What city is considered the birthplace of grunge music?", options: ["Los Angeles", "New York", "Seattle", "Portland"], answer: "Seattle" },
      { question: "Which of these is NOT a type of drum?", options: ["Snare", "Tom-tom", "Clarinet", "Bass"], answer: "Clarinet" },
      { question: "Which band released the album 'The Joshua Tree'?", options: ["Coldplay", "U2", "R.E.M.", "The Police"], answer: "U2" },
      { question: "Which composer is famous for his '9th Symphony' that includes the 'Ode to Joy'?", options: ["Johann Sebastian Bach", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Franz Schubert"], answer: "Ludwig van Beethoven" },
      { question: "What is the national anthem of the United States called?", options: ["America the Beautiful", "The Star-Spangled Banner", "God Bless America", "My Country, 'Tis of Thee"], answer: "The Star-Spangled Banner" },
      { question: "Which artist released the album 'Thriller'?", options: ["Prince", "Michael Jackson", "Madonna", "Whitney Houston"], answer: "Michael Jackson" },
      { question: "What is the highest male vocal range?", options: ["Tenor", "Bass", "Baritone", "Counter-tenor"], answer: "Counter-tenor" },
      { question: "Which instrument has 88 keys in a standard configuration?", options: ["Organ", "Piano", "Harpsichord", "Accordion"], answer: "Piano" },
      { question: "Who is known as the 'Queen of Soul'?", options: ["Whitney Houston", "Aretha Franklin", "Tina Turner", "Diana Ross"], answer: "Aretha Franklin" },
      { question: "Which music festival took place in 1969 and became a landmark cultural event?", options: ["Lollapalooza", "Coachella", "Monterey Pop Festival", "Woodstock"], answer: "Woodstock" },
      { question: "Which instrument is Jimi Hendrix famous for playing?", options: ["Drums", "Bass Guitar", "Electric Guitar", "Saxophone"], answer: "Electric Guitar" },
      { question: "Which of these is a type of brass instrument?", options: ["Clarinet", "Flute", "Trombone", "Oboe"], answer: "Trombone" },
      { question: "Which style of music originated in Jamaica in the late 1960s?", options: ["Salsa", "Samba", "Reggae", "Bossa Nova"], answer: "Reggae" },
      { question: "Who composed 'The Four Seasons'?", options: ["Bach", "Mozart", "Vivaldi", "Beethoven"], answer: "Vivaldi" },
      { question: "Which artist is known for the song 'Like a Rolling Stone'?", options: ["Bob Dylan", "Bruce Springsteen", "Neil Young", "Johnny Cash"], answer: "Bob Dylan" },
      { question: "What is the device that changes the pitch of a guitar string called?", options: ["Bridge", "Tuning peg", "Fretboard", "Capo"], answer: "Tuning peg" },
      { question: "Which musical era came after the Baroque period?", options: ["Romantic", "Classical", "Renaissance", "Modern"], answer: "Classical" },
      { question: "Which band's original members included Mick Jagger and Keith Richards?", options: ["The Beatles", "The Who", "Led Zeppelin", "The Rolling Stones"], answer: "The Rolling Stones" }
  ],     
     movies : [
      { question: "Which film won the Academy Award for Best Picture in 2023?", options: ["Oppenheimer", "Barbie", "Everything Everywhere All at Once", "The Banshees of Inisherin"], answer: "Everything Everywhere All at Once" },
      { question: "Who directed 'Jurassic Park'?", options: ["James Cameron", "Steven Spielberg", "George Lucas", "Christopher Nolan"], answer: "Steven Spielberg" },
      { question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?", options: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Robert Downey Jr."], answer: "Robert Downey Jr." },
      { question: "What is the highest-grossing film of all time (not adjusted for inflation)?", options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"], answer: "Avatar" },
      { question: "Which of these films was NOT directed by Christopher Nolan?", options: ["Inception", "Interstellar", "The Revenant", "Dunkirk"], answer: "The Revenant" },
      { question: "Who played the character of Rose in 'Titanic'?", options: ["Kate Winslet", "Julia Roberts", "Nicole Kidman", "Sandra Bullock"], answer: "Kate Winslet" },
      { question: "Which film features the character Luke Skywalker?", options: ["Star Trek", "Alien", "Star Wars", "Blade Runner"], answer: "Star Wars" },
      { question: "What was the first feature-length animated film ever released?", options: ["Pinocchio", "Snow White and the Seven Dwarfs", "Fantasia", "Bambi"], answer: "Snow White and the Seven Dwarfs" },
      { question: "Which actor has won the most Academy Awards for Best Actor?", options: ["Jack Nicholson", "Daniel Day-Lewis", "Marlon Brando", "Tom Hanks"], answer: "Daniel Day-Lewis" },
      { question: "In 'The Matrix', what color pill does Neo take?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Red" },
      { question: "Which of these movies is NOT based on a book?", options: ["The Shawshank Redemption", "Forrest Gump", "Inception", "The Lord of the Rings"], answer: "Inception" },
      { question: "Who directed 'Pulp Fiction'?", options: ["Martin Scorsese", "Steven Spielberg", "Quentin Tarantino", "Francis Ford Coppola"], answer: "Quentin Tarantino" },
      { question: "Which of these is NOT one of the three films in the original 'Star Wars' trilogy?", options: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace"], answer: "The Phantom Menace" },
      { question: "Which animated film features a character named Simba?", options: ["Finding Nemo", "Shrek", "The Lion King", "Aladdin"], answer: "The Lion King" },
      { question: "Who played Forrest Gump in the movie 'Forrest Gump'?", options: ["Tom Hanks", "Tom Cruise", "John Travolta", "Brad Pitt"], answer: "Tom Hanks" },
      { question: "What is the name of the fictional country where 'Black Panther' is set?", options: ["Zamunda", "Wakanda", "Genovia", "Latveria"], answer: "Wakanda" },
      { question: "Which Alfred Hitchcock film features a shower murder scene?", options: ["Vertigo", "Rear Window", "Psycho", "The Birds"], answer: "Psycho" },
      { question: "Who played Jack Dawson in the film 'Titanic'?", options: ["Matt Damon", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"], answer: "Leonardo DiCaprio" },
      { question: "Which film does NOT feature the character James Bond?", options: ["Skyfall", "GoldenEye", "The Bourne Identity", "Casino Royale"], answer: "The Bourne Identity" },
      { question: "In 'The Godfather', what is the name of the family?", options: ["Tattaglia", "Barzini", "Corleone", "Sollozzo"], answer: "Corleone" },
      { question: "Which actress played Hermione Granger in the Harry Potter films?", options: ["Emma Watson", "Emma Stone", "Emma Thompson", "Emily Blunt"], answer: "Emma Watson" },
      { question: "What year was the first 'Toy Story' film released?", options: ["1993", "1995", "1997", "1999"], answer: "1995" },
      { question: "Which of these is NOT a film directed by James Cameron?", options: ["Titanic", "Avatar", "The Terminator", "Jurassic Park"], answer: "Jurassic Park" },
      { question: "Who directed 'The Shawshank Redemption'?", options: ["Steven Spielberg", "Frank Darabont", "Martin Scorsese", "Christopher Nolan"], answer: "Frank Darabont" },
      { question: "Which actress won an Oscar for her role in 'La La Land'?", options: ["Natalie Portman", "Jennifer Lawrence", "Emma Stone", "Brie Larson"], answer: "Emma Stone" },
      { question: "What is the name of the fictional city where Batman operates?", options: ["Metropolis", "Gotham City", "Star City", "Central City"], answer: "Gotham City" },
      { question: "Which film features the line 'Here's looking at you, kid'?", options: ["Gone with the Wind", "The Maltese Falcon", "Casablanca", "Citizen Kane"], answer: "Casablanca" },
      { question: "Who directed 'E.T. the Extra-Terrestrial'?", options: ["George Lucas", "Steven Spielberg", "James Cameron", "Francis Ford Coppola"], answer: "Steven Spielberg" },
      { question: "Which film features a character named Hans Gruber?", options: ["The Usual Suspects", "Die Hard", "Reservoir Dogs", "Lethal Weapon"], answer: "Die Hard" },
      { question: "What was the first Marvel Cinematic Universe film?", options: ["The Incredible Hulk", "Iron Man", "Captain America: The First Avenger", "Thor"], answer: "Iron Man" }
  ],
  tech: [
      { question: "What does 'CPU' stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Performance Unit"], answer: "Central Processing Unit" },
      { question: "Which company developed the Windows operating system?", options: ["Apple", "Microsoft", "IBM", "Google"], answer: "Microsoft" },
      { question: "What is the name of Apple's computer operating system?", options: ["iOS", "macOS", "Windows", "Linux"], answer: "macOS" },
      { question: "Which programming language is primarily used for Android development?", options: ["Swift", "Python", "Kotlin", "C#"], answer: "Kotlin" },
      { question: "What is the term for a network that spans a large geographic area?", options: ["LAN", "WAN", "PAN", "SAN"], answer: "WAN" },
      { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTabular Markup Language", "HyperText Markdown Language"], answer: "HyperText Markup Language" },
      { question: "Which company owns YouTube?", options: ["Facebook", "Apple", "Microsoft", "Google"], answer: "Google" },
      { question: "What device is used to connect to a wireless network?", options: ["Modem", "Router", "Switch", "Hub"], answer: "Router" },
      { question: "Which of the following is NOT a programming language?", options: ["Python", "Java", "Ruby", "Firefox"], answer: "Firefox" },
      { question: "What is the purpose of an SSD?", options: ["Power supply", "Storing data", "Cooling system", "Graphics processing"], answer: "Storing data" },
      { question: "What does 'AI' stand for?", options: ["Artificial Intelligence", "Automated Input", "Advanced Integration", "Analog Interface"], answer: "Artificial Intelligence" },
      { question: "Which social media platform is known for 280-character messages?", options: ["Facebook", "Instagram", "Reddit", "Twitter"], answer: "Twitter" },
      { question: "Which browser is developed by Mozilla?", options: ["Chrome", "Edge", "Safari", "Firefox"], answer: "Firefox" },
      { question: "Which port is typically used for HTTPS?", options: ["80", "22", "443", "8080"], answer: "443" },
      { question: "Which of these is a cloud computing platform?", options: ["AWS", "Nginx", "Apache", "GitHub"], answer: "AWS" },
      { question: "Which tech company was founded by Steve Jobs?", options: ["Google", "Apple", "Amazon", "Intel"], answer: "Apple" },
      { question: "What does RAM stand for?", options: ["Readily Available Memory", "Random Access Memory", "Read Access Mode", "Remote Active Memory"], answer: "Random Access Memory" },
      { question: "Which of these is an open-source operating system?", options: ["Windows", "macOS", "Linux", "iOS"], answer: "Linux" },
      { question: "What is phishing?", options: ["Fishing using tech", "A cyber attack to steal personal data", "A programming error", "A type of malware"], answer: "A cyber attack to steal personal data" },
      { question: "Which of these is used to protect networks?", options: ["Firewall", "Hard Drive", "USB Hub", "RAM"], answer: "Firewall" },
      { question: "Who is the CEO of Tesla?", options: ["Tim Cook", "Jeff Bezos", "Elon Musk", "Mark Zuckerberg"], answer: "Elon Musk" },
      { question: "Which file extension is used for JavaScript files?", options: [".js", ".html", ".css", ".java"], answer: ".js" },
      { question: "What does URL stand for?", options: ["Universal Resource Locator", "Uniform Resource Locator", "Unified Reference Link", "User Reference List"], answer: "Uniform Resource Locator" },
      { question: "What is the name of Microsoft’s search engine?", options: ["Google", "Yahoo", "Bing", "DuckDuckGo"], answer: "Bing" },
      { question: "Which of the following is a cryptocurrency?", options: ["Bitcoin", "Bytecode", "Bittorrent", "Backspace"], answer: "Bitcoin" },
      { question: "What does 'IoT' stand for?", options: ["Internet of Technology", "Internet of Things", "Input of Technology", "Interface of Tools"], answer: "Internet of Things" },
      { question: "Which keyboard key is used to refresh a webpage?", options: ["Ctrl", "F5", "Alt", "Shift"], answer: "F5" },
      { question: "What is a CAPTCHA used for?", options: ["Test if a user is human", "Encrypt data", "Track cookies", "Scan for malware"], answer: "Test if a user is human" },
      { question: "Which of the following is NOT an operating system?", options: ["Linux", "Windows", "Oracle", "macOS"], answer: "Oracle" },

  ],
art: [
      { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci" },
      { question: "What is the art movement associated with Salvador Dalí?", options: ["Cubism", "Surrealism", "Expressionism", "Realism"], answer: "Surrealism" },
      { question: "Which artist is known for 'The Starry Night'?", options: ["Claude Monet", "Vincent van Gogh", "Edgar Degas", "Henri Matisse"], answer: "Vincent van Gogh" },
      { question: "What is Michelangelo’s sculpture in the Vatican called?", options: ["Pietà", "The Thinker", "David", "Moses"], answer: "Pietà" },
      { question: "What does 'The Persistence of Memory' feature?", options: ["Melting clocks", "Screaming faces", "Cubes", "Flowers"], answer: "Melting clocks" },
      { question: "What style uses dots of color to form images?", options: ["Impressionism", "Pointillism", "Expressionism", "Surrealism"], answer: "Pointillism" },
      { question: "Who painted 'The Birth of Venus'?", options: ["Raphael", "Sandro Botticelli", "Rembrandt", "Caravaggio"], answer: "Sandro Botticelli" },
      { question: "Who painted 'Man at the Crossroads'?", options: ["Diego Rivera", "Andy Warhol", "Jean-Michel Basquiat", "Roy Lichtenstein"], answer: "Diego Rivera" },
      { question: "Where is the Louvre Museum located?", options: ["London", "Madrid", "Paris", "Rome"], answer: "Paris" },
      { question: "What period uses dramatic light and shadow?", options: ["Renaissance", "Baroque", "Modernism", "Neoclassicism"], answer: "Baroque" },
      { question: "What is cubism known for?", options: ["Organic shapes", "Geometric forms", "Dot patterns", "Photo realism"], answer: "Geometric forms" },
      { question: "Which artist is famous for soup cans?", options: ["Andy Warhol", "Roy Lichtenstein", "Keith Haring", "Jackson Pollock"], answer: "Andy Warhol" },
      { question: "What movement is Claude Monet associated with?", options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"], answer: "Impressionism" },
      { question: "Which country is known for ukiyo-e woodblock prints?", options: ["China", "Japan", "Thailand", "Vietnam"], answer: "Japan" },
      { question: "Which artist painted 'The Scream'?", options: ["Munch", "Picasso", "Dali", "Monet"], answer: "Munch" },
      { question: "Which museum houses 'The Night Watch'?", options: ["Louvre", "British Museum", "Rijksmuseum", "MET"], answer: "Rijksmuseum" },
      { question: "What does abstract art NOT attempt to represent?", options: ["Real objects", "Ideas", "Emotions", "Forms"], answer: "Real objects" },
      { question: "Who was a famous female Mexican painter?", options: ["Georgia O'Keeffe", "Mary Cassatt", "Frida Kahlo", "Artemisia Gentileschi"], answer: "Frida Kahlo" },
      { question: "Which material is used in fresco painting?", options: ["Wet plaster", "Canvas", "Wood", "Metal"], answer: "Wet plaster" },
      { question: "What is a triptych?", options: ["Three-paneled painting", "Single canvas", "Sculpture", "Collage"], answer: "Three-paneled painting" },
      { question: "Which artist is famous for large drip paintings?", options: ["Jackson Pollock", "Mark Rothko", "Cezanne", "Matisse"], answer: "Jackson Pollock" },
      { question: "What is Van Gogh’s nationality?", options: ["French", "Dutch", "German", "Spanish"], answer: "Dutch" },
      { question: "Who painted 'Girl with a Pearl Earring'?", options: ["Vermeer", "Rembrandt", "Rubens", "Raphael"], answer: "Vermeer" },
      { question: "What is a self-portrait?", options: ["Painting of oneself", "Landscape", "Still life", "Sculpture"], answer: "Painting of oneself" },
      { question: "Which painting features a melting face?", options: ["The Persistence of Memory", "The Scream", "Guernica", "Mona Lisa"], answer: "The Persistence of Memory" },
      { question: "Which artist is known for blue and pink periods?", options: ["Picasso", "Monet", "Degas", "Manet"], answer: "Picasso" },
      { question: "What material is marble?", options: ["Metal", "Rock", "Clay", "Glass"], answer: "Rock" },
      { question: "What does chiaroscuro refer to?", options: ["Light and shadow contrast", "Color blending", "Shape repetition", "Texture"], answer: "Light and shadow contrast" },
      { question: "Who painted the Sistine Chapel ceiling?", options: ["Raphael", "Leonardo da Vinci", "Michelangelo", "Donatello"], answer: "Michelangelo" },
      { question: "What is calligraphy?", options: ["Art of handwriting", "Pottery", "Sculpting", "Glass blowing"], answer: "Art of handwriting" },
],
 biology: [
      { question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], answer: "Cell" },
      { question: "Which organ pumps blood?", options: ["Lung", "Liver", "Heart", "Kidney"], answer: "Heart" },
      { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], answer: "Mitochondria" },
      { question: "Which gas do plants use for photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon dioxide" },
      { question: "Which organ is responsible for filtering blood?", options: ["Lungs", "Kidneys", "Heart", "Stomach"], answer: "Kidneys" },
      { question: "Which blood cells fight infections?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "White blood cells" },
      { question: "What is DNA’s shape?", options: ["Double helix", "Triple helix", "Circle", "Ladder"], answer: "Double helix" },
      { question: "How many chromosomes do humans have?", options: ["23", "46", "22", "48"], answer: "46" },
      { question: "Which vitamin is produced by sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
      { question: "What do herbivores eat?", options: ["Meat", "Plants", "Both", "Fungi"], answer: "Plants" },
      { question: "Which part of the cell contains genetic material?", options: ["Cytoplasm", "Cell wall", "Nucleus", "Ribosome"], answer: "Nucleus" },
      { question: "What is the human body’s largest organ?", options: ["Liver", "Skin", "Lungs", "Brain"], answer: "Skin" },
      { question: "Which blood type is universal donor?", options: ["A", "B", "O", "AB"], answer: "O" },
      { question: "Which animal is cold-blooded?", options: ["Dog", "Frog", "Bird", "Whale"], answer: "Frog" },
      { question: "What is the process of cell division?", options: ["Mitosis", "Fusion", "Cloning", "Duplication"], answer: "Mitosis" },
      { question: "How many bones in adult human?", options: ["206", "201", "212", "195"], answer: "206" },
      { question: "What helps digest food in stomach?", options: ["Blood", "Acid", "Oxygen", "Bile"], answer: "Acid" },
      { question: "Which part of brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], answer: "Cerebellum" },
      { question: "Which part carries oxygen in blood?", options: ["Platelets", "Plasma", "White cells", "Red cells"], answer: "Red cells" },
      { question: "Which organ breaks down toxins?", options: ["Heart", "Liver", "Stomach", "Pancreas"], answer: "Liver" },
      { question: "Which process creates identical cells?", options: ["Mitosis", "Meiosis", "Fusion", "Reproduction"], answer: "Mitosis" },
      { question: "What do carnivores eat?", options: ["Plants", "Meat", "Bacteria", "Fungi"], answer: "Meat" },
      { question: "What does the ribosome do?", options: ["Store energy", "Make proteins", "Carry waste", "Produce blood"], answer: "Make proteins" },
      { question: "What is the smallest bone in body?", options: ["Stapes", "Femur", "Ulna", "Tibia"], answer: "Stapes" },
      { question: "What makes up the skeleton?", options: ["Cartilage", "Bones", "Muscles", "Tendons"], answer: "Bones" },
      { question: "What is the role of chlorophyll?", options: ["Color skin", "Digest food", "Photosynthesis", "Build muscle"], answer: "Photosynthesis" },
      { question: "How many kidneys do humans have?", options: ["1", "2", "3", "4"], answer: "2" },
      { question: "What is the study of fungi?", options: ["Zoology", "Mycology", "Botany", "Ecology"], answer: "Mycology" },
      { question: "Which system controls movement?", options: ["Respiratory", "Nervous", "Digestive", "Circulatory"], answer: "Nervous" },
      { question: "Which animal lays eggs?", options: ["Cat", "Dog", "Bird", "Bear"], answer: "Bird" }
]}


  const quizListEl = document.getElementById("quizList");
  const searchEl = document.getElementById("quizSearch");
  const quizContainer = document.getElementById("quizContainer");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");

  let currentQuiz = [];
  let currentIndex = 0;
  let score = 0;

  function renderQuizzes(filter = "") {
    quizListEl.innerHTML = "";

    quizzesInfo
      .filter(q => q.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(quiz => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
          <div class="card quiz-card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <div class="mb-3 text-center">
                <i class="bi ${quiz.icon} fs-1 text-primary"></i>
              </div>
              <h5 class="card-title text-center">${quiz.name}</h5>
              <p class="card-text text-center">${quiz.description}</p>
              <button class="btn btn-primary mt-auto" onclick="startQuiz('${quiz.name.toLowerCase()}')">Start Quiz</button>
            </div>
          </div>
        `;

        quizListEl.appendChild(col);
      });
  }

  function startQuiz(category) {
    currentQuiz = quizzes[category] || [];
    if (currentQuiz.length === 0) return;

    currentIndex = 0;
    score = 0;
    quizListEl.classList.add("d-none");
    quizContainer.classList.remove("d-none");
    renderQuestion();
  }

  function renderQuestion() {
    const q = currentQuiz[currentIndex];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    nextBtn.classList.add("d-none");

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-primary w-100 text-start mb-2";
      btn.textContent = opt;
      btn.onclick = () => handleAnswer(btn, q.answer);
      optionsEl.appendChild(btn);
    });
  }

  function handleAnswer(selectedBtn, correct) {
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.classList.replace("btn-outline-primary", "btn-success");
      }
    });

    if (selectedBtn.textContent !== correct) {
      selectedBtn.classList.replace("btn-outline-primary", "btn-danger");
    } else {
      score++;
    }

    nextBtn.classList.remove("d-none");
  }

  nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < currentQuiz.length) {
      renderQuestion();
    } else {
      showResult();
    }
  };

  function showResult() {
    questionEl.textContent = "Quiz completed!";
    optionsEl.innerHTML = "";
    nextBtn.classList.add("d-none");
    resultEl.classList.remove("d-none");
    scoreEl.textContent = `${score} / ${currentQuiz.length}`;
  }

  searchEl.addEventListener("input", () => {
    renderQuizzes(searchEl.value);
  });


  renderQuizzes();