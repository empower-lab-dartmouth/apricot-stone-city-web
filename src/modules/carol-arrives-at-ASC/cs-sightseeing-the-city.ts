import make from '../../core/util/make'

const sightseeingTheCity = make.module({
    id: 'sightseeing-the-city',
    submodules: [],
    convoSegments: [
        {
            id: 'opening',
            convo: [
                {
                    type: 'text',
                    text:
                        '<b>Carol, an adventurous woman with a zest for exploration, found herself immersed in the enchanting land of Armenia. As she strolled through the bustling streets of Yerevan, her eyes sparkled with anticipation, eager to uncover the hidden treasures this ancient city had to offer. Amidst the vibrant chaos, Carol\'s attention was captivated by an array of magnificent statues that adorned the city. She would pause at each one, marveling at the craftsmanship and the stories they whispered. Little did she know that these statues would become her window into the world of classification, as her mind delved into the metaphorical depths of building structures. As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about classification: Idea 1: Feature selection - Just as Carol carefully selected and captured the unique features of each building in her photographs, feature selection in classification involves choosing the most relevant attributes or characteristics to differentiate and classify the data. Idea 2: Model selection - Carol\'s act of selecting the most captivating buildings to photograph resonates with the idea of model selection in classification, where one must choose the appropriate algorithm or model that can effectively classify the data based on the selected features. Idea 3: Training data quality - Carol\'s reliance on her keen eye to recognize the beauty and uniqueness of the buildings mirrors the significance of high-quality training data in classification. Good training data accurately represents the various categories and minimizes biases or errors. Idea 4: Evaluation metrics - The critical eye of an art critic, evaluating the artistic merit of a sculpture, is akin to the use of evaluation metrics in classification. Just as a critic assesses the quality of the artwork, evaluation metrics measure the performance and accuracy of classification algorithms in categorizing the data. Idea 5: Interpretability - In the context of the story, it can be understood as the ability to understand and interpret the significance and meaning behind the unique features and structures of the buildings, similar to how classification algorithms aim to provide insights and explanations for the assigned categories.</b>',
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
                        "<b>Choose a topic to explore</b>",
                },
            ],
            choices: [
                {
                    text: "Feature Selection",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['featureselection'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Model Selection",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['modelselection'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Training Data Quality",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['traningdata'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Evaluation Metrics",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['evaluationmetrics'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Interpretability",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['interpretability'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Go Home",
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
            id: 'featureselection',
            convo: [
                {
                    type: 'text',
                    text: `Captivated by the grandeur of the buildings, Carol couldn't help but draw a metaphorical connection between the act of recognizing building structures and the concept of feature selection in the realm of artificial intelligence. With each statue she encountered, Carol imagined herself as an AI algorithm, tasked with categorizing and classifying the objects based on their unique characteristics. Just like the algorithm would carefully choose which features to consider, Carol found herself instinctively identifying the distinguishing attributes of each structure. She pointed at a regal statue standing tall in the city square, its intricate details etched into its bronze surface. The statue's prominent feature was its outstretched arm, holding a sword that symbolized strength and resilience. In the context of feature selection, Carol saw this arm as the defining characteristic that would help classify the statue into a particular category. Moving along, Carol spotted a building adorned with elaborate carvings and vibrant frescoes. Its most striking feature was an ornate, golden dome that gleamed under the sun. In her mind, Carol associated this dome with the concept of feature selection, as it represented the key attribute that would enable the algorithm to categorize the building accurately. As Carol continued her exploration, she encountered more statues and structures, each with its own distinct feature that stood out prominently. Some had intricately designed arches, while others boasted of towering columns or delicate mosaics. Just as the algorithm would carefully select the most relevant features to differentiate and classify objects, Carol's discerning eye effortlessly picked up on the distinguishing elements of each structure. This metaphorical journey through Yerevan's architectural wonders deepened Carol's understanding of feature selection in AI. She realized that just as the algorithm's effectiveness relied on choosing the right attributes to differentiate objects, her ability to recognize and appreciate the unique features of the buildings enhanced her own experience of the city's rich history and cultural heritage. As the sun began to set, casting a warm glow over the city, Carol found herself filled with a sense of wonder and gratitude for the connection she had discovered between her surroundings and the fascinating world of artificial intelligence. With a renewed appreciation for both the artistry of the statues and the complexities of AI, Carol continued her sightseeing adventure through the enchanting streets of Armenia.'

          `,
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
            id: 'modelselection',
            convo: [
                {
                    type: 'text',
                    text: 'As Carol roamed the streets, she couldn\'t help but be drawn to the magnificent statues that adorned every corner, each a testament to the country\'s rich cultural heritage. It was as if the statues whispered stories of the past, waiting to be unraveled by curious souls like Carol. Intrigued by the statues and their hidden tales, Carol\'s mind began to wander into the realm of artificial intelligence. She saw herself as an AI engineer, entrusted with the task of classifying these statues into distinct categories. It was the concept of model selection that piqued her interest—a vital step in the classification process. For Carol, each statue represented a unique object that required a suitable model to classify it accurately. Just as she pointed at a statue with outstretched wings, she likened it to the choice of a model specifically designed to classify objects with similar characteristics. The model would need to understand the complexities of these statues, capturing their essence and placing them in the appropriate category. As Carol continued her sightseeing adventure, she encountered another statue, this time a regal figure standing tall with a stern expression. Its formidable presence demanded a model capable of recognizing the subtleties of human-like features. She imagined an AI model with facial recognition capabilities, trained to distinguish the nuances of expressions and classify statues embodying distinct emotions. Further down the road, Carol stumbled upon a group of statues intricately carved in stone, frozen in graceful poses. This time, she envisioned a model rooted in shape analysis, capable of discerning the precise geometric contours and patterns that defined the sculptures. Such a model would appreciate the artistry of these statues, accurately classifying them based on their unique forms and structures. Carol\'s exploration of the city brought her face-to-face with an array of statues, each requiring a different lens of perception and a matching model for classification. From models specialized in texture analysis for statues adorned with vibrant mosaic designs to models trained in material recognition for statues crafted in diverse materials, she grasped the importance of choosing the right model for the task at hand. As Carol\'s journey through Yerevan drew to a close, she marveled at the interconnectedness of the city\'s statues and the intricate world of AI. Each statue had its own story to tell, and finding the perfect model to classify them was like unlocking a hidden narrative. She realized that model selection was an art in itself, requiring a deep understanding of the data and an appreciation for the uniqueness of each object. With a newfound appreciation for the complexity of model selection and the artistic marvels she encountered, Carol bid farewell to the statues of Yerevan. She carried with her a profound understanding that in the realm of AI, just as in her own journey of discovery, the right model could illuminate the hidden stories of the world, one statue at a time.',
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
            id: 'traningdata',
            convo: [
                {
                    type: 'text',
                    text: `As Carol ventured deeper into the heart of the capital, she found herself captivated by the magnificent statues that adorned the squares and boulevards. These statues stood tall, as if guardians of the city, silently telling tales of the past. Intrigued by their significance, Carol couldn't help but connect the experience to the fascinating world of artificial intelligence, particularly the concept of training data quality. In her mind, Carol envisioned the statues as individual objects, and the classification process in AI as the act of assigning these objects to specific categories. She likened the quality of the training data to the accuracy and reliability of the information she had about the statues. Just as the success of an AI model hinges on the quality of its training data, Carol understood that her own understanding and interpretation of the statues relied on the accuracy and depth of the knowledge available to her. With her camera poised, Carol began examining the statues meticulously. She noticed the intricate details etched into their surfaces—the texture of the stone, the subtle contours, and the delicate expressions captured in their faces. It was as if the statues themselves whispered stories of the people and events they represented.In the realm of AI, training data quality referred to the comprehensive and representative nature of the dataset used to train a model. Similarly, Carol realized that her understanding of the statues' historical and cultural significance relied heavily on the quality of the information she had acquired. She delved into the stories behind the statues, researching their origins, historical context, and artistic styles. With each nugget of information she uncovered, Carol's understanding of the statues deepened, and she gained a newfound appreciation for the importance of accurate and reliable data. As she pointed at a statue of a legendary figure, Carol marveled at the level of detail captured in its sculpted form. She thought about the importance of ensuring that the training data for an AI model represented a diverse range of examples and accounted for potential biases. Just as a comprehensive dataset would provide a well-rounded understanding of the statues, a diverse and representative training dataset would enhance the model's ability to accurately classify objects in the AI world. Through her explorations, Carol discovered that training data quality was not just about the quantity of information available, but also about its authenticity and reliability. She realized that her own journey of discovery mirrored the importance of using reliable and credible sources to gather information about the statues. With her mind brimming with knowledge and insights, Carol continued her sightseeing adventure through the streets of Yerevan. Each statue she encountered became a window into the past, reminding her of the vital role that training data quality played in the world of AI. As she captured the statues through her camera lens, Carol knew that just as the quality of the training data shaped the accuracy and effectiveness of AI models, her own understanding and appreciation of the statues were deeply influenced by the reliability and authenticity of the information she had acquired. With each click of the shutter, Carol celebrated the power of high-quality training data, both in AI and in her own quest for knowledge. As the sun began to set on her eventful day, she carried with her a deep sense of gratitude for the statues of Armenia, the guardians of history, and the invaluable lessons they taught her about the importance of training data quality.`,
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
            id: 'evaluationmetrics',
            convo: [
                {
                    type: 'text',
                    text: `As Carol meandered through the ancient streets, she was enthralled by the statues that adorned the city's squares and parks. These majestic sculptures seemed to possess a captivating aura, each with a story etched into its very being. Little did Carol know that her journey would lead her to uncover a profound metaphor for the world of artificial intelligence, specifically the concept of evaluation metrics in classification. With every statue she encountered, Carol couldn't help but draw parallels between the process of recognizing these unique objects and the evaluation of AI models. In her mind, each statue represented a dataset, and the act of pointing at and observing them was akin to the evaluation of a model's performance. As Carol raised her hand to point at a regal statue standing tall in the city square, she imagined herself as an AI model attempting to accurately classify the object. Just as evaluation metrics assessed the model's accuracy and effectiveness, Carol contemplated the criteria she could use to judge the statue. She considered the statue's proportions, the level of detail in its craftsmanship, and the emotions it evoked within her. In the world of AI, evaluation metrics played a crucial role in quantifying a model's performance. Similarly, Carol recognized the need for well-defined criteria to assess the artistic merit of the statues. She mused over the idea of using metrics such as the statue's visual impact, historical significance, and the emotions it stirred in observers as potential evaluation measures. Carol continued her journey, encountering statues of various sizes and styles. Some were grand and imposing, while others exuded an air of delicate elegance. With each statue, she contemplated different evaluation metrics that could capture their essence. She considered metrics like uniqueness, cultural significance, and craftsmanship intricacy, realizing that evaluating an AI model's performance involved a similar process of selecting appropriate metrics to measure its effectiveness in classifying diverse objects. The realization dawned upon Carol that just as the choice of evaluation metrics in AI influenced the understanding and improvement of models, the selection of meaningful criteria would enrich her perception of the statues. It would enable her to appreciate the nuances and artistry encapsulated within each sculpted masterpiece. As the day drew to a close, Carol found herself reflecting on the enchanting journey through Yerevan's statue-filled streets. She felt a deep sense of appreciation for the connection she had discovered between the evaluation metrics in AI and her own evaluation of the statues. Each statue had become a canvas, a reflection of the intricate world of classification and the significance of choosing the right criteria to measure success. With a heart brimming with newfound insights, Carol returned home from her Armenian expedition, carrying with her a deeper understanding of the evaluation metrics that shaped both the world of AI and her own exploration of art and culture. The statues of Yerevan had become more than mere sculptures; they had become a symbol of the power of evaluation metrics to unravel the hidden stories and appreciate the beauty that lay within the world around us.

          `,
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
            id: 'interpretability',
            convo: [
                {
                    type: 'text',
                    text: `As Carol wandered through the vibrant city, her eyes were captivated by the magnificent statues that adorned the plazas and boulevards. Each statue seemed to tell a story, its presence emanating a sense of mystery and intrigue. Little did Carol know that her journey through Yerevan would unravel a profound metaphor for the world of artificial intelligence, specifically the concept of interpretability in classification. As Carol approached the first statue she encountered, she felt an inexplicable connection, as if the statue held a secret waiting to be unraveled. In her mind, she likened the act of recognizing the unique structures and features of the statues to the concept of interpretability in AI classification. Just as AI algorithms aim to provide insights and explanations for the assigned categories, Carol found herself delving into the depths of each statue's story, seeking to unravel its hidden meanings. She observed the fine details, the expressions captured in stone, and the symbols embedded within the sculptures. It was as if she could decipher a language, a code of interpretation that unlocked the statues' stories. With each statue she encountered, Carol's mind became a labyrinth of interpretations. She drew connections between the statues and the historical events they represented, imagining the lives of those immortalized in stone. The statues became gateways to the past, portals through which she could explore and interpret the rich heritage of Armenia. As she pointed at a statue depicting a figure with outstretched arms, Carol contemplated its significance. She imagined the arms as a symbol of unity, reaching out to embrace the world. This interpretation sparked her curiosity and deepened her understanding of the statue's meaning. In the realm of artificial intelligence, interpretability played a crucial role in understanding the decisions made by classification models. Similarly, Carol realized that her interpretation of the statues allowed her to grasp their cultural, historical, and artistic significance more profoundly. It was the ability to unravel the stories hidden within the sculptures that brought them to life and allowed her to appreciate their true essence. Carol continued her journey through Yerevan, encountering statues of various sizes and styles. Each statue spoke to her in a unique language, offering glimpses into the past. She marveled at the diversity of interpretations that could be derived from a single object, much like the varied perspectives that could arise from the classification of data using different AI algorithms. As the sun began to set on her eventful day, Carol felt a deep sense of fulfillment. She realized that just as interpretability in AI allowed for a deeper understanding of the decisions made by classification models, her own interpretation of the statues breathed life into the city of Yerevan. The statues became more than mere objects; they became conduits for storytelling and cultural exploration. With a heart filled with newfound wisdom, Carol bid farewell to the statues of Yerevan. She carried with her the realization that interpretability was not just a concept confined to the realm of artificial intelligence, but a universal tool that unlocked the secrets and beauty hidden within the world around us. The statues had become portals to the past, guiding her on a journey of interpretation and understanding—a journey that would forever shape her perception of art, history, and the infinite wonders of the human spirit.`,
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
                    text: `Carol has come home from the festival! Now test your knowledge before following Carol to explore Apricot Stone City`,
                },
            ],
            choices: [
                
            ],
        },
        
    ],
})

export default sightseeingTheCity
