//Array with all Majors inserted into Trie by electives.js
//Edit this file if Majors need to be updated

var majors= [
'Accountancy',
'Africana Studies',
'Anthropology',
'Art',
'Asian American Studies',
'Athletic Training',
'Biochemistry',
'Biology',
'Business Administration',
'Central American Studies',
'Chemistry',
'Chicano and Chicana Studies',
'Child and Adolescent Development',
'Cinema and Television Arts',
'Civil Engineering',
'Communication Studies',
'Communicative Disorders',
'Computer Engineering',
'Computer Information Technology',
'Computer Science',
'Construction Management',
'Criminology and Justice Studies',
'Deaf Studies',
'Dietetics and Food Science',
'Economics',
'Electrical Engineering',
'Engineering Management',
'English',
'Environmental and Occupational Health',
'Family and Consumer Sciences',
'Finance',
'Gender and Women’s Studies',
'Geography',
'Geology',
'Health Administration',
'History',
'Hospitality',
'Information Systems',
'Journalism',
'Kinesiology',
'Languages and Cultures',
'Liberal Studies',
'Linguistics',
'Management',
'Manufacturing Systems Engineering',
'Marketing',
'Mathematics',
'Mechanical Engineering',
'Modern Jewish Studies',
'Music',
'Nursing',
'Philosophy',
'Physics',
'Political Science',
'Psychology',
'Public Health',
'Public Sector Management',
'Radiologic Sciences',
'Recreation Management',
'Religious Studies',
'Sociology',
'Spanish',
'Theatre',
'Tourism',
'Urban Studies and Planning'
]

//Class results based on student data inserted into second trie object
//Update classes here

var classes = [
    '<h1>Computer Science</h1><h2>Section A</h2><a href="https://catalog.csun.edu/academics/aas/courses/aas-151/">AAS 151. Fundamentals of Public Speaking (3 credits)</a><br><a href="https://catalog.csun.edu/academics/phil/courses/phil-200/">PHIL 200. Critical Reasoning (3 credits)</a><h2>Section B</h2><a href="https://catalog.csun.edu/academics/phys/courses/phys-220a/">PHYS 220A. Mechanics (3 credits)</a> and <a href="https://catalog.csun.edu/academics/phys/courses/phys-220al/">Lab(1 credit)</a><br><a href="https://catalog.csun.edu/academics/phys/courses/phys-100b/">PHYS 100B. General Physics II (3 credits)</a>and <a href="https://catalog.csun.edu/academics/phys/courses/phys-220al/">Lab(1 credit)</a><h2>Section C</h2><a href="https://catalog.csun.edu/academics/art/courses/art-100l/">ART 100/L. Introduction to Art Processes and Lab (1/2 credits)</a><br><a href="https://catalog.csun.edu/academics/mus/courses/mus-108/">MUS 108. Music in Film (3 credits)</a><h2>Section D</h2><a href="https://catalog.csun.edu/academics/psy/courses/psy-150/">PSY 150. Introduction to Psychology (3 credits)</a><br><a href="https://catalog.csun.edu/academics/hist/courses/hist-271/">HIST 271. The United States Since 1865 (3)</a><h2>Section E</h2><a href="https://catalog.csun.edu/academics/mkt/courses/bus-104/">BUS 104. Introduction to Business (3 credits)</a><br><a href="https://catalog.csun.edu/academics/coms/courses/coms-323/">COMS 323. Group Communication (3 credits)</a><h2>Section F</h2><a href="https://catalog.csun.edu/academics/mcll/courses/span-101/">SPAN 101. Elementary Spanish I (4 credits)</a><br><a href="https://catalog.csun.edu/academics/aas/courses/aas-340/">AAS 340. Asian American Women (3 credits)</a>',

    '<h1>Psychology</h1><h2>Section A</h2><a href="https://catalog.csun.edu/academics/cas/courses/cas-151/">CAS 151. Fundamentals of Public Speaking (3 credits)</a><br><a href="https://catalog.csun.edu/academics/qs/courses/qs-115/">QS 115. Approaches to University Writing (3 credits)</a><h2>Section B</h2><a href="https://catalog.csun.edu/academics/geol/courses/geol-101/">GEOG 101. The Physical Environment (3 credits)</a><br><a href="https://catalog.csun.edu/academics/anth/courses/anth-151/">ANTH 151. Introduction to Biological Anthropology (3 credits)</a><h2>Section C</h2><a href="https://catalog.csun.edu/academics/lrs/courses/hum-105/">HUM 105. Cultural Eras in Humanities I (3 credits)</a><br><a href="https://catalog.csun.edu/academics/mus/courses/mus-105/">MUS 105. Understanding Music (3 credits)</a><h2>Section D</h2><a href="https://catalog.csun.edu/academics/soc/courses/soc-305/">SOC 305. Culture and Personality (3 credits)</a><br><a href="https://catalog.csun.edu/academics/aas/courses/aas-350/">AAS 350. Asian American Personality and Mental Health (3 credits)</a><h2>Section E</h2><a href="https://catalog.csun.edu/academics/cadv/courses/cadv-310/">CADV 310. Developmental Impacts of Abuse and Neglect (3 credits)</a><br><a href="https://catalog.csun.edu/academics/hsci/courses/hsci-231/">HSCI 231. Women and Health (3 credits)</a><h2>Section F</h2><a href="https://catalog.csun.edu/academics/aas/courses/aas-100/">AAS 100. Introduction to Asian American Studies (3 credits)</a><br><a href="https://catalog.csun.edu/academics/soc/courses/soc-307/">SOC 307. Ethnic Diversity in America (3 credits)</a>',

    '<h1>Electrical Engineering</h1><h2>Section A</h2><a href="https://catalog.csun.edu/academics/aas/courses/aas-151/">AAS 151. Fundamentals of Public Speaking (3 credits)</a><br><a href="https://catalog.csun.edu/academics/chs/courses/chs-115/">CHS 115. Approaches to University Writing (3 credits)</a><h2>Section B</h2><a href="https://catalog.csun.edu/academics/chem/courses/chem-100/">CHEM 100. Principles of Chemistry (3 credits)</a> and <a href="https://catalog.csun.edu/academics/chem/courses/chem-100l/">Lab (1 credit)</a><br><a href="https://catalog.csun.edu/academics/chem/courses/chem-101/">CHEM 101. General Chemistry I (4 credits)</a> and <a href="https://catalog.csun.edu/academics/chem/courses/chem-101l/">Lab (1 credit)</a><h2>Section C</h2><a href="https://catalog.csun.edu/academics/art/courses/art-140/">ART 140. Beginning Two-Dimensional Design (3 credits)</a><br><a href="https://catalog.csun.edu/academics/art/courses/art-305/">ART 305. Art and Mass Culture (3 credits)</a><h2>Section D</h2><a href="https://catalog.csun.edu/academics/hist/courses/hist-271/">HIST 271. The United States Since 1865 (3 credits)</a><br><a href="https://catalog.csun.edu/academics/anth/courses/anth-262/">ANTH 262. Forensic Anthropology (3 credits)</a><h2>Section E</h2><a href="https://catalog.csun.edu/academics/comp/courses/comp-100/">COMP 100. Computers: Their Impact and Use (3 credits)</a><br><a href="https://catalog.csun.edu/academics/coms/courses/coms-150/">COMS 150. Introduction to Communication Studies (3 credits)</a><h2>Section F</h2><a href="https://catalog.csun.edu/academics/mcll/courses/span-102/">SPAN 102. Elementary Spanish II (4 credits)</a><br><a href="#"></a>',

    '<h1>Mathematics</h1><h2>Section A</h2><a href="https://catalog.csun.edu/academics/phil/courses/phil-230/">PHIL 230. Introduction to Formal Logic (3 credits)</a><br><a href="#"></a><h2>Section B</h2><a href="https://catalog.csun.edu/academics/phys/courses/phys-220a/">PHYS 220A. Mechanics (3 credits)</a> and <a href="https://catalog.csun.edu/academics/phys/courses/phys-220al/">Lab (1 credit)</a><br><a href="https://catalog.csun.edu/academics/chem/courses/chem-100/">CHEM 100. Principles of Chemistry (3 credits)</a> and <a href="https://catalog.csun.edu/academics/chem/courses/chem-100l/">Lab (1 credit)</a><h2>Section C</h2><a href="https://catalog.csun.edu/academics/chs/courses/chs-351/">CHS 351. Survey of Mexican Philosophical Thought (3 credits)</a><br><a href="https://catalog.csun.edu/academics/lrs/courses/hum-101/">HUM 101. Forms and Ideas in Humanities (3 credits)</a><h2>Section D</h2><a href="https://catalog.csun.edu/academics/hist/courses/hist-342/">HIST 342. The World Since 1945 (3 credits)</a><br><a href="https://catalog.csun.edu/academics/anth/courses/anth-212/">ANTH 212. Anthropology of Sex (3 credits)</a><h2>Section E</h2><a href="#">None</a><br><a href=""></a><h2>Section F</h2><a href="https://catalog.csun.edu/academics/rs/courses/rs-306/">RS 306. American Religious Diversity (3 credits)</a><br><a href="https://catalog.csun.edu/academics/rs/courses/rs-390/">RS 390. Buddhism (3 credits)</a>',

    '<h1>Computer Engineering</h1><h2>Section A</h2><a href="https://catalog.csun.edu/academics/chs/courses/chs-151/">CHS 151. Freshman Speech Communication (3 credits)</a><br><a href="https://catalog.csun.edu/academics/aas/courses/aas-115/">AAS 115. Approaches to University Writing (3 credits)</a><h2>Section B</h2><a href="https://catalog.csun.edu/academics/phys/courses/phys-220a/">PHYS 220A. Mechanics (3 credits)</a> and <a href="https://catalog.csun.edu/academics/phys/courses/phys-220al/">Lab(1 credit)</a><br><a href="https://catalog.csun.edu/academics/phys/courses/astr-152/">ASTR 152. Elementary Astronomy (3 credits)</a><h2>Section C</h2><a href="https://catalog.csun.edu/academics/mcll/courses/clas-315/">CLAS 315. Greek and Roman Mythology (3 credits)</a><br><a href="https://catalog.csun.edu/academics/ctva/courses/ctva-210/">CTVA 210. Television-Film Aesthetics (3 credits)</a><h2>Section D</h2><a href="https://catalog.csun.edu/academics/pols/courses/pols-155/">POLS 155. American Political Institutions (3 credits)</a><br><a href="https://catalog.csun.edu/academics/anth/courses/anth-153/">ANTH 153. Temples, Tombs and Treasures? An Introduction to Archaeology (3 credits)</a><h2>Section E</h2><a href="https://catalog.csun.edu/academics/phil/courses/phil-180/">PHIL 180. Human Nature and the Meaning of Life (3 credits)</a><br><a href="#"></a><h2>Section F</h2><a href="https://catalog.csun.edu/academics/aas/courses/aas-360/">AAS 360. Asian American Immigration Global Perspective (3 credits)</a><br><a href="https://catalog.csun.edu/academics/anth/courses/anth-308/">ANTH 308. Gender and Culture (3 credits)</a>',

    '<h1>Civil Engineering</h1><h2>Section A</h2><a href="https://catalog.csun.edu/academics/coms/courses/coms-151l/">COMS 151/L. Fundamentals of Public Speaking and Lab (2/1 credits)</a><br><a href="https://catalog.csun.edu/academics/engl/courses/engl-115/">ENGL 115. Approaches to University Writing (3 credits)</a><h2>Section B</h2><a href="https://catalog.csun.edu/academics/chem/courses/chem-101/">CHEM 101. General Chemistry I (4 credits)</a> and <a href="https://catalog.csun.edu/academics/chem/courses/chem-101l/">Lab (1 credit)</a><br><a href="https://catalog.csun.edu/academics/chem/courses/chem-102/">CHEM 102. General Chemistry II (4 credits)</a> and <a href="https://catalog.csun.edu/academics/chem/courses/chem-102l/">Lab (1 credit)</a><h2>Section C</h2><a href="https://catalog.csun.edu/academics/art/courses/art-140/">ART 140. Beginning Two-Dimensional Design (3 credits)</a><br><a href="https://catalog.csun.edu/academics/art/courses/art-124a/">ART 124A. Drawing I (3 credits)</a><h2>Section D</h2><a href="https://catalog.csun.edu/academics/geog/courses/geog-170/">GEOG 170. Water Resources of California (3 credits)</a><br><a href="#"></a><h2>Section E</h2><a href="https://catalog.csun.edu/academics/coms/courses/coms-150/">COMS 150. Introduction to Communication Studies (3 credits)</a><br><a href="https://catalog.csun.edu/academics/geol/courses/geol-104/">GEOL 104. Living with Earthquakes in California (3 credits)</a><h2>Section F</h2><a href="https://catalog.csun.edu/academics/mcll/courses/span-102/">SPAN 102. Elementary Spanish II (4 credits)</a><br><a href="https://catalog.csun.edu/academics/msem/courses/mse-302/">MSE 302. Women in Mathematics, Science and Engineering (3 credits)</a>',

    '<h1>Biochemistry</h1><h2>Section A</h2><a href="https://catalog.csun.edu/academics/engl/courses/engl-215/">ENGL 215. Critical Thinking About Research Writing (3 credits)</a><br><a href="#"></a><h2>Section B</h2><a href="https://catalog.csun.edu/academics/phys/courses/phys-220b/">PHYS 220B. Electricity and Magnetism (3 credits)</a> and <a href="https://catalog.csun.edu/academics/phys/courses/phys-220bl/">Lab (1 credit)</a><br><a href="#"></a><h2>Section C</h2><a href="https://catalog.csun.edu/academics/mus/courses/mus-107/">MUS 107. Music Today (3 credits)</a><br><a href="#"></a><h2>Section D</h2><a href="https://catalog.csun.edu/academics/hist/courses/hist-270/">HIST 270. The United States to 1865 (3 credits)</a><br><a href="#"></a><h2>Section E</h2><a href="https://catalog.csun.edu/academics/art/courses/art-151/">ART 151. Photography as Art (3 credits)</a><br><a href="#"></a><h2>Section F</h2><a href="https://catalog.csun.edu/academics/mcll/courses/armn-101/">ARMN 101. Elementary Armenian I (3 credits)</a><br><a href="#"></a>'

]
