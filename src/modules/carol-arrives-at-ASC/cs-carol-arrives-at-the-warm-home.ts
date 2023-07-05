import make from '../../core/util/make'

const atTheWarmHouse = make.module({
    id: 'at-the-warm-home',
    submodules: [],
    convoSegments: [
        {
            id: 'around-the-table',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol, a curious and open-minded woman, found herself standing at the foot of the Cascade, a magnificent memorial with cascading steps. The memorial stood tall, symbolizing the collective memory and resilience of a people. As she marveled at the beauty of the monument, Carol couldn\'t help but notice the intricate details carved into each step, representing the lives lost in the Armenian genocide. Suddenly, a kind voice broke her reverie. It was Anoush, a warm-hearted individual who had a deep connection to the memorial. Anoush recognized Carol\'s curiosity and began to share the story behind the monument, explaining the significance of each feature and its encoded meaning. As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about comparing datasets: Idea 1: Real-world datasets - The story revolves around the comparison of real-world datasets, which are analogous to the features comprising the Cascade memorial in the story. Idea 2: Features and their composition - The intricate carvings on the steps of the memorial represent the features of the dataset, highlighting the importance of understanding the composition of features in datasets. Idea 3: Encoding of features - The encoded meaning behind each carving on the steps of the memorial mirrors how features in datasets are encoded, emphasizing the significance of decoding and interpreting the information they hold. Idea 4: Comparing datasets: Just as Carol learns about the stories and history embedded in the memorial\'s features, comparing datasets involves analyzing their features to identify similarities and differences, leading to valuable insights. Idea 5: Uncovering meaningful insights - By exploring the composition and encoding of features, both in the memorial and datasets, Carol discovers the hidden narratives and stories within the data, reflecting the power of uncovering meaningful insights through dataset comparison.',
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'choosetopic',
            convo: [
                {
                    type: 'text',
                    text:
                        "Choose a topic to explore",
                },
            ],
            choices: [
                {
                    text: "Size of Dataset",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['availability'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Quality of data",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['desiredoutput'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Storage",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['nature'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Time",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['trade-offs'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Evaluation process",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['requirements'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Arrive at Anoush's house",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['gohome'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'availability',
            convo: [
                {
                    type: 'text',
                    text: `Carol had always been curious about Anoush's house. She had heard so much about it, the stories of warmth and memories that filled its walls. Today, she finally had the chance to visit. As she stepped inside, she was greeted by Ani and Anoush with warm smiles. Carol's eyes wandered around the house, taking in its beauty and grandeur. Each room held its own unique charm, filled with furniture, decorations, and cherished mementos. She marveled at the spaciousness and the intricate details that adorned every corner. It was a house that seemed to have a story to tell. In this moment, Carol couldn't help but draw a metaphorical connection to the concept of evaluating a dataset used to train a real AI system. The size of the dataset, in this case, was reflected in the vastness of Anoush's house. Just as a large dataset contains a substantial number of data points, rooms in the house seemed to stretch far and wide. It signified the potential richness of information that could be derived from a comprehensive dataset. The size of the dataset played a crucial role in training an AI system. A larger dataset could provide a more representative sample of the real-world scenario, reducing biases and enabling better generalization. Similarly, Anoush's house seemed to encompass various aspects of life, offering a comprehensive view of their shared experiences. As Carol continued to explore, she realized that evaluating the size of the dataset wasn't solely about its sheer volume. It was also about the diversity and richness of the data it contained. Just as Anoush's house had different rooms with distinct purposes and styles, a dataset could comprise various types of data, such as text, images, or numerical values. The more diverse the dataset, the more comprehensive the understanding it could provide. Carol's appreciation for the size of Anoush's house grew, recognizing that it held the potential to tell stories and reveal insights. Similarly, in evaluating a dataset, understanding its size was a crucial step in determining its suitability for training an AI system. A dataset that is too small might lack the necessary information for meaningful learning, while an excessively large dataset might require more resources for processing and training. As Carol joined Ani and Anoush at the dining table, they shared a delightful meal together. In this moment of togetherness, Carol realized that evaluating the size of a dataset was about finding the right balance. It was about finding a dataset that was substantial enough to capture the complexities of the problem at hand, yet manageable in terms of resources and computational requirements. In this exploration of Anoush's house, Carol found herself immersed in the metaphorical realm of evaluating a dataset. The size of the dataset, like the vastness of the house, held the promise of uncovering valuable insights and enabling the training of a robust AI system. It was a reminder that every dataset had a unique story to tell, and by understanding its size, AI practitioners could embark on a journey of discovery and innovation.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'desiredoutput',
            convo: [
                {
                    type: 'text',
                    text: 'Carol\'s attention turned to the metaphorical connection between the warm atmosphere of the house and the AI concept of evaluating a dataset used to train a real AI system, specifically focusing on the quality of data. Just as the quality of ingredients determines the flavor and satisfaction of a meal, the quality of data profoundly influences the performance and reliability of an AI system. In the midst of their conversation, Anoush shared the story behind the meal they were about to enjoy. The ingredients were meticulously chosen—fresh vegetables from a local farm, spices carefully sourced, and recipes passed down through generations. It was a reflection of the high standards they set for their culinary experience. The parallel to evaluating the quality of data in an AI system became clear to Carol. Just as Anoush and her family curated the finest ingredients for their meal, the quality of data used for training an AI system is of utmost importance. The data must be accurate, relevant, and representative of the real-world scenarios it aims to understand and predict. Ani, with her vast experience, explained that the data acquisition process required great attention to detail. Similar to sourcing the freshest produce, acquiring data involved selecting reliable sources, ensuring proper data collection methods, and minimizing biases or errors. This meticulous approach ensured the accuracy and integrity of the dataset. Carol\'s gaze wandered around the house, noticing the carefully labeled artifacts and family photographs adorning the walls. Ani\'s explanation of the data labeling process resonated with her observations. Just as each item in the house was labeled with care and precision, data labeling involved assigning accurate and consistent annotations to each data point, enabling the AI system to understand and learn from the dataset effectively. The topic of storage and the estimated time to produce the dataset surfaced during their mealtime conversation. Anoush shared how they managed their pantry, optimizing space and organizing ingredients to ensure freshness and accessibility. Carol related this to the storage requirements of a dataset, where considerations of data size, format, and scalability were essential to efficiently manage and retrieve the data during training. As the meal concluded, Carol felt a sense of fulfillment, both from the delicious food and the insightful conversation. She recognized that evaluating the quality of data for an AI system was a multifaceted process, much like the art of preparing a remarkable meal. It involved attention to detail, careful selection, accuracy, and efficient management. Leaving Anoush\'s house, Carol carried with her a newfound appreciation for the importance of evaluating the quality of data in AI systems. Just as Anoush and her family aimed to create memorable dining experiences through meticulous ingredient selection, data acquisition, labeling, storage, and production considerations were critical to developing reliable and effective AI models. With this metaphorical connection in mind, Carol understood that just as a thoughtfully prepared meal brings joy and satisfaction, an AI system trained on a high-quality dataset holds the potential to deliver accurate and meaningful insights, transforming the way we perceive and interact with the world.',
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'nature',
            convo: [
                {
                    type: 'text',
                    text: `Just as each item in Anoush\'s house had its designated place, the storage of a dataset for training an AI system was crucial for its efficiency and accessibility. Carol thought of the dataset as the collection of cherished possessions that needed to be carefully organized and stored for easy retrieval. Ani led Carol into the dining area, where a beautifully set table awaited them. The aroma of a home-cooked meal filled the room, making Carol\'s stomach rumble in anticipation. The thought of storing food, much like storing a dataset, came to her mind. Proper storage ensures the preservation and availability of resources when needed. During their meal, Anoush shared stories of how her family cultivated their own vegetables and fruits in a small garden. They carefully harvested and preserved the excess produce to enjoy during the colder months. Carol couldn\'t help but draw a parallel to the storage considerations in an AI system. Just as Anoush\'s family stored their garden\'s bounty for future use, the storage of a dataset involved making decisions about data formats, compression techniques, and backup strategies to optimize space and ensure data integrity. Efficient storage enabled quick access to the dataset and facilitated seamless training of the AI system. Carol\'s eyes wandered to a shelf filled with photo albums and memory boxes, preserving moments and mementos from Anoush\'s family history. The concept of preserving memories resonated with the storage aspect of an AI dataset. Just as these keepsakes held sentimental value, the dataset stored valuable information that could shape the AI system\'s learning and decision-making. Ani shared her experience of carefully organizing and labeling the family\'s heirlooms, ensuring that each item had its place and meaning. The analogy struck Carol, connecting the storage of physical objects with the organization and labeling of data in an AI dataset. Proper labeling and documentation were essential to facilitate efficient retrieval and understanding of the dataset\'s contents. As the meal drew to a close, Carol reflected on the significance of storage in evaluating a dataset for training an AI system. Just as the storage in Anoush\'s house provided order and accessibility to their possessions, efficient storage in AI systems played a critical role in enabling effective training and utilization of the dataset. Leaving Anoush\'s house, Carol carried with her a deeper understanding of the importance of storage in the evaluation of an AI dataset. The metaphorical connection between the organized and accessible storage in Anoush\'s house and the well-structured storage of a dataset underscored the significance of this aspect in developing robust and efficient AI systems. With this newfound appreciation, Carol recognized that by carefully considering the storage requirements, one could ensure the dataset\'s longevity, accessibility, and optimal utilization, ultimately leading to the development of powerful AI models capable of uncovering valuable insights and transforming the way we interact with the world.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'trade-offs',
            convo: [
                {
                    type: 'text',
                    text: `In Anoush\'s living room, Carol noticed a collection of vintage clocks adorning the walls. Each clock ticked away, marking the passage of time, reminding her of the crucial role time played in evaluating a dataset for training an AI system. Just as the hands of the clocks moved steadily, time played a significant role in the acquisition, labeling, and storage of data in a dataset. Carol understood that the dataset\'s creation required careful consideration of the time it took to gather the data, ensure its accuracy, and label it appropriately. Ani led Carol to the dining table, where a delicious meal awaited them. As they sat together, enjoying the flavors and engaging in conversation, Carol contemplated the role of time in evaluating a dataset. Time, she realized, was not only about the duration it took to gather the data, but also the impact it had on the dataset\'s quality and relevance. Just as a meal required time to prepare, the dataset needed sufficient time for collection, ensuring comprehensive coverage of the desired features. Carol admired Ani\'s culinary skills and realized that the time invested in acquiring and preparing the ingredients directly influenced the meal\'s taste and enjoyment. Similarly, the time invested in obtaining and curating the dataset influenced the accuracy and usefulness of the AI system trained on it. As they relished the meal, Carol engaged in conversation with Anoush, who shared stories about the painstaking efforts her family had made to compile their ancestral history. They had spent countless hours researching, documenting, and organizing the information, ensuring its accuracy and relevance. The storytelling experience mirrored the careful consideration of time in evaluating a dataset. Time was necessary not only for data acquisition but also for meticulous labeling and organizing. An AI dataset required proper documentation and categorization to maximize its effectiveness in training the AI system. As the evening progressed, Carol admired a vintage hourglass displayed on a shelf, symbolizing the passage of time. She realized that evaluating a dataset also involved estimating the time required to produce it. Just as the hourglass measured the flow of time, estimating the dataset creation time allowed researchers and developers to plan their projects effectively. Carol understood that by considering the time aspect in evaluating a dataset, one could assess the feasibility, efficiency, and potential impact of training an AI system on it. The time invested in acquiring, labeling, and storing the data influenced the dataset\'s quality, reliability, and suitability for the intended AI application. Leaving Anoush\'s house, Carol carried with her a deeper understanding of the role of time in evaluating a dataset for training an AI system. The metaphorical connection between the ticking clocks, the cooking process, the storytelling, and the hourglass reinforced the importance of time in dataset evaluation. With this newfound insight, Carol recognized that by carefully considering the time factor, one could ensure that the dataset\'s creation aligns with project goals and timelines, leading to the development of powerful AI models capable of uncovering meaningful insights and driving real-world impact.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'requirements',
            convo: [
                {
                    type: 'text',
                    text: `Just as Carol examined the books, carefully assessing their content, relevance, and quality, the evaluation process in AI involved a meticulous examination of the dataset used to train a real AI system. Ani and Anoush joined Carol, and they settled around the dining table for a delightful meal. As they enjoyed the food, Carol\'s mind wandered back to the metaphorical representation of dataset evaluation. The meal, like the evaluation process, required a comprehensive analysis of its key aspects. Size, she realized, played a significant role in evaluating a dataset. Just as a well-prepared meal portioned appropriately catered to the number of guests, the size of a dataset influenced its effectiveness in training an AI system. An AI developer had to consider the dataset\'s scale, ensuring it was neither too large nor too small, to strike the right balance for optimal performance. As Carol relished the flavors of the meal, she pondered the way the data had been acquired and labeled. The meticulous attention to detail in the meal\'s preparation mirrored the importance of acquiring and labeling data accurately in the evaluation process. Similarly, in AI, the way the data were obtained and labeled impacted the dataset\'s quality and suitability for training. Just as the ingredients were sourced carefully, ensuring their freshness and relevance to the dish, the dataset required a thoughtful approach to data acquisition and labeling to yield meaningful results. Glancing around Anoush\'s house, Carol observed the well-organized shelves and storage spaces. The storage required for the books aligned with the metaphorical representation of dataset evaluation. In AI, the storage requirements for a dataset were crucial to consider, just as the need for sufficient bookshelves to accommodate the collection. Adequate storage allowed for efficient access and retrieval of data, facilitating the evaluation process and subsequent use in training AI systems. During their conversation, Carol learned that Ani and Anoush had spent considerable time and effort producing a family cookbook. The estimated time to create such a comprehensive compilation resonated with the AI concept of evaluating a dataset. The estimation of time required to produce a dataset was akin to the commitment and dedication Ani and Anoush displayed in curating their family recipes. Time became a valuable aspect of the evaluation process, allowing researchers and developers to plan and allocate resources effectively. As the evening drew to a close, Carol realized that the evaluation process of a dataset involved a holistic examination of its size, data acquisition and labeling, storage requirements, and estimated time to produce. Each aspect was interconnected, just like the different elements that contributed to a delightful meal shared with loved ones. Leaving Anoush\'s house, Carol carried with her a deeper understanding of the evaluation process in AI. The metaphorical connection between the books, the meal, the storage spaces, and the estimated time reinforced the importance of a comprehensive evaluation in selecting the right dataset for training a real AI system. Armed with this newfound knowledge, Carol recognized the significance of a well-executed evaluation process in harnessing the full potential of datasets, enabling the development of powerful AI models capable of uncovering meaningful insights and driving real-world impact.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'gohome',
            convo: [
                {
                    type: 'text',
                    text: `Carol is at Anoush's house! Now test your knowledge before following Carol to explore`,
                },
            ],
            choices: [
                {
                    text: 'Question 1',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1'],
                                },
                            ],
                        },
                    ],
                },
                // {
                //     text: 'Question 2',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q2'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 3',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q3'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 4',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q4'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 5',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q5'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
            ],
        },
        {
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `In the story, how does the size of the dataset relate to evaluating a dataset for training an AI system?`,
                },
            ],
            choices: [
                {
                    text: 'The size of the dataset affects the performance of the AI system.',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The size of the dataset determines its freshness and relevance.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The size of the dataset determines the accuracy of data labeling.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The size of the dataset impacts the organization of storage spaces.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q1incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q2',
            convo: [
                {
                    type: 'text',
                    text: `That's correct! Next question:
                    What metaphorical representation in the story is used to describe the evaluation of data acquisition and labeling?`,
                },
            ],
            choices: [
                {
                    text: 'Carol enjoying a delightful meal.',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Carol examining the shelves filled with books.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Ani and Anoush creating a family cookbook.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Anoush\'s well-organized house.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q2incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q3',
            convo: [
                {
                    type: 'text',
                    text: `In the context of evaluating a dataset, what does storage refer to in the story? `,
                },
            ],
            choices: [
                {
                    text: 'The size of the dataset.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The arrangement of Anoush\'s house.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The physical space required to store books on shelves.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The capacity of a computer\'s hard drive.',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q3incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        
        {
            id: 'q4',
            convo: [
                {
                    type: 'text',
                    text: `How does the estimated time to produce a dataset relate to the evaluation process in the story?`,
                },
            ],
            choices: [
                {
                    text: 'The estimated time reflects the freshness of the data.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The estimated time determines the size of the dataset.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The estimated time affects the performance of the AI system.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The estimated time helps in planning and resource allocation.',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q4incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q5',
            convo: [
                {
                    type: 'text',
                    text: `That’s correct! Next question: What does the story imply about the importance of dataset evaluation?`,
                },
            ],
            choices: [
                {
                    text: 'It ensures the quality and suitability of the dataset for AI training.',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['completed'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'It is unnecessary and time-consuming.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'It guarantees the accuracy of data labeling.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'It determines the storage capacity required.',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q5incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'completed',
            convo: [
                {
                    type: 'text',
                    text: `Finish!`,
                },
            ],
            choices: [
                {
                    text: 'Home',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'at-the-warm-home',
                                        'around-the-table',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                
            ],
        },

    ],
})

export default atTheWarmHouse
