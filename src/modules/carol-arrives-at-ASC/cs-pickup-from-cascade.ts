import make from '../../core/util/make'

const pickupFromCascade = make.module({
    id: 'pickup-from-cascade',
    submodules: [],
    convoSegments: [
        {
            id: 'pickup',
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
                    text: "Real-world datasets",
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
                    text: "Features and their composition",
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
                    text: "Encoding of features",
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
                    text: "Comparing datasets",
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
                    text: "Uncovering meaningful insights",
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
                    text: `Carol, a curious and analytical woman, found herself in the enchanting surroundings of the Cascade. As she strolled through its serene pathways, she stumbled upon Anoush, a knowledgeable companion who shared her passion for unraveling hidden stories. Engrossed in conversation, Carol learned that Anoush\'s grandmother, Ani, held a profound connection to the Cascade. Ani, with a gentle smile on her face, began to narrate the rich history of the moment—a memorial dedicated to the victims of the Armenian genocide. Intrigued by the memorial\'s significance, Carol couldn\'t help but draw a metaphorical connection to the realm of AI and machine learning. Just as the Cascade stood as a real-world dataset—a collection of meaningful elements—so did the vast array of datasets encountered in the world of AI. The features comprising the Cascade, from its towering statues to the meticulously carved inscriptions, were akin to the diverse attributes found in real-world datasets. Each feature held its own story, reflecting the unique characteristics of the dataset it represented. Just as Carol explored the Cascade, comparing its features, she envisioned AI algorithms scrutinizing and comparing real-world datasets. These algorithms sought to understand the intricacies of the datasets\' features, evaluating how they interrelated and contributed to the overall narrative. The memorial\'s features were encoded with emotions, symbolism, and historical significance—a representation of how real-world dataset features are encoded. In AI, the encoding of features referred to the transformation and representation of raw data into a format that algorithms could interpret and analyze effectively. As Carol listened to Ani\'s captivating tales, she realized the immense value of comparing real-world datasets. Similarly, AI algorithms compared datasets to uncover hidden patterns, correlations, and insights that might otherwise go unnoticed. By delving into the features and their composition, AI could extract valuable information, enabling informed decision-making and driving innovation across various domains. Just as Carol\'s journey through the Cascade alongside Anoush and Ani reached its poignant conclusion, Anoush\'s daughter arrived to pick them up. The story of the Cascade, like that of the real-world datasets, was ever-evolving, forever open to exploration, and ready to unravel new narratives with each passing day.`,
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
                    text: 'Amidst the captivating beauty of the Cascade, Carol and Anoush stumbled upon Ani, Anoush\'s grandmother, who radiated wisdom and warmth. Ani, a custodian of memories, invited Carol to delve into the history of the moment—a memorial paying tribute to the lives lost in the Armenian genocide. As Ani began to narrate the compelling stories etched within the memorial\'s features, Carol\'s mind intertwined the threads of her surroundings with the realm of artificial intelligence. In her imagination, the Cascade became a metaphor for real-world datasets, each containing a multitude of distinct features that form the backbone of comparison. Just as the Cascade boasted an array of features—its elegant sculptures, intricate engravings, and poignant inscriptions—real-world datasets, too, encompassed a variety of elements. The features in a dataset, like the carefully crafted attributes of the Cascade, held the power to convey meaning and provide valuable insights. Carol envisioned AI algorithms scrutinizing real-world datasets, evaluating the composition and interplay of their features. By comparing the features within and across datasets, AI algorithms sought to unravel patterns, relationships, and underlying information that could fuel discovery and understanding. Much like the distinctive features of the Cascade, the composition of features in a dataset played a pivotal role in AI\'s ability to comprehend and extract meaningful insights. The arrangement and combination of features within a dataset held the potential to unlock hidden narratives and illuminate connections that may have otherwise remained concealed. As Ani\'s captivating storytelling continued, Carol realized the importance of considering the composition of features when comparing real-world datasets. Just as the arrangement of sculptures, engravings, and inscriptions shaped the essence of the Cascade, the composition of features influenced the narrative and value derived from a dataset. The art of comparing features and their composition in real-world datasets was like a dance—an intricate choreography of analysis and interpretation. Through this harmonious interplay, AI algorithms could discern patterns, identify correlations, and uncover valuable insights that contributed to advancements in various fields. As Anoush, Ani\'s daughter, arrived to pick them up, the story of the Cascade, much like that of real-world datasets, continued to evolve and inspire. Carol bid farewell to the resplendent grounds, carrying with her a newfound appreciation for the significance of features and their composition in the realm of AI. In the tapestry of knowledge and exploration, Carol understood that comparing the features and their composition within real-world datasets opened doors to hidden narratives, deepened understanding, and propelled the limitless potential of AI towards new horizons.',
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
                    text: `Within the ethereal beauty of the Cascade, Carol and Anoush crossed paths with Ani, Anoush\'s grandmother, a guardian of memories and a storyteller of profound tales. As they stood before a memorial honoring the victims of the Armenian genocide, Ani\'s voice carried the weight of history, weaving together the threads of the past. As Carol listened intently to Ani\'s words, her mind wandered into the realm of artificial intelligence, where comparing real-world datasets was akin to deciphering the encoded features of the Cascade. Just as the memorial held layers of encoded information, real-world datasets too possessed a myriad of features, encoded in their own unique ways. Carol envisioned AI algorithms as skilled interpreters, unravelling the intricate encoding of features within datasets. Each feature, like a symbol carved into the memorial\'s structure, held a story waiting to be deciphered. The encoding of features encompassed various techniques and representations, capturing the essence of the data they encapsulated. Like a master of languages, AI algorithms understood the diverse encoding methods employed within datasets. They could interpret numerical values, categorical labels, textual representations, and even complex structures, each encoding revealing a facet of the data\'s narrative. Through meticulous analysis, AI algorithms decoded the features, transforming encoded information into meaningful insights. Just as the Cascade\'s memorial conveyed profound historical events through its encoded features, real-world datasets encoded vital information about the phenomena they represented. The encoding of features encompassed the translation of raw data into a format that AI algorithms could comprehend and analyze. Carol marveled at the ability of AI algorithms to compare the encoded features of different datasets, much like deciphering the hidden messages within the memorial\'s intricate encoding. By understanding the encoding mechanisms, AI algorithms could uncover patterns, relationships, and correlations that fueled discovery and understanding. The encoding of features in real-world datasets became a language of communication between humans and machines, bridging the gap between raw data and meaningful insights. It allowed AI algorithms to traverse the intricate landscapes of data, uncovering knowledge and unlocking the transformative power of information. As Anoush, Ani\'s daughter, arrived to pick them up, Carol reflected on the profound encounter at the Cascade. The encoded features within real-world datasets, like the memorial\'s symbolism, carried stories of tragedy, resilience, and hope. The decoding and comparison of these features through AI algorithms held the promise of revealing hidden connections and empowering human understanding. Leaving the Cascade behind, Carol carried with her a newfound appreciation for the art of encoding features in real-world datasets. It was through this encoding that the essence of the data could be captured and the collective wisdom of the past and present could be harnessed. In the grand tapestry of AI and human collaboration, the encoding of features emerged as a powerful tool, enabling the exploration of knowledge and the illumination of truth.`,
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
                    text: `Amidst the tranquil ambiance of the Cascade, Carol and Anoush were joined by Ani, Anoush\'s wise and insightful grandmother. Ani\'s presence was like a beacon of wisdom, guiding them towards the memorial that stood as a testament to the victims of the Armenian genocide. Ani\'s words painted a vivid picture of the past, breathing life into the stories etched within the memorial\'s walls. As Carol immersed herself in Ani\'s storytelling, her mind wandered into the realm of artificial intelligence, where comparing real-world datasets was akin to embarking on a journey of discovery. Just as the memorial encompassed various features and details, real-world datasets too consisted of distinct features that held valuable information. Carol envisioned the AI concept of comparing datasets as a quest to unravel the intricate details woven within them. Each dataset, like a tapestry, comprised a collection of features that acted as threads, interweaving to form a larger narrative. Comparing datasets meant examining these features and understanding how they encoded the underlying information. In Carol\'s mind, AI algorithms became intrepid explorers, equipped with the ability to analyze and compare the features of different datasets. Much like a skilled archaeologist studying ancient artifacts, these algorithms meticulously examined the encoded features, searching for similarities, differences, and hidden connections. Through their mathematical prowess, AI algorithms quantified the features and extracted meaningful insights. They scrutinized numerical values, dissected textual data, and dissected categorical labels, all to decipher the intricate language of the datasets. By comparing the features across different datasets, these algorithms sought to uncover patterns, trends, and valuable knowledge. The act of comparing datasets was like an intricate dance of observation and analysis. AI algorithms measured the similarities and dissimilarities between features, mapping out the landscape of data and highlighting areas of interest. The encoded features acted as the building blocks, allowing the algorithms to navigate through the intricate complexities of the datasets. Just as Carol marveled at the memorial\'s details and how they conveyed the history of the Armenian genocide, she marveled at the power of AI algorithms to compare datasets. By examining the features and understanding how they were encoded, these algorithms provided a means to extract meaningful information, draw insights, and make informed decisions. As their enlightening encounter at the Cascade came to an end, Anoush, Ani\'s daughter, arrived to pick them up. Carol bid farewell to Ani, grateful for the lessons she had learned about the rich history encoded within the memorial and the importance of comparing datasets in the realm of artificial intelligence. With a renewed sense of wonder, Carol carried the metaphor of comparing datasets in her heart. It reminded her that within the vast ocean of data, every feature held significance and every comparison brought forth new knowledge. Just as the memorial stood as a testament to the past, the act of comparing datasets empowered AI algorithms to unlock the hidden stories within real-world data, expanding our understanding and shaping our future.`,
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
                    text: `It was there, amidst the solemn beauty of the memorial dedicated to the victims of the Armenian genocide, that Carol\'s path intertwined with Anoush\'s. Anoush, a kind-hearted soul with a deep connection to her heritage, shared the secrets of the monument with Carol, guiding her through the layers of history that adorned its walls. In the midst of their exploration, Ani, Anoush\'s grandmother, joined them. Ani was a woman whose words carried the weight of wisdom and the essence of the past. As she recounted the stories behind the memorial, her voice painted vivid images in Carol\'s mind, igniting a fire within her to seek even deeper understanding. It was in this moment, as Carol listened intently to Ani\'s narratives, that she drew a parallel to the concept of comparing real-world datasets using artificial intelligence. Just as Ani\'s stories unraveled the hidden truths of the memorial, AI algorithms had the power to uncover meaningful insights buried within datasets. Carol envisioned AI algorithms as detectives, equipped with the ability to analyze and compare the features that comprised different datasets. Just as Ani\'s stories were woven with layers of details, datasets were composed of various features that held valuable information waiting to be discovered. The process of comparing datasets became a quest for knowledge, where AI algorithms acted as keen observers, dissecting the features and decoding their meanings. Like skilled archaeologists, they meticulously excavated the encoded information, sifting through numerical values, textual descriptions, and categorical labels to reveal the hidden patterns and correlations. Much like Carol\'s fascination with the stories shared by Ani, AI algorithms delved deep into the features, seeking connections and insights that were not immediately apparent. They recognized the importance of every individual feature and understood that the true power lay in the interplay and relationships between them. Through their analytical prowess, AI algorithms transformed the encoded features into meaningful representations of knowledge. They unraveled the threads that connected disparate data points, shining a light on previously unseen relationships and providing valuable insights that could shape decisions and drive progress. Just as Ani\'s stories revealed the profound impact of the Armenian genocide, the act of comparing datasets allowed AI algorithms to uncover the underlying truths hidden within the vast sea of data. By recognizing the significance of each feature and exploring their interactions, these algorithms offered a means to extract knowledge and gain a deeper understanding of complex real-world phenomena. As their time at the Cascade drew to a close, Anoush arrived to pick up Carol, signaling the end of their enlightening encounter with Ani. Carol bid farewell, carrying with her the metaphor of comparing datasets as a powerful tool for uncovering meaningful insights. The stories shared by Ani and the AI concept of comparing datasets had become intertwined in Carol\'s mind. Both revealed the transformative power of digging deeper, recognizing the significance of individual features, and uncovering the hidden connections that could change our understanding of the world. As Carol and Anoush departed from the Cascade, Carol\'s heart was filled with a newfound appreciation for the untapped potential of data and the role of AI in unraveling its secrets. She realized that within the vast realms of information, every feature had a story to tell, and by comparing datasets, AI algorithms could unveil the meaningful insights that lay just beneath the surface, guiding us towards a brighter future.`,
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
                {
                    text: 'Question 2',
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
                    text: 'Question 3',
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
                    text: 'Question 4',
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
                {
                    text: 'Question 5',
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
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `In the story, Anoush represents which AI concept?`,
                },
            ],
            choices: [
                {
                    text: 'Uncovering meaningful insights through comparing datasets',
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
                    text: 'Carol\'s curiosity and hunger for knowledge',
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
                    text: 'The importance of historical memorials',
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
                    text: 'The relationship between Carol and Anoush\'s grandmother',
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
                    How does the AI concept of comparing datasets relate to the story?`,
                },
            ],
            choices: [
                {
                    text: 'It highlights the significance of encoding features in real-world datasets',
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
                    text: 'It reflects the emotional connection between characters',
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
                    text: 'It represents the power of storytelling',
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
                    text: 'It symbolizes the importance of historical understanding',
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
                    text: `What do features in real-world datasets refer to?`,
                },
            ],
            choices: [
                {
                    text: 'Insights gained through analyzing datasets',
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
                    text: 'The hidden truths of historical events',
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
                    text: 'Characters and their relationships in a story',
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
                    text: 'Numeric values, textual descriptions, and categorical labels in data',
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
                    text: `That’s correct! Next question: How are features in real-world datasets encoded?`,
                },
            ],
            choices: [
                {
                    text: 'Through storytelling techniques',
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
                    text: 'By uncovering hidden patterns and correlations',
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
                    text: 'Through the analysis of historical monuments',
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
                    text: 'Numerically, textually, and categorically',
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
                    text: `That’s correct! Next question: What does comparing datasets using AI algorithms allow us to do?`,
                },
            ],
            choices: [
                {
                    text: 'Gain insights and deeper understanding from encoded features',
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
                    text: 'Uncover the hidden truths of historical events',
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
                    text: 'Explore the interactions between real-world phenomena',
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
                    text: 'Understand the importance of individual features',
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
                    text: `Great job! Let’s continue the journey`,
                },
            ],
            choices: [
                {
                    text: 'Arrive at Anoush\'s house',
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

export default pickupFromCascade
