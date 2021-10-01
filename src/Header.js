const routes = [
     {
          viewname : "About Us"
     },
     {
          viewname : "Team",
          subviews : [
               {
                    subviewname : "Consultative",
               },
               {
                    subviewname : "Core"
               },
               {
                    subviewname : "Collaborative"
               },
               {
                    subviewname : "Academic Council"
               },
               {
                    subviewname : "Administration"
               },
          ]
     },
     {
          viewname : "Courses",
          subviews : [
               {
                    subviewname : "Integrated Career Guidance",
                    nestedsubviews : [
                         {
                              nestedviewname: "Foundation Course"
                         },
                         {
                              nestedviewname: "Exam Oriented Course"
                         },
                         {
                              nestedviewname: "Professional & Employable Course"
                         },
                         {
                              nestedviewname: "FullTime Residential Course"
                         }
                    ]
               },
               {
                    subviewname : "Schools of Excellence",
                    nestedsubviews : [
                         {
                              nestedviewname: "School of Data Science"
                         },
                         {
                              nestedviewname: "School of Languages"
                         },
                         {
                              nestedviewname: "School of Media & Journalism"
                         },
                         {
                              nestedviewname: "School of Law"
                         },
                         {
                              nestedviewname: "School of Counselling"
                         }
                    ]
               },
               {
                    subviewname : "Entrepreneurship"
               },
               {
                    subviewname : "Research & Develipment"
               },
          ]
     },
     {
          viewname : "Programs",
          subviews : [
               {
                    subviewname : "Schools"
               },
               {
                    subviewname : "Colleges"
               },
               {
                    subviewname : "Centers"
               },
          ]
     },
     {
          viewname : "Admission"
     },
     {
          viewname : "Downloads",
          subviews : [
               {
                    subviewname : "Texts"
               },
               {
                    subviewname : "Question Bank"
               },
               {
                    subviewname : "Model Exams"
               },
          ]
     },
     {
          viewname : "Publications",
          subviews : [
               {
                    subviewname : "Magazine"
               },
               {
                    subviewname : "Periodicals"
               },
               {
                    subviewname : "Journals"
               },
               {
                    subviewname : "Books"
               },
          ]
     },
     {
          viewname : "Facilities",
          subviews : [
               {
                    subviewname : "Centers"
               },
               {
                    subviewname : " Class Room"
               },
               {
                    subviewname : "Library"
               },
               {
                    subviewname : "Digital Lab"
               },
          ]
     },
     {
          viewname : "News & Events",
          subviews : [
               {
                    subviewname : "Announcement"
               },
               {
                    subviewname : "Achievements"
               },
          ]
     },
     {
          viewname : "FAQs"
     },     
     {
          viewname : "Site Map"
     },     
     {
          viewname : "Contacts"
     },
]

export default routes;
