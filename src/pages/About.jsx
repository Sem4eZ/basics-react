import React from "react";

const About = () => {
  const posts = [
    {
      author: "John Doe",
      date: "December 2, 2023",
      publicationDate: "2023-12-02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, lacus ut fringilla fringilla, velit nisi volutpat arcu, eu tincidunt nisl ligula vel urna. Nulla facilisi. Proin vel facilisis ex. Sed a ligula justo. Vivamus dictum bibendum augue, id interdum ligula facilisis id. Aenean non hendrerit enim. In hac habitasse platea dictumst. Suspendisse potenti. Integer condimentum metus eu justo dapibus, vel semper leo gravida. In hac habitasse platea dictumst. Aliquam euismod neque vel neque malesuada, id aliquet lacus sodales.",
    },
    {
      author: "Jane Smith",
      date: "December 1, 2023",
      publicationDate: "2023-12-01",
      description:
        "Curabitur ut dui vel mauris varius interdum. Integer ut nunc augue. Fusce nec sapien at metus efficitur aliquam nec vel ex. Nulla auctor urna vel elit auctor, ac consequat arcu facilisis. Praesent bibendum sapien nec metus ultrices, eget vulputate odio fermentum. Aenean non urna vel velit tincidunt auctor. Fusce ultricies bibendum mi, vel tincidunt odio dapibus at. Quisque tristique, ex vel vulputate dictum, sem urna pharetra nisl, vel commodo leo nisi eget velit.",
    },
    {
      author: "Alice Johnson",
      date: "November 30, 2023",
      publicationDate: "2023-11-30",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, lacus ut fringilla fringilla, velit nisi volutpat arcu, eu tincidunt nisl ligula vel urna. Nulla facilisi. Proin vel facilisis ex. Sed a ligula justo. Vivamus dictum bibendum augue, id interdum ligula facilisis id. Aenean non hendrerit enim. In hac habitasse platea dictumst. Suspendisse potenti. Integer condimentum metus eu justo dapibus, vel semper leo gravida. In hac habitasse platea dictumst. Aliquam euismod neque vel neque malesuada, id aliquet lacus sodales.",
    },
    {
      author: "Bob Williams",
      date: "November 29, 2023",
      publicationDate: "2023-11-29",
      description:
        "Curabitur ut dui vel mauris varius interdum. Integer ut nunc augue. Fusce nec sapien at metus efficitur aliquam nec vel ex. Nulla auctor urna vel elit auctor, ac consequat arcu facilisis. Praesent bibendum sapien nec metus ultrices, eget vulputate odio fermentum. Aenean non urna vel velit tincidunt auctor. Fusce ultricies bibendum mi, vel tincidunt odio dapibus at. Quisque tristique, ex vel vulputate dictum, sem urna pharetra nisl, vel commodo leo nisi eget velit.",
    },
    {
      author: "Eva Davis",
      date: "November 28, 2023",
      publicationDate: "2023-11-28",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, lacus ut fringilla fringilla, velit nisi volutpat arcu, eu tincidunt nisl ligula vel urna. Nulla facilisi. Proin vel facilisis ex. Sed a ligula justo. Vivamus dictum bibendum augue, id interdum ligula facilisis id. Aenean non hendrerit enim. In hac habitasse platea dictumst. Suspendisse potenti. Integer condimentum metus eu justo dapibus, vel semper leo gravida. In hac habitasse platea dictumst. Aliquam euismod neque vel neque malesuada, id aliquet lacus sodales.",
    },
    {
      author: "Mike Brown",
      date: "November 27, 2023",
      publicationDate: "2023-11-27",
      description:
        "Curabitur ut dui vel mauris varius interdum. Integer ut nunc augue. Fusce nec sapien at metus efficitur aliquam nec vel ex. Nulla auctor urna vel elit auctor, ac consequat arcu facilisis. Praesent bibendum sapien nec metus ultrices, eget vulputate odio fermentum. Aenean non urna vel velit tincidunt auctor. Fusce ultricies bibendum mi, vel tincidunt odio dapibus at. Quisque tristique, ex vel vulputate dictum, sem urna pharetra nisl, vel commodo leo nisi eget velit.",
    },
    {
      author: "Sophia Wilson",
      date: "November 26, 2023",
      publicationDate: "2023-11-26",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, lacus ut fringilla fringilla, velit nisi volutpat arcu, eu tincidunt nisl ligula vel urna. Nulla facilisi. Proin vel facilisis ex. Sed a ligula justo. Vivamus dictum bibendum augue, id interdum ligula facilisis id. Aenean non hendrerit enim. In hac habitasse platea dictumst. Suspendisse potenti. Integer condimentum metus eu justo dapibus, vel semper leo gravida. In hac habitasse platea dictumst. Aliquam euismod neque vel neque malesuada, id aliquet lacus sodales.",
    },
  ];

  return (
    <div className="container mx-auto bg-white shadow-lg rounded-md overflow-hidden my-4 p-8">
      <h1 className="text-3xl font-bold mb-4">
        Добро пожаловать в моё приложение!
      </h1>

      <h2 className="text-2xl font-bold mb-2">Последние посты:</h2>
      <div className="flex flex-wrap -mx-4">
        {posts.map((post, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
            <div className="bg-gray-100 p-4 rounded-md h-[100%]">
              <h3 className="text-xl font-bold mb-2">{post.author}</h3>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-gray-500 text-sm mb-2">
                Дата публикации: {post.publicationDate}
              </p>
              <p className="text-gray-800">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
