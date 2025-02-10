create database dgf_dummy;

-- use replica1;

use dgf_dummy;

-- New Training Request Table

CREATE TABLE `mdl_newtrainingrequest` (

  `requestid` bigint(10) NOT NULL AUTO_INCREMENT,

  `source` longtext  NOT NULL,

  `trainingobj` longtext ,

  `requestonbehalfof` bigint(10) ,

  `requesttype` longtext COLLATE utf8mb4_unicode_ci ,

  `projectid` bigint(10) ,

  `projectname` longtext COLLATE utf8mb4_unicode_ci,

  `expecteddeadline` bigint(10) ,

  `techstack` bigint(10) ,

  `primaryskill` bigint(10) ,

  `otherskill` longtext COLLATE utf8mb4_unicode_ci ,

  `suggestedcompletioncriteria` longtext COLLATE utf8mb4_unicode_ci ,

  `comments` longtext COLLATE utf8mb4_unicode_ci,

  `numberofpeople` bigint(10) DEFAULT NULL,

  `employeelevel` longtext COLLATE utf8mb4_unicode_ci,

  `requestedby` longtext COLLATE utf8mb4_unicode_ci,

  `requestedbyid` bigint(10) ,

  `createddate` bigint(10) ,

  `modifiedby` bigint(10) ,

  `modifieddate` bigint(10) ,

  `requeststatus` tinyint(2) ,

  `approvedby` bigint(10) ,

  `newprospect` tinyint(1) ,

  `newprojectname` longtext COLLATE utf8mb4_unicode_ci,

  `request_category` tinyint(1) ,

  `learningtype` bigint(10) ,

  `skilldevelopment` bigint(10) ,

  PRIMARY KEY (`requestid`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPRESSED COMMENT='All training Request Data';

select * from mdl_newtrainingrequest ;


-- Create source table

CREATE TABLE source (

    source_id INT AUTO_INCREMENT PRIMARY KEY,

    source_name VARCHAR(255) NOT NULL

);

INSERT INTO source ( source_name)

VALUES ('Account Growth Function (AGF)'),('Resource Manager (RM)'),

       ('Delivery Head (DH)'),('Tech Function'),

       ('DSU '),('Function Owners'),('CapDev'),

       ('COE'),('DM (Delivery Manager)'),('Self driven (DM/Employee)');

Select * from source;


-- Create training_obj table

CREATE TABLE training_obj (

    training_id INT AUTO_INCREMENT PRIMARY KEY,

    training_name VARCHAR(255) NOT NULL,

    source_id INT,  -- Foreign key to source

    FOREIGN KEY (source_id) REFERENCES source(source_id)

);

-- Insert sample data into training_obj table

INSERT INTO training_obj (training_name, source_id)

VALUES 

    ('Offering', 1), 

    ('Consulting mindset', 1), 

    ('Future leadership development (ELW, FutureFit, FastTrack…)', 2), 

    ('Certifications', 2),

    ('Specialized trainings (Train the trainer…)', 2),

    ('Critical skillgap or skill upgrade at org level', 2),

    ('Salesforce pipleline readiness (Upskill, Cross-skill)', 2),

    ('Upsell offering', 3),

    ('Leadership development', 3),

    ('Key people development', 3),

    ('Specialized skills development', 3),

    ('Competency development', 3),

    ('Specialized compliances', 3),

    ('Platforms specific', 3),

    ('Certifications', 3),

    ('Dev (mainstream to high-tech)', 4),

    ('Test (functional & Non-functional)', 4),

    ('DevOps', 4),

	('Cloud', 4),

	('Data', 4),

    ('AI', 4),

    ('UI-UX', 4),

    ('Architecture/Design', 4),

    ('Advanced Learning / Specialization (Prompt engineering..)', 4),

    ('Acorss org', 5),

    ('Cloud', 6),

    ('Data', 6),

    ('DevOps', 6),

    ('UI-UX', 6),

    ('ATG', 6),

	('Cultural shift programs across org', 7),

    ('Offering based', 8),

    ('Upskill', 9),

    ('Skillgap', 9),

    ('Softskills', 9),

    ('O3 based (suggested learning, aspirations…)', 9),

    ('Employee Talk driven', 9),

    ('DM driven', 10),

    ('Employee driven', 10);
 
select * from training_obj;


-- Query to fetch all sources and their respective training objects

SELECT s.source_name, t.training_name

FROM source s

LEFT JOIN training_obj t ON s.source_id = t.source_id

ORDER BY s.source_name, t.training_name;
 
CREATE TABLE role(

role_id INT AUTO_INCREMENT PRIMARY KEY,

role_name VARCHAR(255) NOT NULL

);

INSERT INTO role(role_name)

VALUES ('Delivery Manager (DM) Role'),('Account Growth Function (AGF) + DH'),('Delivery Head (DH)  Role'),('CapDev Role'),

       ('COE Role'),('DSU Role'),('Function Owner Role'),('RM Role'),('Tech Function Role'),('SPOC Role');
 
SELECT * FROM role;

-- TechStack Table

CREATE TABLE techstack(

stack_id INT AUTO_INCREMENT PRIMARY KEY,

stack_name VARCHAR(255) NOT NULL

);

INSERT INTO techstack ( stack_name)

VALUES ('Scripting (MEAN, MERN, RoR, JS, Vue..)'),('QA (Manual, Automation, Performance, Security)'),

('Microsoft .Net'),('Java'),('Mobile'),('LCNC platform (Workato, Logi)'),('UX-UI-HTML'),('Python'),

('Project Management'),('PHP (Core PHP, Drupal, IOMAD, Moodle)'),('SME/BA'),('DevOps'),

('Data (Database/DBA/DWH/Visualization)'),('Misc (Reporting tool, PS/Support, Infrastructure)'),

('Scrum Master'),('AI-ML / Data Science'),('Infrastructure'),('Softskills');

SELECT * FROM techstack ;

CREATE TABLE primaryskill(

skill_id INT AUTO_INCREMENT PRIMARY KEY,

skill_name VARCHAR(255) NOT NULL,

stack_id INT,  -- Foreign key to techstack

FOREIGN KEY (stack_id) REFERENCES techstack (stack_id)

);

INSERT INTO primaryskill (skill_name , stack_id )

VALUES 

      ('AngularJs',1),('MERN',1),('NodeJs',1),('ReactJs',1),('ROR',1),('TypeScript',1),('Vue.Js',1),

      ('Performance',2),('Security',2),('Automation',2),('Functional',2),('SDET',2),

      ('Microsoft .Net',3), ('Microsoft .Net + Angular',3),

      ('Java',4),

      ('Android',5),('Flutter',5),('iOS',5),('React Native',5),('Xamarine',5),

      ('Logi',6),('Workato',6),

      ('HTML+CSS',7),(' UI Design',7),('UX',7),

      ('Python',8),

      ('Agile',9),('SAFe Agile',9),('Project Management Tools (JIRA, Basecamp…)',9),('Scrum Master',9),('Basic Project Management (Project, People, Conflict, Customer, Planning…)',9),

      ('Moodle',10),('IOMAD',10),('Content Management Systtems (WordPress, Drupal…)',10),('PHP',10),

      ('SME',11),

      ('AWS',12),('Azure',12),('GCP',12),

      ('SQL queries',13),('DBA',13),('Visualization (Power BI, Klera…)',13),('Data Warehouse / Data Lake',13),

      ('Infrastructure',14),('Instructure',14),('Professional Services',14),

      ('Scrum Master',15),

      ('AI-ML',16),('Data Science',16),('ChatGPT',16),('NLP',16),

      ('Infrastructure',17),

      ('Business Communication',18),('Time Management',18),('Client Interaction',18),('Managing teams',18);

Select * from primaryskill;

-- Query to fetch all sources and their respective training objects

-- SELECT s.stack_name, t.skill_name

-- FROM techstack s

-- LEFT JOIN primaryskill t ON s.stack_id = t.skill_id

-- ORDER BY s.stack_name, t.skill_name;

CREATE TABLE projectname (

    ProjectID INT PRIMARY KEY,

    ProjectName VARCHAR(255)

);

INSERT INTO projectname (ProjectID, ProjectName) VALUES

(1, 'AI Chatbot'),

(2, 'E-commerce Platform'),

(3, 'Social Media Analytics'),

(4, 'IoT Home Automation'),

(5, 'Mobile Health App'),

(6, 'Blockchain Voting System'),

(7, 'Augmented Reality App'),

(8, 'Data Visualization Dashboard'),

(9, 'Online Learning Platform'),

(10, 'Cybersecurity Monitoring Tool');

SELECT * FROM projectname;


-- CREATE TABLE users (

--     userId INT AUTO_INCREMENT PRIMARY KEY,

--     source VARCHAR(50) NOT NULL,

--     role VARCHAR(50) NOT NULL,

--     username VARCHAR(50) NOT NULL UNIQUE,

--     password VARCHAR(255) NOT NULL

-- );

-- Create the logintable

CREATE TABLE logintable (

    emp_id varchar(255) PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    email VARCHAR(255) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    role_id INT,

    FOREIGN KEY (role_id) REFERENCES role(role_id)

);

truncate table logintable;

INSERT INTO logintable (emp_id, name, email, password,role_id) VALUES
('HS2735', 'Swaroop.bidkar', 'swaroop.bidkar@example.com', '1234', 8), 
('HS2736', 'Shreyansh.barve', 'shreyansh.barve@example.com', '1234', 9 ),     -- CAPDEC
('HS2733', 'harsh.jagptap', 'Harsh.jagtap@example.com', '1234',  3), -- Delivery Head (DH)
('HS2731', 'sonia.sahu', 'sonia.sahu@example.com', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4zF5f8k1d5f5f5f5f5f',  2),  -- 
('HS2734', 'shruti.rawat', 'shruti.rawat@example.com', '1234',  10),    -- SPOC
('HS2732', 'sanket tikde', 'sanket.tikde@example.com', '1234',  9),  -- RM
('HS2737', 'theresa.chalis', 'theresa.chalis@example.com', '1234', 8),   -- SPOC
('HS2789', 'Manisha.dubey', 'Manisha.dubey@example,com', '1234', 4); -- CAPDEV

 
 SELECT * FROM logintable ;
 
 
 
 CREATE TABLE role_source_assign (
    role_id INT,
    source_id INT,
    PRIMARY KEY (role_id, source_id),
    FOREIGN KEY (role_id) REFERENCES role(role_id),
    FOREIGN KEY (source_id) REFERENCES source(source_id)
);

INSERT INTO role_source_assign (role_id, source_id) VALUES
(1, 9),
(2, 3),
(2, 1),
(3, 3),
(3, 6),
(4, 7),
(5, 8),
(6, 5),
(7, 6),
(8, 2),
(9, 4),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(10, 5),
(10, 6),
(10, 7),
(10, 8),
(10, 9),
(10, 10);


CREATE TABLE employee (
    emp_id VARCHAR(100) PRIMARY KEY,
    emp_name VARCHAR(100),
    emp_email VARCHAR(100)
);
INSERT INTO employee (emp_id, emp_name, emp_email) VALUES
('HS1111', 'Aniket Verma', 'Aniket.Verma@example.com'),
('HS1112', 'Anish Deokar', 'Anish.Deokar@example.com'),
('HS1113', 'Sidhharth Mourya', 'Sidhharth.Mourya@example.com'),
('HS1114', 'Suraj Sahu', 'Suraj.Sahu@example.com'),
('HS1115', 'Shreya Dalal', 'Shreya.Dalal@example.com'),
('HS1116', 'Effy Joe', 'Effy.Joe@example.com'),
('HS1117', 'Sneha Sr', 'Sneha.sr@example.com');

select * from employee;


CREATE TABLE org_employee_level (
    id INT PRIMARY KEY AUTO_INCREMENT,
    job_title VARCHAR(100)
);
INSERT INTO org_employee_level (job_title) VALUES
('QA Lead'),
('Scrum Master'),
('Senior Engineer'),
('Tech Lead'),
('Tech Specialist'),
('UI/UX Lead'),
('UI/UX Specialist');

select * from org_employee_level;

