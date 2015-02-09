$(function() {

    var data = {

        name: "John Doe",

        title: "A good job person",

        contactHead: "Contact",
        contact: [
            {type: "phone", info: "212-121-2121"},
            {type: "email", info: "chat@aol.com"},
            {type: "site", info: "<a href='http://cdn.geekwire.com/wp-content/uploads/2014/10/ballmercover-620x826.jpg'>linked.in/ballmer</a>"},
            {type: "location", info: "NY, NY"}
        ], 

        tag: "I'm lovable and worthy",

        intro: "I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy. I'm lovable and worthy.",

        skillsHead: "Skills",
        skills: [
            {name: "Being smart", compedence: "Good"},
            {name: "Being nice", compedence: "Good"},
            {name: "Comportment", compedence: "Bad"},
            {name: "Computers", compedence: "Yes"},
            {name: "People", compedence: "Person"},
        ],

        experinceHead: "Experince",
        experince: [
            {company: "General Electric", dates: "1989 - 2009", title: "Ceo", description: "A strategy is something like, an innovative new product; globalization, taking your products around the world; be the low-cost producer. A strategy is something you can touch; you can motivate people with; be number one and number two in every business. You can energize people around the message."},
            {company: "Company", dates: "0000 - 2000", title: "Associate", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            {company: "Place", dates: "2059-60", title: "Job", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        ],

        educationHead: "Education",
        education: [
            {degree: "Art", dates: "1989 - 2009", school: "Art School", description: "Some painters transform the sun into a yellow spot, others transform a yellow spot into the sun." },
            {degree: "Business", dates: "2000 - 1975", school: "U of B", description: "Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success." }
        ]
    };

    var templateScript = $('#resume-template').html();
    var template = Handlebars.compile(templateScript);

    Handlebars.registerPartial("description", $("#shoe-description").html());

    $("body").append(template(data));

});
